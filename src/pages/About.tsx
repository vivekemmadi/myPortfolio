
import React from 'react';
import { Sparkles, Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">About Me</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Story
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions through technology and continuous learning
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-2xl">
                <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-gray-500 text-lg font-medium">
                  Professional Photo
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hello, I'm Vivek!</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I'm a passionate and tech-enthusiastic recent BTech graduate specializing in Artificial Intelligence 
                  and Machine Learning. My journey in technology has been driven by curiosity and a desire to create 
                  innovative solutions that make a real impact.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With an impressive 8.74 CGPA from Malla Reddy University, I've built a strong foundation in AI/ML 
                  technologies while gaining practical experience through multiple internships.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">8.74</div>
                  <div className="text-blue-100">BTech CGPA</div>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white text-center">
                  <div className="text-3xl font-bold mb-2">3+</div>
                  <div className="text-purple-100">Internships</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">My Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: "Excellence", description: "Striving for the highest quality in every project" },
                { icon: Lightbulb, title: "Innovation", description: "Always exploring new technologies and approaches" },
                { icon: Heart, title: "Passion", description: "Genuine love for technology and problem-solving" },
                { icon: Sparkles, title: "Growth", description: "Continuous learning and skill development" }
              ].map((value, index) => (
                <div key={index} className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h4>
                  <p className="text-gray-600 text-center text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Interests */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Personal Interests</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  { title: "Entertainment", description: "Watching movies and series to unwind and explore different perspectives" },
                  { title: "Research", description: "Surfing the net to stay updated with latest tech trends and innovations" }
                ].map((interest, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{interest.title}</h4>
                      <p className="text-gray-600">{interest.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  { title: "Strategy Games", description: "Playing chess to enhance strategic thinking and problem-solving skills" },
                  { title: "Continuous Learning", description: "Always exploring new technologies and methodologies in AI/ML" }
                ].map((interest, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{interest.title}</h4>
                      <p className="text-gray-600">{interest.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Career Goals */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Career Goals</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                My primary goal is to secure a placement in a reputable multinational corporation where I can apply 
                my AI/ML expertise to solve real-world problems. I'm particularly interested in roles that allow me 
                to work on cutting-edge projects involving deep learning, computer vision, and automation.
              </p>
              <p>
                I believe in continuous learning and growth, and I'm excited to contribute to innovative teams that 
                are shaping the future of technology. My experience with practical implementations and my strong 
                academic foundation position me well for challenging and rewarding opportunities in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
