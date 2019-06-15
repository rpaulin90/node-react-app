import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState('hi');

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `The message is ${message}`;

        axios.get(`/api/users`)
            .then(res => {
                const persons = res.data;
                console.log(persons.elements[0].web_name)
                setMessage(persons.elements[0].web_name)
            })
    },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
