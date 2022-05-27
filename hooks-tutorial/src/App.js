import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from "./Info.js";
import Counter from "./Counter";
import Average from "./Average";

function App() {
  return (<div>
    <Average/>
    <Info/>
    <Counter/>
  </div>);
}

export default App;
