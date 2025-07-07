'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Server, 
  Monitor, 
  Network, 
  Shield, 
  ExternalLink,
  Check,
  Zap
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Globe,
      title: 'Web Hosting',
      description: 'DirectAdmin & cPanel hosting solutions with premium features',
      features: [
        'cPanel/DirectAdmin Control Panel',
        'AMD Ryzen 9 & NVMe Gen4 Storage',
        'Free SSL Certificate & Backups',
        'Free Subdomain and Many more!',
        '🇸🇬 Singapore Location'
      ],
      price: 'From Rp 5.000/mo',
      link: 'https://client.servermikro.com',
      popular: false,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Server,
      title: 'VPS Linux',
      description: 'High-performance VPS with full root access',
      features: [
        'Intel Xeon Processors',
        'High-performance RAM',
        'Enterprise SSD Storage',
        '🇺🇸🇹🇷🇮🇩 Multiple Locations',
        'Ubuntu/Debian/CentOS/Fedora'
      ],
      price: 'From Rp 45.000/mo',
      link: 'https://client.servermikro.com/products/vps-linux',
      popular: true,
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Monitor,
      title: 'RDP Windows',
      description: 'High-performance Windows Server with admin access',
      features: [
        'Intel Xeon Processors',
        'High-performance RAM',
        'Enterprise SSD Storage',
        '🇺🇸🇹🇷🇮🇩 Multiple Locations',
        'Windows Server 2016/2019/2022'
      ],
      price: 'From Rp 85.000/mo',
      link: 'https://client.servermikro.com/products/rdp-windows',
      popular: false,
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Network,
      title: 'VPS/RDP NAT',
      description: 'VPS/RDP with IPv4 Shared for budget-conscious users',
      features: [
        'KVM/LXC Virtualization',
        'IPv4 Shared (Dedicated IP available)',
        'Debian/Ubuntu/Windows Server',
        '🇨🇦 Canada Location with Unlimited Bandwidth',
        'Dedicated Control Panel'
      ],
      price: 'From Rp 6.000/mo',
      link: 'https://client.servermikro.com/products/vps-nat',
      popular: false,
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Premium Proxies',
      description: 'Unlimited traffic, premium residential/ISP proxies',
      features: [
        'PIA S5/ABCProxy/9Proxy/922Proxy',
        'High Quality ISP/Residential Proxies',
        'All Countries Available',
        'Multi-platform Apps Support',
        'Redeem with CDKEYS/CODE'
      ],
      price: 'From Rp 25.000/mo',
      link: 'https://client.servermikro.com/products/proxy-server',
      popular: false,
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Flash Sale',
      description: 'Limited time offers with massive discounts',
      features: [
        '10-80% OFF Regular Prices',
        'Limited Stock Available',
        'Premium Hardware Included',
        'All Locations Available',
        'Same Quality Service'
      ],
      price: 'From Rp 36.000/mo',
      link: 'https://client.servermikro.com/products/flash-sale',
      popular: true,
      gradient: 'from-red-500 to-red-600',
      badge: 'Limited Time'
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive hosting solutions designed to meet your needs, from personal websites 
            to enterprise applications with global network coverage.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              className={`group relative bg-white rounded-2xl border-2 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? 'border-purple-300 shadow-lg' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Flash Sale Badge */}
              {service.badge && (
                <div className="absolute -top-4 right-4">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Service Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8" />
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.price}
                </span>
              </div>

              {/* CTA Button */}
              <Link
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-full space-x-2 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold transform hover:-translate-y-0.5`}
              >
                <span>Order Now</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Need Custom Solutions?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact our team for custom hosting solutions, enterprise plans, 
              or bulk orders with special pricing.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
