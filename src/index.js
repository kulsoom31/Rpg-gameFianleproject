import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom"




const index = () => {
  return (
    <div>hello</div>
  )
}

export default index
ReactDOM.render(
  <BrowserRouter>
    <App />
 
  </BrowserRouter>,
  document.getElementById('root')
);

