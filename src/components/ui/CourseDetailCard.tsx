import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, ClockIcon, CalendarIcon, UsersIcon, CheckIcon } from 'lucide-react';
interface CourseDetailCardProps {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  duration: string;
  schedule: string;
  price: number;
  instructor: string;
  instructorImage: string;
  studentsEnrolled: number;
  highlights: string[];
  curriculum: string[];
}
const CourseDetailCard = ({
  id,
  title,
  description,
  longDescription,
  image,
  category,
  duration,
  schedule,
  price,
  instructor,
  instructorImage,
  studentsEnrolled,
  highlights,
  curriculum
}: CourseDetailCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ur-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('PKR', 'Rs.');
  };
  return <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3">
          <img src={image} alt={`${title} course thumbnail`} className="w-full h-64 lg:h-full object-cover" loading="lazy" />
        </div>
        <div className="lg:w-2/3 p-6 lg:p-8">
          <div className="flex flex-wrap justify-between items-start mb-4">
            <span className="px-3 py-1 bg-blue-50 text-accent rounded-full text-sm font-medium mb-2">
              {category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <UsersIcon size={16} className="mr-1" />
              <span>{studentsEnrolled.toLocaleString()} students enrolled</span>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
            {title}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {isExpanded ? longDescription : description}
          </p>
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-accent font-medium hover:text-blue-700 transition-colors mb-6 flex items-center">
            {isExpanded ? 'Show less' : 'Read more'}
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex items-center">
              <ClockIcon size={20} className="text-accent mr-2" />
              <span className="text-gray-700">{duration}</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon size={20} className="text-accent mr-2" />
              <span className="text-gray-700">{schedule}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex items-center">
              <img src={instructorImage} alt={instructor} className="w-10 h-10 rounded-full mr-3 object-cover" />
              <div>
                <p className="text-sm text-gray-500">Instructor</p>
                <p className="font-medium">{instructor}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-2xl font-bold text-accent">
                {formatPrice(price)}
              </p>
            </div>
          </div>
          {isExpanded && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-primary">
                    Course Highlights
                  </h3>
                  <ul className="space-y-2">
                    {highlights.map((highlight, index) => <li key={index} className="flex items-start">
                        <CheckIcon size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-primary">
                    Curriculum Overview
                  </h3>
                  <ul className="space-y-2">
                    {curriculum.map((item, index) => <li key={index} className="flex items-start">
                        <span className="bg-blue-50 text-accent rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </motion.div>}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`#enroll-${id}`} className="group px-6 py-3 bg-accent text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md flex items-center justify-center">
              Enroll Now
              <ChevronRightIcon size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={`#details-${id}`} className="group px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-md flex items-center justify-center">
              Download Syllabus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default CourseDetailCard;