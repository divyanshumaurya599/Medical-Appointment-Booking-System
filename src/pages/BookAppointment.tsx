import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { doctors } from '../data/doctors';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

export default function BookAppointment() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find(d => d.id === doctorId);
  
  const [formData, setFormData] = useState({
    patientName: '',
    date: '',
    time: '',
    email: '',
    phone: ''
  });

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to create the appointment
    // and handle the payment process with Stripe
    
    try {
      const stripe = await stripePromise;
      if (!stripe) return;

      // Here you would create a payment session with your backend
      // and redirect to Stripe checkout
      
      alert('Appointment booked successfully!');
      navigate('/doctors');
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 bg-red-500 text-white">
            <h1 className="text-3xl font-bold">Book Appointment</h1>
            <p className="mt-2">with {doctor.name}</p>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">{doctor.name}</h2>
                  <p className="text-gray-600">{doctor.speciality}</p>
                  <p className="text-green-600 font-semibold">₹{doctor.fee}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{doctor.availability.days.join(', ')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{doctor.availability.hours}</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Patient Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.patientName}
                  onChange={e => setFormData({...formData, patientName: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Preferred Time</label>
                <input
                  type="time"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.time}
                  onChange={e => setFormData({...formData, time: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors"
              >
                Book and Pay (₹{doctor.fee})
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}