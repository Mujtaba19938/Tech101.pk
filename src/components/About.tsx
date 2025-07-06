import React, { useEffect, useRef } from 'react';
const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);
  return <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              About Tech101 Pakistan
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              We're on a mission to transform Pakistan's tech education
              landscape by providing
              <span className="text-accent font-medium">
                {' '}
                industry-aligned skills training{' '}
              </span>
              that bridges the gap between academic learning and professional
              requirements.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-800">
              Our programs are designed by industry experts with a focus on
              <span className="text-accent font-medium">
                {' '}
                practical, hands-on learning{' '}
              </span>
              and real-world projects that prepare students for immediate
              employment in the
              <span className="text-accent font-medium"> digital economy</span>.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              With a commitment to accessibility and excellence, we've helped
              thousands of students launch successful careers in technology
              across Pakistan and beyond.
            </p>
          </div>
          <div className="w-full md:w-1/2 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" alt="Students collaborating on a tech project" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
export default About;