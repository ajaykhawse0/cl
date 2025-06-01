import React from 'react';
import { Truck, Leaf, Shirt } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: "On-Demand Pickup & Delivery",
      description: "Schedule pickups and deliveries at your convenience. Our professional team arrives on time, every time.",
      features: [
        "Easy scheduling through our app",
        "Real-time tracking of your order",
        "Flexible time slots including evenings",
        "Same-day service available"
      ],
      image: "https://images.pexels.com/photos/5591583/pexels-photo-5591583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Leaf className="h-12 w-12 text-blue-600" />,
      title: "Eco-Friendly Practices",
      description: "We use sustainable cleaning methods and eco-friendly detergents that are gentle on fabrics and the environment.",
      features: [
        "Biodegradable detergents",
        "Water-saving technologies",
        "Energy-efficient equipment",
        "Minimal plastic packaging"
      ],
      image: "https://images.pexels.com/photos/5591681/pexels-photo-5591681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Shirt className="h-12 w-12 text-blue-600" />,
      title: "Premium Garment Care",
      description: "From everyday items to delicate fabrics, we provide specialized care for all your clothing needs.",
      features: [
        "Custom stain removal treatment",
        "Delicate fabric handling",
        "Hand-finishing where required",
        "Detailed quality inspection"
      ],
      image: "https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="services"  className=" py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience laundry services designed around your needs, with quality and convenience at the forefront.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="mr-4 bg-blue-50 p-4 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mr-3">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
