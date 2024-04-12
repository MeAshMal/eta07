import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyDsgoG_LOtxgQFuXdgWeZy6fG4-X4bD4EE",
  authDomain: "eta07-1636b.firebaseapp.com",
  projectId: "eta07-1636b",
  storageBucket: "eta07-1636b.appspot.com",
  messagingSenderId: "742585648015",
  appId: "1:742585648015:web:a20db0b4f6b7dc4f0d41fa",
  measurementId: "G-1RK4GLNCBD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithFacebookPopup = () =>
  signInWithPopup(auth, facebookProvider);
const analytics = getAnalytics(app);
