
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Intern",
      company: "IHM Connect",
      duration: "Current Position",
      type: "Full-time Internship",
      description: "Developing automation workflows and leveraging Microsoft Dataverse for efficient data management and storage solutions.",
      responsibilities: [
        "Design and implement automation workflows to streamline business processes",
        "Utilize Microsoft Dataverse for robust data storage and management",
        "Collaborate with team members to optimize workflow efficiency",
        "Contribute to data-driven decision making processes"
      ],
      technologies: ["Microsoft Dataverse", "Power Automate", "Workflow Automation", "Data Management"],
      status: "current"
    },
    {
      title: "Salesforce Developer Intern",
      company: "Previous Role",
      duration: "Completed",
      type: "Development Internship",
      description: "Gained hands-on experience with Salesforce development, focusing on custom applications and platform optimization.",
      responsibilities: [
        "Developed custom Salesforce applications and components",
        "Worked with Salesforce APIs and integration patterns",
        "Participated in agile development processes",
        "Contributed to platform configuration and customization"
      ],
      technologies: ["Salesforce", "Apex", "Lightning Components", "SOQL", "Salesforce APIs"],
      status: "completed"
    },
    {
      title: "Web Developer Intern",
      company: "Quizaro",
      duration: "Completed",
      type: "Web Development Internship",
      description: "Focused on web development projects, building responsive applications and enhancing user experience.",
      responsibilities: [
        "Developed responsive web applications using modern frameworks",
        "Implemented user-friendly interfaces and interactive features",
        "Collaborated on full-stack development projects",
        "Optimized application performance and user experience"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Web Development", "Responsive Design"],
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and hands-on experience in technology and development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${
                exp.status === 'current' ? 'border-l-4 border-green-500' : 'border-l-4 border-blue-500'
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${
                    exp.status === 'current' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    <Briefcase className={`w-6 h-6 ${
                      exp.status === 'current' ? 'text-green-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                    exp.status === 'current' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {exp.duration}
                  </div>
                  <div className="text-sm text-gray-500">{exp.type}</div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h5>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-3">Technologies & Tools</h5>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, techIndex) => (
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

        {/* Professional Growth */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Professional Growth</h3>
          <p className="text-lg leading-relaxed mb-4">
            Through diverse internship experiences, I've developed a comprehensive skill set that spans 
            web development, cloud platforms, and automation technologies. Each role has contributed 
            to my understanding of modern software development practices and enterprise solutions.
          </p>
          <p className="text-lg leading-relaxed">
            My current position at IHM Connect allows me to apply AI/ML concepts in practical business 
            scenarios, particularly in developing intelligent automation workflows that enhance 
            operational efficiency and data management capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
