
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-warm-900 text-warm-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Abbie's Place</h3>
            <p className="text-warm-300 mb-4">
              Your cozy retreat in nature's embrace. Creating unforgettable memories since 2020.
            </p>
            <div className="flex items-center space-x-2 text-warm-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              <span>by Abbie</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-warm-400" />
                <span className="text-warm-300">Mountain View, Nature Valley</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-warm-400" />
                <span className="text-warm-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-warm-400" />
                <span className="text-warm-300">hello@abbiesplace.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-warm-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-warm-300 hover:text-white transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-warm-300 hover:text-white transition-colors"
              >
                Amenities
              </button>
              <button 
                onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-warm-300 hover:text-white transition-colors"
              >
                Reviews
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-800 mt-8 pt-8 text-center">
          <p className="text-warm-400">
            © 2024 Abbie's Place. All rights reserved. | Your perfect getaway awaits.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
