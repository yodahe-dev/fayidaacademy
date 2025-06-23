'use client'

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Play, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const content = {
  en: {
    trustBadge: "25,000+ Students Learning Daily",
    headline1: "Master High School Subjects",
    headline2: "Like Never Before",
    description: "Ethiopia's favorite e-learning platform for high school students. Engaging lessons, expert teachers, and fun learning experiences designed just for you.",
    startLearning: "Start Learning Free",
    howItWorks: "See How It Works",
    stats: [
      { value: "98%", label: "Success Rate" },
      { value: "500+", label: "Video Lessons" },
      { value: "24/7", label: "Support" },
      { value: "10k+", label: "5-Star Reviews" }
    ],
    feature1: { title: "Certified Courses", subtitle: "Nationally recognized" },
    feature2: { title: "Study Resources", subtitle: "Download anytime" }
  },
  am: {
    trustBadge: "25,000+ ተማሪዎች በየቀኑ ይማራሉ",
    headline1: "የሁለተኛ ደረጃ ትምህርት",
    headline2: "ከመጀመሪያ የታወቀ ሁኔታ ይልቅ",
    description: "ለሁለተኛ ደረጃ ተማሪዎች የኢትዮጵያ ተወዳጅ የኢ-ስልጠና መድረክ። የሚሳቡ ትምህርቶች፣ ባለሙያ መምህራን እና አስደሳች የትምህርት ተሞክሮዎች የተገለጸው ለእርስዎ ብቻ ነው።",
    startLearning: "ነፃ ትምህርት ይጀምሩ",
    howItWorks: "እንዴት እንደሚሰራ ይመልከቱ",
    stats: [
      { value: "98%", label: "የስኬት መጠን" },
      { value: "500+", label: "የቪዲዮ ትምህርቶች" },
      { value: "24/7", label: "ድጋፍ" },
      { value: "10k+", label: "5-ኮከብ ግምገማዎች" }
    ],
    feature1: { title: "የተመሰከረላቸው ኮርሶች", subtitle: "በብሔራዊ ደረጃ የታወቁ" },
    feature2: { title: "የትምህርት ሀብቶች", subtitle: "በማንኛውም ጊዜ ያውርዱ" }
  }
};

const images = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
    alt: "Students studying together",
    en: { 
      title: "Collaborative Learning",
      description: "Study groups that help you understand complex topics"
    },
    am: { 
      title: "የጋራ ትምህርት",
      description: "ውስብስብ ርዕሶችን እንዲተረጉሙ የሚረዱዎት የትምህርት ቡድኖች"
    }
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
    alt: "Teacher explaining a concept",
    en: { 
      title: "Expert Teachers",
      description: "Learn from experienced educators passionate about your success"
    },
    am: { 
      title: "ባለሙያ መምህራን",
      description: "ከልምድ ያላቸው አስተማሪዎች ስለ ውጤታችሁ በመጨነቅ ያስተምራሉ"
    }
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
    alt: "Student using digital learning tools",
    en: { 
      title: "Interactive Lessons",
      description: "Engaging content that makes learning enjoyable"
    },
    am: { 
      title: "ማስተዋወቂያ ትምህርቶች",
      description: "ትምህርትን አስደሳች የሚያደርግ ይዘት"
    }
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
    alt: "Students celebrating graduation",
    en: { 
      title: "Academic Success",
      description: "Proven results with 98% student satisfaction"
    },
    am: { 
      title: "የትምህርት ስኬት",
      description: "98% የተማሪዎች እርካብ ያሳያል"
    }
  },
];

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
  const router = useRouter();
  const deviceSize = useDeviceSize();
  const controls = useAnimation();
  const [gradientPos, setGradientPos] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [language, setLanguage] = useState('en');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check localStorage for language preference and listen for changes
  useEffect(() => {
    const handleLanguageChange = () => {
      const storedLang = localStorage.getItem('fayida-language');
      if (storedLang === 'am' || storedLang === 'en') {
        setLanguage(storedLang);
      }
    };
    
    // Initial check
    handleLanguageChange();
    
    // Listen for storage events (changes from other tabs)
    window.addEventListener('storage', handleLanguageChange);
    
    // Listen for custom events (changes from same tab)
    window.addEventListener('languageChange', handleLanguageChange);
    
    return () => {
      window.removeEventListener('storage', handleLanguageChange);
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  // Auto-slide functionality
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
  }, [isHovered]);

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle routing
  const handleStartLearning = () => {
    router.push('/subject');
  };

  const handleHowItWorks = () => {
    router.push('/about');
  };

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

  const currentContent = content[language as keyof typeof content];

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
                {currentContent.trustBadge}
              </span>
            </motion.div>
            
            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className={`font-bold ${getHeadingSize()} leading-tight text-gray-900 dark:text-white`}>
                {currentContent.headline1}
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
                  {currentContent.headline2}
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                {currentContent.description}
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
                  onClick={handleStartLearning}
                >
                  <BookOpen className="mr-3 h-6 w-6" />
                  {currentContent.startLearning}
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-900/30 text-lg py-6 px-8"
                  onClick={handleHowItWorks}
                >
                  <Play className="mr-3 h-6 w-6" />
                  {currentContent.howItWorks}
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Column - Image Slider */}
          <motion.div 
            className="flex-1 w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div 
              className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Background image */}
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Overlay with text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold">
                  {images[currentIndex][language as keyof (typeof images[0])].title}
                </h3>
                <p className="text-sm mt-2">
                  {images[currentIndex][language as keyof (typeof images[0])].description}
                </p>
              </div>
              
              {/* Navigation arrows */}
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-all"
                onClick={goToPrev}
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-all"
                onClick={goToNext}
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
              
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button 
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating stats at bottom */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {currentContent.stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 border border-emerald-100 dark:border-emerald-900/30 flex items-center gap-4"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.1)" }}
            >
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl">
                {index === 0 ? <Award className="h-6 w-6 text-white" /> : 
                 index === 1 ? <Play className="h-6 w-6 text-white" /> : 
                 index === 2 ? <Users className="h-6 w-6 text-white" /> : 
                 <Star className="h-6 w-6 text-white" />}
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