import React from 'react';
import './App.css';
// import Nav from './components/Nav/Nav';
import Skills from './components/Skills';
import logo from '../src/assets/images/logo2.png';

const App = () => (
<>
  <a href="/">
    <img className="logo" src={logo} alt="Dean Smart Logo"></img>
  </a>
  <Skills /> 
</>
);

export default App;
