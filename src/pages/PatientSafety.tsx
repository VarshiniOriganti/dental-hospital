
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, CheckCircle, Award, Users, ArrowRight, 
  Eye, MessageCircle, FileText, Heart, Smile, 
  Flower, Globe, Calendar, AlertTriangle, ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/ScrollAnimation';

const PatientSafety = () => {
  // Safety Statistics
  const safetyStats = [
    { number: "100%", label: "Sterilization Compliance", icon: Shield },
    { number: "99.9%", label: "Infection Prevention", icon: CheckCircle },
    { number: "5000+", label: "Safe Procedures Monthly", icon: Users },
    { number: "ISO", label: "Certified Standards", icon: Award }
  ];

  // All Safety Measures
  const safetyAreas = [
    {
      icon: Shield,
      title: "Sterilization & Disinfection",
      items: [
        "Autoclave sterilization of all instruments",
        "Single-use disposable items when possible",
        "Hospital-grade disinfectants for all surfaces",
        "UV sterilization chambers",
        "Regular spore testing for sterilizer validation"
      ]
    },
    {
      icon: Users,
      title: "Staff Safety Protocols",
      items: [
        "Personal protective equipment (PPE) compliance",
        "Regular health screenings for all staff",
        "Vaccination requirements and updates",
        "Ongoing safety training and certification",
        "Emergency response preparedness"
      ]
    },
    {
      icon: Award,
      title: "Equipment Safety",
      items: [
        "Regular calibration and maintenance schedules",
        "Quality assurance testing protocols",
        "Digital radiography for reduced radiation",
        "Advanced air filtration systems",
        "Biocompatible materials only"
      ]
    },
    {
      icon: CheckCircle,
      title: "Patient Care Safety",
      items: [
        "Comprehensive medical history review",
        "Allergy and medication screening",
        "Informed consent procedures",
        "Emergency medical protocols",
        "Post-treatment follow-up care"
      ]
    }
  ];

  // Center Health Care Standards
  const healthcareStandards = [
    { icon: Globe, text: "WHO International Health Regulations compliance" },
    { icon: Award, text: "International healthcare facility standards" },
    { icon: CheckCircle, text: "Continuous quality assurance monitoring" },
    { icon: ShieldCheck, text: "Regular safety and quality audits" },
    { icon: Users, text: "Staff trained in international protocols" }
  ];

  // Clarivo Safety Standards
  const clarivoStandards = [
    { icon: Eye, text: "Transparent safety protocol documentation" },
    { icon: MessageCircle, text: "Clear patient communication standards" },
    { icon: FileText, text: "Detailed risk assessment procedures" },
    { icon: CheckCircle, text: "Documented safety checklists" },
    { icon: Users, text: "Patient education on safety measures" }
  ];

  // Haru Theme Safety
  const haruThemeSafety = [
    { icon: Heart, text: "Patient-centered safety approach" },
    { icon: Smile, text: "Stress reduction safety measures" },
    { icon: Flower, text: "Harmonious comfort protocols" },
    { icon: Shield, text: "Balanced safety and comfort" },
    { icon: CheckCircle, text: "Holistic patient wellbeing focus" }
  ];

  // Safety Protocols Timeline
  const safetyTimeline = [
    {
      title: "Before Your Visit",
      items: ["Pre-appointment health screening", "Virtual waiting room options", "Reduced waiting room occupancy"]
    },
    {
      title: "During Your Visit",
      items: ["Temperature checks", "Hand sanitization stations", "Social distancing measures"]
    },
    {
      title: "After Your Visit",
      items: ["Follow-up care instructions", "Post-treatment monitoring", "24/7 emergency support"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Matching Violet Overlay */}
      <section className="relative pt-40 pb-24 -mt-20 bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: `
                   linear-gradient(to right, rgb(76, 29, 149, 0.9), rgb(67, 56, 202, 0.8), rgb(109, 40, 217, 0.7)),
                   url('https://png.pngtree.com/background/20230617/original/pngtree-dental-care-vortex-3d-render-of-teeth-with-herbal-surroundings-picture-image_3697600.jpg')
                 `,
                 backgroundBlendMode: 'multiply',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
               }}>
        <div className="absolute inset-0 -z-10"></div>
        <div className="container mx-auto px-4 text-center pt-16">
          <ScrollAnimation>
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Patient Safety
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Your safety is our top priority. We maintain the highest standards of sterilization, 
              infection control, and patient care protocols to ensure your wellbeing.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {safetyStats.map((stat, index) => (
              <StaggerItem key={index} delay={index * 0.1}>
                <div className="text-center group">
                  <motion.div 
                    className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* All Safety Measures */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Comprehensive Safety Measures</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our complete framework of safety protocols ensures your protection at every step of your dental care journey.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-16">
            {safetyAreas.map((area, index) => (
              <StaggerItem key={index} delay={index * 0.1}>
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 group">
                  <motion.div 
                    className="flex items-center space-x-4 mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800">{area.title}</h3>
                  </motion.div>
                  <ul className="space-y-3">
                    {area.items.map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Safety Timeline */}
          <ScrollAnimation>
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">Our Safety Journey</h3>
              <StaggerContainer className="grid md:grid-cols-3 gap-8">
                {safetyTimeline.map((item, index) => (
                  <StaggerItem key={index} delay={index * 0.15}>
                    <div className="text-center h-full flex flex-col">
                      <motion.div 
                        className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <Calendar className="w-8 h-8 text-primary-600" />
                      </motion.div>
                      <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                      <ul className="space-y-2 flex-1">
                        {item.items.map((point, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-center space-x-2 text-gray-600"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                            <span className="text-left">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Safety Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We adhere to the highest international standards to ensure your safety and wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Healthcare Standards</h3>
              <ul className="space-y-3">
                {healthcareStandards.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <item.icon className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Transparent Protocols</h3>
              <ul className="space-y-3">
                {clarivoStandards.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <item.icon className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Patient-Centered Care</h3>
              <ul className="space-y-3">
                {haruThemeSafety.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <item.icon className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Your Safety is Our Priority</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We continuously update our protocols to meet and exceed the latest healthcare safety standards, 
              ensuring you receive the highest quality care in a safe and comfortable environment.
            </p>
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700 px-8 py-4 text-lg">
              <Link to="/contact" className="flex items-center">
                Schedule Your Safe Visit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Certifications & Standards */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Safety Certifications & Standards</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We adhere to international safety standards and maintain certifications from leading healthcare organizations
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <Award className="w-12 h-12 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">ISO 9001:2015</h3>
                <p className="text-white/80 text-sm">Quality Management System</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <Shield className="w-12 h-12 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">OSHA Compliant</h3>
                <p className="text-white/80 text-sm">Occupational Safety Standards</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <CheckCircle className="w-12 h-12 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">CDC Guidelines</h3>
                <p className="text-white/80 text-sm">Infection Prevention Protocols</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <Users className="w-12 h-12 text-white mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">ADA Standards</h3>
                <p className="text-white/80 text-sm">American Dental Association</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </Layout>
  );
};

export default PatientSafety;
