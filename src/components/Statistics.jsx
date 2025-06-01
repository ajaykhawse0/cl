import React, { useState, useEffect, useRef } from 'react';

const StatItem = ({ number, label, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let start = 0;
    const end = number;

    if (!isVisible) return;
    if (start === end) return;

    let timer = duration / end;
    let counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(counter);
      }
    }, timer);

    return () => clearInterval(counter);
  }, [number, duration, isVisible]);

  return (
    <div ref={countRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-emerald-200 mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-blue-200 mt-1">{label}</div>
    </div>
  );
};

const Statistics = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <div className="w-20 h-1 bg-sky-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          <StatItem number={100} label="Satisfied Customers" suffix="+" />
          <StatItem number={100} label="Garments Cleaned" suffix="+" />
          <StatItem number={2} label="Service Areas" suffix="+" />
          <StatItem number={3} label="Business Partners" />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
