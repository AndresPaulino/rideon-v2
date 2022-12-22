import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer, useCallback, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, collection, doc, getDoc, setDoc, deleteDoc, getDocs } from 'firebase/firestore';
// config
import { FIREBASE_API } from '../config';
import { useSnackbar } from 'notistack';

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

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

const GITHUB_PROVIDER = new GithubAuthProvider();

const TWITTER_PROVIDER = new TwitterAuthProvider();

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

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
                role: 'admin',
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
  const login = useCallback(
    (email, password) => {
      signInWithEmailAndPassword(AUTH, email, password)
        .then((res) => {
          enqueueSnackbar('Login success', { variant: 'success' });
          window.location = '/';
        })
        .catch((error) => {
          closeSnackbar();
          enqueueSnackbar('Incorrect email or password', { variant: 'error' });
        });
    },
    [closeSnackbar, enqueueSnackbar]
  );

  const loginWithGoogle = useCallback(() => {
    signInWithPopup(AUTH, GOOGLE_PROVIDER);
  }, []);

  const loginWithGithub = useCallback(() => {
    signInWithPopup(AUTH, GITHUB_PROVIDER);
  }, []);

  const loginWithTwitter = useCallback(() => {
    signInWithPopup(AUTH, TWITTER_PROVIDER);
  }, []);

  // REGISTER
  const register = useCallback((email, password, firstName, lastName) => {
    createUserWithEmailAndPassword(AUTH, email, password).then(async (res) => {
      const userRef = doc(collection(DB, 'users'), res.user?.uid);

      await setDoc(userRef, {
        uid: res.user?.uid,
        email,
        displayName: `${firstName} ${lastName}`,
      });
    });
  }, []);

  // LOGOUT
  const logout = useCallback(() => {
    signOut(AUTH);
  }, []);

  // CREATE RIDE
  const createRide = (
    rideDate,
    rideStartAddress,
    rideEndAddress,
    rideId,
    rideUserId,
    rideTitle,
    rideParticipants,
    rideTime
  ) => {
    const rideRef = doc(collection(DB, 'rides'), rideId);

    setDoc(rideRef, {
      rideDate,
      rideStartAddress,
      rideEndAddress,
      rideId,
      rideUserId,
      rideTitle,
      rideParticipants,
      rideTime,
    });

    enqueueSnackbar('Ride created', { variant: 'success' });

    window.location = '/find-a-ride';
  };

  // JOIN RIDE
  const joinRide = (rideId, rideUserId, rideParticipants) => {
    const rideRef = doc(collection(DB, 'rides'), rideId);

    setDoc(rideRef, {
      rideParticipants,
    });

    enqueueSnackbar('Ride joined', { variant: 'success' });

    window.location = '/find-a-ride';
  };

  // LEAVE RIDE
  const leaveRide = (rideId, rideUserId, rideParticipants) => {
    const rideRef = doc(collection(DB, 'rides'), rideId);

    setDoc(rideRef, {
      rideParticipants,
    });

    enqueueSnackbar('Ride left', { variant: 'success' });

    window.location = '/find-a-ride';
  };

  // DELETE RIDE
  const deleteRide = (rideId) => {
    const rideRef = doc(collection(DB, 'rides'), rideId);

    deleteDoc(rideRef);

    enqueueSnackbar('Ride deleted', { variant: 'success' });

    window.location = '/find-a-ride';
  };

  // GET ALL RIDES
  const getAllRides = async () => {
    const querySnapshot = await getDocs(collection(DB, 'rides'));

    const rides = [];

    querySnapshot.forEach((doc) => {
      rides.push(doc.data());
    });

    return rides;
  };

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: 'firebase',
      login,
      loginWithGoogle,
      loginWithGithub,
      loginWithTwitter,
      register,
      logout,
    }),
    [
      state.isAuthenticated,
      state.isInitialized,
      state.user,
      login,
      loginWithGithub,
      loginWithGoogle,
      loginWithTwitter,
      register,
      logout,
    ]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
