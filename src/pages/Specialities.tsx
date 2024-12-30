import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Brain, Activity, Eye, Stethoscope, Scissors } from 'lucide-react';
import SpecialtyDoctors from '../components/SpecialtyDoctors';

const specialities = [
  {
    name: 'Orthopaedics',
    icon: Stethoscope,
    description: 'Treatment of musculoskeletal system conditions',
  },
  {
    name: 'Obstetrics Gynaecology',
    icon: Activity,
    description: 'Medical specialty focused on the female reproductive system.',
  },
  {
    name: 'Cardiology',
    icon: Heart,
    description: 'Treatment of heart diseases and cardiovascular conditions',
  },
  {
    name: 'Neurology',
    icon: Brain,
    description: 'Diagnosis and treatment of nervous system disorders',
  },
  {
    name: 'Pulmonology',
    icon: Activity,
    description: 'Care for respiratory system and lung conditions',
  },
  {
    name: 'Ophthalmology',
    icon: Eye,
    description: 'Eye care and vision health services',
  },
  {
    name: 'Dental',
    icon: Scissors,
    description: 'Comprehensive dental care services',
  },
];

export default function Specialities() {
  const navigate = useNavigate();

  const handleViewDoctors = (specialty: string) => {
    navigate(`/doctors?specialty=${specialty}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Specialities</h1>
          <p className="text-xl text-gray-600">Comprehensive healthcare services across multiple specialities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialities.map((speciality, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <speciality.icon className="h-12 w-12 text-red-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{speciality.name}</h2>
              <p className="text-gray-600 mb-4">{speciality.description}</p>
              <SpecialtyDoctors specialty={speciality.name} />
              <button 
                onClick={() => handleViewDoctors(speciality.name)}
                className="text-red-500 hover:text-red-600 font-semibold inline-block mt-4"
              >
                View All Doctors →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}