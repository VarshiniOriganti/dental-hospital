
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, CheckCircle, Heart } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Chandanagar = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Chandanagar Branch</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Community-focused dental care with affordable pricing and special programs 
            for senior citizens and local families.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
              <p className="text-sm text-gray-600">321 Chandanagar Main Road, Hyderabad - 500050</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
              <p className="text-sm text-gray-600">+91 9876543213</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
              <p className="text-sm text-gray-600">chandanagar@galaxydentalcare.in</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Community-Focused Care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Chandanagar branch serves the local community with affordable, 
              high-quality dental care and special programs for all age groups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Community Benefits:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-primary-500 fill-current" />
                  <span>Affordable treatment packages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-primary-500 fill-current" />
                  <span>Senior citizen discounts (20% off)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-primary-500 fill-current" />
                  <span>Student and family packages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-primary-500 fill-current" />
                  <span>Easy public transport access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-primary-500 fill-current" />
                  <span>Community dental awareness programs</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=500&fit=crop" 
                alt="Community dental clinic"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Serving Our Community</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Quality dental care that's accessible and affordable for everyone in the Chandanagar community.
          </p>
          <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
            <Link to="/contact">Book Affordable Care</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Chandanagar;
