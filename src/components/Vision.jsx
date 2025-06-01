import React from 'react';
import { Star, Heart, Clock } from 'lucide-react';

// Vision component - Showcases company values and mission
// Features three key pillars of the business with icons
const Vision = () => {
  const visionCards = [
    {
      icon: <Clock className="h-10 w-10 text-indigo-600" />,
      title: "Time-Saving Convenience",
      description: "We value your time. Our on-demand pickup and delivery service is designed to give you back precious hours in your day."
    },
    {
      icon: <Star className="h-10 w-10 text-indigo-600" />,
      title: "Exceptional Quality",
      description: "We treat each garment with the care and attention it deserves, using advanced techniques for the best results."
    },
    {
      icon: <Heart className="h-10 w-10 text-indigo-600" />,
      title: "Environmental Commitment",
      description: "Our eco-friendly practices and sustainable methods minimize environmental impact while maximizing cleaning effectiveness."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're transforming the laundry industry with a commitment to convenience, quality, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-indigo-50 p-4 rounded-full mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;