import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import SchedulePickup from './Pickup/SchedulePickup';
// Hero component - Main landing section of the website
// Features gradient background, animated blobs, and CTA buttons
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-indigo-900 to-indigo-700 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Laundry <br />
              <span className="text-secondary-300">At Your Doorstep</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Experience the convenience of professional laundry services with eco-friendly practices. Schedule your pickup today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="bg-white text-indigo-900 px-6 py-3 rounded-full font-medium flex items-center justify-center transition-transform hover:scale-105">
                Schedule Pickup <ArrowRight className="ml-2 h-5 w-5" />
              </button> */}
              <Link to="/schedule-pickup" >
  <button className="bg-white text-indigo-900 px-6 py-3 rounded-full font-medium flex items-center justify-center transition-transform hover:scale-105">
    Schedule Pickup <ArrowRight className="ml-2 h-5 w-5" />
  </button>
</Link>
             

<a
  href="" 
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <button className="bg-white text-indigo-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 justify-center transition-transform hover:scale-105">
  <FontAwesomeIcon icon={faGooglePlay} className="text-xl" />
  <span>Download App</span>
</button>

</a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              
              <div className="absolute -top-5 -left-5 w-64 h-64 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Professional Laundry Service" 
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover transition-transform hover:scale-105"
                  loading="lazy"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;