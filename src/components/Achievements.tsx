import React from 'react';
import { Trophy } from 'lucide-react';

const achievements = [
  {
    title: 'Event Scheduling Innovation',
    description: 'Implemented efficient solutions for complex event scheduling problems'
  },
  {
    title: 'Product Bundling Optimization',
    description: 'Developed innovative approaches to product bundling challenges'
  },
  {
    title: 'Array Optimization',
    description: 'Created efficient solutions for array-based algorithmic problems'
  }
];

export default function Achievements() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}