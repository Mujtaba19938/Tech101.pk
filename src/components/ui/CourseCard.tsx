import React, { lazy } from 'react';
import { ChevronRightIcon } from 'lucide-react';
interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  onViewDetails: () => void;
}
const CourseCard = ({
  title,
  description,
  image,
  category,
  duration,
  onViewDetails
}: CourseCardProps) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 h-full flex flex-col transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-accent">
      <img src={image} alt={`${title} course thumbnail`} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <span className="px-3 py-1 bg-blue-50 text-accent rounded-full text-sm font-medium">
            {category}
          </span>
          <span className="text-sm text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        <button onClick={onViewDetails} className="group mt-auto inline-flex items-center justify-center w-full px-6 py-3 bg-accent text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
          View Course Details
          <ChevronRightIcon size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>;
};
export default CourseCard;