
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Award, Users, Clock, CheckCircle, Play, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
};

// Reusable AnimatedText component
const AnimatedText = ({ text, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {text}
    </motion.span>
  );
};
import { Card } from '@/components/ui/card';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

// Define the service type for better type safety
interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = React.useMemo(() => [
    {
      image: "https://www.somersetdental.ca/wp-content/uploads/2022/07/iStock-1349328691.jpg",
      title: "Your Smile is Our Passion",
      subtitle: "Comprehensive dental solutions for patients of all ages with expert care"
    },
    {
      image: "https://www.ripeglobal.com/hubfs/Digital%20Dentistry%2010%20Technologies%20That%20Are%20Shaping%20The%20Future.png",
      title: "Advanced Dental Care with Modern Technology",
      subtitle: "Experience world-class dental treatments in a comfortable, state-of-the-art environment"
    },
    {
      image: "https://oliverfamilydental.com/wp-content/uploads/2021/04/tooth-extraction-a-painless-procedure.jpg",
      title: "Painless Procedures, Perfect Results",
      subtitle: "Advanced techniques ensuring comfortable treatments and outstanding outcomes"
    }
  ], []);

  const slideCount = heroSlides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [slideCount]);

  const services = [
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look and feel natural",
      image: "https://www.bodyexpert.online/wp-content/uploads/2023/01/01-guide-implant-dentaire.jpg",
      link: "/treatments/dental-implants"
    },
    {
      title: "Invisible Aligners",
      description: "Straighten teeth discreetly with custom-made clear aligners",
      image: "https://www.hovedentalclinic.co.uk/wp-content/uploads/2022/12/bigstock-Clear-Aligner-Dental-Night-Gua-463488851.jpg",
      link: "/treatments/invisible-aligners"
    },
    {
      title: "Root Canal Treatment",
      description: "Save your natural teeth with pain-free root canal procedures",
      image: "https://www.fentondentists.com/wp-content/uploads/2023/01/root-canal-treatment.jpg",
      link: "/treatments/root-canal"
    },
    {
      title: "Dental Crowns",
      description: "Restore damaged teeth with natural-looking ceramic crowns",
      image: "https://doversdental.com/wp-content/uploads/2022/03/crowns-and-bridge-1.jpg",
      link: "/treatments/dental-crowns"
    },
    {
      title: "Laser Dentistry",
      description: "Minimally invasive treatments using advanced laser technology",
      image: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2665582.jpg",
      link: "/treatments/laser-dentistry"
    },
    {
      title: "Gum Treatments",
      description: "Comprehensive periodontal care for healthy gums",
      image: "https://www.periodontistphoenix.com/wp-content/uploads/2021/11/non-surgical-gum-disease-treatment.jpg",
      link: "/treatments/advanced-gum-treatments"
    }
  ];

  const stats = [
    { number: "15000+", label: "Happy Patients", icon: Users },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "5", label: "Clinic Locations", icon: CheckCircle },
    { number: "24/7", label: "Emergency Care", icon: Clock }
  ];

  return (
    <Layout>
      {/* Hero Section with Darker Background */}
      <section className="relative h-screen -mt-20 pt-20 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                filter: 'brightness(0.8) contrast(1.1)',
                animation: 'float 15s ease-in-out infinite',
              }}
            >
              <style>{
                `@keyframes float {
                  0% { transform: scale(1.1) translateY(-20px) translateX(-20px); }
                  25% { transform: scale(1.15) translateY(20px) translateX(20px); }
                  50% { transform: scale(1.2) translateY(0) translateX(0); }
                  75% { transform: scale(1.15) translateY(20px) translateX(-20px); }
                  100% { transform: scale(1.1) translateY(-20px) translateX(-20px); }
                }
                @media (prefers-reduced-motion: reduce) {
                  .absolute { animation: none !important; }
                }`
              }</style>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 via-purple-900/70 to-indigo-900/70" />
          </div>
        ))}
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 text-left text-white z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ 
                textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
              }}
              key={`title-${currentSlide}`}
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              key={`subtitle-${currentSlide}`}
            >
              <p 
                className="text-lg md:text-xl mb-8 max-w-2xl font-medium"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
              >
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/appointment" 
                className="bg-white text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-primary-50 transition-colors inline-block"
              >
                Book Appointment
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-violet-50 to-violet-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ 
                    scale: [0, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1 
                  }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-primary-600 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  {stat.number}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <AnimatedHeading 
                as="h2"
                className="text-4xl font-bold text-gray-800 mb-6"
                animationType="fadeIn"
                delay={0.2}
              >
                Welcome to Galaxy Dental Care
              </AnimatedHeading>
              <motion.p 
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                At Galaxy Dental Care, we are committed to providing exceptional dental care in a warm, 
                comfortable environment. Our team of experienced dentists and hygienists use the latest 
                technology and techniques to ensure you receive the best possible treatment.
              </motion.p>
              <motion.div 
                className="space-y-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
              >
                {[
                  "State-of-the-art dental technology",
                  "Experienced and certified dentists",
                  "Comprehensive dental services",
                  "Comfortable and relaxing environment"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                      <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    </motion.div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg group"
                >
                  Learn more about us 
                  <motion.span 
                    className="ml-1 inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: 'spring', 
                stiffness: 50,
                damping: 15,
                delay: 0.2
              }}
            >
              <motion.img 
                src="https://galaxydentalcare.in/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-11-at-16.03.14_f8ee4270.jpg" 
                alt="Galaxy Dental Clinic Interior"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
              <div className="absolute inset-0 bg-primary-600/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading 
              as="h2"
              className="text-3xl md:text-4xl font-bold text-gray-800"
              animationType="fadeIn"
            >
              Our Dental Services
            </AnimatedHeading>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
            {services.map((service: Service, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.link} className="h-full block">
                  <Card className="h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-none shadow-md group-hover:shadow-xl group-hover:ring-2 group-hover:ring-primary/20 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    <div className="relative h-56 md:h-48 overflow-hidden rounded-t-lg">
                      <motion.img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="relative p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-primary">Service</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {service.title === "Dental Implants" && (
                            <>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">95% Success</span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Permanent</span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">Natural Look</span>
                            </>
                          )}
                          {service.title === "Invisible Aligners" && (
                            <>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">Virtually Invisible</span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">Removable</span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">Comfortable</span>
                            </>
                          )}
                          {service.title === "Root Canal Treatment" && (
                            <>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Pain-free</span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">Saves Teeth</span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">Quick Recovery</span>
                            </>
                          )}
                          {service.title === "Dental Crowns" && (
                            <>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">Strengthens</span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">Natural Color</span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">Long-lasting</span>
                            </>
                          )}
                          {service.title === "Laser Dentistry" && (
                            <>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Minimally Invasive</span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">Less Discomfort</span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">Faster Healing</span>
                            </>
                          )}
                          {service.title === "Gum Treatments" && (
                            <>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">Oral Health</span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Prevents Loss</span>
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">Enhances Smile</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <AnimatedHeading 
              as="h2"
              className="text-4xl font-bold text-white mb-6"
              animationType="slideUp"
            >
              Ready to Transform Your Smile?
            </AnimatedHeading>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule your consultation today and take the first step towards a healthier, 
              more confident smile with our expert dental team.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
