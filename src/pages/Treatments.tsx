
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, Award } from 'lucide-react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Treatments = () => {
  const treatments = [
    {
      title: "Laser Dentistry",
      description: "Advanced laser technology for precise, minimally invasive treatments with faster healing",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      link: "/treatments/laser-dentistry",
      benefits: ["Painless procedures", "Faster healing", "Minimal bleeding"],
      duration: "30-60 minutes"
    },
    {
      title: "Dental Filling",
      description: "Restore damaged teeth with high-quality, tooth-colored composite fillings",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
      link: "/treatments/dental-filling",
      benefits: ["Natural appearance", "Durable materials", "Same-day treatment"],
      duration: "45-90 minutes"
    },
    {
      title: "Invisible Aligners",
      description: "Straighten teeth discreetly with custom-made clear aligners",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
      link: "/treatments/invisible-aligners",
      benefits: ["Nearly invisible", "Removable", "Comfortable"],
      duration: "6-18 months"
    },
    {
      title: "Braces & Aligners",
      description: "Comprehensive orthodontic solutions for all ages with modern techniques",
      image: "https://images.unsplash.com/photo-1606811841689-23dfdb7ee459?w=400&h=300&fit=crop",
      link: "/treatments/braces-aligners",
      benefits: ["Effective results", "Various options", "Expert care"],
      duration: "12-24 months"
    },
    {
      title: "Wisdom Teeth Removal",
      description: "Safe and comfortable extraction of wisdom teeth by experienced oral surgeons",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
      link: "/treatments/wisdom-teeth-removal",
      benefits: ["Pain-free procedure", "Quick recovery", "Expert surgeons"],
      duration: "30-60 minutes"
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth",
      image: "https://images.unsplash.com/photo-1606811841689-23dfdb7ee459?w=400&h=300&fit=crop",
      link: "/treatments/dental-implants",
      benefits: ["Permanent solution", "Natural appearance", "Preserve jawbone"],
      duration: "3-6 months"
    },
    {
      title: "Dental Crowns",
      description: "Restore damaged teeth with natural-looking ceramic and porcelain crowns",
      image: "https://images.unsplash.com/photo-1606811841689-23dfdb7ee459?w=400&h=300&fit=crop",
      link: "/treatments/dental-crowns",
      benefits: ["Durable restoration", "Natural appearance", "Long-lasting"],
      duration: "2-3 visits"
    },
    {
      title: "Advanced Gum Treatments",
      description: "Comprehensive periodontal care to treat gum disease and maintain oral health",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      link: "/treatments/advanced-gum-treatments",
      benefits: ["Prevent tooth loss", "Reduce inflammation", "Improve oral health"],
      duration: "45-90 minutes"
    },
    {
      title: "Root Canal Treatment",
      description: "Save infected teeth with pain-free root canal procedures using modern techniques",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
      link: "/treatments/root-canal",
      benefits: ["Save natural tooth", "Pain relief", "High success rate"],
      duration: "60-90 minutes"
    },
    {
      title: "Invisalign Aligners",
      description: "Premium clear aligner treatment for complex orthodontic cases",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
      link: "/treatments/invisalign-aligners",
      benefits: ["Proven technology", "Predictable results", "Comfortable fit"],
      duration: "8-20 months"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=600&fit=crop" 
            alt="Advanced dental treatments"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Our Dental Treatments
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-slide-in-left">
            Comprehensive dental solutions using state-of-the-art technology and proven techniques 
            to restore your oral health and enhance your smile.
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Treatment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive range of dental treatments designed to address 
              all your oral health needs with the highest standards of care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-primary-600/40 transition-all duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-primary-600" />
                      <span className="text-sm font-medium text-primary-600">{treatment.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{treatment.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {treatment.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-primary-500 fill-current" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={treatment.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors group"
                  >
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Galaxy Dental Care?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that quality care and advanced technology can make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-in-left">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Professionals</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team of certified dentists and specialists bring years of experience 
                and expertise to every treatment.
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Advanced Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                We use the latest dental technology and equipment to ensure precise, 
                comfortable, and effective treatments.
              </p>
            </div>

            <div className="text-center animate-slide-in-right">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Comprehensive Care</h3>
              <p className="text-gray-600 leading-relaxed">
                From routine cleanings to complex procedures, we provide complete 
                dental care under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Treatment?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule a consultation with our dental experts to discuss your treatment options 
              and create a personalized care plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg">
                <Link to="/branches">Find Location</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Treatments;
