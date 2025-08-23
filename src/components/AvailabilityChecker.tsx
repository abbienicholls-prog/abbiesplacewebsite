import { useState } from 'react';
import { Calendar, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const AvailabilityChecker = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const handleAvailabilityCheck = () => {
    if (!checkIn || !checkOut) {
      toast({
        title: "Please select dates",
        description: "Both check-in and check-out dates are required.",
        variant: "destructive"
      });
      return;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkInDate >= checkOutDate) {
      toast({
        title: "Invalid dates",
        description: "Check-out date must be after check-in date.",
        variant: "destructive"
      });
      return;
    }

    // Construct Airbnb URL with selected dates and guests
    const airbnbUrl = `https://www.airbnb.com/s/Abbies-Place/homes?checkin=${checkIn}&checkout=${checkOut}&adults=${guests}`;

    // Open Airbnb in a new tab
    window.open(airbnbUrl, "_blank");
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="availability" className="py-20 bg-warm-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Check Availability
          </h2>
          <p className="text-xl text-warm-200 max-w-2xl mx-auto">
            Find your perfect dates for an unforgettable stay
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-0 card-shadow-lg">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-6 items-end">
              <div className="space-y-2">
                <Label htmlFor="check-in" className="text-warm-800 font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Check-in
                </Label>
                <Input
                  id="check-in"
                  type="date"
                  value={checkIn}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    if (checkOut && new Date(e.target.value) > new Date(checkOut)) {
                      setCheckOut('');
                    }
                  }}
                  min={today}
                  className="border-warm-300 focus:border-warm-500 focus:ring-warm-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="check-out" className="text-warm-800 font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Check-out
                </Label>
                <Input
                  id="check-out"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || today}
                  className="border-warm-300 focus:border-warm-500 focus:ring-warm-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests" className="text-warm-800 font-medium flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Guests
                </Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="8"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="border-warm-300 focus:border-warm-500 focus:ring-warm-500"
                  required
                />
              </div>

              <Button
                onClick={handleAvailabilityCheck}
                disabled={!checkIn || !checkOut}
                className="bg-warm-600 hover:bg-warm-700 text-white px-8 py-3 h-12 transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
              >
                Check Availability
              </Button>
            </div>

            <div className="mt-6 p-4 bg-warm-50 rounded-lg">
              <p className="text-warm-700 text-sm text-center">
                <strong>Peak Season:</strong> June - August | <strong>Off Season:</strong> September - May
                <br />
                Minimum stay: 2 nights | Maximum occupancy: 8 guests
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AvailabilityChecker;
