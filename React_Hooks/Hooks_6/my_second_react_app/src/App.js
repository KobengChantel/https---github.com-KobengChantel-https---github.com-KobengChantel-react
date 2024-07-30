import React from 'react';
import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import JumbotronComponent from './JumbotronComponent';
import UserForm from './UserForm';

function App() {
  return (
    <div>
      <UserForm/>
      {/* <JumbotronComponent>
        This is a long sentence, and I want to insert content into the
        jumbotron component from the outside.
      </JumbotronComponent> */}
    </div>
  );
}
export default App;