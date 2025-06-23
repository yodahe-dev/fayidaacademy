'use client';

import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm Fayida, your study assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    // Add user message
    const userMessage = { id: messages.length + 1, text: newMessage, sender: 'user' };
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Simulate bot response after delay
    setTimeout(() => {
      const botResponses = [
        "I can help you with study tips, resources, and more!",
        "Would you like help with a specific subject?",
        "Check our FAQ section for quick answers to common questions.",
        "I'm here to support your learning journey!"
      ];
      const botMessage = { 
        id: messages.length + 2, 
        text: botResponses[Math.floor(Math.random() * botResponses.length)], 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100 }}
            className="w-80 h-96 bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700"
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-4 text-white flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-white p-1 rounded-full mr-3">
                  <Bot className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Study Support</h3>
                  <p className="text-xs opacity-80">We're online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[70%] rounded-xl p-3 ${
                      message.sender === 'user' 
                        ? 'bg-emerald-100 dark:bg-emerald-900/50 rounded-br-none' 
                        : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-bl-none'
                    }`}
                  >
                    <div className="flex items-start">
                      {message.sender === 'bot' && (
                        <Bot className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-1 mr-2 flex-shrink-0" />
                      )}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Message input */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-center">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
                <button 
                  onClick={handleSendMessage}
                  className="ml-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                  disabled={!newMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatSupport;