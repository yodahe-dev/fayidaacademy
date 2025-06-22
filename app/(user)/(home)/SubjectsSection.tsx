'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  BookOpenText,
  Calculator,
  Globe,
  Landmark,
  Atom,
  FlaskConical,
  Leaf,
  Languages,
  Monitor,
  BarChart,
  Book,
  Users,
  BrainCircuit,
  ArrowRight,
  ArrowLeft,
  Plus,
  Minus
} from 'lucide-react';

export default function JuniorGradesSection() {
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const sliderRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(8);
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring" as "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const subjects = [
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Algebra, geometry, and practical applications",
      color: "from-amber-500 to-orange-400",
      category: "core"
    },
    {
      icon: Languages,
      title: "English",
      description: "Grammar, literature, and communication skills",
      color: "from-blue-500 to-cyan-400",
      category: "core"
    },
    {
      icon: Book,
      title: "Amharic",
      description: "ቋንቋ፣ ሥነ ፅሁፍ እና የግንባታ ችሎታዎች",
      color: "from-emerald-500 to-teal-400",
      category: "core"
    },
    {
      icon: Atom,
      title: "Physics",
      description: "Fundamental laws of motion, energy, and matter",
      color: "from-indigo-500 to-purple-400",
      category: "science"
    },
    {
      icon: FlaskConical,
      title: "Chemistry",
      description: "Elements, compounds, and chemical reactions",
      color: "from-violet-500 to-fuchsia-400",
      category: "science"
    },
    {
      icon: Leaf,
      title: "Biology",
      description: "Living organisms, cells, and ecosystems",
      color: "from-green-500 to-lime-400",
      category: "science"
    },
    {
      icon: Globe,
      title: "Geography",
      description: "Earth's landscapes and Ethiopian environments",
      color: "from-rose-500 to-pink-400",
      category: "social"
    },
    {
      icon: Landmark,
      title: "History",
      description: "Ethiopian heritage and world civilizations",
      color: "from-amber-600 to-yellow-500",
      category: "social"
    },
    {
      icon: Users,
      title: "Civics",
      description: "Government, citizenship, and social responsibility",
      color: "from-red-500 to-orange-400",
      category: "social"
    },
    {
      icon: Monitor,
      title: "ICT",
      description: "Digital literacy and technology fundamentals",
      color: "from-blue-600 to-cyan-500",
      category: "technical"
    },
    {
      icon: BarChart,
      title: "Business & Economics",
      description: "Entrepreneurship, markets, and economic principles",
      color: "from-emerald-600 to-teal-500",
      category: "economics"
    },
    {
      icon: BrainCircuit,
      title: "Critical Thinking",
      description: "Problem-solving and analytical skills",
      color: "from-purple-600 to-indigo-500",
      category: "core"
    },
    {
      icon: BarChart,
      title: "Agricultural Economics",
      description: "Farming economics and rural development",
      color: "from-green-600 to-emerald-500",
      category: "economics"
    },
    {
      icon: Landmark,
      title: "Development Economics",
      description: "Economic growth strategies and policies",
      color: "from-amber-700 to-orange-500",
      category: "economics"
    }
  ];

  // Filter subjects based on active tab
  const filteredSubjects = activeTab === 'all' 
    ? subjects 
    : subjects.filter(subject => subject.category === activeTab);

  // Auto slide functionality
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (autoSlide && !showAll) {
      interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % Math.ceil(filteredSubjects.length / 4));
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoSlide, filteredSubjects.length, showAll]);

  // Get current slide subjects
  const slideSubjects = filteredSubjects.slice(currentSlide * 4, (currentSlide * 4) + 4);

  // View more toggle
  const toggleView = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setAutoSlide(false);
    }
  };

  // Handle slider navigation
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % Math.ceil(filteredSubjects.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + Math.ceil(filteredSubjects.length / 4)) % Math.ceil(filteredSubjects.length / 4));
  };

  // Economic stats data
  const economicStats = [
    { value: "87%", label: "Economic Literacy" },
    { value: "92%", label: "Business Skills" },
    { value: "78%", label: "Financial Planning" },
    { value: "85%", label: "Market Analysis" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-amber-50/30 to-white dark:from-amber-900/10 dark:to-gray-900 overflow-hidden">
      {/* Animated floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-10 h-10 bg-amber-400 rounded-full opacity-10"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-20 w-6 h-6 bg-emerald-500 rounded-full opacity-10"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-4">
            <BookOpenText className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
            <span className="text-amber-700 dark:text-amber-300 font-medium">
              Grades 9 & 10 Foundation
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Build Your <span className="text-amber-600">Academic Foundation</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive learning across all subjects with special focus on economic principles
          </p>
        </motion.div>

        {/* Economic Focus Section */}
        <motion.div 
          className="bg-gradient-to-r from-amber-500/10 to-emerald-500/10 dark:from-amber-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-amber-200 dark:border-amber-900/30 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-amber-600">Economic Empowerment</span> Curriculum
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our specialized economics program prepares students for real-world financial challenges 
                with practical skills in:
              </p>
              <ul className="grid grid-cols-2 gap-4 mb-6">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-amber-500 rounded-full mr-3"></div>
                  <span>Personal Finance</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-amber-500 rounded-full mr-3"></div>
                  <span>Entrepreneurship</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-amber-500 rounded-full mr-3"></div>
                  <span>Market Analysis</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-amber-500 rounded-full mr-3"></div>
                  <span>Economic Policy</span>
                </li>
              </ul>
              <Button className="bg-amber-600 hover:bg-amber-700">
                Explore Economics Program
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {economicStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-amber-600">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Subject Tabs */}
        <div className="flex justify-center mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-2xl">
            <TabsList className="grid grid-cols-5 h-auto p-1 bg-amber-100 dark:bg-gray-800">
              <TabsTrigger value="all" className="py-2 text-xs sm:text-sm">All</TabsTrigger>
              <TabsTrigger value="core" className="py-2 text-xs sm:text-sm">Core</TabsTrigger>
              <TabsTrigger value="science" className="py-2 text-xs sm:text-sm">Science</TabsTrigger>
              <TabsTrigger value="social" className="py-2 text-xs sm:text-sm">Social</TabsTrigger>
              <TabsTrigger value="economics" className="py-2 text-xs sm:text-sm">Economics</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Interactive subject explorer */}
        <div className="mb-12">
          {/* Desktop View - Grid with View More */}
          <div className="hidden lg:block">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            >
              {filteredSubjects.slice(0, showAll ? filteredSubjects.length : visibleCount).map((subject, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="h-full bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1">
                    <div className="relative p-6">
                      <div className={`absolute top-0 left-0 w-full h-1 ${subject.color}`}></div>
                      <div className={`mb-4 p-3 rounded-xl bg-gradient-to-r ${subject.color} w-12 h-12 flex items-center justify-center`}>
                        <subject.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2">{subject.title}</CardTitle>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {subject.description}
                      </p>
                    </div>
                    
                    <CardContent className="pt-0">
                      <Button 
                        variant="ghost"
                        className="text-amber-600 dark:text-amber-400 px-0 group-hover:underline mt-2"
                      >
                        Explore Content
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredSubjects.length > visibleCount && (
              <div className="text-center mt-6">
                <Button 
                  onClick={() => setVisibleCount(showAll ? 8 : filteredSubjects.length)}
                  variant="outline"
                  className="flex items-center mx-auto border-amber-600 text-amber-600 hover:bg-amber-50"
                >
                  {showAll ? (
                    <>
                      <Minus className="h-4 w-4 mr-2" /> Show Less
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2" /> View More Subjects
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>

          {/* Mobile View - Auto Slider */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="flex justify-between items-center mb-4">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={prevSlide}
                  className="text-amber-600"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <div className="text-center">
                  <span className="text-amber-600 font-medium">{currentSlide + 1}</span>
                  <span className="text-gray-400">/{Math.ceil(filteredSubjects.length / 4)}</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={nextSlide}
                  className="text-amber-600"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>

              <motion.div
                ref={sliderRef}
                variants={container}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 gap-4"
              >
                {slideSubjects.map((subject, index) => (
                  <motion.div key={index} variants={item} className="col-span-1">
                    <Card className="h-full bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-lg">
                      <div className="relative p-4">
                        <div className={`absolute top-0 left-0 w-full h-1 ${subject.color}`}></div>
                        <div className={`mb-3 p-2 rounded-xl bg-gradient-to-r ${subject.color} w-10 h-10 flex items-center justify-center`}>
                          <subject.icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg mb-1">{subject.title}</CardTitle>
                        <p className="text-gray-600 dark:text-gray-300 text-xs">
                          {subject.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex justify-center mt-4">
                <Button 
                  onClick={() => setAutoSlide(!autoSlide)}
                  variant={autoSlide ? "default" : "outline"}
                  size="sm"
                  className="flex items-center"
                >
                  {autoSlide ? "Pause Auto-View" : "Start Auto-View"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Grade comparison */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-500/10 to-emerald-500/10 dark:from-amber-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-amber-200 dark:border-amber-900/30"
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            Your <span className="text-amber-600">Learning Journey</span> at Fayida
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 border-amber-500"
            >
              <div className="flex items-start mb-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg mr-4">
                  <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">9-10</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Foundation Phase</h4>
                  <p className="text-amber-600 dark:text-amber-400">Build Core Knowledge</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-amber-500 rounded-full mr-3"></div>
                  <span>All subjects covered equally</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-amber-500 rounded-full mr-3"></div>
                  <span>Develop fundamental learning skills</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-amber-500 rounded-full mr-3"></div>
                  <span>Discover your academic strengths</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-amber-500 rounded-full mr-3"></div>
                  <span>Economic principles introduction</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 border-emerald-500"
            >
              <div className="flex items-start mb-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg mr-4">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">11-12</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Specialization Phase</h4>
                  <p className="text-emerald-600 dark:text-emerald-400">Focus on Your Stream</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Choose Natural or Social Science</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Advanced economic studies</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>University and career preparation</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Ethiopian University Entrance Exam focus</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-10 bg-gradient-to-r from-amber-500 to-emerald-500 text-white rounded-2xl p-8 text-center shadow-lg"
          >
            <h4 className="text-2xl font-bold mb-3">Continuous Learning Path</h4>
            <p className="mb-6 max-w-2xl mx-auto">
              Our curriculum is designed to seamlessly transition you from foundational knowledge to specialized expertise
            </p>
            <Button className="bg-white text-amber-600 hover:bg-amber-50 py-6 text-lg font-bold">
              Explore Full Curriculum Map
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated floating notebook */}
      <motion.div
        className="absolute bottom-10 left-10 hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-24 h-32 bg-amber-100 dark:bg-amber-900/30 rounded-lg rotate-12 shadow-lg border-2 border-amber-200 dark:border-amber-900/20">
          <div className="absolute top-2 left-2 right-2 h-4 bg-gradient-to-r from-amber-400 to-amber-300 dark:from-amber-600 dark:to-amber-500 rounded-sm"></div>
          <div className="absolute top-10 left-3 w-20 h-0.5 bg-amber-300 dark:bg-amber-700"></div>
          <div className="absolute top-14 left-3 w-16 h-0.5 bg-amber-300 dark:bg-amber-700"></div>
          <div className="absolute top-18 left-3 w-12 h-0.5 bg-amber-300 dark:bg-amber-700"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center">
            <BookOpenText className="h-3 w-3 text-white" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}