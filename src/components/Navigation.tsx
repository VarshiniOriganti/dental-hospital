import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/constants/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items are now imported from constants/navigation.ts

  return (
    <>
      {/* Main Navigation */}
      <nav className={cn(
        "sticky top-0 z-50 transition-all duration-300 text-white",
        scrolled 
          ? "bg-violet-900/95 backdrop-blur-sm shadow-lg" 
          : "bg-gradient-to-b from-black/30 to-transparent"
      )}>
        <div className="relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Galaxy</h1>
                <p className="text-sm text-white/80 -mt-1">Dental Care</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={cn(
                  "font-medium transition-colors hover:text-white",
                  location.pathname === "/" ? "text-white font-semibold" : "text-white/90"
                )}
              >
                Home
              </Link>
              
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path || 
                               (item.children && item.children.some(child => 
                                 location.pathname === child.path || 
                                 location.pathname.startsWith(`${item.path}/`)
                               ));
                
                return item.children ? (
                  <div key={item.path} className="relative group">
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === item.path ? null : item.path)}
                      className={cn(
                        "flex items-center space-x-1 font-medium transition-colors hover:text-white",
                        isActive ? "text-white font-semibold" : "text-white/90"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.path ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                      className={cn(
                        "absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-20 transition-all duration-200 transform origin-top",
                        activeDropdown === item.path ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className={cn(
                      "font-medium transition-colors hover:text-white",
                      isActive ? "text-white font-semibold" : "text-white/90"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
              {/* Book Appointment Button - Desktop */}
            <div className="hidden lg:block ml-4">
              <Link 
                to="/appointment"
                className="bg-white text-primary-600 hover:bg-gray-100 px-4 py-2 rounded-full font-medium transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap inline-block"
              >
                Book Appointment
              </Link>
            </div>
            </div>

            {/* Mobile menu button and Book Now button */}
            <div className="lg:hidden flex items-center space-x-4">
              <Link 
                to="/appointment"
                className="bg-white text-primary-600 hover:bg-gray-100 px-3 py-1.5 text-sm rounded-full font-medium transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap mr-2 inline-block"
              >
                Book Now
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
            <div className={cn(
            "lg:hidden bg-black/80 backdrop-blur-md rounded-lg shadow-xl mt-2 overflow-hidden transition-all duration-300",
            isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
          )}>
            <div className="px-4 space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path || 
                               (item.children && item.children.some(child => 
                                 location.pathname === child.path || 
                                 location.pathname.startsWith(`${item.path}/`)
                               ));
                
                return item.children ? (
                  <div key={item.path} className="relative group">
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === item.path ? null : item.path)}
                      className={cn(
                        "flex items-center justify-between w-full font-medium text-white/90 hover:text-white transition-colors",
                        isActive ? "text-white font-semibold" : "text-white/90"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === item.path && "rotate-180")} />
                    </button>
                    {activeDropdown === item.path && (
                      <div className="mt-2 pl-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block text-sm text-white/80 hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className={cn(
                      "block font-medium text-white/90 hover:text-white transition-colors",
                      isActive ? "text-white font-semibold" : "text-white/90"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link 
                to="/blog" 
                className={cn(
                  "block font-medium text-white/90 hover:text-white transition-colors",
                  location.pathname === "/blog" && "text-white font-semibold"
                )}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/90 text-primary-600 px-6 py-2 rounded-full hover:bg-white transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
