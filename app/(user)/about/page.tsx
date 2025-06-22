'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, Variants, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Users,
  BarChart,
  Award,
  GraduationCap,
  Globe,
  Lightbulb,
  Rocket,
  Bookmark,
  Star,
  Video,
  BookA,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('mission');
  const [is3DMode, setIs3DMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration: 0.8
      }
    }
  };
  
  // Start animation sequence
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setTimeout(() => setIsPlaying(true), 1000);
    }
  }, [isInView, controls]);

  // Student transformation data
  const transformations = [
    {
      name: "Mikias K.",
      grade: "Grade 10",
      before: "Struggled with math, average 58%",
      after: "Scored 94% in national exams",
      subjects: ["Mathematics", "Physics"],
      color: "from-blue-600 to-indigo-500"
    },
    {
      name: "Selam T.",
      grade: "Grade 11",
      before: "Couldn't grasp chemistry concepts",
      after: "Top of her class in chemistry",
      subjects: ["Chemistry", "Biology"],
      color: "from-purple-600 to-pink-500"
    },
    {
      name: "Hana A.",
      grade: "Grade 12",
      before: "Scored 45% in mock business exam",
      after: "Achieved 96% in university entrance",
      subjects: ["Business", "Economics"],
      color: "from-amber-600 to-yellow-500"
    }
  ];
  
  // Team members
  const team = [
    {
      name: "Dr. Abebe Kebede",
      role: "Founder & Education Director",
      bio: "Former university professor with 15+ years in Ethiopian education reform",
      color: "bg-emerald-500"
    },
    {
      name: "Amina Mohammed",
      role: "Head of Curriculum",
      bio: "Specialist in Ethiopian educational standards and digital learning",
      color: "bg-teal-500"
    },
    {
      name: "Tekalign Mamo",
      role: "Technology Director",
      bio: "EdTech innovator focused on accessible learning solutions",
      color: "bg-amber-500"
    },
    {
      name: "Dr. Sara Tadesse",
      role: "Science Department Lead",
      bio: "PhD in Physics with passion for making science accessible",
      color: "bg-blue-500"
    }
  ];
  
  // Stats data
  const stats = [
    { value: "25K+", label: "Active Students", icon: Users },
    { value: "98%", label: "Satisfaction Rate", icon: Star },
    { value: "500+", label: "Expert Instructors", icon: GraduationCap },
    { value: "2.3x", label: "Average Improvement", icon: BarChart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10">
      {/* Interactive background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-emerald-300 opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
            x: [0, 100, 0],
            y: [0, -100, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-amber-300 opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.8, 1],
            rotate: [0, -360],
            x: [0, -150, 0],
            y: [0, 100, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero section */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6"
          >
            <Rocket className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
            <span className="text-emerald-700 dark:text-emerald-300 font-medium">
              Transforming Education in Ethiopia
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block text-gray-900 dark:text-white">We're Reinventing</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Education for Ethiopia
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Fayida Academy is on a mission to provide world-class digital education to every Ethiopian student, regardless of location or background.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button 
              size="lg"
              className="py-7 px-8 text-lg bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Our Courses
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Interactive journey */}
        <motion.div
          ref={ref}
          className={`mb-24 rounded-3xl p-8 bg-gradient-to-br from-white to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20 shadow-xl ${is3DMode ? 'transform-gpu perspective-1000' : ''}`}
          animate={is3DMode ? { rotateY: 5, rotateX: 2 } : { rotateY: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-4 mb-8 border-b border-emerald-100 dark:border-emerald-900/20 pb-6">
            <Button 
              variant={activeSection === 'mission' ? "default" : "outline"}
              className={`rounded-full px-6 py-5 ${activeSection === 'mission' ? 'bg-emerald-600' : 'bg-white dark:bg-gray-800'}`}
              onClick={() => setActiveSection('mission')}
            >
              <Lightbulb className="h-4 w-4 mr-2" />
              Our Mission
            </Button>
            <Button 
              variant={activeSection === 'impact' ? "default" : "outline"}
              className={`rounded-full px-6 py-5 ${activeSection === 'impact' ? 'bg-emerald-600' : 'bg-white dark:bg-gray-800'}`}
              onClick={() => setActiveSection('impact')}
            >
              <BarChart className="h-4 w-4 mr-2" />
              Our Impact
            </Button>
            <Button 
              variant={activeSection === 'team' ? "default" : "outline"}
              className={`rounded-full px-6 py-5 ${activeSection === 'team' ? 'bg-emerald-600' : 'bg-white dark:bg-gray-800'}`}
              onClick={() => setActiveSection('team')}
            >
              <Users className="h-4 w-4 mr-2" />
              Our Team
            </Button>
            <Button 
              variant={activeSection === 'join' ? "default" : "outline"}
              className={`rounded-full px-6 py-5 ${activeSection === 'join' ? 'bg-emerald-600' : 'bg-white dark:bg-gray-800'}`}
              onClick={() => setActiveSection('join')}
            >
              <GraduationCap className="h-4 w-4 mr-2" />
              Join Us
            </Button>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {activeSection === 'mission' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Bridging the Education Gap in Ethiopia</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      Founded in 2020, Fayida Academy emerged from a simple yet powerful idea: every Ethiopian student deserves access to quality education, regardless of their location or economic background.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                      We combine Ethiopia's rich educational traditions with cutting-edge technology to create learning experiences that are both culturally relevant and globally competitive.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-2xl">
                        <h3 className="font-bold text-lg mb-2 flex items-center">
                          <Globe className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                          Vision
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          To become Ethiopia's leading education platform, empowering 1 million students by 2025.
                        </p>
                      </div>
                      <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-2xl">
                        <h3 className="font-bold text-lg mb-2 flex items-center">
                          <BookA className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                          Values
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Excellence, Accessibility, Innovation, and Ethiopian Educational Heritage.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                  >
                    <div className="absolute -inset-8 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-3xl rotate-3 blur-xl opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-emerald-500 to-teal-400 rounded-3xl overflow-hidden shadow-2xl">
                      <div className="aspect-video flex items-center justify-center p-12">
                        <div className="text-center text-white">
                          <BrainCircuit className="h-16 w-16 mx-auto mb-6" />
                          <h3 className="text-3xl font-bold mb-4">Ethiopian Knowledge, Global Standards</h3>
                          <p className="text-emerald-100 max-w-md mx-auto">
                            Our curriculum combines Ethiopia's educational heritage with international best practices
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
              
              {activeSection === 'impact' && (
                <div>
                  <h2 className="text-3xl font-bold mb-10 text-center">Transforming Lives Through Education</h2>
                  
                  {/* Student transformations */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {transformations.map((student, index) => (
                      <motion.div
                        key={index}
                        variants={item}
                        initial="hidden"
                        animate={controls}
                        className={`${is3DMode ? 'transform-gpu hover:rotate-y-6' : ''}`}
                      >
                        <Card className="h-full bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                          <div className={`h-40 bg-gradient-to-r ${student.color} relative`}>
                            <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 text-white">
                              {student.grade}
                            </div>
                            <div className="absolute bottom-4 left-4 text-white">
                              <h3 className="text-xl font-bold">{student.name}</h3>
                              <p>{student.subjects.join(' & ')}</p>
                            </div>
                          </div>
                          
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-6">
                              <div>
                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Before Fayida</h4>
                                <p className="text-red-500 line-through">{student.before}</p>
                              </div>
                              <ArrowRight className="h-6 w-6 text-emerald-500 mx-2 mt-3" />
                              <div>
                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">After Fayida</h4>
                                <p className="text-emerald-600 font-bold">{student.after}</p>
                              </div>
                            </div>
                            
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4">
                              <h4 className="font-semibold mb-2 flex items-center">
                                <Star className="h-4 w-4 text-amber-400 fill-amber-400 mr-2" />
                                Key Improvements
                              </h4>
                              <ul className="space-y-1">
                                <li className="flex items-center">
                                  <div className="h-2 w-2 bg-emerald-500 rounded-full mr-2"></div>
                                  <span>Concept mastery increased by 3.2x</span>
                                </li>
                                <li className="flex items-center">
                                  <div className="h-2 w-2 bg-emerald-500 rounded-full mr-2"></div>
                                  <span>Exam confidence improved by 87%</span>
                                </li>
                                <li className="flex items-center">
                                  <div className="h-2 w-2 bg-emerald-500 rounded-full mr-2"></div>
                                  <span>Study time reduced by 35%</span>
                                </li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-8 text-white shadow-2xl">
                    <h3 className="text-2xl font-bold mb-8 text-center">Our Impact in Numbers</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          className="text-center p-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                            <stat.icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="text-3xl font-bold mb-2">{stat.value}</div>
                          <div className="text-emerald-100">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'team' && (
                <div>
                  <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Revolutionary Educators</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {team.map((member, index) => (
                      <motion.div
                        key={index}
                        variants={item}
                        initial="hidden"
                        animate={controls}
                        whileHover={{ y: -10 }}
                      >
                        <Card className="h-full bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                          <div className={`h-32 ${member.color} relative`}>
                            <div className="absolute bottom-4 left-4">
                              <h3 className="text-xl font-bold text-white">{member.name}</h3>
                              <p className="text-emerald-100">{member.role}</p>
                            </div>
                          </div>
                          
                          <CardContent className="p-6">
                            <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>
                            <div className="flex space-x-2">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-amber-900/10 dark:to-emerald-900/10 rounded-3xl p-8 border border-amber-200 dark:border-amber-900/20">
                    <h3 className="text-2xl font-bold mb-6 text-center">Ethiopian Education Experts</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
                      Our team combines decades of experience in Ethiopian education with fresh perspectives from global EdTech innovators. We're united by a passion for making quality education accessible to all Ethiopian students.
                    </p>
                    <div className="flex justify-center">
                      <Button className="bg-gradient-to-r from-amber-500 to-emerald-500 text-white py-6 px-8 text-lg">
                        <Bookmark className="mr-2 h-5 w-5" />
                        Join Our Team
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeSection === 'join' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Begin Your Transformation Journey</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                      Join thousands of Ethiopian students who have transformed their academic performance and future prospects with Fayida Academy. Our proven system delivers results regardless of your starting point.
                    </p>
                    
                    <div className="space-y-6 mb-10">
                      <div className="flex items-start">
                        <div className="bg-emerald-100 dark:bg-emerald-900/20 p-3 rounded-lg mr-4">
                          <GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Personalized Learning Path</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            AI-powered system adapts to your strengths and weaknesses
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-amber-100 dark:bg-amber-900/20 p-3 rounded-lg mr-4">
                          <Video className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Expert Ethiopian Teachers</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Learn from educators who understand Ethiopian curriculum challenges
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg mr-4">
                          <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Proven Results</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            94% of students improve by at least one grade within 3 months
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full py-8 text-lg bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Enroll Now - Transform Your Future
                    </Button>
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 1, -1, 0]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-8 -left-8 z-10 w-24 h-32 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-2xl shadow-lg p-4 text-center rotate-12"
                    >
                      <div className="text-4xl font-bold text-white">94%</div>
                      <div className="text-xs text-white mt-2">Improvement Rate</div>
                    </motion.div>
                    
                    <motion.div
                      animate={{ 
                        y: [0, -25, 0],
                        rotate: [0, -2, 2, 0]
                      }}
                      transition={{ 
                        duration: 7, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      className="absolute -bottom-10 -right-6 z-10 w-28 h-28 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-2xl shadow-lg p-4 text-center flex flex-col justify-center"
                    >
                      <div className="text-2xl font-bold text-white">3.2x</div>
                      <div className="text-xs text-white mt-1">Faster Learning</div>
                    </motion.div>
                    
                    <div className="relative bg-gradient-to-br from-blue-500 to-indigo-400 rounded-3xl overflow-hidden shadow-2xl">
                      <div className="aspect-video flex items-center justify-center p-12">
                        <div className="text-center text-white">
                          <Rocket className="h-16 w-16 mx-auto mb-6" />
                          <h3 className="text-3xl font-bold mb-4">Your Academic Transformation Starts Now</h3>
                          <p className="text-blue-100 max-w-md mx-auto">
                            Join Ethiopia's most effective learning platform today
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('/ethiopian-pattern.svg')] bg-repeat"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Academic Future?
            </h2>
            <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of Ethiopian students who have achieved remarkable results with Fayida Academy
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-emerald-50 py-7 px-10 text-lg font-bold shadow-lg"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore All Courses
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-7 px-10 text-lg"
              >
                <Video className="mr-2 h-5 w-5" />
                Watch Success Stories
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}