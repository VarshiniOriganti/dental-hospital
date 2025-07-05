
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Car, Users, Award, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Kondapur = () => {
  const services = [
    "General Dentistry & Cleanings",
    "Dental Implants & Oral Surgery", 
    "Invisible Aligners & Orthodontics",
    "Cosmetic Dentistry & Veneers",
    "Root Canal Treatment",
    "Pediatric Dentistry",
    "Emergency Dental Care",
    "Laser Dentistry"
  ];

  const features = [
    "State-of-the-art dental equipment",
    "Digital X-ray and 3D imaging",
    "Sterilization protocols exceeding standards",
    "Comfortable treatment rooms",
    "Free parking available",
    "Wheelchair accessible facility",
    "Multilingual staff support",
    "Insurance processing assistance"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 -mt-20">
        <div className="absolute inset-0 -z-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: 'url(https://png.pngtree.com/thumb_back/fw800/background/20230616/pngtree-vortex-and-herb-encircle-dental-care-and-3d-dirty-teeth-render-image_3616367.jpg)',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.9) contrast(1.1)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/70 to-primary-900/70"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">Kondapur Branch</h1>
              <p className="text-xl text-white/95 mb-8 leading-relaxed font-medium">
                Our flagship location in the heart of HITEC City, serving the dental needs 
                of professionals and families with world-class care and convenience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  <Link to="/contact">Book Appointment</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg">
                  Get Directions
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=500&fit=crop" 
                alt="Kondapur branch exterior"
                className="rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center animate-fade-in">
              <MapPin className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
              <p className="text-sm text-gray-600">123 HITEC City Road, Kondapur, Hyderabad - 500084</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <Phone className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
              <p className="text-sm text-gray-600">+91 9876543210</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Mail className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
              <p className="text-sm text-gray-600">kondapur@galaxydentalcare.in</p>
            </div>
            <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <Clock className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Hours</h3>
              <p className="text-sm text-gray-600">Mon-Sat: 9AM-8PM<br/>Sun: 10AM-6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* About This Branch */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our Kondapur Location</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Located in the bustling HITEC City area, our Kondapur branch serves as the flagship 
                location for Galaxy Dental Care. This modern facility is designed with the latest 
                technology and patient comfort in mind.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We cater to the diverse dental needs of IT professionals, families, and the local 
                community with comprehensive services ranging from routine cleanings to complex 
                surgical procedures.
              </p>
              <div className="flex items-center space-x-6 text-primary-600">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">5000+ Patients Served</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Top Rated Branch</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=500&fit=crop" 
                alt="Modern dental clinic interior"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Services Available</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete dental care services available at our Kondapur location
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 animate-slide-in-left" style={{animationDelay: `${index * 0.05}s`}}>
                <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Branch Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern amenities and patient-focused design for your comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.05}s`}}>
                <CheckCircle className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <span className="text-gray-700 text-sm">{feature}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Easy to Find & Access</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Car className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">By Car</h3>
                    <p className="text-gray-600">
                      Located on HITEC City Road with easy access from ORR and main highways. 
                      Free parking available for all patients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Landmarks</h3>
                    <p className="text-gray-600">
                      Near Cyber Towers, DLF Cyber City, and major IT companies. 
                      Walking distance from Kondapur metro station.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Convenience</h3>
                    <p className="text-gray-600">
                      Extended hours to accommodate working professionals. 
                      Online appointment booking available 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
                <p className="text-gray-600">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Visit Our Kondapur Branch</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience premium dental care in our modern facility. Book your appointment today 
              and discover why we're the preferred choice for dental care in HITEC City.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Link to="/contact">Schedule Appointment</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg">
                <Link to="/branches">View All Branches</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kondapur;
