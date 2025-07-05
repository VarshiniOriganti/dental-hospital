
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, CheckCircle, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Nallagandla = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Nallagandla Branch</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Modern dental facility specializing in cosmetic dentistry and smile makeovers 
            with state-of-the-art 3D imaging technology.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
              <p className="text-sm text-gray-600">654 Nallagandla Circle, Hyderabad - 500019</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
              <p className="text-sm text-gray-600">+91 9876543214</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-primary-500 mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
              <p className="text-sm text-gray-600">nallagandla@galaxydentalcare.in</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Modern Cosmetic Dentistry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our newest branch focuses on cosmetic treatments and smile enhancements 
              using the latest technology and comfortable interiors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Modern Features:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-primary-500" />
                  <span>Advanced 3D imaging technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-primary-500" />
                  <span>Digital smile design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-primary-500" />
                  <span>Cosmetic dentistry specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-primary-500" />
                  <span>Comfortable modern interiors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-primary-500" />
                  <span>Same-day crown technology</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=500&fit=crop" 
                alt="Modern dental facility"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Transform Your Smile</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Experience the future of cosmetic dentistry with our state-of-the-art technology 
            and comfortable treatment environment.
          </p>
          <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
            <Link to="/contact">Book Smile Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Nallagandla;
