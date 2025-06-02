import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Intern",
      company: "IHM Connect",
      duration: "Current Position",
      type: "Full-time Internship",
      location: "On-site",
      description: "Developing automation workflows and leveraging Microsoft Dataverse for efficient data management and storage solutions.",
      responsibilities: [
        "Design and implement automation workflows to streamline business processes",
        "Utilize Microsoft Dataverse for robust data storage and management",
        "Collaborate with team members to optimize workflow efficiency",
        "Contribute to data-driven decision making processes"
      ],
      technologies: ["Microsoft Dataverse", "Power Automate", "Workflow Automation", "Data Management"],
      status: "current",
      achievements: ["Improved workflow efficiency by 40%", "Reduced manual processes by 60%"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Salesforce Developer Intern",
      company: "Previous Role",
      duration: "Completed",
      type: "Development Internship",
      location: "Remote",
      description: "Gained hands-on experience with Salesforce development, focusing on custom applications and platform optimization.",
      responsibilities: [
        "Developed custom Salesforce applications and components",
        "Worked with Salesforce APIs and integration patterns",
        "Participated in agile development processes",
        "Contributed to platform configuration and customization"
      ],
      technologies: ["Salesforce", "Apex", "Lightning Components", "SOQL", "Salesforce APIs"],
      status: "completed",
      achievements: ["Built 5+ custom components", "Optimized platform performance"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Web Developer Intern",
      company: "Quizaro",
      duration: "Completed",
      type: "Web Development Internship",
      location: "Remote",
      description: "Focused on web development projects, building responsive applications and enhancing user experience.",
      responsibilities: [
        "Developed responsive web applications using modern frameworks",
        "Implemented user-friendly interfaces and interactive features",
        "Collaborated on full-stack development projects",
        "Optimized application performance and user experience"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Web Development", "Responsive Design"],
      status: "completed",
      achievements: ["Delivered 3+ web applications", "Improved user engagement by 35%"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Professional Journey</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              My professional journey and hands-on experience in technology and development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Status Indicator */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color}`}></div>
                
                <div className="p-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex items-start space-x-6 flex-1">
                      <div className={`p-4 bg-gradient-to-r ${exp.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{exp.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            exp.status === 'current' 
                              ? 'bg-green-100 text-green-800 border border-green-200' 
                              : 'bg-gray-100 text-gray-800 border border-gray-200'
                          }`}>
                            {exp.status === 'current' ? 'Current' : 'Completed'}
                          </span>
                        </div>
                        <h4 className="text-xl text-blue-600 font-semibold mb-3">{exp.company}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">{exp.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Responsibilities */}
                    <div>
                      <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-700">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements & Tech */}
                    <div className="space-y-6">
                      {/* Achievements */}
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                          Key Achievements
                        </h5>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-700"
                            >
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-4">Technologies & Tools</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:shadow-md transition-shadow duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Growth Summary */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Professional Growth</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-lg leading-relaxed">
              <p>
                Through diverse internship experiences, I've developed a comprehensive skill set that spans 
                web development, cloud platforms, and automation technologies. Each role has contributed 
                to my understanding of modern software development practices and enterprise solutions.
              </p>
              <p>
                My current position at IHM Connect allows me to apply AI/ML concepts in practical business 
                scenarios, particularly in developing intelligent automation workflows that enhance 
                operational efficiency and data management capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
