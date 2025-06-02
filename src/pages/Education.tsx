
import React from 'react';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "BTech in Computer Science & Engineering (AIML)",
      institution: "Malla Reddy University",
      duration: "2021 - 2025",
      grade: "8.74 CGPA",
      description: "Specialized in Artificial Intelligence and Machine Learning with comprehensive coursework in algorithms, data structures, deep learning, and computer vision.",
      highlights: ["Deep Learning", "Machine Learning Algorithms", "Computer Vision", "Data Structures & Algorithms", "Software Engineering"],
      icon: GraduationCap,
      color: "from-blue-500 to-purple-500"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Raviryala",
      duration: "2019 - 2021",
      grade: "97.8%",
      description: "Strong foundation in mathematics and sciences, providing the analytical thinking skills essential for AI/ML development.",
      highlights: ["Advanced Mathematics", "Physics Principles", "Chemistry Fundamentals", "Analytical Thinking", "Problem Solving"],
      icon: BookOpen,
      color: "from-purple-500 to-pink-500"
    },
    {
      degree: "CBSE School Education",
      institution: "Nalgonda Public School",
      duration: "2010 - 2019",
      grade: "81.6%",
      description: "Comprehensive education with a focus on mathematics and science subjects, building the foundation for future technical studies.",
      highlights: ["Mathematics Excellence", "Science Foundation", "Communication Skills", "Leadership Qualities", "Academic Discipline"],
      icon: Award,
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Educational Journey</span>
            </div>
            
            {/* Profile Picture */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="https://i.postimg.cc/659j2kKL/Vivek-jpg.png" 
                  alt="Vivek Emmadi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Education
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              My academic journey and the knowledge foundation that drives my passion for technology
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative bg-white/90 backdrop-blur-sm m-1 rounded-3xl p-8">
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex-1 lg:pr-8">
                      <div className="flex items-center mb-4">
                        <div className={`p-4 bg-gradient-to-r ${edu.color} rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <edu.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                          <h4 className="text-xl text-blue-600 font-semibold">{edu.institution}</h4>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">{edu.description}</p>
                    </div>
                    
                    <div className="lg:text-right space-y-4">
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                        <div className="text-sm text-gray-600 mb-2 font-medium">Duration</div>
                        <div className="font-bold text-gray-900 text-lg">{edu.duration}</div>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
                        <div className="text-sm text-gray-600 mb-2 font-medium">Performance</div>
                        <div className="font-bold text-gray-900 text-lg">{edu.grade}</div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      Key Highlights
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:shadow-md transition-shadow duration-200"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Philosophy */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Academic Philosophy</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-lg leading-relaxed">
              <p>
                My educational journey has been guided by a commitment to excellence and a passion for continuous learning. 
                The strong foundation in mathematics and sciences has been instrumental in my success in AI/ML specialization.
              </p>
              <p>
                I believe that academic achievement combined with practical application creates the perfect foundation 
                for innovation in technology. My consistent performance across all levels of education reflects my 
                dedication to mastering both theoretical concepts and their real-world applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
