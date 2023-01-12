// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7awMFssgKAHuv6JGEsYevWHXDsfp_oW0",
  authDomain: "react-cursos-7ca0d.firebaseapp.com",
  projectId: "react-cursos-7ca0d",
  storageBucket: "react-cursos-7ca0d.appspot.com",
  messagingSenderId: "696360529726",
  appId: "1:696360529726:web:43ffb07c3f644ad02e866f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp);

export const FirebaseDB = getFirestore( FirebaseApp);

