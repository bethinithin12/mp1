// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZr4gNp6U-bYTLtmBcyyWG3FWt80bRtsE",
  authDomain: "majorproject3-8d65e.firebaseapp.com",
  projectId: "majorproject3-8d65e",
  storageBucket: "majorproject3-8d65e.appspot.com",
  messagingSenderId: "348642804760",
  appId: "1:348642804760:web:f0ebe7edb7e8a247286f6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;