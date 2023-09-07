import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Person = ({ name, age, email }) => {
  return (
    <tr>
     
      <td>{name}</td>
      <td>{age}</td>
      <td>{email}</td>
      
    </tr>
  //   <div>
  
  //   <p>Name: {name}</p>
  //   <p>Age: {age}</p>
  //   <p>Email: {email}</p>
  // </div>

  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired
};

const App = () => {
  return (
    <div className="App">
      <h1> Person Details</h1>
      <table>
        <thead>
          <tr>
          <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            </tr>
            </thead>
            <tbody>
      <Person name="Bhavani" age={35} email="bhavani@example.com" />
      <Person name="Sreeshma" age={25} email="sreeshma@example.com" />
      
      </tbody>
      </table>
    </div>
  );
};
export default App;
