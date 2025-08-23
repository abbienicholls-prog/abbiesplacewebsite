
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PhotoGallery = () => {
  const photos = [
    {
      src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/a756fb67-e824-43cb-afaa-5741908f60b1.jpeg?im_w=1200',
      alt: 'Front Door'
    },
    {
      src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/15d8946a-1ee0-4952-aadd-81bc7f4f65b0.jpeg?im_w=720',
      alt: 'Bedroom 1'
    },
    {
      src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/2123584f-6670-4f96-a46c-6e3d8cc3feee.jpeg?im_w=1200',
      alt: 'kitchen'
    },
    {
      src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/a3eefd27-22a6-41dc-89c0-0b814d4c79e7.jpeg?im_w=1200',
      alt: 'Bathroom'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-800 mb-4">
            Experience the Beauty
          </h2>
          <p className="text-xl text-warm-600 max-w-2xl mx-auto">
            Take a virtual tour of your home away from home
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Image Display */}
          <div className="relative mb-6 group">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={photos[currentIndex].src}
                alt={photos[currentIndex].alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Navigation Arrows */}
            <Button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-warm-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              size="sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-warm-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              size="sm"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-4">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => goToPhoto(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-warm-500 scale-110' 
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
