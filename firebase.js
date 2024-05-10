// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDFW4i0LzASSR7NvVpln_no55-izOqNHE",
  authDomain: "chatapp-by-raghav.firebaseapp.com",
  projectId: "chatapp-by-raghav",
  storageBucket: "chatapp-by-raghav.appspot.com",
  messagingSenderId: "697743752619",
  appId: "1:697743752619:web:f3e842bb4f6956f011e6ee",
  measurementId: "G-VBBP2SKZ91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);