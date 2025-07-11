
import React from 'react';
import { Github, Star, ArrowDown } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Object Detection Using YOLO",
      description: "Advanced computer vision system capable of detecting multiple objects in real-time video streams with high accuracy using YOLOv4 algorithm.",
      longDescription: "This project implements a state-of-the-art real-time object detection system using the YOLO (You Only Look Once) v4 algorithm. The system processes video streams and accurately identifies and localizes multiple objects simultaneously, making it suitable for various applications including surveillance, autonomous systems, and industrial automation.",
      technologies: ["Python", "YOLOv4", "OpenCV", "Computer Vision", "Deep Learning"],
      features: [
        "Real-time video processing",
        "Multi-object detection",
        "High accuracy performance",
        "Optimized for speed",
        "Customizable object classes"
      ],
      applications: [
        "Security and Surveillance Systems",
        "Autonomous Vehicle Navigation",
        "Industrial Quality Control",
        "Traffic Management",
        "Retail Analytics"
      ],
      status: "Completed",
      category: "AI/ML",
      githubUrl: "https://github.com/vivekemmadi/ObjectDetection"
    },
    {
      title: "Multi-Disease Predictor Using Deep Learning",
      description: "Comprehensive healthcare prediction system using CNN and LSTM models for detecting diabetes, breast cancer, and pneumonia with high accuracy.",
      longDescription: "A sophisticated medical prediction system that leverages the power of Convolutional Neural Networks (CNN) and Long Short-Term Memory (LSTM) models to predict multiple diseases. The system includes separate models for diabetes prediction, breast cancer detection, and pneumonia diagnosis, providing healthcare professionals with an AI-powered diagnostic tool.",
      technologies: ["Python", "TensorFlow", "CNN", "LSTM", "React", "Node.js", "Vercel", "Onrender"],
      features: [
        "Multi-disease prediction capability",
        "CNN-based image analysis",
        "LSTM for sequential data",
        "User-friendly web interface",
        "Cloud deployment"
      ],
      applications: [
        "Early Disease Detection",
        "Medical Diagnosis Support",
        "Healthcare Screening",
        "Preventive Medicine",
        "Clinical Decision Support"
      ],
      deployment: {
        frontend: "Deployed on Vercel",
        backend: "Deployed on Onrender"
      },
      status: "Completed",
      category: "AI/ML",
      githubUrl: "https://github.com/vivekemmadi/multiple-disease-prediction"
    }
  ];

  const handleViewCode = (githubUrl: string) => {
    window.open(githubUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative AI/ML projects showcasing practical applications of deep learning and computer vision
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-white/20 rounded-full px-3 py-1 text-sm font-medium mr-3">
                        {project.category}
                      </span>
                      <span className="bg-green-500/20 rounded-full px-3 py-1 text-sm font-medium">
                        {project.status}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="text-lg text-blue-100">{project.description}</p>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-8">
                    <button 
                      onClick={() => handleViewCode(project.githubUrl)}
                      className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{project.longDescription}</p>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg px-3 py-1 text-sm font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Applications</h4>
                    <ul className="space-y-2">
                      {project.applications.map((application, appIndex) => (
                        <li key={appIndex} className="flex items-start space-x-2">
                          <ArrowDown className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0 rotate-45" />
                          <span className="text-gray-700">{application}</span>
                        </li>
                      ))}
                    </ul>

                    {project.deployment && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Deployment</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-600">Frontend:</span>
                            <span className="text-sm text-gray-700">{project.deployment.frontend}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-600">Backend:</span>
                            <span className="text-sm text-gray-700">{project.deployment.backend}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Project Impact</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-blue-100">Major Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Applications</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
