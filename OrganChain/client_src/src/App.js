import React from 'react';
import './App.css';
import Main from './components/Main';
import { Link } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import {Navigation} from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    
      <div className="container">
        
       <Main />
    </div>

    </BrowserRouter>
  );
}

export default App;
