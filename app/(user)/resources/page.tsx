'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Video,
  FileText,
  BarChart,
  Download,
  Search,
  Filter,
  Star,
  Bookmark,
  Share2,
  PlayCircle,
  BookmarkPlus,
  BookA,
  Calculator,
  FlaskConical,
  Globe,
  BrainCircuit,
  Atom,
  Leaf
} from 'lucide-react';

// Resource data
const resources = [
  { 
    id: 1,
    title: "Grade 11 Physics Masterclass",
    type: "video",
    subject: "Physics",
    grade: "Grade 11",
    length: "2h 15m",
    downloads: "12.4K",
    rating: 4.9,
    color: "from-blue-600 to-indigo-500"
  },
  { 
    id: 2,
    title: "Ethiopian History Timeline",
    type: "pdf",
    subject: "History",
    grade: "Grade 10",
    length: "42 pages",
    downloads: "8.7K",
    rating: 4.8,
    color: "from-amber-600 to-yellow-500"
  },
  { 
    id: 3,
    title: "Chemistry Formulas Cheat Sheet",
    type: "pdf",
    subject: "Chemistry",
    grade: "Grade 12",
    length: "18 pages",
    downloads: "10.2K",
    rating: 4.7,
    color: "from-purple-600 to-pink-500"
  },
  { 
    id: 4,
    title: "Mathematics Problem Solving Guide",
    type: "interactive",
    subject: "Mathematics",
    grade: "Grade 9",
    length: "Interactive",
    downloads: "15.1K",
    rating: 4.9,
    color: "from-emerald-600 to-teal-500"
  },
  { 
    id: 5,
    title: "English Grammar Handbook",
    type: "pdf",
    subject: "English",
    grade: "Grade 10",
    length: "56 pages",
    downloads: "9.3K",
    rating: 4.6,
    color: "from-red-600 to-orange-500"
  },
  { 
    id: 6,
    title: "Biology Concepts Explained",
    type: "video",
    subject: "Biology",
    grade: "Grade 11",
    length: "1h 48m",
    downloads: "11.8K",
    rating: 4.8,
    color: "from-green-600 to-lime-500"
  },
  { 
    id: 7,
    title: "Geography of Ethiopia Visual Guide",
    type: "interactive",
    subject: "Geography",
    grade: "Grade 12",
    length: "Interactive",
    downloads: "7.9K",
    rating: 4.9,
    color: "from-cyan-600 to-sky-500"
  },
  { 
    id: 8,
    title: "Civics & Citizenship Exam Prep",
    type: "pdf",
    subject: "Civics",
    grade: "Grade 10",
    length: "32 pages",
    downloads: "6.5K",
    rating: 4.7,
    color: "from-violet-600 to-purple-500"
  }
];

// Filter options
const filters = [
  { id: 'all', label: 'All Resources' },
  { id: 'video', label: 'Video Lessons' },
  { id: 'pdf', label: 'Study Guides' },
  { id: 'interactive', label: 'Interactive' }
];

// Subjects
const subjects = [
  { id: 'math', name: 'Mathematics', icon: Calculator },
  { id: 'physics', name: 'Physics', icon: Atom },
  { id: 'chemistry', name: 'Chemistry', icon: FlaskConical },
  { id: 'biology', name: 'Biology', icon: Leaf },
  { id: 'english', name: 'English', icon: BookA },
  { id: 'history', name: 'History', icon: Globe },
  { id: 'geography', name: 'Geography', icon: Globe },
  { id: 'civics', name: 'Civics', icon: BrainCircuit }
];

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResource, setSelectedResource] = useState<typeof resources[number] | null>(null);
  const [bookmarked, setBookmarked] = useState<number[]>([]);
  const [is3DMode, setIs3DMode] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Filter resources based on selections
  const filteredResources = resources.filter(resource => {
    const matchesFilter = activeFilter === 'all' || resource.type === activeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         resource.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  
  // Toggle bookmark
  const toggleBookmark = (id: number) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter(item => item !== id));
    } else {
      setBookmarked([...bookmarked, id]);
    }
  };
  
  // Open resource detail
  const openResource = (resource: typeof resources[number]) => {
    setSelectedResource(resource);
  };
  
  // Close resource detail
  const closeResource = () => {
    setSelectedResource(null);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10">
      {/* Animated background elements */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-emerald-300 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-300 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.div>
      
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
            <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
            <span className="text-emerald-700 dark:text-emerald-300 font-medium">
              Premium Learning Resources
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block text-gray-900 dark:text-white">Explore Our</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Educational Resources
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Access expertly crafted study materials, video lessons, and interactive content designed specifically for Ethiopian students
          </motion.p>
          
          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto relative"
          >
            <div className="relative">
              <Input
                placeholder="Search resources by subject, grade, or keyword..."
                className="pl-12 py-6 rounded-2xl text-lg shadow-lg border border-emerald-100 dark:border-emerald-900/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              
            </div>
          </motion.div>
        </motion.div>
        
        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {filters.map(filter => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`rounded-full px-6 py-5 ${
                activeFilter === filter.id 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-white dark:bg-gray-800 border-emerald-100 dark:border-emerald-900/30 text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.id === 'video' && <Video className="h-4 w-4 mr-2" />}
              {filter.id === 'pdf' && <FileText className="h-4 w-4 mr-2" />}
              {filter.id === 'interactive' && <BarChart className="h-4 w-4 mr-2" />}
              {filter.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Subject quick filters */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <Filter className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
            Browse by Subject
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {subjects.map(subject => (
              <motion.div
                key={subject.id}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-3 text-center cursor-pointer border border-emerald-100 dark:border-emerald-900/30 hover:shadow-md transition-all"
                onClick={() => setSearchQuery(subject.name)}
              >
                <div className="bg-emerald-100 dark:bg-emerald-900/20 p-3 rounded-lg mb-2 w-12 h-12 mx-auto flex items-center justify-center">
                  <subject.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-sm font-medium">{subject.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Resource grid */}
        <div ref={ref} className="mb-20">
          {isInView && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {filteredResources.map(resource => (
                <motion.div
                  key={resource.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        type: "spring",
                        damping: 12,
                        stiffness: 100
                      }
                    }
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: is3DMode ? 1.03 : 1.02,
                    rotate: is3DMode ? Math.random() * 2 - 1 : 0
                  }}
                  className={`${is3DMode ? 'transform-gpu' : ''}`}
                >
                  <div 
                    className={`bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-emerald-100 dark:border-emerald-900/20 transition-all duration-300 h-full flex flex-col`}
                  >
                    <div className={`h-32 bg-gradient-to-r ${resource.color} relative`}>
                      <div className="absolute top-4 right-4">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                          onClick={() => toggleBookmark(resource.id)}
                        >
                          <BookmarkPlus 
                            className={`h-4 w-4 ${bookmarked.includes(resource.id) ? 'text-amber-400 fill-amber-400' : 'text-white'}`} 
                          />
                        </Button>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                        {resource.type === 'video' && <PlayCircle className="h-4 w-4 text-white mr-1" />}
                        {resource.type === 'pdf' && <FileText className="h-4 w-4 text-white mr-1" />}
                        {resource.type === 'interactive' && <BarChart className="h-4 w-4 text-white mr-1" />}
                        <span className="text-white text-sm">{resource.type}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow">
                      <div className="flex items-center mb-3">
                        <span className="text-xs font-medium bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded">
                          {resource.grade}
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          {resource.subject}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3 line-clamp-2">{resource.title}</h3>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                          <span className="ml-1 text-sm font-medium">{resource.rating}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <Download className="h-4 w-4 mr-1" />
                          {resource.downloads}
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{resource.length}</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 flex justify-between">
                      <Button 
                        variant="outline" 
                        className="border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                      >
                        Preview
                      </Button>
                      <Button 
                        className="bg-emerald-600 hover:bg-emerald-700"
                        onClick={() => openResource(resource)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="mx-auto w-24 h-24 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mb-6">
                <Search className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No resources found</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <Button 
                className="mt-6 bg-emerald-600 hover:bg-emerald-700"
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
              >
                Reset Filters
              </Button>
            </motion.div>
          )}
        </div>
        
        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-10 text-white shadow-2xl mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-emerald-100">Resources Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-emerald-100">Curriculum Coverage</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <p className="text-emerald-100">Downloads</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <p className="text-emerald-100">Average Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Resource Detail Modal */}
      <AnimatePresence>
        {selectedResource && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeResource}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-48 bg-gradient-to-r ${selectedResource.color} relative`}>
                <button 
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2"
                  onClick={closeResource}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                      {selectedResource.subject}
                    </span>
                    <span className="mx-2 text-white/70">•</span>
                    <span className="text-sm font-medium text-white">
                      {selectedResource.grade}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{selectedResource.title}</h2>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                    <span className="ml-1 font-medium">{selectedResource.rating} Rating</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Download className="h-5 w-5 mr-1" />
                    <span>{selectedResource.downloads} Downloads</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    {selectedResource.type === 'video' && <PlayCircle className="h-5 w-5 mr-1" />}
                    {selectedResource.type === 'pdf' && <FileText className="h-5 w-5 mr-1" />}
                    {selectedResource.type === 'interactive' && <BarChart className="h-5 w-5 mr-1" />}
                    <span>{selectedResource.length}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Description</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Comprehensive resource covering all key concepts for Ethiopian students. Includes detailed explanations, examples, and practice exercises aligned with the national curriculum. Perfect for exam preparation and mastering difficult topics.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Content Preview</h3>
                    <div className="bg-gray-100 dark:bg-gray-700/30 rounded-xl p-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                          <span>Detailed concept explanations</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                          <span>Practice questions with solutions</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                          <span>Exam preparation tips</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></div>
                          <span>Real-world applications</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 py-6">
                    <Download className="h-5 w-5 mr-2" />
                    Download Resource
                  </Button>
                  <Button variant="outline" size="lg" className="border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 py-6">
                    <BookOpen className="h-5 w-5 mr-2" />
                    View Online
                  </Button>
                  <Button variant="outline" size="lg" className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30 py-6">
                    <Share2 className="h-5 w-5 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}