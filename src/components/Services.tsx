import React from 'react';
import { MessageCircle, Image, BarChart3, Calendar, DollarSign, Target, Video, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'Social Media Management',
      description: 'Sit back and relax as we handle daily promotions across top platforms like Reddit, Twitter, and Instagram. Leave the tedious work to us while you focus on creating amazing content.',
    },
    {
      icon: Image,
      title: 'Caption Creation',
      description: "We've got the hottest lines up our sleeve, so you don't have to worry about crafting captivating captions. Our expert team knows what works best to boost your OnlyFans sales rates.",
    },
    {
      icon: MessageCircle,
      title: 'Chat Management',
      description: 'Keep your OnlyFans subscribers hooked and the cash flowing without the administrative hassle. With our fan management and upsell service, you\'ll maintain a thriving community effortlessly.',
    },
    {
      icon: BarChart3,
      title: 'Personal Insights',
      description: 'Stay one step ahead with our cutting-edge data analysis. We uncover the latest social media trends, giving you valuable insights to create content that captures attention and drives success.',
    },
    {
      icon: Video,
      title: 'High-End Video Production Tips',
      description: 'Stand out from the crowd with our unrivaled knowledge of producing slick videos and captivating photo content. We\'ll help you elevate your visual appeal and leave a lasting impression.',
    },
    {
      icon: Target,
      title: 'Data Analysis',
      description: 'Leave the number-crunching to us. Our expert team will analyse your data and provide a personalised strategy plan. With real-time fine-tuning, we ensure you\'re making money around the clock.',
    },
    {
      icon: Calendar,
      title: 'Content Scheduling',
      description: 'Maximise your impact with tailored content plans. We\'ll guide you on what, when, and how much to post, taking your content to new heights of engagement and reach.',
    },
    {
      icon: DollarSign,
      title: 'Financial Projections',
      description: 'Curious about your earning potential? Let us provide accurate financial predictions based on our historical data, giving you a glimpse into your future success.',
    },
    {
      icon: Zap,
      title: 'Bespoke Growth Plans',
      description: 'Share your goals with us, and we\'ll ensure you reach them. Whether it\'s earning more or having more free time, our customised growth plans put you in control every step of the way!',
    },
  ];

  return (
    <section id="services" className="py-3 sm:py-12 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-3 sm:mb-12 lg:mb-16">
          <h2 className="font-semibold text-blue-600 uppercase tracking-wider mb-1 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(8px, 2.2vw, 14px)' }}>Services</h2>
          <h3 className="font-bold text-gray-900 mb-2 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(16px, 4.5vw, 36px)' }}>
            Our OnlyFans
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Management Services
            </span>
          </h3>
          <div className="w-10 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-md sm:rounded-xl lg:rounded-2xl p-2 sm:p-6 lg:p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-md sm:rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-8 h-8 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-md sm:rounded-xl lg:rounded-2xl flex items-center justify-center mb-2 sm:mb-4 lg:mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <Icon className="w-4 h-4 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h4 className="font-bold text-gray-900 mb-1 sm:mb-3 lg:mb-4 group-hover:text-blue-900 transition-colors duration-300" style={{ fontSize: 'clamp(11px, 3vw, 20px)' }}>
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" style={{ fontSize: 'clamp(9px, 2.5vw, 14px)' }}>
                    {service.description}
                  </p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-md sm:rounded-xl lg:rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;