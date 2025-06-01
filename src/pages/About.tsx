
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know more about my journey, interests, and aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-full h-96 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-200 flex items-center justify-center text-gray-500">
                <span className="text-lg">Professional Photo</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Hello, I'm Vivek!</h2>
            <p className="text-gray-700 leading-relaxed">
              I'm a passionate and tech-enthusiastic recent BTech graduate specializing in Artificial Intelligence 
              and Machine Learning. My journey in technology has been driven by curiosity and a desire to create 
              innovative solutions that make a real impact.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With an impressive 8.74 CGPA from Malla Reddy University, I've built a strong foundation in AI/ML 
              technologies while gaining practical experience through multiple internships. I'm currently working 
              at IHM Connect, where I develop automation workflows and leverage Microsoft Dataverse for data management.
            </p>
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8.74</div>
              <div className="text-gray-700">BTech CGPA</div>
              <div className="text-sm text-gray-500">Malla Reddy University</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">Top</div>
              <div className="text-gray-700">Intermediate Scores</div>
              <div className="text-sm text-gray-500">Maths, Physics, Chemistry</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">CBSE</div>
              <div className="text-gray-700">School Education</div>
              <div className="text-sm text-gray-500">Nalgonda Public School</div>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Interests</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Entertainment</h4>
                  <p className="text-gray-600">Watching movies and series to unwind and explore different perspectives</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Research</h4>
                  <p className="text-gray-600">Surfing the net to stay updated with latest tech trends and innovations</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Strategy Games</h4>
                  <p className="text-gray-600">Playing chess to enhance strategic thinking and problem-solving skills</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
                  <p className="text-gray-600">Always exploring new technologies and methodologies in AI/ML</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Goals</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            My primary goal is to secure a placement in a reputable multinational corporation where I can apply 
            my AI/ML expertise to solve real-world problems. I'm particularly interested in roles that allow me 
            to work on cutting-edge projects involving deep learning, computer vision, and automation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I believe in continuous learning and growth, and I'm excited to contribute to innovative teams that 
            are shaping the future of technology. My experience with practical implementations and my strong 
            academic foundation position me well for challenging and rewarding opportunities in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
