// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADQZkTEtszWb7Tio2r_G-nXRKlYGjx-NI",
  authDomain: "journalverify.firebaseapp.com",
  projectId: "journalverify",
  storageBucket: "journalverify.appspot.com",
  messagingSenderId: "648697777624",
  appId: "1:648697777624:web:9d9666f67b6c20219c36ad",
  measurementId: "G-CJ03E7LXWX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;