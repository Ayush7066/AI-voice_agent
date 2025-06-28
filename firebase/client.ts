import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCUN70GCv6Vw8m8SaRndEeFT6lHtJnideg",
  authDomain: "prepwise-df359.firebaseapp.com",
  projectId: "prepwise-df359",
  storageBucket: "prepwise-df359.firebasestorage.app",
  messagingSenderId: "638456688582",
  appId: "1:638456688582:web:c3e32b902db02eae47ccc7",
  measurementId: "G-BLP8Y0HB7N"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp( firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)
