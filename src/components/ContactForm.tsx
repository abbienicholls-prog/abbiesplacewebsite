
import { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message sent successfully! 🎉",
        description: "Thank you for your inquiry. Abbie will get back to you within 24 hours.",
        className: "animate-glow"
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-warm-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-warm-200 max-w-2xl mx-auto">
            Ready to book your stay or have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm border-0 card-shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-warm-800 font-medium flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="border-warm-300 focus:border-warm-500 focus:ring-warm-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-warm-800 font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="border-warm-300 focus:border-warm-500 focus:ring-warm-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-warm-800 font-medium flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your planned stay, special requests, or any questions you have..."
                    rows={5}
                    className="border-warm-300 focus:border-warm-500 focus:ring-warm-500 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-warm-600 hover:bg-warm-700 text-white py-3 h-12 transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-warm-200 text-center">
                <p className="text-warm-600 mb-2">Prefer to call or email directly?</p>
                <div className="space-y-1">
                  <p className="text-warm-800">
                    <strong>Email:</strong> abbienicholls@yahoo.co.uk
                  </p>
                  <p className="text-warm-800">
                    <strong>Phone:</strong> 07818 557438
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
