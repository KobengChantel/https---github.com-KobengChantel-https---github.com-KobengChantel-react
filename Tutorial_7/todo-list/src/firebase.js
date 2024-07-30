import { initializeApp } from 'firebase/app';
import { getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPv9hjr85g5hUexAXDHHg4WdXLiq3usN8",
  authDomain: "todo-list-94e42.firebaseapp.com",
  databaseURL: "https://todo-list-94e42-default-rtdb.firebaseio.com",
  projectId: "todo-list-94e42",
  storageBucket: "todo-list-94e42.appspot.com",
  messagingSenderId: "479051807617",
  appId: "1:479051807617:web:e011d6a42ddef3f04f8680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();