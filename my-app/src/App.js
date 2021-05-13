import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from "./Header";

function App() {

  const buttonClicked = () => {
    alert("Great Shot!");
  } 

  return (
    <div className="App">
       <Header />
       <button onClick={buttonClicked}> Add </button>
    </div>
  );
 }

export default App;
