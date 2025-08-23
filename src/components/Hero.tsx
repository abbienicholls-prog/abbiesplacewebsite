
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAvailability = () => {
    const element = document.getElementById('availability');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://a0.muscache.com/im/pictures/hosting/Hosting-1493468121776952030/original/88c4fb8d-6ff1-4fab-892d-2e4557edacb7.jpeg?im_w=960')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to
          <span className="block text-cream-200 mt-2">Abbie's Place</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-cream-100 max-w-2xl mx-auto animate-fade-in animation-delay-300">
          Your cozy retreat nestled in nature's embrace. Experience warmth, comfort, and unforgettable memories.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
          <Button 
            onClick={scrollToAvailability}
            size="lg"
            className="bg-cream-500 hover:bg-cream-600 text-warm-900 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Check Availability
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-warm-800 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            View Gallery
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
