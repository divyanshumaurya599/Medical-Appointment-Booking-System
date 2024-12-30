import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Home, Users, Calendar, HandHeart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="font-bold text-xl">MedCare</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-red-500">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 text-gray-700 hover:text-red-500">
              <Users className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link to="/specialities" className="flex items-center space-x-1 text-gray-700 hover:text-red-500">
              <Calendar className="h-5 w-5" />
              <span>Specialities</span>
            </Link>
            <Link to="/doctors" className="flex items-center space-x-1 text-gray-700 hover:text-red-500">
              <Users className="h-5 w-5" />
              <span>Doctors</span>
            </Link>
            <Link to="/donate" className="flex items-center space-x-1 text-gray-700 hover:text-red-500">
              <HandHeart className="h-5 w-5" />
              <span>Donate</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}