import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import { Vector } from './shared/Vector';
import { vectors } from '../constants/vectors';

const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hi, I am Frank Damen, an experienced product manager on a mission.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/3 flex items-center">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 animate-float">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    style={{
                      clipPath: "path('M 4 80 Q 110 7 220 20 Q 218 130 135 226 Q 41 173 4 80 Z')"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"
                    style={{
                      clipPath: "path('M 4 80 Q 110 7 220 20 Q 218 130 135 226 Q 41 173 4 80 Z')"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="w-full md:w-2/3 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-accent mb-4">Me</h3>
                <p className="text-gray-300">
                  I'm a seasoned product manager with over a decade of experience in transforming insights and ideas into successful digital products. My approach combines deep user knowledge with strategic business thinking, helping companies navigate the complex journey from concept to market success.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-accent mb-4">My Mission</h3>
                <p className="text-gray-300">
                  I founded 3volve to help businesses build digital products that truly gain traction. Too often, key product decisions rely on gut feelings, wasting resources without achieving market impact. My approach blends research, strategic insight, and strong front-end and communication expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Work With Me</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary/20 p-8 rounded-lg border border-accent/10">
              <Target className="w-8 h-8 text-accent stroke-[1.25] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Strategic Vision</h3>
              <p className="text-gray-300">Transform complex market insights into clear, actionable product strategies</p>
            </div>
            
            <div className="bg-secondary/20 p-8 rounded-lg border border-accent/10">
              <Users className="w-8 h-8 text-accent stroke-[1.25] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">User-Centric</h3>
              <p className="text-gray-300">Deep understanding of user needs and behavior patterns</p>
            </div>
            
            <div className="bg-secondary/20 p-8 rounded-lg border border-accent/10">
              <Lightbulb className="w-8 h-8 text-accent stroke-[1.25] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation Focus</h3>
              <p className="text-gray-300">Bringing fresh perspectives and innovative solutions to product challenges</p>
            </div>
            
            <div className="bg-secondary/20 p-8 rounded-lg border border-accent/10">
              <Award className="w-8 h-8 text-accent stroke-[1.25] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
              <p className="text-gray-300">Successful product launches and transformations across industries</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;