import React, { useState } from 'react';
import {Routes, Route, useParams, useHref} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Nav from './components/nav';
import Parcours from './views/Parcours';
import Galeries from './views/Galeries';
import Presse from './views/Presse';
import Contact from './views/Contact';



function App() {




  return (
    <div className="App">
   <Nav/>
      <Routes>
      <Route path='/contact' element={<Contact/>}/>
        <Route path='/presse' element={<Presse/>}/>
        <Route path='/galerie' element={<Galeries/>}/>
        <Route path='/parcours' element={<Parcours/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
          

      </Routes>

 

     
    </div>
  );
}

export default App;
