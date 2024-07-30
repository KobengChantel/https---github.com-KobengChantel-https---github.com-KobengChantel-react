import React from 'react';
// //  import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as firebase from 'firebase';
// // import firebase from 'firebase/ compact/app';
// import 'firebase/ compact/auth';
// import 'firebase/compact/firestore';
 import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

const config = {
  apiKey: "AIzaSyAg7FUAoaBsBdjAJltzv6pcjIJuua7KGE8",
  authDomain: "myfirstreactproject-217f8.firebaseapp.com",
  projectId: "myfirstreactproject-217f8",
  storageBucket: "myfirstreactproject-217f8.appspot.com",
  messagingSenderId: "231955023841",
  appId: "1:231955023841:web:093aea07023c6ec28034a0",
  measurementId: "G-FDEJC98MES"
};

firebase.initializeApp(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
