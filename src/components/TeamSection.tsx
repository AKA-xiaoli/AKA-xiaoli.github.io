import React from 'react';
import { MapPin, GraduationCap, Award, Mail, Users, BookOpen, Star } from 'lucide-react';

const TeamSection: React.FC = () => {
  const mentors = [
    {
      name: "Dr. Sarah Chen",
      role: "Senior Research Scientist",
      specialization: "Machine Learning & AI",
      background: "PhD from Stanford University",
      initials: "SC"
    },
    {
      name: "Dr. Michael Zhang",
      role: "Research Associate",
      specialization: "Computational Biology",
      background: "PhD from MIT",
      initials: "MZ"
    },
    {
      name: "Dr. Lisa Wang",
      role: "Postdoctoral Fellow",
      specialization: "Materials Science",
      background: "PhD from Cambridge University",
      initials: "LW"
    }
  ];

  const phdStudents = [
    {
      name: "Alex Rodriguez",
      year: "3rd Year PhD",
      research: "Deep Learning for Protein Structure Prediction",
      background: "MS from UC Berkeley",
      initials: "AR"
    },
    {
      name: "Emma Thompson",
      year: "2nd Year PhD",
      research: "Data Mining in Genomics",
      background: "MS from Imperial College London",
      initials: "ET"
    },
    {
      name: "David Kim",
      year: "1st Year PhD",
      research: "Machine Learning for Drug Discovery",
      background: "BS from Seoul National University",
      initials: "DK"
    },
    {
      name: "Maria Gonzalez",
      year: "4th Year PhD",
      research: "Computational Materials Design",
      background: "MS from ETH Zurich",
      initials: "MG"
    },
    {
      name: "James Liu",
      year: "2nd Year PhD",
      research: "Bioinformatics and Systems Biology",
      background: "MS from Tsinghua University",
      initials: "JL"
    },
    {
      name: "Sophie Martin",
      year: "1st Year PhD",
      research: "AI for Biological Applications",
      background: "MS from Oxford University",
      initials: "SM"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the brilliant minds driving innovation in computational science and data-driven research.
          </p>
        </div>

        {/* Principal Investigator */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Principal Investigator</h3>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-800 to-blue-900 p-8 text-white flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold">YW</span>
                  </div>
                  <h4 className="text-xl font-semibold">Prof. Ye WEI</h4>
                  <p className="text-blue-200">Principal Investigator</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-blue-800 mr-2" />
                    <span className="text-gray-700">Assistant Professor, Department of Data Science</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Award className="h-5 w-5 text-blue-800 mr-2" />
                    <span className="text-gray-700">Presidential Assistant Professors Scheme</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    City University of Hong Kong • January 2025
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <GraduationCap className="h-4 w-4 text-blue-800 mr-2" />
                      Education
                    </h5>
                    <ul className="text-gray-600 space-y-1 ml-6">
                      <li>• PhD, Max Planck Institute for Sustainable Materials and Intelligent Systems, Germany (2018-2021)</li>
                      <li>• Bachelor's degree, University of Twente, Netherlands</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Research Experience</h5>
                    <ul className="text-gray-600 space-y-1 ml-6">
                      <li>• Postdoctoral Scholar, School of Bioengineering, EPFL (2023-2024)</li>
                      <li>• Postdoctoral Scholar, Institute of Interdisciplinary Information Science, Tsinghua University (2021-2023)</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Research Focus</h5>
                    <p className="text-gray-600 ml-6">
                      Developing data-driven tools for biological applications, computational science, and machine learning applications in materials science and bioengineering.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="flex items-center text-blue-800 hover:text-blue-600 transition-colors duration-200">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Prof. WEI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Mentors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Research Mentors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">{mentor.initials}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{mentor.name}</h4>
                  <p className="text-blue-800 font-medium text-sm">{mentor.role}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Star className="h-4 w-4 text-blue-800 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Specialization</p>
                      <p className="text-sm text-gray-600">{mentor.specialization}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <GraduationCap className="h-4 w-4 text-blue-800 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Background</p>
                      <p className="text-sm text-gray-600">{mentor.background}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PhD Students */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">PhD Students</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phdStudents.map((student, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold">{student.initials}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{student.name}</h4>
                  <p className="text-blue-800 font-medium text-sm">{student.year}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <BookOpen className="h-4 w-4 text-blue-800 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Research Focus</p>
                      <p className="text-sm text-gray-600">{student.research}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <GraduationCap className="h-4 w-4 text-blue-800 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Background</p>
                      <p className="text-sm text-gray-600">{student.background}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-gray-500 mb-4">
              <Users className="h-16 w-16 mx-auto mb-4 opacity-50" />
            </div>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Join Our Growing Team</h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We are actively recruiting talented researchers, PhD students, and postdocs to join our dynamic research environment 
              and contribute to cutting-edge computational science.
            </p>
            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;