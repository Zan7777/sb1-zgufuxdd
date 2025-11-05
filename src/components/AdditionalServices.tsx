import React from 'react';
import { Monitor, Code, Share2, Clock } from 'lucide-react';

const AdditionalServices: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Custom Strategies',
      description: 'We produce individual strategies across X, Reddit, Instagram, and more based on you, your brand, and your aspirations. Whether you need new accounts or want to grow your existing ones, our OnlyFans marketing agency has you covered.'
    },
    {
      icon: Code,
      title: 'High-Intent Chatting',
      description: 'Our OnlyFans marketing managers employ strategic advertising techniques followed by expert chatting services that reflect your style and tone to successfully transform casual subscribers into devoted fans.'
    },
    {
      icon: Share2,
      title: 'Account Audit',
      description: 'We leverage our extensive experience in the adult industry to optimize your profile and get the most out of your account. From your bio to your content strategy, we ensure your page aligns with your brand and your niche to achieve maximum growth.'
    },
    {
      icon: Clock,
      title: 'Full Funnel Setup',
      description: 'Successfully bringing in high-quality traffic is just the start. We turn your visitors into paying customers using a range of tried and tested methods, including collaborations and strategic chat management.'
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-semibold text-blue-600 uppercase tracking-wider mb-2 sm:mb-4" style={{ fontSize: 'clamp(10px, 2.5vw, 14px)' }}>Advanced Solutions</h2>
          <h3 className="font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontSize: 'clamp(20px, 5.5vw, 40px)' }}>
            Specialized
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Service Offerings
            </span>
          </h3>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-500"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg sm:rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 group-hover:text-blue-900 transition-colors duration-300" style={{ fontSize: 'clamp(14px, 3.5vw, 20px)' }}>
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>
                    {service.description}
                  </p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200 max-w-2xl mx-auto">
            <h4 className="font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontSize: 'clamp(16px, 4vw, 24px)' }}>Ready to Get Started?</h4>
            <p className="text-gray-600 mb-4 sm:mb-6" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>
              Let us create a customized strategy that transforms your OnlyFans presence and maximizes your earning potential.
            </p>
            <button className="px-4 sm:px-6 lg:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 min-h-[44px]" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;