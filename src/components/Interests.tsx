import React from 'react';
import { Heart, Code, Shield, Dumbbell } from 'lucide-react';

const interests = [
  {
    icon: Shield,
    title: 'Cyber Security Research',
    description: 'Passionate about exploring new security concepts and threats'
  },
  {
    icon: Code,
    title: 'Programming',
    description: 'Love creating efficient solutions to complex problems'
  },
  {
    icon: Heart,
    title: 'Anime Movies',
    description: 'Enjoy watching love-themed anime in free time'
  },
  {
    icon: Dumbbell,
    title: 'Vegetarian Fitness',
    description: 'Committed to maintaining a healthy lifestyle through vegetarian nutrition'
  }
];

export default function Interests() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Interests & Hobbies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest) => (
            <div key={interest.title} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <interest.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{interest.title}</h3>
              <p className="text-gray-600">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}