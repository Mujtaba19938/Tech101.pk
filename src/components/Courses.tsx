import React, { useEffect, useState, useRef } from 'react';
import CourseCard from './ui/CourseCard';
import CourseModal from './ui/CourseModal';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openCourseDetails = (course: any) => {
    setSelectedCourse({
      ...course,
      longDescription: getCourseLongDescription(course.title),
      schedule: getCourseSchedule(course.title),
      price: getCoursePrice(course.title),
      instructor: getCourseInstructor(course.title),
      instructorImage: getCourseInstructorImage(course.title),
      studentsEnrolled: getCourseEnrollment(course.title),
      highlights: getCourseHighlights(course.title),
      curriculum: getCourseCurriculum(course.title)
    });
    setIsModalOpen(true);
  };
  // Helper functions to get additional course data
  const getCourseLongDescription = (title: string) => {
    const descriptions: {
      [key: string]: string;
    } = {
      'Web Development Bootcamp': "This comprehensive bootcamp takes you from the basics of HTML and CSS to building complex full-stack applications with React and Node.js. You'll learn responsive design, state management, API integration, database design, authentication, and deployment. By the end of this course, you'll have built 5 production-ready projects for your portfolio.",
      'Data Science Fundamentals': "This course takes you from data science novice to practitioner. You'll learn to collect, clean, and analyze data using Python and its powerful libraries. Master data visualization techniques to communicate insights effectively, and build predictive models using machine learning algorithms. You'll complete the course with a capstone project solving a real business problem.",
      'UI/UX Design Essentials': "Learn to design digital products that users love. This course covers the entire UI/UX design process from user research and wireframing to creating high-fidelity prototypes and conducting usability tests. You'll master Figma for design and collaboration, and learn how to effectively communicate your design decisions. By the end of the course, you'll have a professional design portfolio.",
      'Mobile App Development': "Learn to build native mobile apps for iOS and Android using React Native. This course teaches you to create beautiful, responsive interfaces and implement complex functionality like authentication, data storage, camera access, and geolocation. You'll understand how to manage state effectively and deploy your apps to app stores. By the end, you'll have published your own mobile app.",
      'Digital Marketing Mastery': "Master the art and science of digital marketing in this comprehensive course. You'll learn to create and execute marketing strategies across search engines, social media, email, and content platforms. Understand how to analyze campaign performance, optimize for conversions, and calculate ROI. This course includes hands-on experience with real marketing tools and platforms used by professionals.",
      'Cloud Computing & DevOps': "Become a cloud and DevOps professional with this in-depth course. You'll learn to architect scalable solutions on AWS, containerize applications with Docker, orchestrate with Kubernetes, and implement automated CI/CD pipelines. The course covers infrastructure as code, monitoring, logging, and security best practices. You'll complete hands-on labs and real-world projects to solidify your skills."
    };
    return descriptions[title] || "This course provides comprehensive training to help you master essential skills and advance your career in this field. Through hands-on projects and expert instruction, you'll gain practical experience and build a professional portfolio.";
  };
  const getCourseSchedule = (title: string) => {
    const schedules: {
      [key: string]: string;
    } = {
      'Web Development Bootcamp': 'Mon, Wed, Fri (6:00 PM - 9:00 PM)',
      'Data Science Fundamentals': 'Tue, Thu (6:00 PM - 9:00 PM), Sat (10:00 AM - 2:00 PM)',
      'UI/UX Design Essentials': 'Tue, Thu (6:00 PM - 8:30 PM), Sat (11:00 AM - 2:00 PM)',
      'Mobile App Development': 'Mon, Wed (6:00 PM - 9:00 PM), Sat (10:00 AM - 1:00 PM)',
      'Digital Marketing Mastery': 'Mon, Wed, Fri (5:30 PM - 7:30 PM)',
      'Cloud Computing & DevOps': 'Tue, Thu (6:00 PM - 9:00 PM), Sun (10:00 AM - 2:00 PM)'
    };
    return schedules[title] || 'Flexible schedule, contact for details';
  };
  const getCoursePrice = (title: string) => {
    const prices: {
      [key: string]: number;
    } = {
      'Web Development Bootcamp': 45000,
      'Data Science Fundamentals': 52000,
      'UI/UX Design Essentials': 38000,
      'Mobile App Development': 48000,
      'Digital Marketing Mastery': 30000,
      'Cloud Computing & DevOps': 55000
    };
    return prices[title] || 40000;
  };
  const getCourseInstructor = (title: string) => {
    const instructors: {
      [key: string]: string;
    } = {
      'Web Development Bootcamp': 'Asad Khan',
      'Data Science Fundamentals': 'Fatima Ahmed',
      'UI/UX Design Essentials': 'Zara Malik',
      'Mobile App Development': 'Ali Hassan',
      'Digital Marketing Mastery': 'Sana Javed',
      'Cloud Computing & DevOps': 'Umar Farooq'
    };
    return instructors[title] || 'Industry Expert';
  };
  const getCourseInstructorImage = (title: string) => {
    const images: {
      [key: string]: string;
    } = {
      'Web Development Bootcamp': 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      'Data Science Fundamentals': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      'UI/UX Design Essentials': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      'Mobile App Development': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      'Digital Marketing Mastery': 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      'Cloud Computing & DevOps': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
    };
    return images[title] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80';
  };
  const getCourseEnrollment = (title: string) => {
    const enrollments: {
      [key: string]: number;
    } = {
      'Web Development Bootcamp': 1250,
      'Data Science Fundamentals': 875,
      'UI/UX Design Essentials': 950,
      'Mobile App Development': 780,
      'Digital Marketing Mastery': 1120,
      'Cloud Computing & DevOps': 680
    };
    return enrollments[title] || 800;
  };
  const getCourseHighlights = (title: string) => {
    const highlights: {
      [key: string]: string[];
    } = {
      'Web Development Bootcamp': ['Build 5 real-world projects for your portfolio', 'Learn industry best practices from working developers', 'Job placement assistance with our partner companies', 'Access to exclusive tech community and networking events'],
      'Data Science Fundamentals': ['Learn from experienced data scientists working in the industry', 'Work with real datasets from Pakistani businesses', 'Build a comprehensive data science portfolio', 'Career coaching and interview preparation'],
      'UI/UX Design Essentials': ['Learn from award-winning UI/UX designers', 'Build a professional design portfolio', 'Access to design tools and resources', 'Networking with design professionals and agencies'],
      'Mobile App Development': ['Learn from mobile developers with app store success', 'Build and publish real apps to the app stores', 'Master both iOS and Android development', 'Understand app monetization strategies'],
      'Digital Marketing Mastery': ['Learn from marketers with experience in Pakistani and international markets', 'Work on live campaigns with real budgets', 'Get certified in Google Analytics and Facebook Ads', 'Develop a comprehensive digital marketing strategy'],
      'Cloud Computing & DevOps': ['Learn from certified AWS architects and DevOps engineers', 'Access to AWS free tier resources for hands-on practice', 'Prepare for AWS certification exams', 'Build an impressive DevOps portfolio']
    };
    return highlights[title] || ['Learn from industry experts with real-world experience', 'Hands-on projects to build your professional portfolio', 'Career support and networking opportunities', 'Access to learning resources and community'];
  };
  const getCourseCurriculum = (title: string) => {
    const curriculums: {
      [key: string]: string[];
    } = {
      'Web Development Bootcamp': ['HTML5, CSS3, and Responsive Design', 'JavaScript Fundamentals and ES6+', 'React, Context API, and Redux', 'Node.js, Express, and MongoDB', 'Authentication, Security, and Deployment'],
      'Data Science Fundamentals': ['Python Programming for Data Science', 'Data Cleaning and Preprocessing', 'Exploratory Data Analysis and Visualization', 'Statistical Analysis and Hypothesis Testing', 'Machine Learning Algorithms and Model Deployment'],
      'UI/UX Design Essentials': ['Design Thinking and UX Principles', 'User Research and Personas', 'Information Architecture and Wireframing', 'UI Design, Color Theory, and Typography', 'Prototyping, User Testing, and Design Systems'],
      'Mobile App Development': ['React Native Fundamentals', 'Navigation and App Structure', 'State Management with Redux', 'Native Device Features Integration', 'App Testing, Publishing, and Monetization'],
      'Digital Marketing Mastery': ['Digital Marketing Strategy and Planning', 'Search Engine Optimization (SEO)', 'Social Media Marketing and Paid Advertising', 'Content Marketing and Email Campaigns', 'Analytics, Reporting, and Conversion Optimization'],
      'Cloud Computing & DevOps': ['Cloud Fundamentals and AWS Core Services', 'Docker Containerization and Kubernetes Orchestration', 'Infrastructure as Code with Terraform', 'CI/CD Pipeline Implementation', 'Monitoring, Logging, and Cloud Security']
    };
    return curriculums[title] || ['Fundamentals and Core Concepts', 'Practical Skills Development', 'Advanced Techniques and Methodologies', 'Real-world Projects and Applications', 'Industry Best Practices and Career Preparation'];
  };
  const courses = [{
    title: 'Web Development Bootcamp',
    description: 'Master modern web development with HTML, CSS, JavaScript, React, and Node.js through hands-on projects and real-world applications.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    category: 'Development',
    duration: '12 Weeks'
  }, {
    title: 'Data Science Fundamentals',
    description: 'Learn data analysis, visualization, and machine learning techniques with Python, pandas, and scikit-learn to solve real business problems.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Data Science',
    duration: '10 Weeks'
  }, {
    title: 'UI/UX Design Essentials',
    description: 'Develop user-centered design skills with Figma, learn design principles, wireframing, prototyping, and user research methodologies.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    category: 'Design',
    duration: '8 Weeks'
  }, {
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile applications using React Native and learn app deployment, state management, and native device features.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Development',
    duration: '10 Weeks'
  }, {
    title: 'Digital Marketing Mastery',
    description: 'Learn SEO, social media marketing, content strategy, and analytics to create effective digital marketing campaigns for businesses.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Marketing',
    duration: '6 Weeks'
  }, {
    title: 'Cloud Computing & DevOps',
    description: 'Master AWS, Docker, Kubernetes, and CI/CD pipelines to build, deploy, and manage scalable cloud infrastructure and applications.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    category: 'Cloud',
    duration: '12 Weeks'
  }];
  return <section id="courses" className="py-20 bg-gray-50">
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
            Our Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Industry-relevant courses designed to help you master in-demand
            skills and launch your tech career
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => <motion.div key={index} initial={{
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
        }}>
              <CourseCard {...course} onViewDetails={() => openCourseDetails(course)} />
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
        delay: 0.6
      }}>
          <Link to="/courses" className="group inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
            Explore All Courses
            <ChevronRightIcon size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
      {/* Course Modal */}
      {selectedCourse && <CourseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} course={selectedCourse} />}
    </section>;
};
export default Courses;