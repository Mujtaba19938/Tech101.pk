import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClockIcon, CalendarIcon, UsersIcon, CheckIcon, XIcon } from 'lucide-react';
interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    id?: number;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    category: string;
    duration: string;
    schedule?: string;
    price?: number;
    instructor?: string;
    instructorImage?: string;
    studentsEnrolled?: number;
    highlights?: string[];
    curriculum?: string[];
  };
}
const CourseModal = ({
  isOpen,
  onClose,
  course
}: CourseModalProps) => {
  // If modal is not open, don't render anything
  if (!isOpen) return null;
  // Format price if it exists
  const formatPrice = (price?: number) => {
    if (!price) return 'Contact for pricing';
    return new Intl.NumberFormat('ur-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('PKR', 'Rs.');
  };
  return <AnimatePresence>
      {isOpen && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-y-auto">
          <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0,
        scale: 0.9
      }} transition={{
        duration: 0.3
      }} className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button onClick={onClose} className="absolute right-4 top-4 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors" aria-label="Close modal">
                <XIcon size={24} />
              </button>
              <div className="h-64 md:h-72 w-full bg-cover bg-center bg-no-repeat relative" style={{
            backgroundImage: `url(${course.image})`
          }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="px-3 py-1 bg-accent text-white rounded-full text-sm font-medium mb-2 inline-block">
                    {course.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-2">
                    {course.title}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="flex items-center">
                    <ClockIcon size={20} className="text-accent mr-2" />
                    <span className="text-gray-700">{course.duration}</span>
                  </div>
                  {course.schedule && <div className="flex items-center">
                      <CalendarIcon size={20} className="text-accent mr-2" />
                      <span className="text-gray-700">{course.schedule}</span>
                    </div>}
                  {course.studentsEnrolled && <div className="flex items-center">
                      <UsersIcon size={20} className="text-accent mr-2" />
                      <span className="text-gray-700">
                        {course.studentsEnrolled.toLocaleString()} students
                        enrolled
                      </span>
                    </div>}
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2 text-primary">
                    Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {course.longDescription || course.description}
                  </p>
                </div>
                {course.instructor && <div className="flex items-center mb-6">
                    {course.instructorImage && <img src={course.instructorImage} alt={course.instructor} className="w-12 h-12 rounded-full mr-4 object-cover" />}
                    <div>
                      <p className="text-sm text-gray-500">Instructor</p>
                      <p className="font-medium">{course.instructor}</p>
                    </div>
                  </div>}
                {course.price !== undefined && <div className="mb-6">
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-2xl font-bold text-accent">
                      {formatPrice(course.price)}
                    </p>
                  </div>}
                {course.highlights && course.highlights.length > 0 && <div className="mb-6">
                    <h3 className="text-lg font-bold mb-4 text-primary">
                      Course Highlights
                    </h3>
                    <ul className="space-y-2">
                      {course.highlights.map((highlight, index) => <li key={index} className="flex items-start">
                          <CheckIcon size={18} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>)}
                    </ul>
                  </div>}
                {course.curriculum && course.curriculum.length > 0 && <div className="mb-6">
                    <h3 className="text-lg font-bold mb-4 text-primary">
                      Curriculum Overview
                    </h3>
                    <ul className="space-y-2">
                      {course.curriculum.map((item, index) => <li key={index} className="flex items-start">
                          <span className="bg-blue-50 text-accent rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span>{item}</span>
                        </li>)}
                    </ul>
                  </div>}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button className="group px-6 py-3 bg-accent text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md flex items-center justify-center">
                    Enroll Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="group px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-md flex items-center justify-center">
                    Download Syllabus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>}
    </AnimatePresence>;
};
export default CourseModal;