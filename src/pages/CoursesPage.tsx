import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ChevronRightIcon, SearchIcon, FilterIcon } from 'lucide-react';
import CourseDetailCard from '../components/ui/CourseDetailCard';
const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const courseCategories = ['All', 'Development', 'Data Science', 'Design', 'Marketing', 'Cloud'];
  const courses = [{
    id: 1,
    title: 'Web Development Bootcamp',
    description: 'Master modern web development with HTML, CSS, JavaScript, React, and Node.js through hands-on projects and real-world applications.',
    longDescription: "This comprehensive bootcamp takes you from the basics of HTML and CSS to building complex full-stack applications with React and Node.js. You'll learn responsive design, state management, API integration, database design, authentication, and deployment. By the end of this course, you'll have built 5 production-ready projects for your portfolio.",
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    category: 'Development',
    duration: '12 Weeks',
    schedule: 'Mon, Wed, Fri (6:00 PM - 9:00 PM)',
    price: 45000,
    instructor: 'Asad Khan',
    instructorImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    studentsEnrolled: 1250,
    highlights: ['Build 5 real-world projects for your portfolio', 'Learn industry best practices from working developers', 'Job placement assistance with our partner companies', 'Access to exclusive tech community and networking events'],
    curriculum: ['HTML5, CSS3, and Responsive Design', 'JavaScript Fundamentals and ES6+', 'React, Context API, and Redux', 'Node.js, Express, and MongoDB', 'Authentication, Security, and Deployment']
  }, {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Learn data analysis, visualization, and machine learning techniques with Python, pandas, and scikit-learn to solve real business problems.',
    longDescription: "This course takes you from data science novice to practitioner. You'll learn to collect, clean, and analyze data using Python and its powerful libraries. Master data visualization techniques to communicate insights effectively, and build predictive models using machine learning algorithms. You'll complete the course with a capstone project solving a real business problem.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Data Science',
    duration: '10 Weeks',
    schedule: 'Tue, Thu (6:00 PM - 9:00 PM), Sat (10:00 AM - 2:00 PM)',
    price: 52000,
    instructor: 'Fatima Ahmed',
    instructorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    studentsEnrolled: 875,
    highlights: ['Learn from experienced data scientists working in the industry', 'Work with real datasets from Pakistani businesses', 'Build a comprehensive data science portfolio', 'Career coaching and interview preparation'],
    curriculum: ['Python Programming for Data Science', 'Data Cleaning and Preprocessing', 'Exploratory Data Analysis and Visualization', 'Statistical Analysis and Hypothesis Testing', 'Machine Learning Algorithms and Model Deployment']
  }, {
    id: 3,
    title: 'UI/UX Design Essentials',
    description: 'Develop user-centered design skills with Figma, learn design principles, wireframing, prototyping, and user research methodologies.',
    longDescription: "Learn to design digital products that users love. This course covers the entire UI/UX design process from user research and wireframing to creating high-fidelity prototypes and conducting usability tests. You'll master Figma for design and collaboration, and learn how to effectively communicate your design decisions. By the end of the course, you'll have a professional design portfolio.",
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    category: 'Design',
    duration: '8 Weeks',
    schedule: 'Tue, Thu (6:00 PM - 8:30 PM), Sat (11:00 AM - 2:00 PM)',
    price: 38000,
    instructor: 'Zara Malik',
    instructorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    studentsEnrolled: 950,
    highlights: ['Learn from award-winning UI/UX designers', 'Build a professional design portfolio', 'Access to design tools and resources', 'Networking with design professionals and agencies'],
    curriculum: ['Design Thinking and UX Principles', 'User Research and Personas', 'Information Architecture and Wireframing', 'UI Design, Color Theory, and Typography', 'Prototyping, User Testing, and Design Systems']
  }, {
    id: 4,
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile applications using React Native and learn app deployment, state management, and native device features.',
    longDescription: "Learn to build native mobile apps for iOS and Android using React Native. This course teaches you to create beautiful, responsive interfaces and implement complex functionality like authentication, data storage, camera access, and geolocation. You'll understand how to manage state effectively and deploy your apps to app stores. By the end, you'll have published your own mobile app.",
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Development',
    duration: '10 Weeks',
    schedule: 'Mon, Wed (6:00 PM - 9:00 PM), Sat (10:00 AM - 1:00 PM)',
    price: 48000,
    instructor: 'Ali Hassan',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    studentsEnrolled: 780,
    highlights: ['Learn from mobile developers with app store success', 'Build and publish real apps to the app stores', 'Master both iOS and Android development', 'Understand app monetization strategies'],
    curriculum: ['React Native Fundamentals', 'Navigation and App Structure', 'State Management with Redux', 'Native Device Features Integration', 'App Testing, Publishing, and Monetization']
  }, {
    id: 5,
    title: 'Digital Marketing Mastery',
    description: 'Learn SEO, social media marketing, content strategy, and analytics to create effective digital marketing campaigns for businesses.',
    longDescription: "Master the art and science of digital marketing in this comprehensive course. You'll learn to create and execute marketing strategies across search engines, social media, email, and content platforms. Understand how to analyze campaign performance, optimize for conversions, and calculate ROI. This course includes hands-on experience with real marketing tools and platforms used by professionals.",
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Marketing',
    duration: '6 Weeks',
    schedule: 'Mon, Wed, Fri (5:30 PM - 7:30 PM)',
    price: 30000,
    instructor: 'Sana Javed',
    instructorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    studentsEnrolled: 1120,
    highlights: ['Learn from marketers with experience in Pakistani and international markets', 'Work on live campaigns with real budgets', 'Get certified in Google Analytics and Facebook Ads', 'Develop a comprehensive digital marketing strategy'],
    curriculum: ['Digital Marketing Strategy and Planning', 'Search Engine Optimization (SEO)', 'Social Media Marketing and Paid Advertising', 'Content Marketing and Email Campaigns', 'Analytics, Reporting, and Conversion Optimization']
  }, {
    id: 6,
    title: 'Cloud Computing & DevOps',
    description: 'Master AWS, Docker, Kubernetes, and CI/CD pipelines to build, deploy, and manage scalable cloud infrastructure and applications.',
    longDescription: "Become a cloud and DevOps professional with this in-depth course. You'll learn to architect scalable solutions on AWS, containerize applications with Docker, orchestrate with Kubernetes, and implement automated CI/CD pipelines. The course covers infrastructure as code, monitoring, logging, and security best practices. You'll complete hands-on labs and real-world projects to solidify your skills.",
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    category: 'Cloud',
    duration: '12 Weeks',
    schedule: 'Tue, Thu (6:00 PM - 9:00 PM), Sun (10:00 AM - 2:00 PM)',
    price: 55000,
    instructor: 'Umar Farooq',
    instructorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    studentsEnrolled: 680,
    highlights: ['Learn from certified AWS architects and DevOps engineers', 'Access to AWS free tier resources for hands-on practice', 'Prepare for AWS certification exams', 'Build an impressive DevOps portfolio'],
    curriculum: ['Cloud Fundamentals and AWS Core Services', 'Docker Containerization and Kubernetes Orchestration', 'Infrastructure as Code with Terraform', 'CI/CD Pipeline Implementation', 'Monitoring, Logging, and Cloud Security']
  }, {
    id: 7,
    title: 'Cybersecurity Fundamentals',
    description: 'Learn to protect systems and networks from digital attacks. Master security principles, threat detection, and ethical hacking techniques.',
    longDescription: "This course provides a comprehensive introduction to cybersecurity concepts and practices. You'll learn to identify vulnerabilities, implement security controls, and respond to incidents. The curriculum covers network security, encryption, authentication, security policies, and ethical hacking. You'll participate in hands-on labs and simulated security scenarios to develop practical skills.",
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Development',
    duration: '10 Weeks',
    schedule: 'Tue, Thu (6:00 PM - 9:00 PM), Sat (10:00 AM - 1:00 PM)',
    price: 50000,
    instructor: 'Imran Malik',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    studentsEnrolled: 720,
    highlights: ['Learn from certified security professionals', 'Hands-on experience with security tools and techniques', 'Preparation for CompTIA Security+ certification', 'Participate in capture-the-flag security challenges'],
    curriculum: ['Security Fundamentals and Principles', 'Network Security and Cryptography', 'Vulnerability Assessment and Penetration Testing', 'Security Policies and Risk Management', 'Incident Response and Forensics']
  }, {
    id: 8,
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Dive deep into AI and ML algorithms, neural networks, and deep learning to build intelligent systems and predictive models.',
    longDescription: "This advanced course covers the theory and practice of artificial intelligence and machine learning. You'll learn to implement and train various algorithms for classification, regression, clustering, and deep learning. The course includes natural language processing, computer vision, and reinforcement learning components. You'll work on practical projects using TensorFlow and PyTorch to build real AI applications.",
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    category: 'Data Science',
    duration: '14 Weeks',
    schedule: 'Mon, Wed (6:00 PM - 9:00 PM), Sat (10:00 AM - 2:00 PM)',
    price: 60000,
    instructor: 'Dr. Ahmed Khan',
    instructorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    studentsEnrolled: 580,
    highlights: ['Learn from AI researchers and practitioners', 'Build an AI project portfolio', 'Access to GPU resources for deep learning', 'Participate in AI hackathons and competitions'],
    curriculum: ['Machine Learning Foundations', 'Supervised and Unsupervised Learning', 'Neural Networks and Deep Learning', 'Natural Language Processing', 'Computer Vision and Reinforcement Learning']
  }];
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return <div className="flex flex-col min-h-screen bg-secondary">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }}>
                Explore Our Courses
              </motion.h1>
              <motion.p className="text-lg md:text-xl mb-8" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                Industry-relevant programs designed to help you master in-demand
                skills and launch your tech career
              </motion.p>
              <motion.div className="flex flex-col md:flex-row justify-center gap-4" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }}>
                <div className="relative flex-grow max-w-lg">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input type="text" placeholder="Search courses..." className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                </div>
                <div className="relative">
                  <FilterIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select className="pl-10 pr-8 py-3 rounded-lg bg-white/10 border border-white/20 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                    {courseCategories.map(category => <option key={category} value={category} className="bg-primary text-white">
                        {category}
                      </option>)}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="fill-current h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {filteredCourses.length > 0 ? <div className="grid grid-cols-1 gap-8">
                {filteredCourses.map((course, index) => <motion.div key={course.id} initial={{
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
                    <CourseDetailCard {...course} />
                  </motion.div>)}
              </div> : <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  No courses found
                </h3>
                <p className="text-gray-600 mb-8">
                  Try adjusting your search or filter criteria
                </p>
                <button onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }} className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Reset filters
                </button>
              </div>}
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Need Help Choosing a Course?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our education consultants can help you find the right course based
              on your career goals, experience level, and interests.
            </p>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
              Book a Free Consultation
              <ChevronRightIcon size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default CoursesPage;