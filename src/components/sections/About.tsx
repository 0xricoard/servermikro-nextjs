'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Cpu, HardDrive, Wifi, Shield, Headphones } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Cpu,
      title: 'High Performance Hardware',
      description: 'Premium hardware powered by AMD Ryzen 9 & Intel Xeon processors with NVMe Gen4 storage for maximum speed.',
    },
    {
      icon: Wifi,
      title: 'Global Network',
      description: 'Multiple locations including Indonesia, Singapore, USA, and Turkey with high-speed connectivity.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security measures, SSL certificates, and regular backups to keep your data safe.',
    },
    {
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Technical support available around the clock via ticket system and email.',
    },
    {
      icon: HardDrive,
      title: 'SSD Storage',
      description: 'High-performance enterprise SSD storage for faster data access and improved reliability.',
    },
    {
      icon: Server,
      title: 'Multiple Services',
      description: 'Comprehensive hosting solutions from shared hosting to dedicated servers and proxy services.',
    },
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', color: 'text-blue-600 dark:text-blue-400' },
    { number: '5+', label: 'Global Locations', color: 'text-purple-600 dark:text-purple-400' },
    { number: '1000+', label: 'Happy Clients', color: 'text-indigo-600 dark:text-indigo-400' },
    { number: '24/7', label: 'Support Available', color: 'text-blue-600 dark:text-blue-400' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-900">
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
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-200"
          >
            About <span className="gradient-text">Server Mikro</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Your reliable hosting partner providing high-performance, affordable server and hosting solutions 
            with cutting-edge technology and exceptional customer support.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl"
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              className="group p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-12 border border-blue-100 dark:border-blue-800/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">            At Server Mikro, we&apos;re committed to providing reliable, high-performance hosting solutions 
            that empower businesses and individuals to succeed online. With our state-of-the-art infrastructure, 
            competitive pricing, and dedicated support team, we make professional hosting accessible to everyone.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
