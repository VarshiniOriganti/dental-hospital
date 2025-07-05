
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
    }
  ];

  // Available categories for filtering - Implants removed
  const categories = ["All", "Preventive Care", "Orthodontics", "Oral Hygiene", "Technology", "Nutrition"];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPosts = activeFilter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section with Enhanced Violet Overlay */}
      <section className="relative pt-40 pb-24 -mt-20 bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: `
                   linear-gradient(to right, rgb(76, 29, 149, 0.9), rgb(67, 56, 202, 0.8), rgb(109, 40, 217, 0.7)),

                   url('https://png.pngtree.com/background/20230617/original/pngtree-vortex-of-dental-care-3d-render-of-teeth-with-and-without-picture-image_3696469.jpg')
                 `,
                 backgroundBlendMode: 'multiply',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
               }}>
        <div className="absolute inset-0 -z-10"></div>
        <div className="container mx-auto px-4 text-center pt-16">
          <ScrollAnimation direction="up">
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Dental Health Blog
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Stay updated with the latest dental care tips, treatment options, and oral health advice from our experts.
            </p>
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

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <StaggerContainer className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <StaggerItem key={category} delay={index * 0.1}>
                <button
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
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
                <Card className="overflow-hidden group h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <motion.img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="text-primary-600 font-medium">{post.category}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <span className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Subscribe to our newsletter and get the latest dental health tips, 
                treatment updates, and exclusive offers delivered to your inbox.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
