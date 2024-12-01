// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs1Z8Yux4Ypn-HTZmbMf_JLndU_GCaacM",
  authDomain: "email-password-auth-ed4ff.firebaseapp.com",
  projectId: "email-password-auth-ed4ff",
  storageBucket: "email-password-auth-ed4ff.firebasestorage.app",
  messagingSenderId: "175622670667",
  appId: "1:175622670667:web:ceac0879d78b41e0ee00ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
