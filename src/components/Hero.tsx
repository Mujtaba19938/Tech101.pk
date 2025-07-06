import React, { useEffect, lazy } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section id="home" className="relative w-full bg-primary text-secondary min-h-screen flex items-center">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")'
    }} aria-hidden="true">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            Launch Your Tech Career in Pakistan
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-10 leading-relaxed" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            Industry-relevant skills and training for the digital economy
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row justify-center gap-4 mb-12" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            <a href="#courses" className="group px-8 py-4 bg-accent text-secondary rounded-lg font-medium text-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent flex items-center justify-center">
              Start Learning
              <ChevronRightIcon size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/courses" className="group px-8 py-4 bg-transparent border-2 border-secondary text-secondary rounded-lg font-medium text-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary flex items-center justify-center">
              Explore Courses
              <ChevronRightIcon size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          <motion.div className="flex flex-col items-center gap-6" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }}>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="text-yellow-400 flex">
                  {[1, 2, 3, 4, 5].map(star => <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>)}
                </div>
                <span className="font-medium">4.8/5 student satisfaction</span>
              </div>
              <div className="flex items-center mt-3 sm:mt-0">
                <div className="flex -space-x-2 mr-3">
                  {['https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'].map((src, i) => <img key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-secondary" src={src} alt={`Student ${i + 1}`} loading="lazy" />)}
                </div>
                <span className="font-medium">Join 5,000+ students</span>
              </div>
            </div>
            <a href="#about" className="text-secondary flex flex-col items-center mt-8 animate-bounce hover:text-accent transition-colors" aria-label="Scroll down to learn more">
              <span className="mb-2 text-sm">Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;