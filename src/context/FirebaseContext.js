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
  const createRide = useCallback(
    async (ride) => {
      const rideRef = doc(collection(DB, 'rides'), ride.rideId);

      await setDoc(rideRef, {
        ...ride,
      });

      window.location = '/find-a-ride';
    },
    [DB]
  );

  // GET RIDES
  const getRides = useCallback(async () => {
    const ridesRef = collection(DB, 'rides');
    const snapshot = await getDocs(ridesRef);

    return snapshot.docs.map((doc) => doc.data());
  }, [DB]);

  // JOIN RIDE
  const joinRide = useCallback(
    async (userId, rideId) => {
      const rideRef = doc(collection(DB, 'rides'), rideId);
      const rideDoc = await getDoc(rideRef);

      const ride = rideDoc.data();

      const rideUsers = ride.rideParticipants;

      if (rideUsers.includes(userId)) {
        enqueueSnackbar('You are already in this ride', { variant: 'error' });
      } else {
        rideUsers.push(userId);

        await setDoc(rideRef, {
          ...ride,
          rideParticipants: rideUsers,
        });

        enqueueSnackbar('You have joined the ride', { variant: 'success' });
      }
    },
    [DB, enqueueSnackbar]
  );

  // LEAVE RIDE
  const leaveRide = useCallback(
    async (userId, rideId) => {
      const rideRef = doc(collection(DB, 'rides'), rideId);
      const rideDoc = await getDoc(rideRef);

      const ride = rideDoc.data();

      const rideUsers = ride.rideParticipants;

      if (rideUsers.includes(userId)) {
        const index = rideUsers.indexOf(userId);
        rideUsers.splice(index, 1);

        await setDoc(rideRef, {
          ...ride,
          rideParticipants: rideUsers,
        });

        enqueueSnackbar('You have left the ride', { variant: 'success' });
      } else {
        enqueueSnackbar('You are not in this ride', { variant: 'error' });
      }
    },
    [DB, enqueueSnackbar]
  );

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
      createRide,
      getRides,
      joinRide,
      leaveRide,
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
      createRide,
      getRides,
      joinRide,
      leaveRide,
    ]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
