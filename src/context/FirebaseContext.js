import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer, useCallback, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, collection, doc, getDoc, setDoc, getDocsFromServer } from 'firebase/firestore';
// config
import { FIREBASE_API } from '../config';

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === 'INITIAL') {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }

  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext(null);

// ----------------------------------------------------------------------

const firebaseApp = initializeApp(FIREBASE_API);

const AUTH = getAuth(firebaseApp);

const DB = getFirestore(firebaseApp);

const GOOGLE_PROVIDER = new GoogleAuthProvider();

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(() => {
    try {
      onAuthStateChanged(AUTH, async (user) => {
        if (user) {
          const userRef = doc(DB, 'users', user.uid);

          const docSnap = await getDoc(userRef);

          const profile = docSnap.data();

          dispatch({
            type: 'INITIAL',
            payload: {
              isAuthenticated: true,
              user: {
                ...user,
                ...profile,
              },
            },
          });
        } else {
          dispatch({
            type: 'INITIAL',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = async (email, password) => {
    signInWithEmailAndPassword(AUTH, email, password);
  };

  const loginWithGoogle = () => signInWithPopup(AUTH, GOOGLE_PROVIDER);

  // REGISTER
  const register = (firstName, lastName, email, password) =>
    createUserWithEmailAndPassword(AUTH, email, password).then(async (res) => {
      const userRef = doc(collection(DB, 'users'), res.user?.uid);

      await setDoc(userRef, {
        uid: res.user?.uid,
        email,
        displayName: `${firstName} ${lastName}`,
        role: 'user',
      });
    });

  // LOGOUT
  const logout = () => signOut(AUTH);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'firebase',
        login,
        loginWithGoogle,
        register,
        logout,
        profile: state.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
