import React from 'react';
import { BoxIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface CareerCardProps {
  icon: BoxIcon;
  title: string;
  description: string;
  link: string;
}
const CareerCard = ({
  icon: Icon,
  title,
  description,
  link
}: CareerCardProps) => {
  return <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-accent group">
      <div className="text-accent mb-4 transition-transform duration-300 group-hover:scale-110">
        <Icon size={40} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
      <div className="mt-6 pt-4 border-t border-gray-100">
        <Link to={link} className="inline-flex items-center text-accent font-medium hover:text-blue-700 transition-colors">
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>;
};
export default CareerCard;