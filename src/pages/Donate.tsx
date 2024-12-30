import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const stripe = await stripePromise;
      if (!stripe) return;

      // Here you would create a donation session with your backend
      // and redirect to Stripe checkout
      
      alert('Thank you for your donation!');
    } catch (error) {
      console.error('Error processing donation:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <Heart className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-xl text-gray-600">Help us provide better healthcare for those in need</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Donate?</h2>
              <ul className="space-y-4 text-gray-600">
                <li>Support medical research and development</li>
                <li>Help provide care for underprivileged patients</li>
                <li>Contribute to medical equipment and facilities</li>
                <li>Support medical education and training</li>
              </ul>
            </div>

            <div>
              <form onSubmit={handleDonate} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Donation Amount ($)</label>
                  <input
                    type="number"
                    min="1"
                    required
                    className="w-full p-2 border rounded-md"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Message (Optional)</label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows={4}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors"
                >
                  Donate Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}