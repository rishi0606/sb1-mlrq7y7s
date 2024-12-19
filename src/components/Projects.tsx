import React from 'react';
import { FileCode2, Search, Navigation, Calendar, Car } from 'lucide-react';

const projects = [
  {
    title: 'Fire Detection and Alert System',
    description: 'Developed a C-based fire detection system with real-time monitoring and alert capabilities.',
    icon: FileCode2,
    tech: ['C', 'System Programming']
  },
  {
    title: 'Binary Search Algorithm',
    description: 'Implemented an efficient product price search system using binary search algorithm in C.',
    icon: Search,
    tech: ['C', 'Algorithms']
  },
  {
    title: 'Arduino Nano GSM GPS Tracker',
    description: 'Created a tracking system using Arduino Nano with GSM and GPS capabilities.',
    icon: Navigation,
    tech: ['Arduino', 'IoT']
  },
  {
    title: 'Conference Room Scheduling',
    description: 'Developed a Java-based system for efficient conference room management.',
    icon: Calendar,
    tech: ['Java', 'Scheduling']
  },
  {
    title: 'Vehicle Management System',
    description: 'Built a comprehensive vehicle management system using Java.',
    icon: Car,
    tech: ['Java', 'Database']
  }
];

export default function Projects() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <project.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}