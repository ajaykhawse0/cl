import React from 'react';
import { CheckCircle2, Clock, Award, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-blue-600" />,
      title: "Quality Assurance",
      description: "Every garment undergoes a thorough quality check before delivery."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Time Efficiency",
      description: "We respect your schedule with on-time pickups and deliveries."
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: "Expert Care",
      description: "Our team is trained in handling all fabric types with expertise."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      title: "Damage Protection",
      description: "Your clothes are protected with our garment care guarantee."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-600 mb-8 text-lg">
              We've revolutionized the laundry experience by combining technology, eco-friendly practices, and exceptional service quality. Our attention to detail and commitment to customer satisfaction sets us apart.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Learn More About Our Process
            </button>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
              <img 
                src="https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional Laundry Service" 
                className="relative z-10 rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
