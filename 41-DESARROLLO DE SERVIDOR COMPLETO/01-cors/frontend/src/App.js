import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";

function App() {
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const response = await axios.get("http://localhost:8080/cors2");
    console.log(response);

    // const response = await axios({
    //   method: 'get',
    //   url: 'http://localhost:8080/cors2',
    //   headers: {
    //     origin: 'http://localhost:5000'
    //   }
    // })
    console.log(response);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
