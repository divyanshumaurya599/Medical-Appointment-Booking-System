import React from 'react';
import { Link } from 'react-router-dom';
import { doctors } from '../data/doctors';

interface SpecialtyDoctorsProps {
  specialty: string;
}

export default function SpecialtyDoctors({ specialty }: SpecialtyDoctorsProps) {
  const specialtyDoctors = doctors.filter(
    doctor => doctor.speciality.toLowerCase() === specialty.toLowerCase()
  );

  if (specialtyDoctors.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-500 mb-2"></h3>
      <div className="space-y-2">
        {specialtyDoctors.map(doctor => (
          <Link
            key={doctor.id}
            to={`/book/${doctor.id}`}
            className="block text-sm text-red-500 hover:text-red-600"
          >
           
          </Link>
        ))}
      </div>
    </div>
  );
}