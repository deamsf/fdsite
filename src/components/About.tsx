import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
              alt="Product Management"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">About Us</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">Our Story</h3>
                <p className="text-gray-300">
                  At 3volve, we believe great products emerge from the perfect blend of user insights,
                  strategic product management, and compelling communications.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses with product management expertise that transforms ideas
                  into market-leading digital products.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-accent mb-2">Why Choose Us</h3>
                <p className="text-gray-300">
                  Think of us as your "product manager/product owner as a service" - bringing
                  expertise, methodology, and results-driven approach to your product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;