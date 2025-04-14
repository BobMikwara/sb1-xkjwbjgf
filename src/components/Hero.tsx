import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=2000&q=80'
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backgroundBlendMode: 'darken'
          }}
        />
      ))}
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight">
          Experience the Wild,<br />
          <span className="text-amber-400">Explore the Untamed</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 text-center max-w-3xl text-stone-200">
          Discover the magic of East Africa with our premium safari experiences in Kenya and Tanzania.
        </p>
        <div className="flex gap-4">
          <Link
            to="/book-now"
            className="bg-[#FF7F50] hover:bg-[#ff8f66] text-white px-6 py-2.5 rounded-[7px] text-base font-semibold transition-all duration-300"
          >
            Book Now
          </Link>
          <Link
            to="/tours"
            className="border border-white hover:bg-white/10 text-white px-6 py-2.5 rounded-[7px] text-base font-semibold transition-all duration-300 backdrop-blur-sm"
          >
            Explore Tours
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-[#FF7F50] w-8' 
                  : 'bg-white/50 hover:bg-white'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
        <button 
          onClick={scrollToContent}
          className="text-white hover:text-[#FF7F50] transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
}

export default Hero;