import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Users, Clock, Shield, Award, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const achievements = [
    "Aggressive promotion to push past $50k/month",
    "Tailored campaigns that put your brand in spotlight", 
    "Full team managing promotion across all channels",
    "Optimized posts, ads, and campaigns for maximum reach",
    "Position you in front of the right audience at the right time"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-12 sm:pt-20 pb-3 sm:pb-12 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-2 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-2 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-1 sm:space-y-4 lg:space-y-6">
              <div className="inline-flex items-center px-1.5 py-0.5 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full border border-pink-500/20 backdrop-blur-sm">
                <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-blue-600 mr-0.5 sm:mr-1.5 lg:mr-2" />
                <span style={{ fontSize: 'clamp(8px, 2.2vw, 14px)' }} className="text-blue-700 font-medium">Premium OnlyFans Management</span>
              </div>
              
              <h1 className="font-bold text-gray-900 leading-tight" style={{ fontSize: 'clamp(18px, 5.5vw, 40px)' }}>
                Transform Your
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                  Digital Empire
                </span>
              </h1>

              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0" style={{ fontSize: 'clamp(9px, 2.8vw, 18px)' }}>
                Elevate your OnlyFans presence with our cutting-edge management solutions. 
                We don't just manage - we revolutionize your earning potential through 
                advanced strategies and futuristic approaches.
              </p>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-3 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 min-h-[44px]" style={{ fontSize: 'clamp(10px, 2.8vw, 16px)' }}>
                Start Your Transformation
              </button>

              {/* Secondary CTA */}
              <button className="w-full sm:w-auto px-3 sm:px-6 py-2 sm:py-4 bg-white/10 text-gray-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 backdrop-blur-sm min-h-[44px]" style={{ fontSize: 'clamp(10px, 2.8vw, 16px)' }}>
                View Case Studies
              </button>
              </div>
            </div>
          
            {/* Metrics Grid - Mobile Optimized */}
            <div className="grid grid-cols-2 gap-1 sm:gap-4 lg:gap-6 max-w-xs sm:max-w-md mx-auto lg:max-w-none mt-2 sm:mt-6">
                <div className="text-center">
                  <div className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-md sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-0.5 sm:mb-2 lg:mb-3">
                    <TrendingUp className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                  </div>
                  <div className="font-bold text-gray-900 mb-0.5 sm:mb-1 tabular-nums" style={{ fontSize: 'clamp(11px, 3.5vw, 24px)' }}>847%</div>
                  <div className="text-gray-600" style={{ fontSize: 'clamp(8px, 2.3vw, 14px)' }}>Growth Rate</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-1 sm:mb-2 lg:mb-3">
                    <Clock className="w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                  </div>
                  <div className="font-bold text-gray-900 mb-0.5 sm:mb-1 tabular-nums" style={{ fontSize: 'clamp(14px, 4vw, 24px)' }}>21</div>
                  <div className="text-gray-600" style={{ fontSize: 'clamp(10px, 2.8vw, 14px)' }}>Days to 6-Fig</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-1 sm:mb-2 lg:mb-3">
                    <DollarSign className="w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                  </div>
                  <div className="font-bold text-gray-900 mb-0.5 sm:mb-1 tabular-nums" style={{ fontSize: 'clamp(14px, 4vw, 24px)' }}>$287K</div>
                  <div className="text-gray-600" style={{ fontSize: 'clamp(10px, 2.8vw, 14px)' }}>Top Monthly</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-1 sm:mb-2 lg:mb-3">
                    <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                  </div>
                  <div className="font-bold text-gray-900 mb-0.5 sm:mb-1 tabular-nums" style={{ fontSize: 'clamp(14px, 4vw, 24px)' }}>98.7%</div>
                  <div className="text-gray-600" style={{ fontSize: 'clamp(10px, 2.8vw, 14px)' }}>Satisfaction</div>
                </div>
            </div>
          </div>

          {/* Right Column - Additional Metrics */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 mt-8 sm:mt-12 lg:mt-0">
            {/* Enhanced Achievements Section */}
            <div className="relative pt-4 sm:pt-6 lg:pt-8 border-t border-gray-200 lg:border-t-0">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;