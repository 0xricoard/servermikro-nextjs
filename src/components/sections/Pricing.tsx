'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { 
  Check, 
  X, 
  ExternalLink, 
  Zap, 
  Star,
  Globe,
  Server,
  Monitor,
  Network,
  Shield
} from 'lucide-react';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Web Hosting',
      icon: Globe,
      description: 'Perfect for personal websites and small businesses',
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      yearlyDiscount: '17% OFF',
      popular: false,
      features: [
        'cPanel/DirectAdmin Control Panel',
        'AMD Ryzen 9 & NVMe Gen4 Storage',
        'Free SSL Certificate',
        'Free Daily Backups',
        'Free Subdomain',
        '🇸🇬 Singapore Location',
        '24/7 Email Support',
        'One-click WordPress Install',
        'Custom Software Installation'
      ],
      notIncluded: [
        'Root Access'
      ],
      link: 'https://my.servermikro.com',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'VPS Linux',
      icon: Server,
      description: 'Full control with root access for developers',
      monthlyPrice: 45000,
      yearlyPrice: 450000,
      yearlyDiscount: '17% OFF',
      popular: true,
      features: [
        'Intel Xeon Processors',
        'Full Root Access',
        'High-performance RAM',
        'Enterprise SSD Storage',
        '🇺🇸🇹🇷🇮🇩 Multiple Locations',
        'Ubuntu/Debian/CentOS/Fedora',
        'KVM Virtualization',
        '24/7 Technical Support'
      ],
      notIncluded: [
        'Windows OS',
        'Managed Services'
      ],
      link: 'https://my.servermikro.com/products/vps-linux',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      name: 'RDP Windows',
      icon: Monitor,
      description: 'Windows Server with remote desktop access',
      monthlyPrice: 85000,
      yearlyPrice: 850000,
      yearlyDiscount: '17% OFF',
      popular: false,
      features: [
        'Intel Xeon Processors',
        'Windows Server 2016/2019/2022',
        'Full Admin Access',
        'High-performance RAM',
        'Enterprise SSD Storage',
        '🇺🇸🇹🇷🇮🇩 Multiple Locations',
        'Remote Desktop Protocol',
        '24/7 Technical Support'
      ],
      notIncluded: [
        'Linux OS',
        'Desktop Applications License'
      ],
      link: 'https://my.servermikro.com/products/rdp-windows',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      name: 'VPS NAT',
      icon: Network,
      description: 'Budget-friendly solution with shared IPv4',
      monthlyPrice: 6000,
      yearlyPrice: 60000,
      yearlyDiscount: '17% OFF',
      popular: false,
      features: [
        'KVM/LXC Virtualization',
        'IPv4 Shared',
        'Debian/Ubuntu/Windows Server',
        '🇨🇦 Canada Location',
        'Unlimited Bandwidth (300 Mbps)',
        'Dedicated Control Panel',
        'Port Forwarding Available',
        'Dedicated IPv4 Available',
        'Email Support'
      ],
      notIncluded: [
        'Multiple Locations'
      ],
      link: 'https://my.servermikro.com/products/vps-nat',
      gradient: 'from-green-500 to-green-600'
    }
  ];

  const flashSale = {
    name: 'Flash Sale',
    icon: Zap,
    description: 'Limited time offer with massive discounts',
    originalPrice: 100000,
    salePrice: 36000,
    discount: '64% OFF',
    timeLeft: '2:15:30',
    features: [
      'All Premium Features Included',
      'Multiple Service Options',
      'Same Quality Hardware',
      'All Locations Available',
      'Standard Support Included',
      'Limited Stock Available'
    ],
    link: 'https://my.servermikro.com/products/flash-sale',
    gradient: 'from-red-500 to-red-600'
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  return (
    <section id="pricing" ref={ref} className="py-16 sm:py-20 bg-white dark:bg-gray-900">
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
            Transparent <span className="gradient-text">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Choose the perfect plan for your needs. All plans include premium hardware, 
            24/7 support, and our 99.9% uptime guarantee.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                billingCycle === 'monthly'
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 relative text-sm sm:text-base ${
                billingCycle === 'yearly'
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              Yearly
              <span className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-green-500 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Flash Sale Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-red-700/50" />
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-2 sm:mb-4">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 animate-pulse" />
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold">Flash Sale Active!</h3>
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 animate-pulse" />
              </div>
              <p className="text-base sm:text-xl mb-3 sm:mb-4">{flashSale.discount} - Limited Time Only!</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
                <span className="text-sm sm:text-lg line-through opacity-75">
                  Rp {formatPrice(flashSale.originalPrice)}/mo
                </span>
                <span className="text-xl sm:text-3xl font-bold">
                  Rp {formatPrice(flashSale.salePrice)}/mo
                </span>
              </div>
              <Link
                href={flashSale.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-red-600 px-4 sm:px-8 py-2 sm:py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold transform hover:-translate-y-0.5 shadow-lg text-sm sm:text-base"
              >
                <span>Claim Offer Now</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl border-2 p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-purple-300 dark:border-purple-500 shadow-lg' 
                  : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} text-white mb-3 sm:mb-4`}>
                  <plan.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Rp</span>
                  <span className={`text-2xl sm:text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {formatPrice(billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12))}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">/mo</span>
                </div>
                {billingCycle === 'yearly' && (
                  <div className="mt-2">
                    <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                      {plan.yearlyDiscount}
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="mb-6 sm:mb-8">
                <ul className="space-y-2 sm:space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500 dark:text-gray-400 text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Link
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-full space-x-2 bg-gradient-to-r ${plan.gradient} text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold transform hover:-translate-y-0.5 text-sm sm:text-base`}
              >
                <span>Get Started</span>
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
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center"
        >
          <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500 mx-auto mb-3 sm:mb-4" />
            <h4 className="text-base sm:text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">30-Day Money Back</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Not satisfied? Get a full refund within 30 days, no questions asked.
            </p>
          </div>
          <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <Server className="h-10 w-10 sm:h-12 sm:w-12 text-purple-500 mx-auto mb-3 sm:mb-4" />
            <h4 className="text-base sm:text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">99.9% Uptime SLA</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We guarantee 99.9% uptime with our robust infrastructure and monitoring.
            </p>
          </div>
          <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-indigo-500 mx-auto mb-3 sm:mb-4" />
            <h4 className="text-base sm:text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">Global Network</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Choose from multiple locations worldwide for optimal performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
