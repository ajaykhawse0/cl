import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router";
import SchedulePickup from './components/Pickup/SchedulePickup';
import Donation from './components/Donations';
import Checkout from './components/Checkout/Checkout';
// Main App component that serves as the root of our application
// Organizes all major sections in a logical flow
function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Vision />
              <Services />
              <WhyChooseUs />
              <Statistics />
              <Contact />
              <Footer />
            </>
          } />

          <Route path="/services" element={
            <>
              <Header />
              <div className="py-8 px-4 max-w-5xl mx-auto">
                <Services />
              </div>
              <Footer />
            </>
          } />

          <Route path="/about" element={
            <>
              <Header />
              <div className="py-8 px-4 max-w-4xl mx-auto">
                <Vision />
              </div>
              <Footer />
            </>
          } />

          <Route path="/contact" element={
            <>
              <Header />
             <div className='py-8 px-4 '>

                <Contact />
             </div>
              
              <Footer />
            </>
          } />
            <Route path="/schedule-pickup" element={
            <>
              <Header />
             <div className=' '>

                <SchedulePickup />
             </div>
              
              <Footer />
            </>
          } />
          <Route path="/checkout" element={
            <>
              <Header />
             <div className=' '>

                <Checkout />
             </div>
              
              <Footer />
            </>
          } />

          <Route path='/pricing' element={<> <Header />
             
            <Pricing/>
              
              <Footer />
              </>}/>
          <Route path='/donations' element={<> <Header />
              <div className='py-24 px-8 '>
            <Donation/></div>
              
              <Footer />
              </>}/>

          <Route path="*" element={
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <h1 className="text-4xl font-bold text-red-600 mb-4">Error 404</h1>
              <p className="text-lg text-gray-700">Page Not Found</p>
            </div>
          } />
        </Routes>
      </Router>
    </div>
  );
}
export default App;