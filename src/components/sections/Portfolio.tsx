'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Globe, Database, Shield, Zap } from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web-hosting',
      description: 'High-traffic online store with 99.9% uptime',
      image: '/api/placeholder/400/300',
      stats: { uptime: '99.9%', traffic: '10K+ daily', speed: '< 2s load' },
      tech: ['cPanel', 'MySQL', 'SSL', 'CDN'],
      icon: Globe
    },
    {
      id: 2,
      title: 'Gaming Server Infrastructure',
      category: 'vps',
      description: 'Multi-region gaming servers with low latency',
      image: '/api/placeholder/400/300',
      stats: { latency: '< 50ms', servers: '15+', players: '1000+' },
      tech: ['VPS Linux', 'Docker', 'Load Balancer', 'DDoS Protection'],
      icon: Zap
    },
    {
      id: 3,
      title: 'Enterprise Database Solution',
      category: 'rdp',
      description: 'Secure Windows RDP for enterprise database management',
      image: '/api/placeholder/400/300',
      stats: { security: '100%', availability: '24/7', backup: 'Daily' },
      tech: ['Windows Server 2022', 'SQL Server', 'Remote Desktop', 'Backup'],
      icon: Database
    },
    {
      id: 4,
      title: 'Digital Marketing Agency',
      category: 'proxy',
      description: 'Premium proxy network for marketing automation',
      image: '/api/placeholder/400/300',
      stats: { countries: '50+', ips: '10K+', success: '98%' },
      tech: ['Residential Proxies', 'API Access', 'Rotation', 'Analytics'],
      icon: Shield
    },
    {
      id: 5,
      title: 'Development Environment',
      category: 'nat',
      description: 'Cost-effective NAT VPS for development teams',
      image: '/api/placeholder/400/300',
      stats: { cost: '70% saved', teams: '5+', projects: '20+' },
      tech: ['NAT VPS', 'Git', 'CI/CD', 'Port Forwarding'],
      icon: Globe
    },
    {
      id: 6,
      title: 'Content Delivery Network',
      category: 'web-hosting',
      description: 'Global CDN implementation for faster content delivery',
      image: '/api/placeholder/400/300',
      stats: { speed: '3x faster', coverage: 'Global', cache: '99% hit' },
      tech: ['Multiple Locations', 'Edge Caching', 'SSL', 'Analytics'],
      icon: Zap
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web-hosting', label: 'Web Hosting', count: projects.filter(p => p.category === 'web-hosting').length },
    { id: 'vps', label: 'VPS Linux', count: projects.filter(p => p.category === 'vps').length },
    { id: 'rdp', label: 'RDP Windows', count: projects.filter(p => p.category === 'rdp').length },
    { id: 'proxy', label: 'Proxies', count: projects.filter(p => p.category === 'proxy').length },
    { id: 'nat', label: 'NAT VPS', count: projects.filter(p => p.category === 'nat').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-white">
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
            Success <span className="gradient-text">Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how our hosting solutions have powered successful projects across different industries 
            and helped our clients achieve their goals.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              layout
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="h-20 w-20 text-blue-500/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-white">
                    <project.icon className="h-5 w-5" />
                    <span className="font-semibold capitalize">{project.category.replace('-', ' ')}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:-translate-y-0.5">
                  <span>View Details</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust Server Mikro for their hosting needs. 
              Let us help you build and scale your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://my.servermikro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center bg-white text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold border border-gray-200 transform hover:-translate-y-0.5"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
