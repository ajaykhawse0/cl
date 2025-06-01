import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: 'morning'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xovwazpn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Your request has been submitted. We will contact you soon!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: 'morning'
      });
    } else {
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to schedule your first pickup? Get in touch with our friendly customer service team.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Request a Call Back</h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time for Call</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  >
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  Submit Request <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="h-64 bg-gray-200 rounded-xl mb-8">
              <div className="h-full bg-gray-300 rounded-xl flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.9000282189!2d77.2410794464544!3d23.199323872165078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1748347067109!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-600">Narela, Bhopal, MP pincode</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <a href="tel:+917828462569">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 78284 62569</p>
                  <p className="text-gray-500 text-sm">Mon-Sun, 8AM to 8PM</p>
                </div></a>
              </div>

              <div className="flex items-start">
                
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                 
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                 <a href="mailto:cleandive007@gmail.com"
                 target='_blank'
                 rel="noopener noreferrer"
                 >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">cleandive007@gmail.com</p>
                  <p className="text-gray-500 text-sm">We reply within 24 hours</p>
                </div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
