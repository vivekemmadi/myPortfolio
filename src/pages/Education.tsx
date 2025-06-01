
import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "BTech in Computer Science & Engineering (AIML)",
      institution: "Malla Reddy University",
      duration: "2021 - 2025",
      grade: "8.74 CGPA",
      description: "Specialized in Artificial Intelligence and Machine Learning with comprehensive coursework in algorithms, data structures, deep learning, and computer vision.",
      highlights: ["Deep Learning", "Machine Learning Algorithms", "Computer Vision", "Data Structures & Algorithms", "Software Engineering"]
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Mathematics, Physics, Chemistry",
      duration: "2019 - 2021",
      grade: "Top Scores",
      description: "Strong foundation in mathematics and sciences, providing the analytical thinking skills essential for AI/ML development.",
      highlights: ["Advanced Mathematics", "Physics Principles", "Chemistry Fundamentals", "Analytical Thinking", "Problem Solving"]
    },
    {
      degree: "CBSE School Education",
      institution: "Nalgonda Public School",
      duration: "2010 - 2019",
      grade: "Excellent Performance",
      description: "Comprehensive education with a focus on mathematics and science subjects, building the foundation for future technical studies.",
      highlights: ["Mathematics Excellence", "Science Foundation", "Communication Skills", "Leadership Qualities", "Academic Discipline"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic journey and the knowledge foundation that drives my passion for technology
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-2">{edu.institution}</h4>
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                </div>
                <div className="md:ml-8 md:text-right">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-4 mb-2">
                    <div className="text-sm text-gray-600 mb-1">Duration</div>
                    <div className="font-semibold text-gray-900">{edu.duration}</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Performance</div>
                    <div className="font-semibold text-gray-900">{edu.grade}</div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h5>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg px-3 py-2 text-sm font-medium text-gray-700"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Academic Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Academic Philosophy</h3>
          <p className="text-lg leading-relaxed mb-4">
            My educational journey has been guided by a commitment to excellence and a passion for continuous learning. 
            The strong foundation in mathematics and sciences has been instrumental in my success in AI/ML specialization.
          </p>
          <p className="text-lg leading-relaxed">
            I believe that academic achievement combined with practical application creates the perfect foundation 
            for innovation in technology. My consistent performance across all levels of education reflects my 
            dedication to mastering both theoretical concepts and their real-world applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
