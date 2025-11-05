import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, MessageCircle, ArrowRight, TrendingUp, Users, DollarSign, Award, Shield, CheckCircle, Globe, Clock, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const achievements = [
    { icon: DollarSign, value: '$2M+', label: 'Revenue Generated' },
    { icon: Users, value: '500+', label: 'Creators Managed' },
    { icon: TrendingUp, value: '95%', label: 'Revenue Increase' },
    { icon: Award, value: '24/7', label: 'Support Available' }
  ];

  const serviceCategories = [
    {
      title: 'Content Strategy',
      services: ['Caption Creation', 'Content Planning', 'Visual Direction', 'Brand Development']
    },
    {
      title: 'Growth & Marketing',
      services: ['Social Media Management', 'Influencer Partnerships', 'Cross-Platform Promotion', 'Audience Analytics']
    },
    {
      title: 'Revenue Optimization',
      services: ['Chat Management', 'Upsell Strategies', 'Pricing Optimization', 'Financial Projections']
    },
    {
      title: 'Technical Support',
      services: ['Account Setup', 'Platform Optimization', 'Performance Tracking', 'Security Management']
    }
  ];

  const trustBadges = [
    { icon: Shield, label: 'SSL Secured' },
    { icon: CheckCircle, label: 'GDPR Compliant' },
    { icon: Award, label: 'Industry Certified' },
    { icon: Globe, label: 'Worldwide Service' }
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-gray-700 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {/* Newsletter & CTA Section */}
        <div className="py-6 sm:py-12 lg:py-16 border-b border-white/10">
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h3 className="font-bold text-white mb-3 lg:mb-4" style={{ fontSize: 'clamp(20px, 5.5vw, 28px)' }}>
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Earning Potential?
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 lg:mb-6" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>
                Join hundreds of successful creators who have revolutionized their OnlyFans presence with our expert management services.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 min-h-[44px]" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10 min-h-[44px]" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
              <h4 className="font-bold text-white mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(14px, 3.5vw, 18px)' }}>Stay Updated</h4>
              <p className="text-gray-300 mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>Get insider tips, industry trends, and exclusive strategies delivered to your inbox.</p>
              
              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3 sm:space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-3 sm:px-4 py-3 bg-white/10 border border-white/10 rounded-full text-white placeholder-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300 min-h-[44px]" 
                    style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}
                    required
                    autoComplete="email"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 min-h-[44px]"
                    style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}
                  >
                    Subscribe Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 sm:py-6">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-emerald-400 mx-auto mb-2" />
                  <p className="text-emerald-400 font-semibold" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>Successfully subscribed!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-6 sm:py-8 border-b border-gray-700">
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Brand & Contact */}
            <div className="space-y-4 sm:space-y-6">
              {/* Brand Section */}
              <div className="mb-3 sm:mb-4">
                <h3 className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" style={{ fontSize: 'clamp(18px, 4.5vw, 28px)' }}>
                  Modellaire MGMT
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 max-w-md" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>
                The premier OnlyFans management agency dedicated to transforming creators into digital empires through cutting-edge strategies and personalized support.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 group min-h-[44px] min-w-[44px]">
                  <Instagram className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 group min-h-[44px] min-w-[44px]">
                  <Twitter className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 group min-h-[44px] min-w-[44px]">
                  <MessageCircle className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </a>
              </div>
            </div>

            {/* Right Column - Services Grid */}
            <div>
              <h4 className="font-bold text-white mb-3 sm:mb-6" style={{ fontSize: 'clamp(14px, 3.5vw, 18px)' }}>Our Complete Service Portfolio</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {serviceCategories.map((category, index) => (
                  <div key={index}>
                    <h5 className="text-white font-bold mb-2 sm:mb-3" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>{category.title}</h5>
                    <ul className="space-y-1 sm:space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group py-1 min-h-[44px]" style={{ fontSize: 'clamp(10px, 2.5vw, 12px)' }}>
                            <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges & Contact */}
        <div className="py-6 sm:py-12 border-b border-gray-700">
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Enhanced Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-3 sm:mb-6" style={{ fontSize: 'clamp(14px, 3.5vw, 18px)' }}>Get In Touch</h4>
              <div className="space-y-3 sm:space-y-4">
                <a href="mailto:hello@nvsn.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group py-2 min-h-[44px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-blue-500/20 flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>Email Us</div>
                    <div style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>hello@nvsn.com</div>
                  </div>
                </a>

                <a href="tel:+15551234567" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group py-2 min-h-[44px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-blue-500/20 flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>Call Us</div>
                    <div style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>+1 (555) 123-4567</div>
                  </div>
                </a>

                <div className="flex items-center text-gray-300 group py-2 min-h-[44px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>Available</div>
                    <div style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>24/7 Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 sm:space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
              <p className="text-gray-300" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>
                © 2024 Modellaire MGMT. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-400" style={{ fontSize: 'clamp(10px, 2.5vw, 12px)' }}>
                <Zap className="w-3 h-3 text-blue-400" />
                <span>Powered by Advanced AI Technology</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4 lg:gap-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2 min-h-[44px] flex items-center" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2 min-h-[44px] flex items-center" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2 min-h-[44px] flex items-center" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>Cookie Policy</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2 min-h-[44px] flex items-center" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;