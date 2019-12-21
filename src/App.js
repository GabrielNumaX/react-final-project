import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';

import Login from './Containers/Login/Login';
import Dashboard from './Containers/Dashboard/Dashboard';

import Footer from './Components/Footer/Footer';

function App() {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
       <div className="App">

        {/* here goes components, switch and route */}

        <Header></Header>

        {/* <Login></Login> */}

        <Dashboard></Dashboard>

        <Footer></Footer>

         
      
      </div>
    </BrowserRouter>
   
  );
}

export default App;
