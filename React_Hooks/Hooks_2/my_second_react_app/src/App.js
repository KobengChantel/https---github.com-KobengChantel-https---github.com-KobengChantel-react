import React from 'react';
import Products from './Products';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
 }
 
function App() {

  const user = {
    firstName:'Greg',
    lastName:'Lim'
    };

  return (
    <div>
      <h1>
      Hello, {formatName(user)}
        <Products /> 
      </h1>
    </div>
  );
}
export default App;