import React from 'react';
import { motion } from 'framer-motion';
const FeatureItem = ({
  number,
  title,
  description,
  isBlue = true
}) => {
  return <motion.div className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full ${isBlue ? 'bg-blue-700 text-white' : 'bg-white text-gray-800 border border-gray-100'}`} whileHover={{
    y: -5
  }} transition={{
    duration: 0.2
  }}>
      <span className={`block text-2xl font-bold mb-2 ${isBlue ? 'text-blue-300' : 'text-blue-600'}`}>
        {number}
      </span>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className={`leading-relaxed ${isBlue ? 'text-white/90' : 'text-gray-600'}`}>
        {description}
      </p>
    </motion.div>;
};
const WhyTech101 = () => {
  const features = [{
    number: '01',
    title: 'Expert Instructors',
    description: 'All our trainers are industry professionals teaching from hands-on experience.'
  }, {
    number: '02',
    title: 'Online & Practical Learning',
    description: 'Apply what you learn instantly with real-world projects, assignments, and labs.'
  }, {
    number: '03',
    title: 'Career-Focused Learning',
    description: 'Learn the exact skills that employers and freelance clients are hiring for — no fluff.'
  }, {
    number: '04',
    title: 'Tech For All Ages',
    description: 'From kids to adults, our platform has age-appropriate learning tracks for everyone.'
  }, {
    number: '05',
    title: 'Certificates that Matter',
    description: 'Earn completion certificates to showcase your skills on your CV and LinkedIn.'
  }, {
    number: '06',
    title: 'Made in Pakistan',
    description: 'Affordable pricing, Urdu support, and regionally relevant content tailored for Pakistan.'
  }];
  return <section className="py-20 bg-gray-50" aria-labelledby="why-tech101-heading">
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
          <h2 id="why-tech101-heading" className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Why Thousands Trust Tech101
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join the community of successful tech professionals who started
            their journey with us
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => <motion.div key={index} initial={{
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
              <FeatureItem {...feature} isBlue={index % 2 === 0} />
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default WhyTech101;