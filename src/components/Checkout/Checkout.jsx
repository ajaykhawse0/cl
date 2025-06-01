import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalAmount, cart, laundry } = location.state || {};
  
  console.log('totalAmount:', totalAmount);
  console.log('cart:', cart);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pickupDate: '',
    pickupTime: '',
    instructions: '',
    laundry: laundry?.name || '',
    totalAmount: totalAmount || 0,
    cartItems: cart || []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submissionData = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        pickupDate: formData.pickupDate,
        pickupTime: formData.pickupTime,
        instructions: formData.instructions,
        laundry: formData.laundry,
        totalAmount: formData.totalAmount,
        cartItems: formData.cartItems.map(item => ({
          name: item.name,
          quantity: item.quantity,
          serviceType: item.serviceType,
          price: item.price
        }))
      };

      const response = await fetch('https://formspree.io/f/xnndeagg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      if (response.ok) {
        alert('Order placed successfully!');
        // Reset form
        setFormData({
          name: '',
          phone: '',
          address: '',
          pickupDate: '',
          pickupTime: '',
          instructions: '',
          laundry: '',
          totalAmount: 0,
          cartItems: []
        });
        navigate('/');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Schedule Your Pickup</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Pickup Details</h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md"
                ></textarea>
              </div>

              {/* Pickup Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Pickup Date</label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Pickup Time</label>
                  <select
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="">Select time</option>
                    <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                    <option value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</option>
                    <option value="3:00 PM - 5:00 PM">3:00 PM - 5:00 PM</option>
                    <option value="5:00 PM - 7:00 PM">5:00 PM - 7:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Instructions */}
              <div>
                <label className="block text-sm font-medium mb-1">Special Instructions</label>
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-3 py-2 border rounded-md"
                ></textarea>
              </div>

              {/* Laundry Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Laundry</label>
                <input
                  type="text"
                  name="laundry"
                  value={formData.laundry}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md bg-gray-100"
                />
              </div>

              {/* Total Amount */}
              <div>
                <label className="block text-sm font-medium mb-1">Total Amount</label>
                <input
                  type="text"
                  name="totalAmount"
                  value={`₹${formData.totalAmount}`}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md bg-gray-100"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Processing...' : 'Confirm & Schedule Pickup'}
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="mb-4 space-y-2">
            {formData.cartItems.map((item, index) => (
              <li key={index} className="flex justify-between text-sm">
                <span>{item.quantity}x {item.name} ({item.serviceType})</span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="border-t pt-4 flex justify-between font-bold text-lg">
            <span>Total Amount:</span>
            <span>₹{formData.totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}