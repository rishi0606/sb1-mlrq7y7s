import React from 'react';

const skills = {
  programming: ['Python', 'Java', 'C', 'HTML', 'CSS', 'JavaScript'],
  specialization: ['Cyber Security', 'IoT Security', 'Sorting Algorithms', 'Dynamic Programming']
};

export default function Skills() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming</h3>
            <div className="space-y-4">
              {skills.programming.map((skill) => (
                <div key={skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${Math.random() * 30 + 70}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialization</h3>
            <div className="space-y-4">
              {skills.specialization.map((skill) => (
                <div key={skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${Math.random() * 30 + 70}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}