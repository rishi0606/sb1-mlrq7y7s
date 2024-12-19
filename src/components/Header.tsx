import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
              alt="Rishi Preetham"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900">BITLA RISHI PREETHAM</h1>
            <p className="mt-2 text-xl text-blue-600">Cyber Security Enthusiast</p>
            <p className="mt-4 text-gray-600 max-w-2xl">
              A passionate B.Tech Computer Science student specializing in Cyber Security at SR University. 
              Experienced in IoT security, OT/ICS environments, and developing innovative ransomware prevention techniques.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="tel:+917991404014" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Phone size={20} />
                <span>+91 7981404014</span>
              </a>
              <a href="mailto:contact@rishipreetham0606.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Mail size={20} />
                <span>contact@rishipreetham0606.com</span>
              </a>
              <a href="https://github.com/rishi0606" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/rishi-preetham-a09148254/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}