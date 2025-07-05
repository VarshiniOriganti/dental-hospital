
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, MessageCircle, FileText, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Clarivo = () => {
  return (
    <Layout>
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
        <div className="container mx-auto px-4 text-center pt-16">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">Clarivo Safety Standards</h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed animate-slide-in-left font-medium">
            Advanced clarity and precision in our safety procedures, ensuring transparent, 
            reliable, and comprehensive patient care protocols.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Clear & Transparent Safety</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our Clarivo system ensures complete transparency in safety procedures, 
                with clear communication and detailed documentation of all safety measures.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Eye className="w-6 h-6 text-primary-500" />
                  <span>Transparent safety protocol documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6 text-primary-500" />
                  <span>Clear patient communication standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-primary-500" />
                  <span>Detailed risk assessment procedures</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=500&fit=crop" 
                alt="Clear safety protocols"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Experience Transparent Care</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our Clarivo standards ensure you're fully informed about every safety measure protecting your health.
          </p>
          <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
            <Link to="/contact" className="flex items-center">
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Clarivo;
