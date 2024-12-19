import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-start gap-4">
            <GraduationCap className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">B.Tech in Computer Science</h3>
              <p className="text-blue-600">SR University</p>
              <p className="text-gray-600 mt-2">
                Currently pursuing Bachelor's degree with specialization in Cyber Security.
                Focusing on advanced security concepts, IoT security, and algorithm optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}