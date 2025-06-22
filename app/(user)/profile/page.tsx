'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  User,
  BookOpen,
  BarChart,
  Award,
  Clock,
  Calendar,
  Star,
  Bookmark,
  Download,
  Settings,
  Bell,
  Lock,
  BadgeCheck,
  Rocket,
  Trophy,
  Book,
  Video,
  FileText,
  HelpCircle
} from 'lucide-react';

export default function StudentProfile() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [is3DMode, setIs3DMode] = useState(false);
  const [streakCount, setStreakCount] = useState(27);
  const [showAchievement, setShowAchievement] = useState(false);
  
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Mock data
  const userData = {
    name: "Tewodros Alemayehu",
    grade: "Grade 11",
    school: "Addis Ababa Secondary School",
    location: "Addis Ababa, Ethiopia",
    joined: "Jan 15, 2023",
    avatar: "/avatar-placeholder.png"
  };

  const stats = [
    { icon: Clock, value: "142", label: "Learning Hours", color: "from-blue-500 to-indigo-500" },
    { icon: BookOpen, value: "23", label: "Courses Taken", color: "from-emerald-500 to-teal-500" },
    { icon: BarChart, value: "87%", label: "Avg. Performance", color: "from-amber-500 to-yellow-500" },
    { icon: Award, value: "18", label: "Achievements", color: "from-purple-500 to-pink-500" }
  ];

  const courses = [
    { 
      title: "Advanced Physics", 
      progress: 85, 
      nextLesson: "Electromagnetism", 
      teacher: "Dr. Alemayehu", 
      color: "from-indigo-500 to-purple-500" 
    },
    { 
      title: "Mathematics II", 
      progress: 72, 
      nextLesson: "Integral Calculus", 
      teacher: "Mr. Tadesse", 
      color: "from-emerald-500 to-teal-500" 
    },
    { 
      title: "English Literature", 
      progress: 68, 
      nextLesson: "Modern Ethiopian Poetry", 
      teacher: "Ms. Selam", 
      color: "from-amber-500 to-orange-500" 
    },
    { 
      title: "Ethiopian History", 
      progress: 91, 
      nextLesson: "The Gondarine Period", 
      teacher: "Dr. Abebe", 
      color: "from-rose-500 to-pink-500" 
    }
  ];

  const achievements = [
    { id: 1, title: "Physics Master", description: "Scored 95%+ in all physics quizzes", icon: Rocket, unlocked: true },
    { id: 2, title: "Math Wizard", description: "Solved 100+ advanced problems", icon: Book, unlocked: true },
    { id: 3, title: "Perfect Attendance", description: "30 consecutive days of learning", icon: Calendar, unlocked: true },
    { id: 4, title: "Scholar Rank", description: "Top 5% of students", icon: Trophy, unlocked: false },
    { id: 5, title: "Early Bird", description: "Completed lessons before 7 AM", icon: Clock, unlocked: false },
  ];

  const recentActivity = [
    { action: "Completed", item: "Physics: Quantum Mechanics Quiz", time: "2 hours ago", score: "92%" },
    { action: "Started", item: "Mathematics: Integral Calculus", time: "Yesterday", score: "" },
    { action: "Downloaded", item: "History Study Guide", time: "2 days ago", score: "" },
    { action: "Achieved", item: "Perfect Attendance Badge", time: "3 days ago", score: "" },
    { action: "Completed", item: "English Literature Essay", time: "4 days ago", score: "88%" },
  ];

  // Trigger achievement animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAchievement(true);
      setTimeout(() => setShowAchievement(false), 5000);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/10">
      {/* Achievement Unlocked Animation */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white p-6 rounded-2xl shadow-2xl flex items-center">
              <Trophy className="h-12 w-12 mr-4 text-white" />
              <div>
                <h3 className="text-xl font-bold">Achievement Unlocked!</h3>
                <p>Math Wizard - Solved 100+ advanced problems</p>
              </div>
              <Button 
                variant="ghost" 
                className="ml-4 text-white hover:bg-white/10"
                onClick={() => setShowAchievement(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12"
        >
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 p-1">
                <div className="bg-white dark:bg-gray-800 rounded-full p-1">
                    <img 
                        src={userData.avatar} 
                        alt="User Avatar" 
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 bg-emerald-500 rounded-full p-1 border-4 border-white dark:border-gray-800">
                <BadgeCheck className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{userData.name}</h1>
              <p className="text-gray-600 dark:text-gray-300">{userData.grade} • {userData.school}</p>
              <div className="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{userData.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="outline"
              className="border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
            >
              <Settings className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </motion.div>
        
        {/* Streak Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-amber-500 to-orange-400 rounded-2xl p-6 text-white flex items-center justify-between shadow-lg">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-xl font-bold">Learning Streak</h3>
                <p>Don't break your amazing streak!</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">{streakCount}</div>
              <p>days in a row</p>
            </div>
          </div>
        </motion.div>
        
        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-8 border-b border-emerald-100 dark:border-emerald-900/20 pb-4"
        >
          <Button 
            variant={activeTab === 'dashboard' ? "default" : "outline"}
            className={`rounded-full ${activeTab === 'dashboard' ? 'bg-emerald-600' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <BarChart className="h-4 w-4 mr-2" />
            Dashboard
          </Button>
          <Button 
            variant={activeTab === 'courses' ? "default" : "outline"}
            className={`rounded-full ${activeTab === 'courses' ? 'bg-emerald-600' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            My Courses
          </Button>
          <Button 
            variant={activeTab === 'achievements' ? "default" : "outline"}
            className={`rounded-full ${activeTab === 'achievements' ? 'bg-emerald-600' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            <Award className="h-4 w-4 mr-2" />
            Achievements
          </Button>
          <Button 
            variant={activeTab === 'resources' ? "default" : "outline"}
            className={`rounded-full ${activeTab === 'resources' ? 'bg-emerald-600' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            <Bookmark className="h-4 w-4 mr-2" />
            Resources
          </Button>
          <Button 
            variant={activeTab === 'settings' ? "default" : "outline"}
            className={`rounded-full ${activeTab === 'settings' ? 'bg-emerald-600' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </motion.div>
        
        {/* Main Content */}
        <div className={`${is3DMode ? 'transform-gpu perspective-1000' : ''}`}>
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Stats Overview */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <BarChart className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                  Academic Overview
                </h2>
                
                <div ref={statsRef} className="grid grid-cols-2 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      initial="hidden"
                      animate={isStatsInView ? "visible" : "hidden"}
                      className={`${is3DMode ? 'transform-gpu hover:rotate-y-3' : ''}`}
                    >
                      <Card className="h-full bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                        <div className={`h-2 bg-gradient-to-r ${stat.color}`}></div>
                        <CardContent className="p-6">
                          <div className="flex items-start">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} mr-4`}>
                              <stat.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <div className="text-3xl font-bold">{stat.value}</div>
                              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                
                {/* Performance Chart */}
                <Card className="bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="h-5 w-5 text-amber-500 fill-amber-500 mr-2" />
                      Subject Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        { subject: "Physics", progress: 85, color: "bg-indigo-500" },
                        { subject: "Mathematics", progress: 72, color: "bg-emerald-500" },
                        { subject: "English", progress: 68, color: "bg-amber-500" },
                        { subject: "History", progress: 91, color: "bg-rose-500" },
                        { subject: "Chemistry", progress: 78, color: "bg-purple-500" }
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{item.subject}</span>
                            <span>{item.progress}%</span>
                          </div>
                          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div 
                              className={`h-full ${item.color}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${item.progress}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent Activity */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Clock className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                  Recent Activity
                </h2>
                
                <Card className="bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-lg h-full">
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start pb-4 border-b border-gray-100 dark:border-gray-700"
                        >
                          <div className="mr-3 mt-1">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center">
                              {activity.action === "Completed" && (
                                <BadgeCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                              )}
                              {activity.action === "Started" && (
                                <Rocket className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              )}
                              {activity.action === "Downloaded" && (
                                <Download className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                              )}
                              {activity.action === "Achieved" && (
                                <Award className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                              )}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">
                              <span className="text-emerald-600 dark:text-emerald-400">{activity.action}</span> {activity.item}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</div>
                            {activity.score && (
                              <div className="inline-flex items-center px-2 py-1 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 rounded-full text-xs mt-1">
                                Score: {activity.score}
                              </div>
                            )}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full mt-4 text-emerald-600 dark:text-emerald-400">
                      View All Activity
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}
          
          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                My Courses
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    className={`${is3DMode ? 'transform-gpu hover:rotate-y-3' : ''}`}
                  >
                    <Card className="bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-full">
                      <div className={`h-24 bg-gradient-to-r ${course.color}`}></div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold">{course.title}</h3>
                          <span className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 text-sm font-medium px-3 py-1 rounded-full">
                            {course.progress}% Complete
                          </span>
                        </div>
                        
                        <div className="mb-6">
                          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-emerald-500"
                              initial={{ width: 0 }}
                              animate={{ width: `${course.progress}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            ></motion.div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Next Lesson</div>
                            <div className="font-medium">{course.nextLesson}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Teacher</div>
                            <div className="font-medium">{course.teacher}</div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                            Continue Learning
                          </Button>
                          <Button variant="outline" className="border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
                            Resources
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* Course Recommendations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Rocket className="h-5 w-5 text-amber-500 mr-2" />
                  Recommended For You
                </h3>
                
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/5 rounded-2xl p-6 border border-amber-200 dark:border-amber-900/20">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-400 rounded-xl w-16 h-16 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1">Advanced Calculus</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Based on your performance in Mathematics, we recommend this advanced course
                      </p>
                      <div className="flex items-center text-sm">
                        <span className="bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 px-2 py-1 rounded mr-2">
                          98% Match
                        </span>
                        <span>12 hours • 24 lessons</span>
                      </div>
                    </div>
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      Explore Course
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
          
          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                  My Achievements
                </h2>
                <div className="flex items-center bg-emerald-100 dark:bg-emerald-900/20 px-4 py-2 rounded-full mt-4 md:mt-0">
                  <Trophy className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                  <span className="font-medium">18/42 Unlocked</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ y: -10 }}
                    className={`${is3DMode ? 'transform-gpu' : ''}`}
                  >
                    <Card className={`h-full bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${achievement.unlocked ? '' : 'opacity-60'}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start mb-4">
                          <div className={`mr-4 p-3 rounded-xl ${achievement.unlocked ? 'bg-gradient-to-r from-amber-500 to-yellow-400' : 'bg-gray-200 dark:bg-gray-700'}`}>
                            <achievement.icon className={`h-6 w-6 ${achievement.unlocked ? 'text-white' : 'text-gray-400'}`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold">{achievement.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                          </div>
                        </div>
                        
                        {achievement.unlocked ? (
                          <div className="flex justify-between items-center">
                            <span className="inline-flex items-center bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm">
                              <BadgeCheck className="h-4 w-4 mr-1" />
                              Unlocked
                            </span>
                            <span className="text-xs text-gray-500">Jan 12, 2024</span>
                          </div>
                        ) : (
                          <div className="bg-gray-100 dark:bg-gray-700/30 rounded-lg p-3 text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Complete 10 more math problems to unlock
                            </p>
                            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden mt-2">
                              <div className="h-full bg-amber-500 w-7/10"></div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Settings className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                  Account Settings
                </h2>
                
                <Card className="bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold mb-2">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">Full Name</label>
                            <Input value="Mikias Kebede" className="rounded-xl" />
                          </div>
                          <div>
                            <label className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">Email</label>
                            <Input value="mikias@fayidaacademy.com" className="rounded-xl" />
                          </div>
                          <div>
                            <label className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">Phone</label>
                            <Input value="+251 97 048 3333" className="rounded-xl" />
                          </div>
                          <div>
                            <label className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">Location</label>
                            <Input value="Addis Ababa, Ethiopia" className="rounded-xl" />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-bold mb-2">Academic Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">Grade Level</label>
                            <select className="w-full border rounded-xl px-4 py-2 bg-white dark:bg-gray-800">
                              <option>Grade 11</option>
                              <option>Grade 12</option>
                              <option>University</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">School</label>
                            <Input value="Addis Ababa Secondary School" className="rounded-xl" />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-bold mb-2">Password & Security</h3>
                        <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl">
                          <div className="flex items-center">
                            <Lock className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                            <span>Password last changed 3 months ago</span>
                          </div>
                          <Button variant="outline" className="border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
                            Change Password
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Bell className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                  Preferences
                </h2>
                
                <Card className="bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-lg mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Notification Settings</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Course Updates", checked: true },
                        { label: "New Resources", checked: true },
                        { label: "Achievements", checked: true },
                        { label: "Study Reminders", checked: false },
                        { label: "Promotional Offers", checked: false }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span>{item.label}</span>
                          <label className="switch">
                            <input type="checkbox" defaultChecked={item.checked} />
                            <span className="slider"></span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-gray-800 border-0 rounded-2xl overflow-hidden shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Help & Support</h3>
                    <div className="space-y-3">
                      <Button variant="ghost" className="w-full justify-start">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Help Center
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Video className="h-4 w-4 mr-2" />
                        Tutorial Videos
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        User Guides
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Report a Problem
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}