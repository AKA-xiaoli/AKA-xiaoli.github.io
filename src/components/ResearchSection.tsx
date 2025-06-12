import React from 'react';
import { Brain, Database, Dna, TrendingUp, ArrowRight } from 'lucide-react';

const ResearchSection: React.FC = () => {
  const researchAreas = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning & AI",
      description: "Advanced algorithms for data analysis, pattern recognition, and predictive modeling with applications in biological systems.",
      highlights: ["Deep Learning", "Neural Networks", "Pattern Recognition"]
    },
    {
      icon: <Dna className="h-8 w-8" />,
      title: "Computational Biology",
      description: "Data-driven approaches to understand biological processes, from molecular interactions to systems-level phenomena.",
      highlights: ["Bioinformatics", "Systems Biology", "Genomics"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Science",
      description: "Innovative methodologies for large-scale data processing, analysis, and visualization in scientific applications.",
      highlights: ["Big Data Analytics", "Statistical Modeling", "Data Visualization"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Materials Science",
      description: "Computational approaches to materials discovery and optimization using machine learning and data analytics.",
      highlights: ["Materials Discovery", "Property Prediction", "Optimization"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our interdisciplinary research combines computational methods, data science, and domain expertise 
            to tackle complex challenges in biology, materials science, and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-800 text-white p-3 rounded-lg mr-4 group-hover:bg-blue-700 transition-colors duration-200">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>
              <div className="space-y-2 mb-4">
                {area.highlights.map((highlight, idx) => (
                  <span 
                    key={idx}
                    className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-blue-800 font-medium group-hover:text-blue-600 transition-colors duration-200">
                <span className="mr-2">Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Recent Publications */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Recent Highlights</h3>
          <div className="text-center py-8">
            <p className="text-gray-600 mb-6">
              Our research publications and achievements will be featured here as we establish our research program.
            </p>
            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Stay Updated
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;