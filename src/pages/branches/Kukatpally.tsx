
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Kukatpally = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Kukatpally Branch</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Located in KBHP Colony, our family-friendly branch offers comprehensive dental care 
            with special focus on pediatric dentistry and comfortable treatment environment.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
              <p className="text-sm text-gray-600">456 KBHP Colony, Kukatpally, Hyderabad - 500072</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
              <p className="text-sm text-gray-600">+91 9876543211</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
              <p className="text-sm text-gray-600">kukatpally@galaxydentalcare.in</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Family-Friendly Dental Care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Kukatpally branch is specially designed for families with children, 
              featuring a comfortable environment and pediatric specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Special Features:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span>Kids play area and entertainment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span>Pediatric dental specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span>Family treatment packages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span>Digital X-ray and laser dentistry</span>
                </div>  
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span>Nitrous oxide sedation available</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=500&fit=crop" 
                alt="Family-friendly dental clinic"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Visit Our Kukatpally Branch</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Perfect for families seeking comprehensive dental care in a comfortable, 
            child-friendly environment.
          </p>
          <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
            <Link to="/contact">Book Family Appointment</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Kukatpally;
