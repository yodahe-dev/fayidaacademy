'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { 
  Menu, X, ChevronDown, BookOpen, GraduationCap, Book, 
  User, Home, Star, Award, Package, LogIn, UserPlus, 
  LogOut, UserCircle, Sun, Moon, Globe, ChevronUp, ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

// Navigation data structure
type NavItem = {
  name: string
  href: string
  icon?: React.ElementType
  dropdown?: false
  badge?: string
}

type NavDropdownItem = {
  name: string
  icon: React.ElementType
  href: string
  badge?: string
}

type NavDropdown = {
  name: string
  href: string
  dropdown: true
  items: NavDropdownItem[]
  icon?: React.ElementType
  badge?: string
}

type NavLink = NavItem | NavDropdown

const navLinks: NavLink[] = [
  { 
    name: 'Home', 
    href: '/',
    icon: Home
  },
  { 
    name: 'Courses', 
    href: '/subject',
    icon: BookOpen,
    
  },
  { 
    name: 'Academic Resources', 
    href: '/resources',
    icon: BookOpen,
    badge: 'Updated'
  },
  { 
    name: 'About Fayida', 
    href: '/about',
    icon: GraduationCap
  }
]

const achievementBadges = [
  { name: 'Math Master', icon: Star, color: 'bg-yellow-400' },
  { name: 'Science Explorer', icon: Award, color: 'bg-purple-500' },
  { name: 'Language Expert', icon: Award, color: 'bg-blue-500' },
]

// Language options
const languageOptions = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'am', name: 'Amharic', flag: '🇪🇹' },
  { code: 'om', name: 'Oromo', flag: '🇪🇹' },
  { code: 'ti', name: 'Tigrinya', flag: '🇪🇷' },
  { code: 'so', name: 'Somali', flag: '🇸🇴' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [subjectsOpen, setSubjectsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('en')
  const [languageOpen, setLanguageOpen] = useState(false)
  const pathname = usePathname()
  const profileRef = useRef<HTMLDivElement>(null)
  const languageRef = useRef<HTMLDivElement>(null)

  // Initialize theme and language from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('fayida-theme')
    const savedLanguage = localStorage.getItem('fayida-language')
    
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
    
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('fayida-theme', newMode ? 'dark' : 'light')
    
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Change language
  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    localStorage.setItem('fayida-language', lang)
    setLanguageOpen(false)
  }

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false)
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setLanguageOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.2,
        ease: easeInOut
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      scale: 0.95,
      transition: { 
        duration: 0.15,
        ease: easeInOut
      }
    }
  }

  // Hover animations for buttons
  const hoverAnimation = {
    scale: 1.05,
    transition: { duration: 0.2, ease: easeInOut }
  }

  // Handle login/logout
  const handleAuthAction = () => {
    setIsLoggedIn(!isLoggedIn)
    setProfileOpen(false)
    setOpen(false)
  }

  const tapAnimation = {
    scale: 0.95
  }

  // Get current language name
  const currentLanguage = languageOptions.find(lang => lang.code === language) || languageOptions[0];

  return (
    <motion.nav 
      className={cn(
        "w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg sticky top-0 z-50 transition-all duration-300 border-gray-100 dark:border-gray-800",
        isScrolled ? "shadow-sm py-1" : "py-3"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 15, stiffness: 200 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo with Ethiopian-inspired colors */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <motion.div 
                className="bg-gradient-to-br from-green-600 to-emerald-800 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap className="h-6 w-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Fayida <span className="text-emerald-600 dark:text-emerald-400">Academy</span>
                </span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium tracking-wide -mt-1">
                  ETHIOPIA'S PREMIER E-LEARNING
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <motion.ul 
              className="flex space-x-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  variants={itemVariants}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setSubjectsOpen(true)}
                  onMouseLeave={() => link.dropdown && setSubjectsOpen(false)}
                >
                  {link.dropdown ? (
                    <>
                      <motion.div
                        whileHover={hoverAnimation}
                        whileTap={tapAnimation}
                      >
                        <Button 
                          variant="ghost" 
                          className={cn(
                            "flex items-center space-x-1 text-gray-800 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-xl px-4 py-2 group relative",
                            pathname.startsWith('/subjects') && "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30"
                          )}
                        >
                          <span>{link.name}</span>
                          {link.badge && (
                            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                              {link.badge}
                            </span>
                          )}
                          <ChevronDown className={cn(
                            "h-4 w-4 transition-transform text-gray-400 dark:text-gray-500",
                            subjectsOpen && "rotate-180"
                          )} />
                        </Button>
                      </motion.div>
                      
                      <AnimatePresence>
                        {subjectsOpen && (
                          <motion.div
                            className="absolute left-0 top-full mt-1 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            <div className="grid grid-cols-2 gap-1 p-2">
                              {link.items?.map((item) => (
                                <motion.div
                                  key={item.name}
                                  whileHover={{ backgroundColor: "#f0fdf4" }}
                                  whileTap={{ scale: 0.98 }}
                                  transition={{ duration: 0.1 }}
                                >
                                  <Link
                                    href={item.href}
                                    className={cn(
                                      "flex items-center space-x-2 p-3 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors relative",
                                      pathname === item.href && "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                                    )}
                                  >
                                    <item.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.name}</span>
                                    {item.badge && (
                                      <span className="absolute top-1 right-1 bg-emerald-500 text-white text-[8px] px-1.5 py-0.5 rounded-full">
                                        {item.badge}
                                      </span>
                                    )}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div
                      whileHover={hoverAnimation}
                      whileTap={tapAnimation}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center space-x-1 text-gray-800 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-xl px-4 py-2 font-medium relative group",
                          pathname === link.href && "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30"
                        )}
                      >
                        {link.icon && <link.icon className="h-4 w-4" />}
                        <span>{link.name}</span>
                        {link.badge && (
                          <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full group-hover:animate-pulse">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  )}
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex items-center space-x-2 ml-4">
              {/* Dark mode toggle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
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

              {/* Language selector */}
              <div className="relative" ref={languageRef}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-xl px-3 py-2"
                    onClick={() => setLanguageOpen(!languageOpen)}
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-sm font-medium">{currentLanguage.flag} {currentLanguage.code.toUpperCase()}</span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform",
                      languageOpen && "rotate-180"
                    )} />
                  </Button>
                </motion.div>
                
                <AnimatePresence>
                  {languageOpen && (
                    <motion.div
                      className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="py-1">
                        {languageOptions.map((lang) => (
                          <button
                            key={lang.code}
                            className={cn(
                              "flex items-center w-full px-4 py-2 text-left text-gray-800 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/30",
                              language === lang.code && "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                            )}
                            onClick={() => changeLanguage(lang.code)}
                          >
                            <span className="text-lg mr-2">{lang.flag}</span>
                            <span className="font-medium">{lang.name}</span>
                            {language === lang.code && (
                              <span className="ml-auto">
                                <ChevronRight className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Packages CTA with special animation */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="rounded-xl font-medium bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-emerald-300 text-white group"
                >
                  <Link href="/packages">
                    <Package className="h-4 w-4 mr-1 group-hover:animate-bounce" />
                    <span>Premium Packages</span>
                  </Link>
                </Button>
              </motion.div>

              {/* User State: Authenticated vs Not Authenticated */}
              {isLoggedIn ? (
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  ref={profileRef}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 border-2 border-emerald-200 dark:border-emerald-700 shadow-sm overflow-hidden"
                    onClick={() => setProfileOpen(!profileOpen)}
                    aria-label="User profile"
                  >
                    <UserCircle className="h-6 w-6 text-emerald-700 dark:text-emerald-500" />
                  </motion.button>

                  <AnimatePresence>
                    {profileOpen && (
                      <motion.div
                        className="absolute right-0 top-full mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border-b border-emerald-100 dark:border-emerald-800">
                          <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-12 h-12 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold">TA</span>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 dark:text-white">Tewodros Alemayehu</h3>
                              <p className="text-xs text-emerald-600 dark:text-emerald-400">Grade 11 Student</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 border-b border-gray-100 dark:border-gray-700">
                          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Achievements</h4>
                          <div className="flex gap-2">
                            {achievementBadges.map((badge, index) => (
                              <motion.div
                                key={index}
                                className={`${badge.color} w-8 h-8 rounded-full flex items-center justify-center text-white`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <badge.icon className="h-4 w-4" />
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="p-1">
                          <Link href="/profile" className="flex items-center p-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg">
                            <User className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                            <span>My Profile</span>
                          </Link>
                          <button 
                            className="flex items-center w-full p-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg"
                            onClick={handleAuthAction}
                          >
                            <LogOut className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                            <span>Logout</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <div className="relative" ref={profileRef}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="flex items-center space-x-1 rounded-xl font-medium border-emerald-300 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                      onClick={() => setProfileOpen(!profileOpen)}
                    >
                      <UserCircle className="h-4 w-4" />
                      <span>Account</span>
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform",
                        profileOpen && "rotate-180"
                      )} />
                    </Button>
                  </motion.div>
                  
                  <AnimatePresence>
                    {profileOpen && (
                      <motion.div
                        className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="py-1">
                          <Link
                            href="/login"
                            className="flex items-center p-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                            onClick={() => setProfileOpen(false)}
                          >
                            <LogIn className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                            <span>Login</span>
                          </Link>
                          <Link
                            href="/signup"
                            className="flex items-center p-3 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                            onClick={() => setProfileOpen(false)}
                          >
                            <UserPlus className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
                            <span>Sign Up</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark mode toggle for mobile */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-700 dark:text-gray-300"
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
            
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                  aria-label="Toggle menu"
                >
                  {open ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white dark:bg-gray-900 p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="p-4 border-b bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30">
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
                        <div className="bg-gradient-to-br from-emerald-600 to-teal-800 w-8 h-8 rounded-xl flex items-center justify-center">
                          <GraduationCap className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                          Fayida <span className="text-emerald-600 dark:text-emerald-400">Academy</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex-1 overflow-y-auto py-4 px-2">
                    <div className="space-y-1">
                      {navLinks.map((link: typeof navLinks[number]) => (
                        <div key={link.name} className="pb-1">
                          {link.dropdown ? (
                            <div className="mb-2">
                              <button 
                                className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 group"
                                onClick={() => setSubjectsOpen(!subjectsOpen)}
                              >
                                <div className="flex items-center space-x-2">
                                  {link.icon && <link.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />}
                                  <span className="font-medium">{link.name}</span>
                                  {link.badge && (
                                    <span className="bg-amber-500 text-white text-[10px] px-2 py-0.5 rounded-full ml-2">
                                      {link.badge}
                                    </span>
                                  )}
                                </div>
                                <ChevronDown className={cn(
                                  "h-4 w-4 transition-transform text-emerald-600 dark:text-emerald-400",
                                  subjectsOpen && "rotate-180"
                                )} />
                              </button>
                              
                              {subjectsOpen && (
                                <motion.div
                                  className="grid grid-cols-2 gap-1 pl-6 pr-2 py-1"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {link.items?.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className={cn(
                                        "flex items-center space-x-2 p-3 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-sm relative",
                                        pathname === item.href && "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                                      )}
                                      onClick={() => setOpen(false)}
                                    >
                                      <item.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                      <span>{item.name}</span>
                                      {item.badge && (
                                        <span className="absolute top-1 right-1 bg-emerald-500 text-white text-[8px] px-1.5 py-0.5 rounded-full">
                                          {item.badge}
                                        </span>
                                      )}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </div>
                          ) : (
                            <Link
                              href={link.href}
                              className={cn(
                                "flex items-center space-x-2 p-3 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 group",
                                pathname === link.href && "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                              )}
                              onClick={() => setOpen(false)}
                            >
                              {link.icon && <link.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />}
                              <span className="font-medium">{link.name}</span>
                              {link.badge && (
                                <span className="bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full ml-2 group-hover:animate-pulse">
                                  {link.badge}
                                </span>
                              )}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Language Selection for Mobile */}
                    <div className="mt-6 px-2">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Language</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {languageOptions.map((lang) => (
                          <Button
                            key={lang.code}
                            variant={language === lang.code ? "default" : "outline"}
                            className={cn(
                              "flex items-center justify-center",
                              language === lang.code ? "bg-emerald-600 hover:bg-emerald-700" : "border-emerald-200 dark:border-gray-700 text-emerald-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-800"
                            )}
                            onClick={() => changeLanguage(lang.code)}
                          >
                            <span className="text-lg mr-1">{lang.flag}</span>
                            <span className="text-xs">{lang.name}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Mobile CTA Section */}
                    <div className="mt-6 px-2">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Account</h3>
                      <div className="space-y-2">
                        {isLoggedIn ? (
                          <>
                            <Button 
                              variant="outline"
                              className="w-full justify-start rounded-lg border-emerald-300 text-emerald-700 dark:text-emerald-400"
                              onClick={handleAuthAction}
                            >
                              <LogOut className="h-4 w-4 mr-2" />
                              Logout
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button 
                              asChild
                              className="w-full justify-start rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white"
                            >
                              <Link href="/login" onClick={() => setOpen(false)}>
                                <LogIn className="h-4 w-4 mr-2" />
                                Login to Your Account
                              </Link>
                            </Button>
                            <Button 
                              variant="outline"
                              className="w-full justify-start rounded-lg border-emerald-300 text-emerald-700 dark:text-emerald-400"
                              asChild
                            >
                              <Link href="/signup" onClick={() => setOpen(false)}>
                                <UserPlus className="h-4 w-4 mr-2" />
                                Create New Account
                              </Link>
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Packages CTA */}
                  <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        asChild
                        className="w-full rounded-xl font-medium bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-6 shadow-lg"
                      >
                        <Link href="/packages" onClick={() => setOpen(false)}>
                          <Package className="h-5 w-5 mr-2" />
                          <div className="text-left">
                            <div className="font-bold">Premium Packages</div>
                            <div className="text-xs font-normal opacity-90">Unlock all subjects & features</div>
                          </div>
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}