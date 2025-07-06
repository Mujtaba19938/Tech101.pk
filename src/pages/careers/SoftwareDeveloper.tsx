import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, CodeIcon, CheckIcon, TrendingUpIcon, BookOpenIcon, BriefcaseIcon } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
const SoftwareDeveloper = () => {
  const skills = ['Programming languages (JavaScript, Python, Java, C++)', 'Web development frameworks (React, Angular, Vue)', 'Backend technologies (Node.js, Express, Django)', 'Database management (SQL, MongoDB)', 'Version control systems (Git)', 'Problem-solving and algorithmic thinking', 'Software architecture and design patterns', 'API development and integration'];
  const courses = [{
    title: 'Web Development Bootcamp',
    description: 'Master modern web development with HTML, CSS, JavaScript, React, and Node.js through hands-on projects and real-world applications.',
    duration: '12 Weeks',
    link: '/courses'
  }, {
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile applications using React Native and learn app deployment, state management, and native device features.',
    duration: '10 Weeks',
    link: '/courses'
  }, {
    title: 'Cybersecurity Fundamentals',
    description: 'Learn to protect systems and networks from digital attacks. Master security principles, threat detection, and ethical hacking techniques.',
    duration: '10 Weeks',
    link: '/courses'
  }];
  const jobRoles = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Mobile App Developer', 'DevOps Engineer', 'Software Architect', 'Technical Lead'];
  return <div className="flex flex-col min-h-screen bg-secondary">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="Software development background" className="w-full h-full object-cover opacity-20" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }}>
                  <div className="inline-block p-2 bg-accent/20 rounded-lg mb-4">
                    <CodeIcon size={40} className="text-accent" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Software Developer Career Path
                  </h1>
                  <p className="text-xl mb-8 max-w-lg">
                    Build applications and systems that power modern businesses.
                    Master programming languages, frameworks, and software
                    development methodologies.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#courses" className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      Explore Related Courses
                      <ChevronRightIcon size={20} className="ml-2" />
                    </a>
                    <Link to="/courses" className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                      View All Courses
                    </Link>
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg" initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }}>
                  <div className="flex items-center mb-4">
                    <TrendingUpIcon size={24} className="text-green-400 mr-2" />
                    <h3 className="text-xl font-semibold">Career Outlook</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-green-400">•</div>
                      <p>High demand across Pakistan's growing tech industry</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-green-400">•</div>
                      <p>
                        Average starting salary: Rs. 60,000 - 90,000 per month
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-green-400">•</div>
                      <p>
                        Experienced developers: Rs. 150,000 - 400,000+ per month
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-green-400">•</div>
                      <p>
                        Opportunities in startups, established companies, and
                        remote work for international clients
                      </p>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Key Skills for Software Developers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Master these in-demand skills to become a successful software
                developer in Pakistan's growing tech ecosystem
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => <motion.div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }}>
                  <div className="bg-accent/10 p-1 rounded-full mr-3">
                    <CheckIcon size={18} className="text-accent" />
                  </div>
                  <p>{skill}</p>
                </motion.div>)}
            </div>
          </div>
        </section>
        {/* Job Roles Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Potential Job Roles
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Software development offers diverse career paths with
                opportunities to specialize in various areas
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {jobRoles.map((role, index) => <motion.div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center" initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.3,
              delay: index * 0.05
            }}>
                  <div className="bg-primary/10 p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <BriefcaseIcon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-medium text-primary">{role}</h3>
                </motion.div>)}
            </div>
          </div>
        </section>
        {/* Related Courses Section */}
        <section id="courses" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Related Courses
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Start your software development journey with our
                industry-aligned courses
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {courses.map((course, index) => <motion.div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-accent/10 p-2 rounded-full mr-3">
                        <BookOpenIcon size={18} className="text-accent" />
                      </div>
                      <p className="text-sm text-gray-500">{course.duration}</p>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{course.description}</p>
                    <Link to={course.link} className="text-accent font-medium hover:text-blue-700 transition-colors flex items-center">
                      View Course Details
                      <ChevronRightIcon size={18} className="ml-1" />
                    </Link>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>
        {/* Getting Started Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How to Get Started</h2>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                  Follow these steps to begin your journey as a software
                  developer in Pakistan
                </p>
              </div>
              <div className="space-y-6">
                {[{
                step: '1',
                title: 'Assess your interests and goals',
                description: 'Determine which area of software development aligns with your interests and career goals.'
              }, {
                step: '2',
                title: 'Build foundational knowledge',
                description: 'Enroll in our Web Development Bootcamp or another programming course to learn the fundamentals.'
              }, {
                step: '3',
                title: 'Create projects for your portfolio',
                description: 'Apply your skills by building personal projects that showcase your abilities to potential employers.'
              }, {
                step: '4',
                title: 'Network and gain experience',
                description: 'Participate in hackathons, contribute to open source, and connect with other developers.'
              }, {
                step: '5',
                title: 'Apply for internships or entry-level positions',
                description: 'Use your portfolio and knowledge to secure your first position in the industry.'
              }].map((item, index) => <motion.div key={index} className="flex bg-white/10 rounded-lg p-6" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: index * 0.1
              }}>
                    <div className="mr-6">
                      <div className="bg-accent w-10 h-10 rounded-full flex items-center justify-center font-bold text-white">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-200">{item.description}</p>
                    </div>
                  </motion.div>)}
              </div>
              <div className="mt-12 text-center">
                <Link to="/courses" className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Browse Our Courses
                  <ChevronRightIcon size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default SoftwareDeveloper;