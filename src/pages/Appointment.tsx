import React from 'react';
import { Calendar, Clock, User, Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/ScrollAnimation';

const AppointmentPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Appointment booked:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      service: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

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
              url('https://officechai.com/wp-content/uploads/2021/09/Optimized-appointment-.jpg')
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
        
        <div className="container mx-auto px-4 text-center pt-16 relative z-10">
          <motion.h1 
            className="text-5xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ 
              textShadow: '0 2px 8px rgba(0,0,0,0.7)',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
            }}
          >
            Book an Appointment
          </motion.h1>
          <motion.p 
            className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            Schedule your visit with our dental experts. We're here to give you the best care possible.
          </motion.p>
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-primary-600 hover:bg-white/90"
              onClick={() => {
                const formSection = document.getElementById('appointment-form');
                formSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="appointment-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:flex">
                {/* Form Section */}
                <div className="w-full p-8">
                  <ScrollAnimation>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule Your Visit</h2>
                  </ScrollAnimation>
                  <ScrollAnimation delay={0.1}>
                    <p className="text-gray-600 mb-8">
                      Fill out the form below and we'll get back to you to confirm your appointment.
                    </p>
                  </ScrollAnimation>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <StaggerItem>
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                        >
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          >
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="pl-10 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200"
                              placeholder="John Doe"
                            />
                          </motion.div>
                        </motion.div>
                      </StaggerItem>

                      {/* Phone Field */}
                      <StaggerItem delay={0.1}>
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                        >
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          >
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="pl-10 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200"
                              placeholder="+91 98765 43210"
                            />
                          </motion.div>
                        </motion.div>
                      </StaggerItem>

                      {/* Email Field */}
                      <StaggerItem delay={0.2}>
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                        >
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          >
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="pl-10 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200"
                              placeholder="john@example.com"
                            />
                          </motion.div>
                        </motion.div>
                      </StaggerItem>

                      {/* Service Field */}
                      <StaggerItem delay={0.3}>
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                        >
                          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                            Service <span className="text-red-500">*</span>
                          </label>
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          >
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              required
                              className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200"
                            >
                              <option value="">Select a service</option>
                              <option value="general">General Dentistry</option>
                              <option value="cosmetic">Cosmetic Dentistry</option>
                              <option value="ortho">Orthodontics</option>
                              <option value="implant">Dental Implants</option>
                              <option value="emergency">Emergency Care</option>
                            </select>
                          </motion.div>
                        </motion.div>
                      </StaggerItem>

                      {/* Date Field */}
                      <StaggerItem delay={0.4}>
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                        >
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Date <span className="text-red-500">*</span>
                          </label>
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          >
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                              type="date"
                              id="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              required
                              min={new Date().toISOString().split('T')[0]}
                              className="pl-10 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200"
                            />
                          </motion.div>
                        </motion.div>
                      </StaggerItem>

                      {/* Time Field */}
                      <StaggerItem delay={0.5}>
                        <motion.div 
                          className="relative"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                        >
                          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Time <span className="text-red-500">*</span>
                          </label>
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          >
                            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <select
                              id="time"
                              name="time"
                              value={formData.time}
                              onChange={handleChange}
                              required
                              className="pl-10 w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200"
                            >
                              <option value="">Select a time</option>
                              <option value="09:00">09:00 AM</option>
                              <option value="10:00">10:00 AM</option>
                              <option value="11:00">11:00 AM</option>
                              <option value="12:00">12:00 PM</option>
                              <option value="14:00">02:00 PM</option>
                              <option value="15:00">03:00 PM</option>
                              <option value="16:00">04:00 PM</option>
                              <option value="17:00">05:00 PM</option>
                            </select>
                          </motion.div>
                        </motion.div>
                      </StaggerItem>

                      {/* Message Field */}
                      <StaggerItem delay={0.6} className="md:col-span-2">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                        >
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Additional Notes
                          </label>
                          <motion.div
                            whileHover={{ scale: 1.005 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          >
                            <textarea
                              id="message"
                              name="message"
                              rows={3}
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500 transition-all duration-200"
                              placeholder="Any specific requirements or concerns..."
                            />
                          </motion.div>
                        </motion.div>
                      </StaggerItem>

                      {/* Submit Button */}
                      <StaggerItem delay={0.7} className="md:col-span-2">
                        <motion.div 
                          className="pt-4"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            <Button
                              type="submit"
                              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg text-base font-medium transition-all duration-200"
                            >
                              Book Appointment
                            </Button>
                          </motion.div>
                        </motion.div>
                      </StaggerItem>
                    </StaggerContainer>
                  </form>
                </div>
              </div>
            </motion.div>
            
            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2"
                  initial={{ opacity: 0, y: 50, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: 20, x: 20 }}
                  transition={{ type: 'spring', damping: 25 }}
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Appointment booked successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-violet-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold text-violet-900 mb-8">Need Immediate Assistance?</h2>
            </ScrollAnimation>
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone Card */}
              <StaggerItem>
                <motion.div 
                  className="h-full p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Phone className="h-6 w-6 text-violet-600" />
                  </motion.div>
                  <h3 className="text-lg font-medium text-violet-900 mb-2">Call Us</h3>
                  <p className="text-violet-800">+91 98765 43210</p>
                  <p className="text-sm text-violet-600 mt-1">Mon-Sat: 9:00 AM - 8:00 PM</p>
                </motion.div>
              </StaggerItem>

              {/* Email Card */}
              <StaggerItem delay={0.1}>
                <motion.div 
                  className="h-full p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 10 }}
                  >
                    <Mail className="h-6 w-6 text-violet-600" />
                  </motion.div>
                  <h3 className="text-lg font-medium text-violet-900 mb-2">Email Us</h3>
                  <p className="text-violet-800">appointments@galaxydental.com</p>
                  <p className="text-sm text-violet-600 mt-1">We'll respond within 24 hours</p>
                </motion.div>
              </StaggerItem>

              {/* Location Card */}
              <StaggerItem delay={0.2}>
                <motion.div 
                  className="h-full p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin className="h-6 w-6 text-violet-600" />
                  </motion.div>
                  <h3 className="text-lg font-medium text-violet-900 mb-2">Visit Us</h3>
                  <p className="text-violet-800">123 Dental Street, Hyderabad</p>
                  <p className="text-sm text-violet-600 mt-1">Get Directions</p>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AppointmentPage;
