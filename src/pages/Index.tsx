
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PhotoGallery from '@/components/PhotoGallery';
import AmenitiesSidebar from '@/components/AmenitiesSidebar';
import AvailabilityChecker from '@/components/AvailabilityChecker';
import Reviews from '@/components/Reviews';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PhotoGallery />
      <AmenitiesSidebar />
      <AvailabilityChecker />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
