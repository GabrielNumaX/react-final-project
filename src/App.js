import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';

import Login from './Components/Login/Login';

import Footer from './Components/Footer/Footer';

function App() {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
       <div className="App">

        {/* here goes components, switch and route */}

        <Header></Header>

        <Login></Login>

        <Footer></Footer>

         
      
      </div>
    </BrowserRouter>
   
  );
}

export default App;
