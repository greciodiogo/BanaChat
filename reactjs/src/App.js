import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Login from './Login';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Login' element={<Login/>}/>
  </Routes> 
  </BrowserRouter>

  );
}

export default App;