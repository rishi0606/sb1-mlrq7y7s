import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Interests from './components/Interests';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Interests />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Rishi Preetham. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;