// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2X93uIV866O76THRXeJuZ6pOwRJpyTMI",
  authDomain: "umsl-professor-website.firebaseapp.com",
  projectId: "umsl-professor-website",
  storageBucket: "umsl-professor-website.appspot.com",
  messagingSenderId: "883573838230",
  appId: "1:883573838230:web:668c96367cb1309b184db7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

