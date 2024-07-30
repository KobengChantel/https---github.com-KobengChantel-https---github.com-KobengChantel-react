// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJhcgGySnT_7iv7bBVmS78H_8A3Nq4B8A",
  authDomain: "gallery-app-b9fb8.firebaseapp.com",
  projectId: "gallery-app-b9fb8",
  storageBucket: "gallery-app-b9fb8.appspot.com",
  messagingSenderId: "111034150827",
  appId: "1:111034150827:web:0bbf963c91ace7cfc46cee",
  measurementId: "G-FZFQBCS53Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();
