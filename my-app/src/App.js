import logo from './logo.svg';
import React, { Component, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Table from "./components/Table"

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Table />
        </div>
    );
  }
}


export default App;
