
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PhotoGallery = () => {
  const photos = [
     {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/88c4fb8d-6ff1-4fab-892d-2e4557edacb7.jpeg?im_w=1200',
    alt: 'Living Room'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/83cb8fda-bab7-4a22-9fe3-759a6bdd7fca.jpeg?im_w=720',
    alt: 'Living Room'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/e7d94d32-f16c-4325-bc08-1c478966b2f4.jpeg?im_w=720',
    alt: 'Living Room'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/24ddeceb-a82a-404f-85f7-739a547a990b.jpeg?im_w=1200',
    alt: 'Living Room'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/a218bea1-92a6-445d-87cd-b40e6ef01a2e.jpeg?im_w=1200',
    alt: 'Living Room'
  },

  // Kitchen
  {
    src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1493468121776952030/original/ba5b40c6-3493-41bd-9d13-4f0185ceec2b.jpeg?im_w=1200',
    alt: 'Kitchen'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/f3ba0f4a-5700-4603-8c55-3d135121013e.jpeg?im_w=1200',
    alt: 'Kitchen'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/89b46416-1001-40d4-ab25-c0a931c44700.jpeg?im_w=1200',
    alt: 'Kitchen'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/c8329eb2-e9e4-4b8a-af03-37506ba03204.jpeg?im_w=1200',
    alt: 'Kitchen'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/145fbfc4-42ba-4f9c-a42e-8a6403cd69f1.jpeg?im_w=1200',
    alt: 'Kitchen'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/fde18a31-ed04-4847-96e7-f7c508a85543.jpeg?im_w=1200',
    alt: 'Kitchen'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/2123584f-6670-4f96-a46c-6e3d8cc3feee.jpeg?im_w=1200',
    alt: 'Kitchen'
  },

  // Bathroom
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/44269032-0241-4f8c-acd2-fe30a75f61c0.jpeg?im_w=1200',
    alt: 'Bathroom'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/0205ad14-3d81-45cb-a583-1dd1b355c973.jpeg?im_w=1200',
    alt: 'Bathroom'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/3cfdeb34-aaa1-4906-9dd2-46b98cbfcd5e.jpeg?im_w=1200',
    alt: 'Bathroom'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/a3eefd27-22a6-41dc-89c0-0b814d4c79e7.jpeg?im_w=1200',
    alt: 'Bathroom'
  },

  // Bedroom 1
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MzQ2ODEyMTc3Njk1MjAzMA==/original/5ce75d89-d034-476f-959d-040b2b695e14.jpeg?im_w=1200',
    alt: 'Bedroom 1'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/15d8946a-1ee0-4952-aadd-81bc7f4f65b0.jpeg?im_w=720',
    alt: 'Bedroom 1'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/bc472cc4-e5d3-4d70-90b1-0c37eaa85fef.jpeg?im_w=1200',
    alt: 'Bedroom 1'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MzQ2ODEyMTc3Njk1MjAzMA==/original/585a25a0-8a20-4f7a-8df5-a696bfbda55e.jpeg?im_w=1200',
    alt: 'Bedroom 1'
  },

  // Bedroom 2
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/8b6b881a-b75b-4761-bf4e-6481cbdba06f.jpeg?im_w=1200',
    alt: 'Bedroom 2'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/91f1ac18-9bd0-4542-93ee-b4d2f2f4138d.jpeg?im_w=1200',
    alt: 'Bedroom 2'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/ae911ee2-306a-4507-a450-c22ad713b0ef.jpeg?im_w=1200',
    alt: 'Bedroom 2'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/6c32c43f-70d6-429d-98f1-f4b4cc073ff7.jpeg?im_w=1200',
    alt: 'Bedroom 2'
  },

  // Outside (Garden + Parking)
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/406ebcb6-97fb-4513-837c-216591a93d24.jpeg?im_w=1200',
    alt: 'Garden'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/b2469769-bf29-4d13-8b0b-f93becb71aa2.jpeg?im_w=1200',
    alt: 'Garden'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/e507c8a7-9755-4775-ac1d-7056b86be620.jpeg?im_w=1200',
    alt: 'Parking'
  },

  // Others (Front Door + Coats)
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/a756fb67-e824-43cb-afaa-5741908f60b1.jpeg?im_w=1200',
    alt: 'Front Door'
  },
  {
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/43f7b414-685a-4e5b-8024-c250e95de636.jpeg?im_w=1200',
    alt: 'Coats'
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
