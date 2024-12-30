import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About MedCare</h1>
          <p className="text-xl text-gray-600">Providing Quality Healthcare Since 2000</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" 
              alt="Medical Facility" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At MedCare, we are committed to providing accessible, high-quality healthcare to our community. 
              Our team of experienced medical professionals works tirelessly to ensure that every patient 
              receives the best possible care and attention.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <Award className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h4 className="font-semibold">Excellence</h4>
              </div>
              <div>
                <Users className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h4 className="font-semibold">Experience</h4>
              </div>
              <div>
                <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h4 className="font-semibold">Care</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Patient First</h3>
              <p className="text-gray-600">We prioritize patient care and satisfaction above all else</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">Constantly improving our services with latest medical advancements</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">Maintaining highest standards of professional ethics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}