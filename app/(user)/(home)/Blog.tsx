'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, User, ChevronLeft, ChevronRight, Bookmark, GraduationCap, BrainCircuit, Lightbulb, Trophy, School } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const blogPosts = [
    {
      id: 1,
      title: "Crush Your Exams: 10 Study Hacks That Actually Work!",
      excerpt: "Secret techniques top students use to ace tests without all-nighters...",
      author: "Alex Johnson",
      date: "Sep 15, 2023",
      readTime: "5 min read",
      category: "Study Tips",
      icon: <Bookmark className="h-6 w-6" />,
      color: "bg-pink-500",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Science Fair Secrets: Win 1st Place Like a Pro",
      excerpt: "How to create award-winning projects that impress judges...",
      author: "Dr. Maya Rodriguez",
      date: "Sep 22, 2023",
      readTime: "8 min read",
      category: "Science",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Math Anxiety? Turn Numbers Into Your Superpower",
      excerpt: "Transform from math-phobic to math-master in 30 days...",
      author: "Professor James Chen",
      date: "Sep 29, 2023",
      readTime: "7 min read",
      category: "Math",
      icon: <BrainCircuit className="h-6 w-6" />,
      color: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Epic Note-Taking: Doodles That Boost Your Grades",
      excerpt: "Creative techniques to make your notes unforgettable...",
      author: "Skyler Williams",
      date: "Oct 5, 2023",
      readTime: "6 min read",
      category: "Learning",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-yellow-500",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Sports + Studies: Balance Like a Champion Athlete",
      excerpt: "How Olympians manage training and straight A's...",
      author: "Coach Marcus Lee",
      date: "Oct 12, 2023",
      readTime: "9 min read",
      category: "Balance",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-green-500",
      image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Future-Proof Your Career: Top 10 High School Skills",
      excerpt: "What employers wish every graduate knew...",
      author: "Career Counselor Emma Davis",
      date: "Oct 19, 2023",
      readTime: "10 min read",
      category: "Career",
      icon: <School className="h-6 w-6" />,
      color: "bg-red-500",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Auto-advance the carousel
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setDirection(0);
        setCurrentIndex(prev => (prev + 1) % blogPosts.length);
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [blogPosts.length, isHovered]);

  const goToNext = () => {
    setDirection(0);
    setCurrentIndex(prev => (prev + 1) % blogPosts.length);
  };

  const goToPrev = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 0 : 1);
    setCurrentIndex(index);
  };

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotate: direction === 0 ? 15 : -15
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0
    },
    exit: (direction: number) => ({
      x: direction === 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      rotate: direction === 0 ? -15 : 15
    })
  };

  // Spring physics for smoother animations
  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    duration: 0.5
  };

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-indigo-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4">

        
        {/* Mini Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                rotate: index % 2 === 0 ? 2 : -2,
                boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.2)"
              }}
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg bg-gradient-to-br from-white to-sky-50 dark:from-gray-800 dark:to-gray-900">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 ${post.color} text-white p-2 rounded-full`}>
                    {post.icon}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${post.color} text-white`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</span>
                  <Button variant="ghost" className="text-indigo-600 dark:text-indigo-400">
                    Read <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;