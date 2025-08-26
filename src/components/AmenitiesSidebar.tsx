import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MapPin,
  Home,
  Coffee,
  Flame,
  Bath,
  Wifi,
  Car,
  TreePine,
  Fish,
  Mountain,
  Rabbit,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const AmenitiesSidebar = () => {
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [openActivity, setOpenActivity] = useState<number | null>(null);

const activities = [
{ icon: Rabbit, name: "New Mills", description: "A charming town with riverside walks and local markets." },
{ icon: Rabbit, name: "Chatsworth House", description: "Historic estate with grand gardens and an art collection." },
{ icon: Rabbit, name: "Eyam", description: "Known as the plague village, rich in history and beauty." },
{ icon: Rabbit, name: "Peak Wildlife Park", description: "Family-friendly park with exotic and native animals." },
{ icon: Rabbit, name: "Kinder Scout", description: "Peak District’s highest point with breathtaking views." },
{ icon: Rabbit, name: "Lantern Pike", description: "Scenic hill with panoramic views of the surrounding countryside." },
{ icon: Rabbit, name: "Big Stone", description: "A striking landmark rock formation popular with walkers." },
{ icon: Rabbit, name: "Monsal Dale", description: "Beautiful valley with riverside walks and historic viaducts." },
{ icon: Rabbit, name: "Buxton", description: "Spa town known for Georgian architecture and natural springs." },
{ icon: Rabbit, name: "Bakewell", description: "Famous for its tarts and a charming market town atmosphere." },
{ icon: Rabbit, name: "Sett Valley Trail", description: "Walking and cycling route along a disused railway line." },
{ icon: Rabbit, name: "Castleton", description: "Picturesque village with caves, castles, and walking trails." },
{ icon: Rabbit, name: "The Torrs", description: "Dramatic gorge with bridges and riverside paths." },
{ icon: Rabbit, name: "Lyme Park", description: "Historic estate with a mansion, deer park, and gardens." },
{ icon: Rabbit, name: "High Lea Park, New Mills", description: "A peaceful park with gardens, play areas, and walking paths." },
{ icon: Rabbit, name: "Manor Park, Glossop", description: "Expansive green space with play areas and lakes (McDonald's close by!)." },
{ icon: Rabbit, name: "Chatsworth Farmyard & Adventure Park", description: "Family-friendly attraction with farm animals and adventure playgrounds." },
{ icon: Rabbit, name: "Matlock Batgit add .h", description: "A riverside village known for arcades, fish & chips, and cable cars." },
{ icon: Rabbit, name: "Matlock Meadows Ice-cream Parlour & Coffee Shop", description: "Homemade ice cream, coffee, and countryside views." },
{ icon: Rabbit, name: "Matlock Farm Park", description: "Petting farm with activities for children and animal encounters." },
{ icon: Rabbit, name: "Buxton Opera House", description: "Historic theatre hosting shows, live music, and cinema screenings." },
{ icon: Rabbit, name: "Buxton Pottery Painting", description: "Creative pottery studio perfect for families and groups." },
{ icon: Rabbit, name: "Pavillion Gardens, Buxton", description: "Victorian gardens with boating lake, playground, and café." },
{ icon: Rabbit, name: "Walking with Alpacas, Whaley Bridge", description: "Unique countryside experience walking alongside friendly alpacas." },
{ icon: Rabbit, name: "Arabian Heights, Matlock", description: "Exciting horse riding and trekking centre with scenic views." },
{ icon: Rabbit, name: "New Mills Art Theatre", description: "Charming community theatre showcasing plays and live events." },
{ icon: Rabbit, name: "Bolsover Castle", description: "Impressive English Heritage castle with gardens and history trails." },
{ icon: Rabbit, name: "Peveril Castle, Castleton", description: "Dramatic medieval ruins overlooking the Hope Valley." },
{ icon: Rabbit, name: "Roman Lakes, Marple", description: "Historic lakes offering fishing, walking, and wildlife watching." },
{ icon: Rabbit, name: "Hadden Hall, Bakewell", description: "Beautiful stately home with gardens and a riverside setting." },
{ icon: Rabbit, name: "Gauntlet Birds of Prey, Knutsford", description: "Bird sanctuary with flying displays and family activities." },
{ icon: Rabbit, name: "Go Ape, Buxton", description: "Tree-top adventure with zip lines and high ropes courses." },
{ icon: Rabbit, name: "Jump Heaven, Stockport", description: "Indoor trampoline and activity park (McDonald's close by!)." },
{ icon: Rabbit, name: "The Trafford Shopping Centre", description: "Massive shopping and leisure complex with Sea Life, Odeon, and Legoland." },
{ icon: Rabbit, name: "Kinder Mass Trespass", description: "Site of the historic 1932 protest for countryside access." },
];

  const amenities = [
    { icon: Rabbit, name: "Plush Towels, Bedding & Throws", description: "" },
    { icon: Rabbit, name: "Cozy Fireplace", description: "(Electric Stove)" },
    { icon: Rabbit, name: "Full-Fibre WiFi", description: "Stay connected" },
    { icon: Rabbit, name: "Free Parking", description: "Convenient access" },
    { icon: Rabbit, name: "Full Kitchen", description: "Cook with ease" },
    { icon: Rabbit, name: "Air Fryer", description: "Make tasty meals with ease" },
    { icon: Rabbit, name: "Kettle, Toaster & Microwave", description: "For your convenience" },
    { icon: Rabbit, name: "Coffee, Tea, Salt & Pepper, Vinegar, Cooking Oil", description: "" },
    { icon: Rabbit, name: "Kitchen/Dining Table", description: "Seats up to four" },
    { icon: Rabbit, name: "Washing Machine", description: "" },
    { icon: Rabbit, name: "Dishwasher", description: "" },
    { icon: Rabbit, name: "Fridge", description: "No ice box" },
    { icon: Rabbit, name: "Clothes Airer/ Ironing Board & Iron", description: "" },
    { icon: Rabbit, name: "Hair Dryer, Makeup & Full Length Mirror", description: "" },
    { icon: Rabbit, name: "Smart TV", description: "Full Fibre" },
    { icon: Rabbit, name: "Books & Board Games", description: "Family Fun" },
    { icon: Rabbit, name: "Dog bowl & Poo Bags!", description: "" },
    { icon: Rabbit, name: "Fire Extinguisher, Heat & Smoke Alarms, Carbon Monoxide Detector", description: "" },
    { icon: Rabbit, name: "Full Size Picnic Basket, with crockery", description: "" },
    { icon: Rabbit, name: "Front Garden with Bench, Access to Back Garden", description: "Cook with ease" },

  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-br from-warm-100 to-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-800 mb-4">
            Your Perfect Getaway
          </h2>
          <p className="text-xl text-warm-600 max-w-2xl mx-auto">
            Discover local adventures and in-house comforts
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Local Activities */}
          <Card className="card-shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <Collapsible open={activitiesOpen} onOpenChange={setActivitiesOpen}>
              <CollapsibleTrigger className="w-full p-6 text-left hover:bg-warm-50/50 transition-colors rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-earth-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-warm-800">Local Activities</h3>
                      <p className="text-warm-600">Explore the great outdoors</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-warm-600 transition-transform duration-300 ${
                      activitiesOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="px-6 pb-6">
                <div className="space-y-2">
                  {activities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div
                        key={index}
                        onClick={() =>
                          setOpenActivity(openActivity === index ? null : index)
                        }
                        className="flex flex-col space-y-1 p-4 rounded-lg hover:bg-warm-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-earth-100 rounded-full flex items-center justify-center">
                            <Icon className="w-5 h-5 text-earth-600" />
                          </div>
                          <h4 className="font-semibold text-warm-800">
                            {activity.name}
                          </h4>
                        </div>

                        <AnimatePresence>
                          {openActivity === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-14 pr-2 text-sm text-warm-600"
                            >
                              {activity.description}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* In-House Amenities */}
          <Card className="card-shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <Collapsible open={amenitiesOpen} onOpenChange={setAmenitiesOpen}>
              <CollapsibleTrigger className="w-full p-6 text-left hover:bg-warm-50/50 transition-colors rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-cream-500 rounded-full flex items-center justify-center">
                      <Home className="w-6 h-6 text-warm-800" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-warm-800">In-House Amenities</h3>
                      <p className="text-warm-600">Everything you need for comfort</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-warm-600 transition-transform duration-300 ${
                      amenitiesOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="px-6 pb-6">
                <div className="grid grid-cols-2 gap-4">
                  {amenities.map((amenity, index) => {
                    const Icon = amenity.icon;
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-warm-50 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-cream-200">
                          <Icon className="w-6 h-6 text-cream-600" />
                        </div>
                        <h4 className="font-semibold text-warm-800 text-sm">
                          {amenity.name}
                        </h4>
                        <p className="text-xs text-warm-600">
                          {amenity.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSidebar;
