
import React from 'react';
import { CheckCircle, Users, Award, Heart, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedHeading from '../components/ui/AnimatedHeading';

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
      {/* Hero Section with Animated Background */}
      <section className="relative pt-40 pb-24 -mt-20 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(60, 40, 130, 0.7) 0%,
                rgba(80, 50, 150, 0.6) 50%,
                rgba(60, 40, 130, 0.7) 100%
              ),
              url('https://png.pngtree.com/thumb_back/fw800/background/20230616/pngtree-vortex-and-herb-encircle-dental-care-and-3d-dirty-teeth-render-image_3616367.jpg')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'float 15s ease-in-out infinite',
            filter: 'brightness(1.1) contrast(1.1)',
          }}
        >
          <style>{
            `@keyframes float {
              0% {
                transform: scale(1.1) translateY(-20px) translateX(-20px);
              }
              25% {
                transform: scale(1.15) translateY(20px) translateX(20px);
              }
              50% {
                transform: scale(1.2) translateY(0) translateX(0);
              }
              75% {
                transform: scale(1.15) translateY(20px) translateX(-20px);
              }
              100% {
                transform: scale(1.1) translateY(-20px) translateX(-20px);
              }
            }
            
            @media (prefers-reduced-motion: reduce) {
              .absolute {
                animation: none !important;
              }
            }`
          }</style>
        </div>
        <div className="absolute inset-0 -z-10"></div>
        <div className="container mx-auto px-4 text-center pt-16">
          <motion.h1 
            className="text-5xl font-bold text-white mb-6 drop-shadow-lg relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ 
              textShadow: '0 2px 8px rgba(0,0,0,0.7)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
            }}
          >
            Welcome to Galaxy Dental Care
          </motion.h1>
          <motion.p 
            className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium relative z-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            Your trusted partner in achieving optimal oral health and a beautiful smile.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              ref={addToRefs} 
              className="animate-on-scroll"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary-100 to-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="relative space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At Galaxy Dental Care, our mission is to provide comprehensive, high-quality dental care 
                    in a comfortable and welcoming environment. We are committed to helping our patients 
                    achieve and maintain optimal oral health while creating beautiful, confident smiles.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We believe that everyone deserves access to excellent dental care, and we strive to make 
                    our services accessible, affordable, and tailored to meet each patient's unique needs.
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span className="text-gray-700">Comprehensive dental care for the whole family</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span className="text-gray-700">State-of-the-art technology and techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span className="text-gray-700">Compassionate and experienced dental professionals</span>
                </div>
              </div>
            </motion.div>
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <AnimatedHeading 
              as="h2" 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 mb-6"
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
              <motion.div 
                key={index} 
                ref={addToRefs}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="p-8 text-center transition-all duration-500 border-0 shadow-sm hover:shadow-2xl bg-white/80 hover:bg-white backdrop-blur-sm hover:-translate-y-2 group-hover:ring-2 group-hover:ring-primary-100">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500">
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:linear-gradient(0deg,white,transparent)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedHeading 
              as="h2" 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 mb-6"
              animationType="fadeIn"
              delay={0.1}
            >
              Our Mission & Vision
            </AnimatedHeading>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Galaxy Dental Care, we believe in providing personalized, high-quality dental care 
              that improves both your oral health and overall wellbeing. Our mission is to create 
              beautiful, healthy smiles through exceptional dental services and patient education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                ref={addToRefs}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:shadow-lg">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <AnimatedHeading 
            as="h2" 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 mb-6"
            animationType="fadeIn"
          >
            Meet Our Expert Team
          </AnimatedHeading>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Our dedicated team of dental professionals is committed to providing you with the highest quality care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {/* Team Member 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <Card className="relative p-8 text-center flex flex-col items-center h-full bg-white/90 backdrop-blur-sm border border-gray-100 group-hover:border-transparent transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <div className="relative w-32 h-32 mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face" 
                    alt="Dr. Rajesh Kumar"
                    className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:border-primary-50 transition-all duration-500"
                  />
                </div>
                <AnimatedHeading 
                  as="h3" 
                  className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300"
                  animationType="fadeIn"
                >
                  Dr. Rajesh Kumar
                </AnimatedHeading>
                <p className="text-primary-500 font-medium mb-3 group-hover:scale-105 inline-block transition-transform duration-300">
                  Chief Dental Officer
                </p>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary-200 to-transparent my-4 mx-auto"></div>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto group-hover:text-gray-700 transition-colors duration-300">
                  15+ years of experience in comprehensive dental care and smile makeovers
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </Card>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <Card className="relative p-8 text-center flex flex-col items-center h-full bg-white/90 backdrop-blur-sm border border-gray-100 group-hover:border-transparent transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <div className="relative w-32 h-32 mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="https://www.smhbhopal.com/upload/doctors/1694174610.webp" 
                    alt="Dr. Priya Sharma"
                    className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:border-primary-50 transition-all duration-500"
                  />
                </div>
                <AnimatedHeading 
                  as="h3" 
                  className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-secondary-600 transition-colors duration-300"
                  animationType="fadeIn"
                >
                  Dr. Priya Sharma
                </AnimatedHeading>
                <p className="text-secondary-500 font-medium mb-3 group-hover:scale-105 inline-block transition-transform duration-300">
                  Orthodontist
                </p>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-secondary-200 to-transparent my-4 mx-auto"></div>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto group-hover:text-gray-700 transition-colors duration-300">
                  Specialist in braces and aligners with 12+ years of experience
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-400 to-primary-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </Card>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <Card className="relative p-8 text-center flex flex-col items-center h-full bg-white/90 backdrop-blur-sm border border-gray-100 group-hover:border-transparent transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <div className="relative w-32 h-32 mx-auto mb-6 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face" 
                    alt="Dr. Arun Reddy"
                    className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:border-primary-50 transition-all duration-500"
                  />
                </div>
                <AnimatedHeading 
                  as="h3" 
                  className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300"
                  animationType="fadeIn"
                >
                  Dr. Arun Reddy
                </AnimatedHeading>
                <p className="text-primary-500 font-medium mb-3 group-hover:scale-105 inline-block transition-transform duration-300">
                  Oral Surgeon
                </p>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary-200 to-transparent my-4 mx-auto"></div>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto group-hover:text-gray-700 transition-colors duration-300">
                  Expert in dental implants and oral surgery procedures
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Your Journey to a Healthier Smile Starts Here
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our family of satisfied patients and discover why we're the preferred choice for comprehensive dental care.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
