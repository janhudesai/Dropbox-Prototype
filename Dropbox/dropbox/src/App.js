import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import NewHome from "./components/NewHome"
import Signin from "./components/signin"
import {BrowserRouter} from 'react-router-dom';
import Home from "./components/home"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Signin/>
        </BrowserRouter>
        {/*<Home/>*/}
      </div>
    );
  }
}

export default App;
