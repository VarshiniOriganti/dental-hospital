
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', location: '', message: '' });
  };

  const getDirections = (address: string) => {
    // Encode the address for URL
    const encodedAddress = encodeURIComponent(address);
    // Open the default map application with the address
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  const locations = [
    {
      name: "Kondapur",
      address: "123 HITEC City Road, Kondapur, Hyderabad - 500084",
      phone: "+91 9876543210",
      email: "kondapur@galaxydentalcare.in"
    },
    {
      name: "Kukatpally (KBHP Colony)",
      address: "456 KBHP Colony, Kukatpally, Hyderabad - 500072",
      phone: "+91 9876543211",
      email: "kukatpally@galaxydentalcare.in"
    },
    {
      name: "Banjara Hills",
      address: "789 Road No. 12, Banjara Hills, Hyderabad - 500034",
      phone: "+91 9876543212",
      email: "banjarahills@galaxydentalcare.in"
    },
    {
      name: "Chandanagar",
      address: "321 Chandanagar Main Road, Hyderabad - 500050",
      phone: "+91 9876543213",
      email: "chandanagar@galaxydentalcare.in"
    },
    {
      name: "Nallagandla",
      address: "654 Nallagandla Circle, Hyderabad - 500019",
      phone: "+91 9876543214",
      email: "nallagandla@galaxydentalcare.in"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 -mt-20 bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: `
                   linear-gradient(to right, rgb(76, 29, 149, 0.9), rgb(67, 56, 202, 0.8), rgb(109, 40, 217, 0.7)),
                   url('https://png.pngtree.com/background/20230618/original/pngtree-background-in-purple-3d-rendered-interface-for-mobile-phone-picture-image_3709466.jpg')
                 `,
                 backgroundBlendMode: 'multiply',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
               }}>
        <div className="absolute inset-0 -z-10"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center pt-16">
          <ScrollAnimation>
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Contact Us
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We're here to help and answer any questions you might have. 
              Reach out to us and we'll respond as soon as possible.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <StaggerContainer className="space-y-6">
                    <StaggerItem delay={0.1}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                        >
                          <Input
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                        >
                          <Input
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </motion.div>
                      </div>
                    </StaggerItem>
                    
                    <StaggerItem delay={0.2}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                        >
                          <Input
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            required
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                        >
                          <select 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                            value={formData.location}
                            onChange={(e) => setFormData({...formData, location: e.target.value})}
                            required
                          >
                            <option value="">Preferred Location</option>
                            {locations.map((loc, index) => (
                              <option key={index} value={loc.name}>{loc.name}</option>
                            ))}
                          </select>
                        </motion.div>
                      </div>
                    </StaggerItem>
                    
                    <StaggerItem delay={0.3}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                      >
                        <Textarea
                          placeholder="Your Message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                        />
                      </motion.div>
                    </StaggerItem>
                    
                    <StaggerItem delay={0.4}>
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <Button type="submit" size="lg" className="w-full bg-primary-600 hover:bg-primary-700">
                          <Send className="mr-2 w-5 h-5" />
                          Send Message
                        </Button>
                      </motion.div>
                    </StaggerItem>
                  </StaggerContainer>
                </form>
              </div>
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      title: "Phone Numbers",
                      items: ["+91 9876543210 (Main)", "+91 8765432109 (Emergency)"]
                    },
                    {
                      icon: Mail,
                      title: "Email Addresses",
                      items: ["info@galaxydentalcare.in", "appointments@galaxydentalcare.in"]
                    },
                    {
                      icon: Clock,
                      title: "Working Hours",
                      items: ["Monday - Saturday: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM", "Emergency services available 24/7"]
                    },
                    {
                      icon: Facebook,
                      title: "Follow Us",
                      isSocial: true,
                      items: ["Facebook", "Instagram"]
                    }
                  ].map((item, index) => (
                    <StaggerItem key={index} delay={index * 0.1}>
                      <motion.div 
                        className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                          {item.isSocial ? (
                            <div className="flex space-x-4">
                              {item.items.map((social, i) => (
                                <a 
                                  key={i}
                                  href={`https://${social.toLowerCase()}.com/galaxydentalcare`}
                                  className="text-primary-600 hover:text-primary-700 hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {social}
                                </a>
                              ))}
                            </div>
                          ) : (
                            item.items.map((text, i) => (
                              <p key={i} className={`text-gray-600 ${i < item.items.length - 1 ? 'mb-1' : ''} ${text.includes('Emergency') ? 'text-sm mt-2' : ''}`}>
                                {text}
                              </p>
                            ))
                          )}
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollAnimation>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Locations
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit us at any of our convenient locations across Hyderabad for world-class dental care
              </p>
            </ScrollAnimation>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <StaggerItem key={index} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Card className="p-6 h-full transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div 
                        className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <MapPin className="w-5 h-5 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-800">{location.name}</h3>
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <motion.p className="flex items-start space-x-2" whileHover={{ x: 5 }}>
                        <MapPin className="w-4 h-4 mt-0.5 text-primary-500 flex-shrink-0" />
                        <span>{location.address}</span>
                      </motion.p>
                      <motion.p className="flex items-center space-x-2" whileHover={{ x: 5 }}>
                        <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span>{location.phone}</span>
                      </motion.p>
                      <motion.p className="flex items-center space-x-2" whileHover={{ x: 5 }}>
                        <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span>{location.email}</span>
                      </motion.p>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6"
                    >
                      <Button 
                        onClick={() => getDirections(location.address)}
                        className="w-full bg-primary-600 hover:bg-primary-700"
                      >
                        Get Directions
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-violet-600">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <motion.h2 
                className="text-3xl font-bold text-white mb-4"
                whileHover={{ scale: 1.02 }}
              >
                Dental Emergency?
              </motion.h2>
              <motion.p 
                className="text-lg text-white/90 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                We provide 24/7 emergency dental care. Please visit our nearest location for immediate assistance.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Button 
                  variant="outline" 
                  className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white"
                  size="lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Emergency Hotline
                </Button>
              </motion.div>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
