import React from 'react';
import { useSearchParams } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/doctors';

export default function Doctors() {
  const [searchParams] = useSearchParams();
  const specialty = searchParams.get('specialty');

  const filteredDoctors = specialty
    ? doctors.filter(doctor => doctor.speciality.toLowerCase() === specialty.toLowerCase())
    : doctors;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            {specialty ? `${specialty} Specialists` : 'Our Doctors'}
          </h1>
          <p className="text-xl text-gray-600">
            {specialty 
              ? `Meet our experienced ${specialty.toLowerCase()} specialists`
              : 'Meet our team of experienced medical professionals'}
          </p>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <p>No doctors found for this specialty. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}