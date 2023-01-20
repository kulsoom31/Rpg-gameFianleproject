import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Adventure from './components/Adventure';
import Navbar from './components/Navbar';

import Login from './components/LoginSignup/Login';
import Signup from './components/LoginSignup/Signup';


function App() {
  const [currentForm, setCurrentForm] = useState ('Login');
  const toggleForm =(forName) => {
    setCurrentForm(forName);
  }
  return (
    
   // {
     // currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Signup />
    //}

    <div className="App">
       <h1> Turn based RPG game</h1>
       <div> <Navbar /></div>
       
    <Routes>
    <Route exact path="/" element={<Welcome/>} />
    <Route path="/adventure" element={<Adventure/>} />
    <Route path='/LoginSignup/Login' element={<Login/>} />
    <Route path='/Signup' element={<Signup/>} />
      </Routes>     
    
      </div>
  );
}

export default App;

