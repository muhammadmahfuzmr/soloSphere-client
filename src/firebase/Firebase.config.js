// Import the functions you need from the SDKs you need
import {  initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXaWhXEluhhoH7AEx0QVlcFMDWBl5-JXc",
  authDomain: "solosphere-c6d23.firebaseapp.com",
  projectId: "solosphere-c6d23",
  storageBucket: "solosphere-c6d23.appspot.com",
  messagingSenderId: "468298041790",
  appId: "1:468298041790:web:be06fc33eb2fb382b651ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app