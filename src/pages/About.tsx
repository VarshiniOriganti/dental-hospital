
import React, { useRef } from 'react';
import { CheckCircle, Users, Award, Heart, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

const About = () => {
  const { addToRefs } = useScrollAnimation();
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every decision we make prioritizes your comfort, health, and satisfaction."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We maintain the highest standards in dental care and customer service."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Advanced sterilization and safety protocols ensure your wellbeing."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified professionals bring years of experience and expertise."
    }
  ];

  const services = [
    "Comprehensive Dental Examinations and Cleanings",
    "Advanced Restorative Dentistry (Crowns, Bridges, Implants)",
    "Cosmetic Dentistry (Veneers, Whitening, Smile Makeovers)",
    "Orthodontic Treatment (Braces, Invisible Aligners)",
    "Periodontal Therapy and Gum Disease Treatment",
    "Endodontic Services (Root Canal Treatment)",
    "Oral Surgery and Wisdom Tooth Extraction",
    "Pediatric Dentistry for Children",
    "Emergency Dental Care",
    "Preventive Dental Programs"
  ];

  return (
    <Layout>
      {/* Hero Section with Matching Violet Overlay */}
      <section className="relative pt-40 pb-24 -mt-20 bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: `
                   linear-gradient(to right, rgb(76, 29, 149, 0.9), rgb(67, 56, 202, 0.8), rgb(109, 40, 217, 0.7)),
                   url('https://png.pngtree.com/thumb_back/fw800/background/20230616/pngtree-vortex-and-herb-encircle-dental-care-and-3d-dirty-teeth-render-image_3616367.jpg')
                 `,
                 backgroundBlendMode: 'multiply',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
               }}>
        <div className="absolute inset-0 -z-10"></div>
        <div className="container mx-auto px-4 text-center pt-16">
          <motion.h1 
            className="text-5xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Welcome to Galaxy Dental Care
          </motion.h1>
          <motion.p 
            className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Your trusted partner in achieving optimal oral health and a beautiful smile.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={addToRefs} className="animate-on-scroll animate-fade-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Galaxy Dental Care, our mission is to provide comprehensive, high-quality dental care 
                in a comfortable and welcoming environment. We are committed to helping our patients 
                achieve and maintain optimal oral health while creating beautiful, confident smiles.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that everyone deserves access to excellent dental care, and we strive to make 
                our services accessible, affordable, and tailored to meet each patient's unique needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span className="text-gray-700">Personalized treatment plans for every patient</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span className="text-gray-700">State-of-the-art technology and equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span className="text-gray-700">Continuous education and professional development</span>
                </div>
              </div>
            </div>
            <div ref={addToRefs} className="animate-on-scroll animate-fade-right">
              <img 
                src="https://clinicaoraldental.es/wp-content/uploads/2022/08/AF1QipOqlN-c2esEpr6d65Dw3tqZmZddwiqjj_5W7f-l.jpg" 
                alt="Modern dental clinic interior with advanced equipment"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading 
              as="h2" 
              className="text-4xl font-bold text-gray-800 mb-6"
              animationType="fadeIn"
              delay={0.1}
            >
              Our Core Values
            </AnimatedHeading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do at Galaxy Dental Care
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} ref={addToRefs} className="animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <AnimatedHeading 
                  as="h3" 
                  className="text-xl font-semibold text-gray-800 mb-3"
                  animationType="fadeIn"
                >
                  {value.title}
                </AnimatedHeading>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedHeading 
              as="h2" 
              className="text-4xl font-bold text-gray-800 mb-6"
              animationType="fadeIn"
              delay={0.1}
            >
              Our Mission & Vision
            </AnimatedHeading>
            <p className="text-xl text-gray-600">
              At Galaxy Dental Care, we believe in providing personalized, high-quality dental care 
              that improves both your oral health and overall wellbeing. Our mission is to create 
              beautiful, healthy smiles through exceptional dental services and patient education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                ref={addToRefs}
                className="flex items-center space-x-3 animate-on-scroll animate-fade-left" 
                style={{animationDelay: `${index * 50}ms`}}
              >
                <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedHeading 
            as="h2" 
            className="text-4xl font-bold text-gray-800 mb-6"
            animationType="fadeIn"
          >
            Meet Our Expert Team
          </AnimatedHeading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our dedicated team of dental professionals is committed to providing you with the highest quality care.
          </p>

        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div ref={addToRefs} className="animate-on-scroll animate-fade-up flex flex-col h-full" style={{animationDelay: '0s'}}>
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face" 
                alt="Dr. Rajesh Kumar"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary-100"
              />
              <AnimatedHeading 
                as="h3" 
                className="text-xl font-semibold text-gray-800 mb-2"
                animationType="fadeIn"
              >
                Dr. Rajesh Kumar
              </AnimatedHeading>
              <p className="text-primary-600 font-medium mb-3">Chief Dental Officer</p>
              <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                15+ years of experience in comprehensive dental care and smile makeovers
              </p>
            </Card>
          </div>

          <div ref={addToRefs} className="animate-on-scroll animate-fade-up flex flex-col h-full" style={{animationDelay: '100ms'}}>
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center h-full">
              <img 
                src="https://www.smhbhopal.com/upload/doctors/1694174610.webp" 
                alt="Dr. Priya Sharma - Orthodontist"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary-100"
              />
              <AnimatedHeading 
                as="h3" 
                className="text-xl font-semibold text-gray-800 mb-2"
                animationType="fadeIn"
              >
                Dr. Priya Sharma
              </AnimatedHeading>
              <p className="text-primary-600 font-medium mb-3">Orthodontist</p>
              <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                Specialist in braces and aligners with 12+ years of experience
              </p>
            </Card>
          </div>

          <div ref={addToRefs} className="animate-on-scroll animate-fade-up flex flex-col h-full" style={{animationDelay: '200ms'}}>
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center h-full">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face" 
                alt="Dr. Arun Reddy"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary-100"
              />
              <AnimatedHeading 
                as="h3" 
                className="text-xl font-semibold text-gray-800 mb-2"
                animationType="fadeIn"
              >
                Dr. Arun Reddy
              </AnimatedHeading>
              <p className="text-primary-600 font-medium mb-3">Oral Surgeon</p>
              <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                Expert in dental implants and oral surgery procedures
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedHeading 
            as="h2" 
            className="text-4xl font-bold mb-8"
            animationType="slideUp"
            delay={0.1}
          >
            Your Journey to a Healthier Smile Starts Here
          </AnimatedHeading>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our family of satisfied patients and discover why we're the preferred choice for comprehensive dental care.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
