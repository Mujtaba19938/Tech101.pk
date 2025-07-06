import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, GlobeIcon, SendIcon, ClockIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const Contact = () => {
  return <section id="contact" className="py-20 bg-gray-50">
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
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our courses or want to learn more? Reach out to
            us!
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div className="w-full lg:w-1/2" initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.6
        }}>
            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent" placeholder="Your name" required aria-required="true" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent" placeholder="Your email address" required aria-required="true" />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <select id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent" required aria-required="true">
                  <option value="">Select a subject</option>
                  <option value="course-inquiry">Course Inquiry</option>
                  <option value="career-advice">Career Advice</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent" placeholder="Your message" required aria-required="true"></textarea>
              </div>
              <button type="submit" className="group w-full px-6 py-4 bg-accent text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent flex items-center justify-center">
                Send Message
                <SendIcon size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
          <motion.div className="w-full lg:w-1/2" initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: '-100px'
        }} transition={{
          duration: 0.6
        }}>
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-full p-3 text-accent mr-4">
                    <MapPinIcon size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Visit Us</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Suite # 0802, 8th Floor,
                      <br />
                      Vital Foakh Tower,
                      <br />
                      Main Shahrah-e-Faisal, Karachi,
                      <br />
                      Pakistan
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-full p-3 text-accent mr-4">
                    <PhoneIcon size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">
                      <a href="tel:+923333732371" className="hover:text-accent transition-colors">
                        +92 333 373 2371
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-full p-3 text-accent mr-4">
                    <MailIcon size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">
                      <a href="mailto:hello@tech101.pk" className="hover:text-accent transition-colors">
                        hello@tech101.pk
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-full p-3 text-accent mr-4">
                    <ClockIcon size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Business Hours
                    </h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex justify-between">
                        <span>Monday - Saturday:</span>
                        <span className="ml-4">9:00 AM - 7:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="ml-4">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-50 rounded-full p-3 text-accent mr-4">
                    <GlobeIcon size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Follow Us
                    </h4>
                    <div className="flex space-x-4 mt-2">
                      {[{
                      name: 'facebook',
                      icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                    }, {
                      name: 'twitter',
                      icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'
                    }, {
                      name: 'instagram',
                      icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z'
                    }, {
                      name: 'linkedin',
                      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z'
                    }].map(social => <a key={social.name} href="#" className="bg-gray-100 hover:bg-accent hover:text-white text-gray-600 transition-colors p-2 rounded-full" aria-label={`Follow us on ${social.name}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d={social.icon}></path>
                          </svg>
                        </a>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;