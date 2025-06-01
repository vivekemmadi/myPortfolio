
import React from 'react';
import { Monitor, Settings, Code, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Design & Development",
      description: "Creating modern, responsive websites and web applications with clean, user-friendly interfaces.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Cross-browser Compatibility",
        "Performance Optimization",
        "SEO-friendly Structure"
      ],
      technologies: ["React", "HTML5", "CSS3", "JavaScript", "Node.js"]
    },
    {
      icon: Settings,
      title: "Automation Workflows",
      description: "Developing intelligent automation solutions to streamline business processes and increase efficiency.",
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Task Scheduling",
        "Error Handling",
        "Performance Monitoring"
      ],
      technologies: ["Power Automate", "Microsoft Dataverse", "Python", "APIs"]
    },
    {
      icon: Code,
      title: "AI/ML Solutions",
      description: "Building machine learning models and AI applications for real-world problem solving.",
      features: [
        "Computer Vision",
        "Predictive Analytics",
        "Deep Learning Models",
        "Data Processing",
        "Model Deployment"
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "YOLO", "Scikit-learn"]
    },
    {
      icon: Star,
      title: "Data Management Systems",
      description: "Implementing robust data storage and management solutions using Microsoft Dataverse and other platforms.",
      features: [
        "Database Design",
        "Data Integration",
        "Security Implementation",
        "Backup & Recovery",
        "Performance Tuning"
      ],
      technologies: ["Microsoft Dataverse", "SQL", "Data Modeling", "Cloud Storage"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional services combining technical expertise with innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg px-3 py-1 text-sm font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">My Service Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Discovery</h4>
              <p className="text-gray-600 text-sm">Understanding your requirements and goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Planning</h4>
              <p className="text-gray-600 text-sm">Creating detailed project roadmap and timeline</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Development</h4>
              <p className="text-gray-600 text-sm">Building and implementing the solution</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Delivery</h4>
              <p className="text-gray-600 text-sm">Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-lg mb-6">
            Let's discuss how I can help bring your ideas to life with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:vivekemmadi14@gmail.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/viveke3"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
