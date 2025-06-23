'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Play, Award, Star, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Sample educational images (replace with your actual images)
  const images = [
    { 
      id: 1, 
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
      alt: "Students studying together",
      title: "Collaborative Learning",
      description: "Study groups that help you understand complex topics"
    },
    { 
      id: 2, 
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
      alt: "Teacher explaining a concept",
      title: "Expert Teachers",
      description: "Learn from experienced educators passionate about your success"
    },
    { 
      id: 3, 
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
      alt: "Student using digital learning tools",
      title: "Interactive Lessons",
      description: "Engaging content that makes learning enjoyable"
    },
    { 
      id: 4, 
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
      alt: "Students celebrating graduation",
      title: "Academic Success",
      description: "Proven results with 98% student satisfaction"
    },
  ];

  // Auto-advance the carousel
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, isHovered]);

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-white dark:from-emerald-900/10 dark:via-teal-900/10 dark:to-gray-900">
      {/* Background elements */}
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
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white">
                Master High School Subjects
                <br />
                <span className="font-extrabold block mt-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-[length:200%_auto] bg-clip-text text-transparent">
                  Like Never Before
                </span>
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
            
            {/* Stats */}
            <motion.div 
              className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4"
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
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-emerald-100 dark:border-emerald-900/30 flex items-center gap-3"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg">
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Right Column - Image Carousel */}
          <motion.div 
            className="flex-1 w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div 
              className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={images[currentIndex].src} 
                    alt={images[currentIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">{images[currentIndex].title}</h3>
                    <p className="text-emerald-200 mt-1">{images[currentIndex].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation arrows */}
              {isHovered && (
                <>
                  <button 
                    onClick={goToPrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full p-2 transition-all"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                  <button 
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full p-2 transition-all"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>
                </>
              )}
              
              {/* Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-emerald-500 w-8' 
                        : 'bg-white/40 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Feature cards below carousel */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 border border-emerald-100 dark:border-emerald-900/30 flex items-center gap-4"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Certified Courses</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Nationally recognized</p>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg p-5 flex items-center gap-4"
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/20 p-3 rounded-xl">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Study Resources</h3>
                  <p className="text-sm text-emerald-100">Download anytime</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;