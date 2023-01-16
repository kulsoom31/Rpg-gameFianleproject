import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Adventure from './components/Adventure';


function App() {
  return (
    <div className="App">
      <h1> Turn based RPG game</h1>
   
     <Routes>
     <Route exact path="/" element={<Welcome/>} />
    <Route path="/adventure" element={<Adventure/>} />
      </Routes>     
    
      </div>
  );
}

export default App;

