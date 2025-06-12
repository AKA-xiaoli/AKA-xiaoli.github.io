import React from 'react';
import { Mail, MapPin, Phone, ExternalLink, Building } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to learn more about our research, collaboration opportunities, or to join our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                  <Building className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Department</h4>
                  <p className="text-gray-600">
                    Department of Data Science<br />
                    City University of Hong Kong<br />
                    Kowloon Tong, Hong Kong
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">
                    Prof. Ye WEI: <a href="mailto:yewei@cityu.edu.hk" className="text-blue-800 hover:text-blue-600">yewei@cityu.edu.hk</a><br />
                    Lab Inquiries: <a href="mailto:ace.lab@cityu.edu.hk" className="text-blue-800 hover:text-blue-600">ace.lab@cityu.edu.hk</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office Location</h4>
                  <p className="text-gray-600">
                    Academic Building<br />
                    City University of Hong Kong<br />
                    83 Tat Chee Avenue, Kowloon Tong<br />
                    Hong Kong SAR
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-800 text-white p-3 rounded-lg mr-4">
                  <ExternalLink className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">University Links</h4>
                  <div className="space-y-1">
                    <a 
                      href="https://www.cityu.edu.hk/ds/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:text-blue-600 block"
                    >
                      Department of Data Science
                    </a>
                    <a 
                      href="https://www.cityu.edu.hk/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:text-blue-600 block"
                    >
                      City University of Hong Kong
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="research">Research Collaboration</option>
                  <option value="position">Position Inquiry</option>
                  <option value="general">General Question</option>
                  <option value="media">Media Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;