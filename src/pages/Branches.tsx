
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Branches = () => {
  const branches = [
    {
      name: "Kondapur",
      slug: "kondapur",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
      address: "123 HITEC City Road, Kondapur, Hyderabad - 500084",
      phone: "+91 9876543210",
      email: "kondapur@galaxydentalcare.in",
      features: ["Latest dental equipment", "Spacious treatment rooms", "Parking available", "Wheelchair accessible"]
    },
    {
      name: "Kukatpally (KBHP Colony)",
      slug: "kukatpally",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
      address: "456 KBHP Colony, Kukatpally, Hyderabad - 500072",
      phone: "+91 9876543211",
      email: "kukatpally@galaxydentalcare.in",
      features: ["Family-friendly environment", "Kids play area", "Digital X-ray", "Laser dentistry"]
    },
    {
      name: "Banjara Hills",
      slug: "banjara-hills",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      address: "789 Road No. 12, Banjara Hills, Hyderabad - 500034",
      phone: "+91 9876543212",
      email: "banjarahills@galaxydentalcare.in",
      features: ["Premium location", "VIP treatment rooms", "Advanced surgery suite", "Valet parking"]
    },
    {
      name: "Chandanagar",
      slug: "chandanagar",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
      address: "321 Chandanagar Main Road, Hyderabad - 500050",
      phone: "+91 9876543213",
      email: "chandanagar@galaxydentalcare.in",
      features: ["Community focused", "Affordable pricing", "Senior citizen disc_ounts", "Public transport access"]
    },
    {
      name: "Nallagandla",
      slug: "nallagandla",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
      address: "654 Nallagandla Circle, Hyderabad - 500019",
      phone: "+91 9876543214",
      email: "nallagandla@galaxydentalcare.in",
      features: ["Modern facility", "Cosmetic dentistry focus", "3D imaging", "Comfortable interiors"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 -mt-28">
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
              backgroundPosition: 'center 30%',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.9) contrast(1.1)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700/70 to-primary-900/70"></div>
        </div>
        <div className="container mx-auto px-4 text-center pt-16">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">Our Branches</h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed animate-slide-in-left font-medium">
            Galaxy Dental Care has multiple convenient locations across Hyderabad, 
            each equipped with modern facilities and expert dental professionals.
          </p>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Convenient Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our branches maintain the same high standards of care and use the latest dental technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={branch.image} 
                    alt={`${branch.name} branch`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-primary-600/40 transition-all duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {branch.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <p className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 mt-0.5 text-primary-500" />
                      <span>{branch.address}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary-500" />
                      <span>{branch.phone}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary-500" />
                      <span>{branch.email}</span>
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Features:</h4>
                    <div className="space-y-1">
                      {branch.features.slice(0, 3).map((feature, idx) => (
                        <p key={idx} className="text-xs text-gray-600 flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                          <span>{feature}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={`/branches/${branch.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors group"
                  >
                    View Details
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What to Expect at Every Branch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consistent quality care and modern facilities across all Galaxy Dental Care locations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-in-left">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Convenient Hours</h3>
              <p className="text-gray-600 leading-relaxed">
                Extended hours including evenings and weekends to fit your busy schedule. 
                Emergency services available 24/7.
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float" style={{animationDelay: '0.5s'}}>
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Easy Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategically located with ample parking and public transport connectivity. 
                All branches are wheelchair accessible.
              </p>
            </div>

            <div className="text-center animate-slide-in-right">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float" style={{animationDelay: '1s'}}>
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Qualified dental professionals and support staff committed to providing 
                exceptional patient care and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Visit Your Nearest Branch</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule an appointment at your most convenient location and experience 
              the Galaxy Dental Care difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg">
                <Link to="/contact">Get Directions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Branches;
