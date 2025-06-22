'use client'

import { motion, Variants } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  PlayCircle,
  BookOpen,
  Users,
  BarChart,
  Smartphone,
  Award,
  Bookmark,
  GraduationCap,
  Monitor,
  BrainCircuit
} from 'lucide-react';
export default function LearningExperience() {
  // Animation variants
 

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

  const features = [
    {
      icon: PlayCircle,
      title: "Interactive Video Lessons",
      description: "Engaging content with Ethiopian teachers explaining complex topics simply",
      color: "from-emerald-500 to-teal-400"
    },
    {
      icon: BookOpen,
      title: "Digital Textbooks",
      description: "Curriculum-aligned materials with Amharic/English explanations",
      color: "from-amber-500 to-orange-400"
    },
    {
      icon: Users,
      title: "Live Tutor Support",
      description: "24/7 access to subject experts for personalized help",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: BarChart,
      title: "Smart Progress Tracking",
      description: "AI-powered analytics to identify strengths and weaknesses",
      color: "from-purple-500 to-fuchsia-400"
    }
  ];

  const testimonials = [
    {
      name: "Selam T.",
      grade: "Grade 11 Natural Science",
      text: "The physics animations made relativity actually make sense! First time I've enjoyed physics.",
      color: "bg-emerald-100 dark:bg-emerald-900/30"
    },
    {
      name: "Mikias K.",
      grade: "Grade 10 Student",
      text: "Amharic literature section helped me score 98% on my national exam. አመሰግናለሁ ፋይዳ!",
      color: "bg-amber-100 dark:bg-amber-900/30"
    },
    {
      name: "Hana A.",
      grade: "Grade 12 Social Science",
      text: "The business studies modules prepared me for university better than my actual school.",
      color: "bg-blue-100 dark:bg-blue-900/30"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Ethiopian pattern decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-[0.02]">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[url('/ethiopian-pattern.svg')] bg-cover"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[url('/ethiopian-pattern.svg')] bg-cover rotate-45"></div>
      </div>
      
      {/* Animated elements */}
      <motion.div 
        className="absolute top-1/4 left-5 w-8 h-8 bg-emerald-500 rounded-full opacity-10"
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
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
            <BrainCircuit className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
            <span className="text-emerald-700 dark:text-emerald-300 font-medium">
              Revolutionary Learning
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="text-emerald-600">Fayida Experience</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Designed for Ethiopian students by Ethiopian educators - technology that understands your learning needs
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="p-6">
                  <div className={`mb-5 p-4 rounded-xl bg-gradient-to-r ${feature.color} w-14 h-14 flex items-center justify-center`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  
                  <Button 
                    variant="ghost"
                    className="text-emerald-600 dark:text-emerald-400 px-0 group-hover:underline"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </div>
                
                {/* Animated border effect */}
                <div className="relative h-1 overflow-hidden">
                  <motion.div 
                    className={`absolute top-0 left-0 h-full w-full bg-gradient-to-r ${feature.color}`}
                    initial={{ x: "-100%" }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Device showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Phone */}
              <motion.div 
                className="absolute -bottom-10 -left-10 z-10"
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-gray-800 rounded-3xl p-3 w-48 h-96 shadow-2xl border-8 border-black">
                  <div className="h-full bg-gradient-to-b from-emerald-500 to-teal-400 rounded-xl flex flex-col items-center justify-center p-4 text-white">
                    <BookOpen className="h-10 w-10 mb-3" />
                    <h3 className="font-bold text-center">Grade 11 Physics</h3>
                    <p className="text-xs text-center mt-2">Motion & Forces</p>
                    <div className="mt-4 w-12 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Laptop */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
              >
                <div className="bg-gray-800 rounded-2xl p-4 w-full shadow-2xl border-8 border-gray-900">
                  <div className="aspect-video bg-gradient-to-tr from-amber-500 to-amber-300 dark:from-amber-700 dark:to-amber-500 rounded-lg flex items-center justify-center">
                    <div className="text-center p-6">
                      <GraduationCap className="h-12 w-12 text-white mx-auto mb-3" />
                      <h3 className="font-bold text-white text-xl">Grade 10 History</h3>
                      <p className="text-amber-100">Ethiopian Empire</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Tablet */}
              <motion.div 
                className="absolute -top-10 -right-10 z-10"
                animate={{ y: [0, -20, 0] }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
              >
                <div className="bg-gray-800 rounded-2xl p-3 w-64 h-64 shadow-2xl border-8 border-gray-900">
                  <div className="h-full bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex flex-col items-center justify-center p-4 text-white">
                    <Monitor className="h-10 w-10 mb-3" />
                    <h3 className="font-bold text-center">ICT Lab</h3>
                    <p className="text-xs text-center mt-2">Programming Basics</p>
                    <div className="mt-4 w-16 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="h-2 w-8 bg-emerald-500 rounded-full mr-2"></div>
                <div className="h-2 w-2 bg-amber-400 rounded-full mr-2"></div>
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                <h3 className="text-2xl font-bold ml-4">Trusted by Students Across Ethiopia</h3>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                From Addis Ababa to rural regions, Fayida is transforming how Ethiopian students learn
              </p>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-white dark:border-gray-800"></div>
                  <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-white dark:border-gray-800"></div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white dark:border-gray-800"></div>
                </div>
                <div className="font-bold">
                  <div className="text-lg">25,000+</div>
                  <div className="text-emerald-600">Active Learners</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`${testimonial.color} p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/20`}
                >
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                    <p className="ml-3 italic">"{testimonial.text}"</p>
                  </div>
                  <div className="mt-4 font-semibold">
                    <div>{testimonial.name}</div>
                    <div className="text-emerald-600 dark:text-emerald-400 text-sm">{testimonial.grade}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('/ethiopian-pattern.svg')] bg-repeat"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Learning?
            </h3>
            <p className="text-emerald-100 mb-8 text-lg">
              Join thousands of Ethiopian students excelling with Fayida Academy
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-emerald-50 py-6 text-lg font-bold shadow-lg"
              >
                <Bookmark className="mr-2 h-5 w-5" />
                Enroll Now
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10 py-6 text-lg"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}