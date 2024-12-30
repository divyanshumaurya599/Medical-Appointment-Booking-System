import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={doctor.image} 
        alt={doctor.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
        <p className="text-gray-600 mb-1">{doctor.speciality}</p>

         
        <p>{doctor.education.join(', ')}</p>  
        <p className="text-gray-500 mb-1">{doctor.experience} years experience</p>
        
        <div className="flex items-center space-x-2 text-gray-500 mb-2">
          <Calendar className="h-4 w-4" />
          <span>{doctor.availability.days.join(', ')}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-500 mb-4">
          <Clock className="h-4 w-4" />
          <span>{doctor.availability.hours}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-green-600">₹{doctor.fee}</span>
          <Link 
            to={`/book/${doctor.id}`}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}