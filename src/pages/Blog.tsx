
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/ScrollAnimation';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Regular Dental Checkups",
      excerpt: "Discover why biannual dental visits are crucial for maintaining optimal oral health and preventing serious dental issues.",
      image: "https://sydneyroaddentalcare.com.au/wp-content/uploads/2021/02/rsz_35d427434-scaled.jpg",
      author: "Dr. Rajesh Kumar",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Preventive Care"
    },
    {
      id: 2,
      title: "Understanding Dental Implants: A Complete Guide",
      excerpt: "Everything you need to know about dental implants, from the procedure to recovery and long-term care.",
      image: "https://www.limitedtoendodontics.com/wp-content/uploads/implant-service-graphic.jpeg",
      author: "Dr. Arun Reddy",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Preventive Care"
    },
    {
      id: 3,
      title: "Invisible Aligners vs Traditional Braces: Which is Right for You?",
      excerpt: "Compare the benefits and drawbacks of invisible aligners and traditional braces to make an informed decision.",
      image: "https://bellevueorthodontist.com/wp-content/uploads/sites/90/2022/07/Types-of-Braces_1648491073.jpg",
      author: "Dr. Priya Sharma",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Orthodontics"
    },
    {
      id: 4,
      title: "How to Maintain Oral Hygiene During Orthodontic Treatment",
      excerpt: "Essential tips for keeping your teeth and gums healthy while wearing braces or aligners.",
      image: "https://sunshinedental.ca/wp-content/uploads/2022/02/Dental-exam-dentist-dental-exam-tooth-teeth.jpg",
      author: "Dr. Priya Sharma",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Oral Hygiene"
    },
    {
      id: 5,
      title: "The Latest Advances in Laser Dentistry",
      excerpt: "Explore how laser technology is revolutionizing dental treatments with minimal discomfort and faster healing.",
      image: "https://www.europeanbusinessreview.com/wp-content/uploads/2023/05/The-Latest-Dental-Technology-You-Need-to-Know-About.jpeg",
      author: "Dr. Rajesh Kumar",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "Technology"
    },
    {
      id: 6,
      title: "Foods That Promote Dental Health",
      excerpt: "Learn about nutrition and how certain foods can help strengthen your teeth and improve oral health.",
      image: "https://centreofdentalexcellence.co.uk/wp-content/uploads/2025/01/healthy-breakfast-concept-with-juice-scaled.webp",
      author: "Dr. Rajesh Kumar",
      date: "February 28, 2024",
      readTime: "5 min read",
      category: "Nutrition"
    },
  ];

  // Show all blog posts
  const filteredPosts = blogPosts;

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
              url('https://png.pngtree.com/background/20230617/original/pngtree-vortex-of-dental-care-3d-render-of-teeth-with-and-without-picture-image_3696469.jpg')
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
          <ScrollAnimation direction="up">
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
              Dental Health Blog
            </motion.h1>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <motion.p 
              className="text-xl text-white/95 max-w-3xl mx-auto mb-8 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            >
              Stay updated with the latest dental care tips, treatment options, and oral health advice from our experts.
            </motion.p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <motion.div 
                  className="md:w-1/2 h-64 md:h-auto overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {blogPosts[0].category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" /> {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>



      {/* Latest Articles */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <div className="inline-block bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent mb-4">Latest Articles</h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our collection of informative articles on dental health, treatments, and oral care tips.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.1}>
            {filteredPosts.map((post, index) => (
              <StaggerItem 
                key={post.id} 
                delay={index * 0.1}
                className="h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="relative h-full group">
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>
                    
                    <Card className="relative h-full flex flex-col bg-white/80 backdrop-blur-sm border-0 shadow-sm group-hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-1">
                      <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <motion.img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                        <div className="absolute top-4 right-4 z-20">
                          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span className="text-sm text-gray-500">{post.date}</span>
                          <span className="mx-2">•</span>
                          <span className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow group-hover:text-gray-700 transition-colors duration-300">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 flex items-center justify-center mr-2">
                              <User className="w-4 h-4 text-primary-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{post.author}</span>
                          </div>
                          <motion.div 
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 flex items-center justify-center text-primary-600 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-secondary-500 group-hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block bg-gradient-to-r from-white to-gray-200 bg-clip-text mb-2">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent">Stay Updated</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-secondary-200 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest dental health tips, 
              treatment updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-primary-700 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
