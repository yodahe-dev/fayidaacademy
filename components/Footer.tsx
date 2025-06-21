'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, MapPin, Phone, BookOpen, GraduationCap, 
  Globe, Sun, Moon, Send, Facebook, Youtube, 
  MessageSquare, Instagram, Linkedin, ChevronDown, ChevronUp, Home, Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Initialize theme from localStorage
  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('fayida-theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('fayida-theme', newMode ? 'dark' : 'light');
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Toggle mobile section
  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Handle newsletter submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setEmail('');
      setError('');
    }, 500);
  };

  // Social media links with animation variants
  const socialLinks = [
    { 
      icon: Facebook, 
      name: 'Facebook', 
      url: 'https://www.facebook.com/profile.php?id=61557674511552',
      color: '#1877F2',
      animation: { rotate: [0, -5, 5, 0] }
    },
    { 
      icon: Instagram, 
      name: 'Instagram', 
      url: 'https://www.instagram.com/fayidaacademy',
      color: '#E1306C',
      animation: { scale: [1, 1.1, 1] }
    },
    { 
      icon: Linkedin, 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/ethlook/',
      color: '#0A66C2',
      animation: { y: [0, -3, 0] }
    },
    { 
      icon: Youtube, 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@FayidaAcademyOfficial',
      color: '#FF0000',
      animation: { rotate: [0, 5, 0] }
    },
    { 
      icon: MessageSquare, 
      name: 'Telegram', 
      url: 'https://t.me/fayidaacademy',
      color: '#0088CC',
      animation: { scale: [1, 0.9, 1] }
    },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-.99.06-2.02.07-3.03.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ), 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@fayidaacademy',
      color: '#000000',
      animation: { rotate: [0, 5, -5, 0] }
    }
  ];

  if (!isMounted) return null;

  return (
    <motion.footer 
      className="bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-900/10 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Fayida */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 w-12 h-12 rounded-xl flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Fayida <span className="text-emerald-600 dark:text-emerald-400">Academy</span>
                </h2>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium tracking-wide">
                  ETHIOPIA'S PREMIER E-LEARNING
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-sm">
              Empowering Ethiopian high school students with accessible, quality education through innovative digital learning solutions.
            </p>
            
            {/* Social Media */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                    whileHover={{ 
                      y: -5,
                      scale: 1.1,
                      backgroundColor: social.color,
                      color: '#fff'
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <motion.div
                      whileHover={social.animation}
                      className="flex items-center justify-center w-6 h-6"
                    >
                      {typeof social.icon === 'function' && social.name === 'TikTok' ? (
                        social.icon({})
                      ) : (
                        <social.icon className="h-5 w-5" />
                      )}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Subjects */}
          <div className="mt-6 md:mt-0">
            {/* Mobile Accordion Header */}
            <button
              className="md:hidden w-full flex justify-between items-center py-3 text-left"
              onClick={() => toggleSection('subjects')}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Subjects
              </h3>
              {openSections['subjects'] ? (
                <ChevronUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              )}
            </button>
            
            {/* Desktop Title */}
            <h3 className="hidden md:block text-lg font-bold text-gray-900 dark:text-white mb-4">
              Subjects
            </h3>
            
            {/* Content */}
            <div className={cn(
              "md:block",
              openSections['subjects'] ? 'block' : 'hidden'
            )}>
              <ul className="space-y-2">
                {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History'].map((subject, index) => (
                  <motion.li 
                    key={subject}
                    className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a href="#" className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                      {subject}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 md:mt-0">
            <button
              className="md:hidden w-full flex justify-between items-center py-3 text-left"
              onClick={() => toggleSection('links')}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Quick Links
              </h3>
              {openSections['links'] ? (
                <ChevronUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              )}
            </button>
            
            <h3 className="hidden md:block text-lg font-bold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            
            <div className={cn(
              "md:block",
              openSections['links'] ? 'block' : 'hidden'
            )}>
              <ul className="space-y-2">
                {[
                  { name: 'Home', icon: Home },
                  { name: 'Academic Resources', icon: BookOpen },
                  { name: 'Packages', icon: Package },
                  { name: 'Dashboard', icon: GraduationCap }
                ].map((link, index) => (
                  <motion.li 
                    key={link.name}
                    className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a href="#" className="flex items-center">
                      <link.icon className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 md:mt-0">
            <button
              className="md:hidden w-full flex justify-between items-center py-3 text-left"
              onClick={() => toggleSection('contact')}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Contact Us
              </h3>
              {openSections['contact'] ? (
                <ChevronUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              )}
            </button>
            
            <h3 className="hidden md:block text-lg font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h3>
            
            <div className={cn(
              "md:block",
              openSections['contact'] ? 'block' : 'hidden'
            )}>
              <div className="space-y-3">
                {[
                  { icon: Phone, text: '+251 970 483 333', subtext: '+251 970 493 333' },
                  { icon: Mail, text: 'contact@fayidaacademy.com' },
                  { icon: MapPin, text: 'Addis Ababa, Ethiopia' }
                ].map((contact, index) => (
                  <motion.div 
                    key={contact.text}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <contact.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">{contact.text}</p>
                      {contact.subtext && (
                        <p className="text-gray-600 dark:text-gray-300">{contact.subtext}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Fayida Academy. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Dark Mode Toggle */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white dark:bg-gray-800 shadow border border-gray-200 dark:border-gray-700"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 text-amber-500" />
                ) : (
                  <Moon className="h-5 w-5 text-indigo-700" />
                )}
              </Button>
            </motion.div>
            

          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;