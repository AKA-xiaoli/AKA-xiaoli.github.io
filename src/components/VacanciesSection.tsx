import React from 'react';
import { Users, GraduationCap, Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

const VacanciesSection: React.FC = () => {
  const positions = [
    {
      type: "PhD Student",
      title: "PhD Positions in Computational Biology",
      department: "Department of Data Science",
      location: "Hong Kong",
      deadline: "Applications Reviewed Continuously",
      description: "We are seeking motivated PhD students to work on data-driven approaches for biological applications. Candidates should have a strong background in computer science, mathematics, or related fields.",
      requirements: [
        "Master's degree in Computer Science, Mathematics, Biology, or related field",
        "Strong programming skills (Python, R, or similar)",
        "Interest in interdisciplinary research",
        "Excellent English communication skills"
      ],
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      type: "Postdoctoral Fellow",
      title: "Postdoctoral Research Fellow",
      department: "Department of Data Science",
      location: "Hong Kong",
      deadline: "Applications Reviewed Continuously",
      description: "Join our team as a postdoctoral researcher to advance cutting-edge research in machine learning applications for materials science and biology.",
      requirements: [
        "PhD in Computer Science, Data Science, or related field",
        "Experience with machine learning and data analysis",
        "Strong publication record",
        "Ability to work independently and collaboratively"
      ],
      icon: <Briefcase className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are building a dynamic research team at the intersection of data science, biology, and materials science. 
            Join us in pushing the boundaries of computational research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {positions.map((position, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-800 text-white p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-white bg-opacity-20 p-2 rounded-lg mr-3">
                    {position.icon}
                  </span>
                  <span className="text-sm font-medium text-blue-200">{position.type}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                <div className="flex items-center text-blue-200 text-sm space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {position.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {position.deadline}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {position.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="text-blue-800 mr-2 mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group">
                  <span className="mr-2">Apply Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Information */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <Users className="h-12 w-12 text-blue-800 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Application Information</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">What We Offer:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2 mt-1">•</span>
                  <span>Competitive salary and benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2 mt-1">•</span>
                  <span>State-of-the-art research facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2 mt-1">•</span>
                  <span>Collaborative research environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2 mt-1">•</span>
                  <span>Professional development opportunities</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">How to Apply:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2 mt-1">•</span>
                  <span>Send CV and cover letter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2 mt-1">•</span>
                  <span>Include 2-3 reference contacts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2 mt-1">•</span>
                  <span>Research statement (for postdoc positions)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2 mt-1">•</span>
                  <span>Applications reviewed continuously</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VacanciesSection;