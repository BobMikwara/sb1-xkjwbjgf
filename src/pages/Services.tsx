import React from 'react';

function Services() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Luxury Safaris</h2>
            <p className="text-gray-600">
              Experience the African wilderness in ultimate comfort with our luxury safari packages.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Cultural Tours</h2>
            <p className="text-gray-600">
              Immerse yourself in the rich traditions of local communities and experience authentic African culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;