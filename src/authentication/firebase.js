import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY ,
  authDomain: "chatwhimsy.firebaseapp.com",
  projectId: "chatwhimsy",
  storageBucket: "chatwhimsy.appspot.com",
  messagingSenderId: "741472234665",
  appId: "1:741472234665:web:972e8e785d7406e55d0db8",
  measurementId: "G-88780K1KRE"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();