// components/Hero.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Play, Award, Star, GraduationCap } from 'lucide-react';

// Custom hook for device size detection
const useDeviceSize = () => {
  const [deviceSize, setDeviceSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    size: 'sm' as 'sm' | 'md' | 'lg' | 'xl'
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDeviceSize({
          isMobile: true,
          isTablet: false,
          isDesktop: false,
          size: 'sm'
        });
      } else if (width < 1024) {
        setDeviceSize({
          isMobile: false,
          isTablet: true,
          isDesktop: false,
          size: 'md'
        });
      } else {
        setDeviceSize({
          isMobile: false,
          isTablet: false,
          isDesktop: true,
          size: 'lg'
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceSize;
};

const Hero = () => {
  const deviceSize = useDeviceSize();
  const controls = useAnimation();
  const [gradientPos, setGradientPos] = useState(0);

  // Animated gradient effect
  useEffect(() => {
    const animateGradient = () => {
      setGradientPos(prev => (prev >= 100 ? 0 : prev + 0.5));
      requestAnimationFrame(animateGradient);
    };
    
    animateGradient();
    
    // Start animations when component mounts
    controls.start('visible');
  }, [controls]);

  // Responsive text sizes
  const getHeadingSize = () => {
    if (deviceSize.isMobile) return 'text-4xl';
    if (deviceSize.isTablet) return 'text-5xl';
    return 'text-6xl';
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-white dark:from-emerald-900/10 dark:via-teal-900/10 dark:to-gray-900">
      {/* Ethiopian-inspired floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 rounded-full bg-emerald-200/20 dark:bg-emerald-700/10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-teal-200/30 dark:bg-teal-700/10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.03]">
        <div className="grid grid-cols-5 gap-12 h-full">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="border-r border-emerald-200 dark:border-emerald-800/30" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-3 rounded-full shadow-sm border border-emerald-100 dark:border-emerald-900/30"
            >
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-full">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                25,000+ Students Learning Daily
              </span>
            </motion.div>
            
            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className={`font-bold ${getHeadingSize()} leading-tight text-gray-900 dark:text-white`}>
                Master High School Subjects
                <br />
                <motion.span 
                  className="font-extrabold block mt-2"
                  style={{
                    background: `linear-gradient(90deg, #047857, #0d9488, #047857)`,
                    backgroundSize: '200% auto',
                    backgroundPosition: `${gradientPos}% 50%`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Like Never Before
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                Ethiopia's favorite e-learning platform for high school students. Engaging lessons, expert teachers, and fun learning experiences designed just for you.
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-emerald-300 transition-all text-lg py-6 px-8"
                >
                  <BookOpen className="mr-3 h-6 w-6" />
                  Start Learning Free
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-900/30 text-lg py-6 px-8"
                >
                  <Play className="mr-3 h-6 w-6" />
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Column - Interactive Learning Elements */}
          <motion.div 
            className="flex-1 grid grid-cols-2 gap-6 max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Animated Book */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-emerald-100 dark:border-emerald-900/30 flex flex-col items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-4">
                <BookOpen className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">Interactive Textbooks</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mt-2">Bringing subjects to life</p>
            </motion.div>
            
            {/* Graduation Cap */}
            <motion.div
              className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-4">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center text-white">Graduate Ready</h3>
              <p className="text-emerald-100 text-center mt-2">For exams & beyond</p>
            </motion.div>
            
            {/* Star Achievement */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-emerald-100 dark:border-emerald-900/30 flex flex-col items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-4">
                <Star className="h-12 w-12 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">Achievement System</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mt-2">Earn badges & rewards</p>
            </motion.div>
            
            {/* Community */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-emerald-100 dark:border-emerald-900/30 flex flex-col items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                  <Users className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">Study Groups</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mt-2">Connect with peers</p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating stats at bottom */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            { value: "98%", label: "Success Rate", icon: Award },
            { value: "500+", label: "Video Lessons", icon: Play },
            { value: "24/7", label: "Support", icon: Users },
            { value: "10k+", label: "5-Star Reviews", icon: Star }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 border border-emerald-100 dark:border-emerald-900/30 flex items-center gap-4"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.1)" }}
            >
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;