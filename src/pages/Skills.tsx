
import React from 'react';
import { Code, Monitor, Settings, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, description: "Advanced proficiency in AI/ML development" },
        { name: "Java", level: 85, description: "Strong object-oriented programming skills" },
        { name: "JavaScript", level: 80, description: "Modern web development and frameworks" },
        { name: "SQL", level: 85, description: "Database design and complex queries" }
      ]
    },
    {
      title: "Web Development",
      icon: Monitor,
      skills: [
        { name: "HTML5", level: 90, description: "Semantic markup and accessibility" },
        { name: "CSS3", level: 85, description: "Modern styling and responsive design" },
        { name: "React", level: 80, description: "Component-based UI development" },
        { name: "Node.js", level: 75, description: "Server-side JavaScript development" }
      ]
    },
    {
      title: "Cloud & Automation",
      icon: Settings,
      skills: [
        { name: "Microsoft Dataverse", level: 85, description: "Data management and storage solutions" },
        { name: "Power Automate", level: 80, description: "Workflow automation and process optimization" },
        { name: "Salesforce", level: 75, description: "CRM development and customization" },
        { name: "Workflow Design", level: 85, description: "Business process automation" }
      ]
    },
    {
      title: "AI/ML Technologies",
      icon: Star,
      skills: [
        { name: "Deep Learning", level: 85, description: "CNN, LSTM, and neural networks" },
        { name: "Computer Vision", level: 80, description: "YOLO, OpenCV, and image processing" },
        { name: "TensorFlow/PyTorch", level: 75, description: "ML framework development" },
        { name: "Data Science", level: 80, description: "Data analysis and modeling" }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return "from-green-500 to-blue-500";
    if (level >= 75) return "from-blue-500 to-purple-500";
    return "from-purple-500 to-pink-500";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Development Tools</h4>
            <div className="space-y-2">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 m-1">Git</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 m-1">VS Code</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 m-1">Jupyter</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 m-1">Docker</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Soft Skills</h4>
            <div className="space-y-2">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 m-1">Problem Solving</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 m-1">Team Collaboration</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 m-1">Communication</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 m-1">Adaptability</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Learning Areas</h4>
            <div className="space-y-2">
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 m-1">MLOps</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 m-1">Cloud Computing</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 m-1">Blockchain</span>
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700 m-1">DevOps</span>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Skills Philosophy</h3>
          <p className="text-lg leading-relaxed mb-4">
            My skill development approach focuses on building a strong foundation in core technologies 
            while staying current with emerging trends. I believe in practical application of knowledge 
            through real-world projects and continuous learning.
          </p>
          <p className="text-lg leading-relaxed">
            The combination of AI/ML expertise, web development skills, and automation knowledge positions 
            me to contribute effectively to modern technology teams and innovative projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
