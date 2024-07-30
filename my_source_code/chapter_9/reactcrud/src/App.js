import React, { Component } from "react";
//  import firebase from 'firebase/compact/app';
// import 'firebase/compact/auth';
// import 'firebase/compact/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'bootstrap/dist/css/bootstrap.min.css';

import User from './User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserForm from './UserForm';

class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }
  render() {
    return (
      <div>
        <h1>Dealing with react crud and firebase console</h1>
        <BrowserRouter>
          <div>
            <Routes>
            <Route path="/edit/:id" element={<UserForm />} />
            <Route path="/add" element={<UserForm />} />
              <Route exact path="/" element={<User />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}