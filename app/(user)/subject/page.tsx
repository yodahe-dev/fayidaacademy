'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup, easeOut } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import {
  Search,
  ArrowUp,
  Frown,
  BookOpen,
  Moon,
  Sun,
  Flag,
  Star,
  Clock,
  BarChart2,
  Award,
  Globe,
  Bookmark,
  ChevronRight,
  Heart,
  Loader,
  X
} from 'lucide-react';
import { FaChalkboardTeacher, FaBrain, FaLaptopCode } from 'react-icons/fa';
import { GiChemicalDrop } from 'react-icons/gi';
import { MdHistory, MdAttachMoney, MdLanguage } from 'react-icons/md';
const math = '/math.jpg';

// Course data with Ethiopian context
const courses = [
  {
    id: 'math',
    title: 'Mathematics Mastery',
    description: 'Algebra, geometry, and practical applications',
    instructor: 'Dr. Alemayehu Kebede',
    level: 'Intermediate',
    lessons: 42,
    price: 1299,
    originalPrice: 1899,
    rating: 4.8,
    reviews: 1245,
    thumbnail: '/math.jpg',
    badge: 'Popular',
    category: 'core',
    isNew: false
  },
  {
    id: 'physics',
    title: 'Physics Fundamentals',
    description: 'Fundamental laws of motion, energy, and matter',
    instructor: 'Prof. Selamawit Abebe',
    level: 'Advanced',
    lessons: 38,
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviews: 987,
    thumbnail: '/math.jpg',
    badge: 'Updated',
    category: 'science',
    isNew: true
  },
  {
    id: 'chemistry',
    title: 'Chemistry Concepts',
    description: 'Elements, compounds, and chemical reactions',
    instructor: 'Dr. Tewodros Getachew',
    level: 'Intermediate',
    lessons: 35,
    price: 1199,
    originalPrice: 1599,
    rating: 4.6,
    reviews: 765,
    thumbnail: '/math.jpg',
    category: 'science',
    isNew: false
  },
  {
    id: 'biology',
    title: 'Biology Essentials',
    description: 'Living organisms, cells, and ecosystems',
    instructor: 'Dr. Genet Assefa',
    level: 'Beginner',
    lessons: 30,
    price: 1099,
    originalPrice: 1499,
    rating: 4.7,
    reviews: 654,
    thumbnail: 'math.jpg',
    badge: 'New',
    category: 'science',
    isNew: true
  },
  {
    id: 'english',
    title: 'English Excellence',
    description: 'Grammar, literature, and communication skills',
    instructor: 'Prof. Sarah Johnson',
    level: 'All Levels',
    lessons: 28,
    price: 999,
    originalPrice: 1399,
    rating: 4.5,
    reviews: 1123,
    thumbnail: 'math.jpg',
    category: 'language',
    isNew: false
  },
  {
    id: 'amharic',
    title: 'Amharic Language & Culture',
    description: 'ቋንቋ፣ ሥነ ፅሁፍ እና የግንባታ ችሎታዎች',
    instructor: 'Dr. Yohannes Tadesse',
    level: 'Beginner',
    lessons: 25,
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 876,
    thumbnail: 'math.jpg',
    badge: 'Ethiopian',
    category: 'language',
    isNew: false
  },
  {
    id: 'geography',
    title: 'Ethiopian Geography',
    description: "Earth's landscapes and Ethiopian environments",
    instructor: 'Dr. Mesfin Woldemariam',
    level: 'Intermediate',
    lessons: 20,
    price: 799,
    originalPrice: 1199,
    rating: 4.4,
    reviews: 432,
    thumbnail: '/math.jpg',
    category: 'social',
    isNew: true
  },
  {
    id: 'history',
    title: 'History of Ethiopia',
    description: 'Ethiopian heritage and world civilizations',
    instructor: 'Dr. Assefa Jalata',
    level: 'Advanced',
    lessons: 22,
    price: 899,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 567,
    thumbnail: 'math.jpg',
    category: 'social',
    isNew: false
  },
  {
    id: 'civics',
    title: 'Civics & Citizenship',
    description: 'Government, citizenship, and social responsibility',
    instructor: 'Dr. Belayneh Ayele',
    level: 'Beginner',
    lessons: 18,
    price: 699,
    originalPrice: 999,
    rating: 4.3,
    reviews: 345,
    thumbnail: 'math.jpg',
    category: 'social',
    isNew: false
  },
  {
    id: 'ict',
    title: 'ICT Fundamentals',
    description: 'Digital literacy and technology fundamentals',
    instructor: 'Eng. Daniel Tekeste',
    level: 'All Levels',
    lessons: 32,
    price: 1499,
    originalPrice: 1999,
    rating: 4.7,
    reviews: 789,
    thumbnail: 'math.jpg',
    category: 'technical',
    isNew: true
  },
  {
    id: 'business',
    title: 'Business & Economics',
    description: 'Entrepreneurship and economic principles',
    instructor: 'Dr. Helen Meles',
    level: 'Advanced',
    lessons: 26,
    price: 1699,
    originalPrice: 2199,
    rating: 4.9,
    reviews: 567,
    thumbnail: '/math.jpg',
    badge: 'Trending',
    category: 'economics',
    isNew: false
  },
  {
    id: 'critical-thinking',
    title: 'Critical Thinking Skills',
    description: 'Problem-solving and analytical skills',
    instructor: 'Dr. Samuel Bekele',
    level: 'Intermediate',
    lessons: 15,
    price: 899,
    originalPrice: 1299,
    rating: 4.6,
    reviews: 234,
    thumbnail: '/math.jpg',
    category: 'core',
    isNew: false
  },
  {
    id: 'agricultural-science',
    title: 'Agricultural Science',
    description: 'Crop production and livestock management',
    instructor: 'Dr. Worku Desta',
    level: 'Intermediate',
    lessons: 19,
    price: 1199,
    originalPrice: 1599,
    rating: 4.5,
    reviews: 321,
    thumbnail: '/math.jpg',
    category: 'science',
    isNew: true
  },
  {
    id: 'art-culture',
    title: 'Ethiopian Art & Culture',
    description: 'Ethiopian traditional arts and global culture',
    instructor: 'Dr. Aster Solomon',
    level: 'Beginner',
    lessons: 14,
    price: 799,
    originalPrice: 1099,
    rating: 4.8,
    reviews: 210,
    thumbnail: 'math.jpg',
    badge: 'New',
    category: 'social',
    isNew: true
  },
];

const categories = [
  { id: 'all', name: 'All Courses', icon: BookOpen },
  { id: 'core', name: 'Core', icon: FaBrain },
  { id: 'science', name: 'Science', icon: GiChemicalDrop },
  { id: 'social', name: 'Social Studies', icon: MdHistory },
  { id: 'language', name: 'Languages', icon: MdLanguage },
  { id: 'economics', name: 'Economics', icon: MdAttachMoney },
  { id: 'technical', name: 'Technical', icon: FaLaptopCode },
];

// Set up Fuse.js for fuzzy search with typo tolerance
const fuseOptions = {
  keys: ['title', 'description', 'instructor', 'category'],
  threshold: 0.4, // Higher threshold for more typo tolerance
  includeScore: true,
  minMatchCharLength: 2,
  ignoreLocation: true,
  distance: 100, // Allow larger edit distances
  shouldSort: true,
};

const fuse = new Fuse(courses, fuseOptions);

export default function CoursesPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [activeCategory, setActiveCategory] = useState('all');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState('popular');
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [visibleCourses, setVisibleCourses] = useState(8);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  
  // Sample search suggestions
  const searchSuggestions = [
    'Mathematics',
    'Physics',
    'Amharic Language',
    'Ethiopian History',
    'Business Economics',
    'ICT Fundamentals',
    'Critical Thinking',
    'Agricultural Science'
  ];

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Handle search and filtering
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      let results = [...courses];
      
      // Apply category filter
      if (activeCategory !== 'all') {
        results = results.filter(course => course.category === activeCategory);
      }
      
      // Apply search filter
      if (searchTerm.trim() !== '') {
        const searchResults = fuse.search(searchTerm);
        results = searchResults.map(result => result.item);
      }
      
      // Apply sorting
      switch(sortOption) {
        case 'price-low':
          results.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          results.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          results.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          results.sort((a, b) => b.isNew ? 1 : -1);
          break;
        default: // popular
          results.sort((a, b) => b.reviews - a.reviews);
      }
      
      setFilteredCourses(results);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, activeCategory, sortOption]);

  // Handle scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrollTopVisible(window.scrollY > 300);
      
      // Infinite scroll implementation
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        setVisibleCourses(prev => Math.min(prev + 4, filteredCourses.length));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredCourses]);

  // Handle theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    
    // Load wishlist from localStorage
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Focus search input on "/" key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && searchRef.current) {
        e.preventDefault();
        searchRef.current.focus();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const emptyVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
    bounce: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as "reverse",
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCourseClick = (courseId: string) => {
    router.push(`/courses/${courseId}`);
  };

  const toggleWishlist = (courseId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  // Filtered courses to display
  const displayedCourses = filteredCourses.slice(0, visibleCourses);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100' : 'bg-gradient-to-br from-emerald-50 to-teal-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-center">
              Explore <span className="text-emerald-600">Courses</span>
            </h1>
          </div>
          
          <p className="text-lg text-center max-w-2xl mb-10 text-gray-600 dark:text-gray-300">
            Discover our comprehensive courses designed for Ethiopian students
          </p>
          
          {/* Search Bar with Suggestions */}
          <div className="w-full max-w-2xl relative mb-10">
            <div className="relative">
              <Input
                ref={searchRef}
                type="text"
                placeholder="Search courses (e.g. 'math', 'business')..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSuggestions(e.target.value.length > 0);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="pl-12 pr-10 py-6 rounded-2xl text-lg shadow-lg border-0 focus-visible:ring-2 focus-visible:ring-emerald-500"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            
            <AnimatePresence>
              {showSuggestions && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  {searchSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 hover:bg-emerald-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                      onMouseDown={() => handleSuggestionClick(suggestion)}
                    >
                      <div className="flex items-center gap-3">
                        <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="truncate">{suggestion}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Category Filters and Sorting */}
          <div className="w-full max-w-6xl mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">Browse Courses</h2>
                <span className="text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full text-sm">
                  {filteredCourses.length} courses
                </span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 dark:text-gray-300">Sort by:</span>
                  <select 
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="md:hidden text-emerald-600"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
              </div>
            </div>
            
            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-wrap justify-center gap-2 w-full">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? 'default' : 'outline'}
                      onClick={() => setActiveCategory(category.id)}
                      className={`rounded-full px-4 py-2 transition-all flex items-center gap-2 ${activeCategory === category.id ? 'bg-emerald-600 hover:bg-emerald-700' : 'hover:bg-emerald-100 dark:hover:bg-gray-700'}`}
                    >
                      <Icon className="w-4 h-4" />
                      {category.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.header>

        {/* Courses Grid */}
        <LayoutGroup>
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader className="w-12 h-12 text-emerald-600 animate-spin" />
            </div>
          ) : (
            <>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                <AnimatePresence mode="wait">
                  {displayedCourses.length > 0 ? (
                    displayedCourses.map((course) => (
                      <motion.div
                        key={course.id}
                        layout
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ y: -5 }}
                        className={`rounded-2xl overflow-hidden shadow-lg cursor-pointer ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} relative`}
                        onClick={() => handleCourseClick(course.id)}
                      >
                        {/* Wishlist Button */}
                        <button 
                          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white dark:bg-gray-900 shadow-md"
                          onClick={(e) => toggleWishlist(course.id, e)}
                        >
                          <Heart 
                            className={`w-5 h-5 ${wishlist.includes(course.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                          />
                        </button>
                        
                        {/* New Course Badge */}
                        {course.isNew && (
                          <div className="absolute top-4 left-4 z-10">
                            <Badge className="bg-emerald-600">New</Badge>
                          </div>
                        )}
                        
                        {/* Thumbnail */}
                        <div className="relative h-48 bg-gradient-to-r from-emerald-500 to-teal-400 overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="">
                                <img 
                                    src={course.thumbnail} 
                                    alt={course.title} 
                                />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        </div>
                        
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-bold">
                              {course.title}
                            </h3>
                            {course.id === 'history' && (
                              <span className="text-yellow-500" title="Ethiopian heritage focus">
                                <Flag className="w-4 h-4" />
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {course.description}
                          </p>
                          
                          <div className="flex items-center gap-2 text-sm mb-4">
                            <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                              <FaChalkboardTeacher className="w-4 h-4" />
                              {course.instructor.split(' ')[0]}
                            </span>
                            <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                              <Clock className="w-4 h-4" />
                              {course.lessons} lessons
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-bold">{course.rating}</span>
                              <span className="text-gray-500">({course.reviews})</span>
                            </div>
                            
                            <div className="flex flex-col items-end">
                              <span className="text-emerald-600 font-bold">
                                ETB {course.price.toLocaleString()}
                              </span>
                              {course.originalPrice && (
                                <span className="text-xs line-through text-gray-400">
                                  ETB {course.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="px-6 pb-4">
                          <Button 
                            className="w-full bg-emerald-600 hover:bg-emerald-700"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCourseClick(course.id);
                            }}
                          >
                            Enroll Now
                          </Button>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      className="col-span-full text-center py-20"
                      variants={emptyVariants}
                      initial="hidden"
                      animate={['visible', 'bounce']}
                    >
                      <Frown className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                      <h2 className="text-2xl font-bold mb-2">
                        No courses found
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
                        We couldn't find any courses matching your search. Try a different term or browse all courses.
                      </p>
                      <Button
                        onClick={() => {
                          setSearchTerm('');
                          setActiveCategory('all');
                        }}
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        View all courses
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              {filteredCourses.length > visibleCourses && (
                <div className="text-center mt-10">
                  <Button 
                    onClick={() => setVisibleCourses(prev => prev + 8)}
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    Load More Courses
                  </Button>
                </div>
              )}
            </>
          )}
        </LayoutGroup>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4">
        <AnimatePresence>
          {isScrollTopVisible && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className={`p-3 rounded-full shadow-lg ${theme === 'dark' ? 'bg-emerald-700' : 'bg-emerald-600'} text-white`}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full shadow-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} text-emerald-600`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>


    </div>
  );
}