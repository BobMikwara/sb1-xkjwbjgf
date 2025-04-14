import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Compass, Users, Camera, Check, Map, Leaf, Star } from 'lucide-react';
import Hero from '../components/Hero';

const featuredTours = [
  {
    title: "Masai Mara Adventure",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    duration: "7 Days",
    price: "$2,999"
  },
  {
    title: "Serengeti Migration",
    image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d",
    duration: "10 Days",
    price: "$3,999"
  },
  {
    title: "Tanzania Cultural Tour",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615",
    duration: "5 Days",
    price: "$1,999"
  }
];

function Home() {
  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4B5320] mb-4">About Olkinyei Expeditions</h2>
            <div className="w-24 h-1 bg-[#FF7F50] mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"
                alt="Safari Guide Experience"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#B8860B]">Our Story</h3>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2025 by a team of passionate conservationists and safari experts, 
                Olkinyei Expeditions has grown to become one of East Africa's premier safari operators.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We specialize in creating immersive safari experiences that connect travelers 
                with the breathtaking landscapes, magnificent wildlife, and rich cultures of 
                Kenya and Tanzania. Our commitment to sustainable tourism ensures that your 
                adventure contributes positively to conservation efforts and local communities.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <Check className="text-[#FF7F50] w-5 h-5" />
                  <span className="text-gray-700">Expert Local Guides</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-[#FF7F50] w-5 h-5" />
                  <span className="text-gray-700">Luxury Accommodations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-[#FF7F50] w-5 h-5" />
                  <span className="text-gray-700">Sustainable Tourism</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="text-[#FF7F50] w-5 h-5" />
                  <span className="text-gray-700">Customized Itineraries</span>
                </div>
              </div>
              
              <Link
                to="/about"
                className="inline-block mt-6 px-6 py-2.5 bg-[#4B5320] hover:bg-[#5B6330] text-white rounded-[7px] transition-colors duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#4B5320] mb-4">Why Choose Olkinyei?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine luxury with adventure to create unforgettable safari experiences tailored to your preferences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F0E8] p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#D2B48C] rounded-full flex items-center justify-center mx-auto mb-6">
                <Map className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#4B5320] mb-4">Local Expertise</h3>
              <p className="text-gray-600">
                Our guides are born and raised in East Africa with intimate knowledge of wildlife habitats and behaviors.
              </p>
            </div>

            <div className="bg-[#F5F0E8] p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#D2B48C] rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#4B5320] mb-4">Eco-Friendly Approach</h3>
              <p className="text-gray-600">
                We're committed to conservation and supporting local communities through sustainable tourism practices.
              </p>
            </div>

            <div className="bg-[#F5F0E8] p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#D2B48C] rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#4B5320] mb-4">Personalized Service</h3>
              <p className="text-gray-600">
                Every safari is customized to your interests, preferences, and desired level of comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Tours</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{tour.duration}</span>
                    <span className="text-[#FF7F50] font-semibold">{tour.price}</span>
                  </div>
                  <button className="mt-4 w-full bg-[#FF7F50] text-white py-2 rounded-[7px] hover:bg-[#ff8f66] transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;