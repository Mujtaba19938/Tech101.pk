import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, UserIcon, ShoppingCartIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      // Update active section based on scroll position
      const sections = ['home', 'about', 'courses', 'career-pathways', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section === 'home' ? 'Home' : section === 'about' ? 'About Us' : section === 'career-pathways' ? 'Career Pathways' : section === 'contact' ? 'Contact' : section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Set active link based on current route
  useEffect(() => {
    if (location.pathname === '/courses') {
      setActiveLink('Courses');
    } else if (location.pathname === '/') {
      setActiveLink('Home');
    }
  }, [location]);
  const navLinks = [{
    name: 'Home',
    href: '/',
    active: activeLink === 'Home'
  }, {
    name: 'About Us',
    href: '/#about',
    active: activeLink === 'About Us'
  }, {
    name: 'Courses',
    href: '/courses',
    active: activeLink === 'Courses'
  }, {
    name: 'Career Pathways',
    href: '/#career-pathways',
    active: activeLink === 'Career Pathways'
  }, {
    name: 'Contact',
    href: '/#contact',
    active: activeLink === 'Contact'
  }];
  return <header role="banner" className={`sticky top-0 z-50 w-full bg-secondary transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Tech101<span className="text-accent">Pakistan</span>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav role="navigation" aria-label="Main navigation" className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map(link => <li key={link.name}>
                {link.name === 'About Us' ? <a href="/#about" onClick={e => {
              e.preventDefault();
              if (location.pathname === '/') {
                document.getElementById('about')?.scrollIntoView({
                  behavior: 'smooth'
                });
              } else {
                window.location.href = '/#about';
              }
            }} className={`text-base font-medium transition-all hover:text-accent relative ${link.active ? 'text-accent' : 'text-primary'}`} aria-current={link.active ? 'page' : undefined}>
                    {link.name}
                    {link.active && <span className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-accent" />}
                  </a> : link.name === 'Career Pathways' ? <a href="/#career-pathways" onClick={e => {
              e.preventDefault();
              if (location.pathname === '/') {
                document.getElementById('career-pathways')?.scrollIntoView({
                  behavior: 'smooth'
                });
              } else {
                window.location.href = '/#career-pathways';
              }
            }} className={`text-base font-medium transition-all hover:text-accent relative ${link.active ? 'text-accent' : 'text-primary'}`} aria-current={link.active ? 'page' : undefined}>
                    {link.name}
                    {link.active && <span className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-accent" />}
                  </a> : link.name === 'Contact' ? <a href="/#contact" onClick={e => {
              e.preventDefault();
              if (location.pathname === '/') {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              } else {
                window.location.href = '/#contact';
              }
            }} className={`text-base font-medium transition-all hover:text-accent relative ${link.active ? 'text-accent' : 'text-primary'}`} aria-current={link.active ? 'page' : undefined}>
                    {link.name}
                    {link.active && <span className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-accent" />}
                  </a> : <Link to={link.href} className={`text-base font-medium transition-all hover:text-accent relative ${link.active ? 'text-accent' : 'text-primary'}`} aria-current={link.active ? 'page' : undefined}>
                    {link.name}
                    {link.active && <span className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-accent" />}
                  </Link>}
              </li>)}
          </ul>
        </nav>
        <div className="hidden md:flex items-center space-x-6">
          <button aria-label="User account" className="text-primary hover:text-accent transition-colors relative group">
            <UserIcon size={24} />
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-primary text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              My Account
            </span>
          </button>
          <button aria-label="Shopping cart" className="text-primary hover:text-accent transition-colors relative group">
            <ShoppingCartIcon size={24} />
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-primary text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Cart
            </span>
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="mobile-menu">
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isOpen && <nav id="mobile-menu" role="navigation" aria-label="Mobile navigation" className="md:hidden bg-secondary border-t border-gray-100 shadow-lg">
          <ul className="px-4 py-4 space-y-4">
            {navLinks.map(link => <li key={link.name}>
                {link.name === 'About Us' ? <a href="/#about" onClick={e => {
            e.preventDefault();
            setIsOpen(false);
            if (location.pathname === '/') {
              document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
              });
            } else {
              window.location.href = '/#about';
            }
          }} className={`block text-lg font-medium transition-colors ${link.active ? 'text-accent' : 'text-primary'}`} aria-current={link.active ? 'page' : undefined}>
                    {link.name}
                  </a> : link.name === 'Career Pathways' ? <a href="/#career-pathways" onClick={e => {
            e.preventDefault();
            setIsOpen(false);
            if (location.pathname === '/') {
              document.getElementById('career-pathways')?.scrollIntoView({
                behavior: 'smooth'
              });
            } else {
              window.location.href = '/#career-pathways';
            }
          }} className={`block text-lg font-medium transition-colors ${link.active ? 'text-accent' : 'text-primary'}`} aria-current={link.active ? 'page' : undefined}>
                    {link.name}
                  </a> : link.name === 'Contact' ? <a href="/#contact" onClick={e => {
            e.preventDefault();
            setIsOpen(false);
            if (location.pathname === '/') {
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            } else {
              window.location.href = '/#contact';
            }
          }} className={`block text-lg font-medium transition-colors ${link.active ? 'text-accent' : 'text-primary'}`} aria-current={link.active ? 'page' : undefined}>
                    {link.name}
                  </a> : <Link to={link.href} className={`block text-lg font-medium transition-colors ${link.active ? 'text-accent' : 'text-primary'}`} onClick={() => setIsOpen(false)} aria-current={link.active ? 'page' : undefined}>
                    {link.name}
                  </Link>}
              </li>)}
            <li className="flex space-x-6 pt-4 border-t border-gray-100">
              <button aria-label="User account" className="text-primary hover:text-accent transition-colors flex items-center">
                <UserIcon size={20} className="mr-2" />
                <span>Account</span>
              </button>
              <button aria-label="Shopping cart" className="text-primary hover:text-accent transition-colors flex items-center">
                <ShoppingCartIcon size={20} className="mr-2" />
                <span>Cart</span>
              </button>
            </li>
          </ul>
        </nav>}
    </header>;
};
export default Header;