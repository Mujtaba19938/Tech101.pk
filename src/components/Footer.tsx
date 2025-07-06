import React from 'react';
const Footer = () => {
  return <footer className="bg-primary text-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="text-2xl font-bold inline-block mb-4">
              Tech101<span className="text-accent">Pakistan</span>
            </a>
            <p className="text-gray-300 leading-relaxed">
              Empower the next generation with practical IT education. Explore
              hands-on courses in programming, cybersecurity, AI, and more at
              Tech101 Pakistan.
            </p>
            <div className="flex space-x-4 mt-6">
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
            }].map(social => <a key={social.name} href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label={`Follow us on ${social.name}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={social.icon}></path>
                  </svg>
                </a>)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Courses
            </h3>
            <ul className="space-y-2">
              {['Web Development', 'Data Science', 'UI/UX Design', 'Mobile Development', 'Digital Marketing', 'Cloud Computing'].map(course => <li key={course}>
                  <a href="#courses" className="text-gray-300 hover:text-accent transition-colors inline-block py-1">
                    {course}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[{
              name: 'About Us',
              href: '#about'
            }, {
              name: 'Career Pathways',
              href: '#career-pathways'
            }, {
              name: 'Contact Us',
              href: '#contact'
            }, {
              name: 'Privacy Policy',
              href: '#'
            }, {
              name: 'Terms & Conditions',
              href: '#'
            }].map(link => <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-accent transition-colors inline-block py-1">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Contact
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  Suite # 0802, 8th Floor,
                  <br />
                  Vital Foakh Tower,
                  <br />
                  Main Shahrah-e-Faisal, Karachi,
                  <br />
                  Pakistan
                </div>
              </li>
              <li>
                <a href="mailto:hello@tech101.pk" className="flex items-center hover:text-accent transition-colors">
                  <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@tech101.pk
                </a>
              </li>
              <li>
                <a href="tel:+923333732371" className="flex items-center hover:text-accent transition-colors">
                  <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +92 333 373 2371
                </a>
              </li>
              <li>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Hours:</p>
                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium text-gray-200 mb-2">Newsletter</h4>
              <form className="flex">
                <input type="email" placeholder="Your email" className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-accent w-full" aria-label="Subscribe to our newsletter" />
                <button type="submit" className="bg-accent text-white px-3 py-2 rounded-r-md hover:bg-blue-700 transition-colors" aria-label="Submit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400">
            <p className="mb-2 md:mb-0">
              © 2025 Tech101 SMC (Private-Limited). All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0 text-sm text-gray-500">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-accent transition-colors">
              Refund Policy
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-accent transition-colors">
              Terms & Conditions
            </a>
            <span className="hidden md:inline">|</span>
            <span>
              Designed by{' '}
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Cubex Technologies
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;