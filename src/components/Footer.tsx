import React from 'react';
import { FlaskRound as Flask, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Lab Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Flask className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ACE Lab</h3>
                <p className="text-gray-400 text-sm">KUMA JUNGLE</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Advancing Computational Excellence through innovative research in data science, 
              machine learning, and biological applications at City University of Hong Kong.
            </p>
            <div className="text-sm text-gray-400">
              <p>Department of Data Science</p>
              <p>City University of Hong Kong</p>
              <p>Hong Kong SAR</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#research" className="hover:text-white transition-colors duration-200">Research</a></li>
              <li><a href="#team" className="hover:text-white transition-colors duration-200">Team</a></li>
              <li><a href="#vacancies" className="hover:text-white transition-colors duration-200">Vacancies</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">University</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="https://www.cityu.edu.hk/ds/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-1">Data Science Dept</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.cityu.edu.hk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-1">CityU</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 ACE Lab, City University of Hong Kong. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;