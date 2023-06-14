import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Home from '../pages/Home/Home';
import Dishes from '../pages/Dishes/Dishes';
import Booking from '../pages/Booking/Booking';
import About from '../pages/About/About';
import Notfound from '../pages/Notfound/Notfound';
import Partner from '../pages/Partner/Partner';
import Contact from '../pages/Contact/Contact';

function LayOutRoutes() {

  
  return (
           
    <Router>

        <Header/>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dishes' element={<Dishes/>}/>
            <Route path='/service' element={<Booking/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/guides' element={<About/>}/>
            <Route path='/service' element={<Booking/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/location' element={<Dishes/>}/>
            <Route path='/partnership' element={<Partner/>}/>
            <Route path='/terms' element={<About/>}/>
           
           
            
            <Route path='/*' element={<Notfound/>}/>
        </Routes>
        <Footer/>
    </Router>
    
   
  )
}

export default LayOutRoutes