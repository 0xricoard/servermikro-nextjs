'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Rizki',
      role: 'E-commerce Business Owner',
      company: 'Tokoku Online',
      rating: 5,
      text: "Server Mikro has been incredible for our online store. The uptime is fantastic, and the support team is always quick to help. Our website loads super fast now!",
      service: 'Web Hosting',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Digital Marketing Agency',
      company: 'Creative Solutions',
      rating: 5,
      text: "The proxy services from Server Mikro are top-notch. High-quality IPs, great rotation, and excellent for our marketing campaigns. Highly recommended!",
      service: 'Premium Proxies',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      role: 'Software Developer',
      company: 'Tech Startup',
      rating: 5,
      text: "VPS Linux from Server Mikro is perfect for our development needs. Fast deployment, great performance, and affordable pricing. Been using for 2 years!",
      service: 'VPS Linux',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 4,
      name: 'Lisa Chen',
      role: 'Graphic Designer',
      company: 'Design Studio',
      rating: 5,
      text: "The RDP Windows service is amazing! I can access my design software from anywhere. The connection is stable and the performance is excellent.",
      service: 'RDP Windows',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 5,
      name: 'Rahman Hassan',
      role: 'Gaming Community',
      company: 'GameZone Indonesia',
      rating: 5,
      text: "NAT VPS is perfect for our gaming servers. Great value for money and the latency is very low. Our community loves the server performance!",
      service: 'VPS NAT',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 6,
      name: 'Maria Garcia',
      role: 'Content Creator',
      company: 'Freelance',
      rating: 5,
      text: "Server Mikro hosting is reliable and fast. My blog loads quickly, and I have never experienced any downtime. Customer support is also very responsive!",
      service: 'Web Hosting',
      avatar: '/api/placeholder/60/60'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-800"
          >
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers 
            have to say about their experience with Server Mikro.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative mb-12"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Quote className="h-12 w-12 text-blue-500/30" />
              <div className="flex space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonials[currentIndex].service}
                </span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600 hover:text-blue-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="h-6 w-6 text-gray-600 hover:text-blue-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center space-x-3 mb-12"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 text-sm">
                      {testimonial.name}
                    </h5>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                  {testimonial.service}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-blue-600">1000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">99.9%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-600">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
