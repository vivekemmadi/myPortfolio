
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 text-white/10 animate-bounce">
          <Code size={32} />
        </div>
        <div className="absolute top-40 right-32 text-white/10 animate-bounce delay-300">
          <Sparkles size={24} />
        </div>
        <div className="absolute bottom-40 left-1/4 text-white/10 animate-bounce delay-700">
          <Zap size={28} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-52 h-52 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 animate-pulse hover:animate-none transition-all duration-300">
                <div className="w-full h-full rounded-full bg-slate-800/90 backdrop-blur-sm flex items-center justify-center text-white/80 border border-white/20">
                  <span className="text-lg font-medium">Vivek Emmadi</span>
                </div>
              </div>
            </div>

            {/* Main Title with Enhanced Typography */}
            <div className="mb-8 space-y-4">
              <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                  Vivek
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                  Emmadi
                </span>
              </h1>

              <div className="flex items-center justify-center space-x-2 text-xl md:text-2xl text-white/90 font-light">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                <span>AI/ML Engineer & Full-Stack Developer</span>
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="relative mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl max-w-4xl mx-auto">
                <p className="text-xl text-white/90 leading-relaxed">
                  Passionate BTech graduate specializing in{' '}
                  <span className="text-blue-400 font-semibold">Artificial Intelligence</span> and{' '}
                  <span className="text-purple-400 font-semibold">Machine Learning</span>.
                  Building innovative solutions with expertise in deep learning, web development, and automation workflows.
                </p>
              </div>
            </div>

            {/* Modern Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/projects"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  <span>View My Work</span>
                  <ArrowDown className="w-4 h-4 rotate-45 group-hover:rotate-90 transition-transform duration-300" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="group relative bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold border border-white/20 overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl"
              >
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Get In Touch</span>
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center space-x-8 mb-12">
              <a
                href="mailto:vivekemmadi14@gmail.com"
                className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/viveke3"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-white/80 hover:text-blue-400 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-white/80 hover:text-gray-300 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            {/* Animated Scroll Indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Quick Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">8.74</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Academic Excellence</h3>
              <p className="text-white/80 leading-relaxed">BTech CGPA from Malla Reddy University (2021-2025)</p>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">3+</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Internships</h3>
              <p className="text-white/80 leading-relaxed">Currently at IHM Connect, previously at Salesforce & Quizaro</p>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">AI</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">AI/ML Specialist</h3>
              <p className="text-white/80 leading-relaxed">Deep Learning, YOLO, CNN, LSTM expertise</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
