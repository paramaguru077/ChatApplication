// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD80EaiIYw5jMmjwO232V_K0fPXdnrDE6k",
  authDomain: "chatapp-077.firebaseapp.com",
  projectId: "chatapp-077",
  storageBucket: "chatapp-077.appspot.com",
  messagingSenderId: "763639691813",
  appId: "1:763639691813:web:24decddf52977ba9dfddcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db= getFirestore(app);