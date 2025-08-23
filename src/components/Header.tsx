
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-warm-800">
            Abbie's Place
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-warm-700 hover:text-warm-900 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-warm-700 hover:text-warm-900 transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('amenities')}
              className="text-warm-700 hover:text-warm-900 transition-colors"
            >
              Amenities
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-warm-700 hover:text-warm-900 transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-warm-700 hover:text-warm-900 transition-colors"
            >
              Contact
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('availability')}
            className="bg-warm-600 hover:bg-warm-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            Check Availability
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
