import React from 'react';
import { CodeIcon, DatabaseIcon, PenToolIcon, TrendingUpIcon } from 'lucide-react';
import CareerCard from './ui/CareerCard';
import { motion } from 'framer-motion';
const CareerPathways = () => {
  const careers = [{
    icon: CodeIcon,
    title: 'Software Developer',
    description: 'Build applications and systems that power modern businesses. Master programming languages, frameworks, and software development methodologies.',
    link: '/careers/software-developer'
  }, {
    icon: DatabaseIcon,
    title: 'Data Scientist',
    description: 'Extract insights from complex datasets to drive business decisions. Learn statistical analysis, machine learning, and data visualization techniques.',
    link: '/careers/data-scientist'
  }, {
    icon: PenToolIcon,
    title: 'UX/UI Designer',
    description: 'Create intuitive and engaging digital experiences. Develop skills in user research, wireframing, prototyping, and visual design.',
    link: '/careers/uxui-designer'
  }, {
    icon: TrendingUpIcon,
    title: 'Digital Marketer',
    description: 'Drive business growth through digital channels. Master SEO, content marketing, social media strategy, and analytics.',
    link: '/careers/digital-marketer'
  }];
  return <section id="career-pathways" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Career Pathways
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore the high-demand tech careers our courses prepare you for
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {careers.map((career, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="h-full">
              <CareerCard {...career} />
            </motion.div>)}
        </div>
        <motion.div className="mt-12 text-center" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }}>
          <a href="#" className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent rounded-lg font-medium transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
            Talk to a Career Advisor
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>;
};
export default CareerPathways;