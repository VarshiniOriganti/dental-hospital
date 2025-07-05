
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, CheckCircle, Star } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const BanjaraHills = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Banjara Hills Branch</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our premium location in the heart of Banjara Hills, offering luxury dental care 
            with VIP treatment rooms and advanced cosmetic dentistry services.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
              <p className="text-sm text-gray-600">789 Road No. 12, Banjara Hills, Hyderabad - 500034</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
              <p className="text-sm text-gray-600">+91 9876543212</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
              <p className="text-sm text-gray-600">banjarahills@galaxydentalcare.in</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Hours</h3>
              <p className="text-sm text-gray-600">Mon-Sat: 9AM-8PM<br/>Sun: 10AM-6PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Premium Dental Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in prestigious Banjara Hills, our branch offers luxury dental care 
              with personalized attention and premium amenities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Premium Features:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-primary-500 fill-current" />
                  <span>VIP treatment suites</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-primary-500 fill-current" />
                  <span>Advanced cosmetic dentistry</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-primary-500 fill-current" />
                  <span>Smile makeover specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-primary-500 fill-current" />
                  <span>Valet parking service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-primary-500 fill-current" />
                  <span>Premium materials and technology</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=500&fit=crop" 
                alt="Premium dental clinic"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Experience Luxury Dental Care</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Indulge in premium dental care with personalized attention and luxury amenities 
            in the heart of Banjara Hills.
          </p>
          <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
            <Link to="/contact">Book VIP Appointment</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BanjaraHills;
