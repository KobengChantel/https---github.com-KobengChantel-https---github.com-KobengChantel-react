
import React, { Component } from 'react';
import JumboTronComponent from './JumboTronComponent';
//import UserForm from './UserForm';

class App extends Component {

  render() {

    return (
      <div>
        
        <JumboTronComponent>
          This is a long sentence, and I want to insert content into the
          jumbotron component from the outside.
        </JumboTronComponent>
      </div>
    );

  }
}



export default App;
