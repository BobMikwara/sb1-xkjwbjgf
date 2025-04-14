import React from 'react';

function Gallery() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Gallery</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801" 
              alt="Safari landscape"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d" 
              alt="Wildlife"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1549366021-9f761d450615" 
              alt="Safari camp"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;