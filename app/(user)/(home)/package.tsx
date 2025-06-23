'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Rocket,
  Star,
  BookOpen,
  Video,
  Users,
  Award,
  Bookmark,
  BarChart,
  Zap,
  BadgeCheck,
  Gift,
  ShieldCheck,
  BookText,
  BrainCircuit
} from 'lucide-react';

export default function PackagesPage() {
  type Package = {
    id: string;
    name: string;
    price: string;
    duration: string;
    bestFor: string;
    features: string[];
    color: string;
    popular: boolean;
    icon: React.ComponentType<{ className?: string }>;
  };
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [activeTab, setActiveTab] = useState('all');
  const [isExploding, setIsExploding] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
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
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const floating = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0]
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Package data
  const packages = [
    {
      id: 'starter',
      name: "Starter Pack",
      price: "99 ETB",
      duration: "month",
      bestFor: "Casual Learners",
      features: [
        "Access to 5 core subjects",
        "20+ video lessons",
        "Basic practice quizzes",
        "Email support",
        "Study progress tracking"
      ],
      color: "from-blue-500 to-indigo-500",
      popular: false,
      icon: BookOpen
    },
    {
      id: 'pro',
      name: "Pro Learner",
      price: "249 ETB",
      duration: "month",
      bestFor: "Serious Students",
      features: [
        "All subjects unlimited",
        "100+ premium video lessons",
        "Interactive practice exams",
        "Priority email support",
        "Advanced analytics",
        "Monthly progress reports",
        "Digital textbooks"
      ],
      color: "from-emerald-500 to-teal-500",
      popular: true,
      icon: Rocket
    },
    {
      id: 'elite',
      name: "Elite Scholar",
      price: "499 ETB",
      duration: "month",
      bestFor: "Top Performers",
      features: [
        "All Pro features PLUS",
        "1-on-1 tutor sessions (2/month)",
        "Exam crash courses",
        "24/7 priority support",
        "Personalized study plans",
        "University prep resources",
        "Achievement badges",
        "Early access to new content"
      ],
      color: "from-purple-500 to-pink-500",
      popular: false,
      icon: Star
    }
  ];

  // Features comparison
  const features = [
    {
      name: "Core Subjects Access",
      starter: "5 subjects",
      pro: "All subjects",
      elite: "All subjects"
    },
    {
      name: "Video Lessons",
      starter: "20+",
      pro: "100+",
      elite: "Unlimited"
    },
    {
      name: "Practice Exams",
      starter: "Basic",
      pro: "Advanced",
      elite: "Premium"
    },
    {
      name: "Personal Tutor Access",
      starter: "✕",
      pro: "✕",
      elite: "2 sessions/month"
    },
    {
      name: "Study Analytics",
      starter: "Basic",
      pro: "Advanced",
      elite: "Premium"
    },
    {
      name: "Digital Textbooks",
      starter: "✕",
      pro: "✓",
      elite: "✓"
    },
    {
      name: "Priority Support",
      starter: "✕",
      pro: "Email",
      elite: "24/7 Chat"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Selam A.",
      package: "Pro Learner",
      text: "My physics grade went from 65% to 92% in just 3 months! The interactive exams were game-changers.",
      improvement: "42% increase"
    },
    {
      name: "Mikias K.",
      package: "Elite Scholar",
      text: "The 1-on-1 tutor sessions helped me understand calculus in ways my school teacher never could.",
      improvement: "Scored 98% in math"
    },
    {
      name: "Hana T.",
      package: "Starter Pack",
      text: "For the price, this is incredible value. I improved my chemistry grade by 2 letter grades!",
      improvement: "C to A"
    }
  ];

  // Trigger confetti effect
  const triggerConfetti = () => {
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-300 opacity-10 blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-amber-300 opacity-10 blur-3xl"
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

      {/* Confetti explosion */}
      <AnimatePresence>
        {isExploding && (
          <div className="fixed inset-0 z-50 pointer-events-none">
            {[...Array(150)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#10b981', '#f59e0b', '#ef4444', '#3b82f6'][Math.floor(Math.random() * 4)],
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ 
                  opacity: 1,
                  scale: 0,
                }}
                animate={{ 
                  opacity: [1, 1, 0],
                  scale: [0, 1, 2],
                  y: [0, -(Math.random() * 200) - 100],
                  x: [(Math.random() - 0.5) * 100]
                }}
                transition={{ 
                  duration: 2.5,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero section */}
        <motion.div 
          className="text-center mb-16"
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
              Academic Transformation Packages
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block text-gray-900 dark:text-white">Supercharge Your</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              High School Success
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Choose the perfect learning package designed for Ethiopian students - transform your grades and unlock your potential!
          </motion.p>
        </motion.div>

        {/* Packages grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {packages.map((pkg, index) => (
            <motion.div 
              key={pkg.id}
              variants={item}
              whileHover={{ 
                y: -20,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              {pkg.popular && (
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full shadow-lg z-10"
                >
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 fill-white" />
                    <span className="font-bold">MOST POPULAR</span>
                  </div>
                </motion.div>
              )}
              
              <div className={`h-full bg-white dark:bg-gray-800 border-0 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${pkg.popular ? 'border-2 border-amber-400' : ''}`}>
                <div className={`h-32 bg-gradient-to-r ${pkg.color} relative`}>
                  <div className="absolute top-6 left-6">
                    <pkg.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-2xl font-bold">{pkg.name}</h2>
                    <p>Perfect for {pkg.bestFor}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-end mb-6">
                    <div className="text-4xl font-bold">{pkg.price}</div>
                    <div className="text-gray-500 ml-2">/{pkg.duration}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-center"
                      >
                        <BadgeCheck className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <Button 
                    size="lg"
                    className={`w-full py-6 text-lg font-bold ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600' 
                        : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'
                    }`}
                    onClick={() => {
                      setSelectedPackage(pkg);
                      triggerConfetti();
                    }}
                  >
                    {pkg.popular ? (
                      <div className="flex items-center justify-center">
                        <Zap className="h-5 w-5 mr-2 fill-white" />
                        <span>GET THIS DEAL!</span>
                      </div>
                    ) : (
                      "SELECT PLAN"
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>



        {/* Student results */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-16 text-center">
            Real <span className="text-emerald-600">Student Transformations</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-3xl p-6 border border-emerald-100 dark:border-emerald-900/20"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/20 p-3 rounded-xl mr-4">
                    <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-emerald-600 dark:text-emerald-400">{testimonial.package} Package</p>
                  </div>
                </div>
                
                <p className="mb-6 italic">"{testimonial.text}"</p>
                
                <div className="bg-gradient-to-r from-emerald-500 to-teal-400 rounded-xl p-4 text-white">
                  <div className="text-xl font-bold">{testimonial.improvement}</div>
                  <div>Grade Improvement</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('/ethiopian-pattern.svg')] bg-repeat"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Grades?
            </h2>
            <p className="text-emerald-100 text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of Ethiopian students achieving academic excellence with Fayida
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-emerald-50 py-7 px-10 text-lg font-bold shadow-lg"
                onClick={triggerConfetti}
              >
                <Rocket className="mr-2 h-5 w-5" />
                Get Premium Access
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-7 px-10 text-lg"
              >
                <BookText className="mr-2 h-5 w-5" />
                View Free Resources
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}