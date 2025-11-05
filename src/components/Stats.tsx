import React, { useEffect, useState, useRef } from 'react';
import { Smartphone, Users, TrendingUp, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeSaved, setTimeSaved] = useState(0);
  const [followersGained, setFollowersGained] = useState(0);
  const [revenueIncrease, setRevenueIncrease] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate time saved to 50%
      const timeInterval = setInterval(() => {
        setTimeSaved(prev => {
          if (prev >= 50) {
            clearInterval(timeInterval);
            return 50;
          }
          return prev + 1;
        });
      }, 20);

      // Animate followers gained to 2M
      const followersInterval = setInterval(() => {
        setFollowersGained(prev => {
          if (prev >= 2000000) {
            clearInterval(followersInterval);
            return 2000000;
          }
          return prev + 50000;
        });
      }, 30);

      // Animate revenue increase to 70k
      const revenueInterval = setInterval(() => {
        setRevenueIncrease(prev => {
          if (prev >= 70000) {
            clearInterval(revenueInterval);
            return 70000;
          }
          return prev + 2000;
        });
      }, 25);
    }
  }, [isVisible]);

  const formatFollowers = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    return num.toLocaleString();
  };

  const formatRevenue = (num: number) => {
    if (num >= 1000) {
      return '$' + (num / 1000).toFixed(0) + 'K';
    }
    return '$' + num.toLocaleString();
  };

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column - Stats Cards */}
          <div className="space-y-3 sm:space-y-6 lg:space-y-8">
            {/* Time Saved */}
            <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-6 lg:p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-500 group relative">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-lg sm:rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 lg:mb-2" style={{ fontSize: 'clamp(14px, 3.5vw, 20px)' }}>Time Saved</h3>
                  <p className="text-gray-600" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>Hours saved monthly</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600 mb-1 tabular-nums" style={{ fontSize: 'clamp(18px, 5vw, 32px)' }}>
                    {timeSaved}%
                  </div>
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600/60" />
                </div>
              </div>
              <div className="mt-2 sm:mt-3 lg:mt-4 h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden relative z-10">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${timeSaved}%` }}
                ></div>
              </div>
            </div>

            {/* Followers Gained */}
            <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-6 lg:p-8 border border-gray-200 hover:border-blue-500/50 transition-all duration-500 group relative">
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 lg:mb-2" style={{ fontSize: 'clamp(14px, 3.5vw, 20px)' }}>Followers Gained</h3>
                  <p className="text-gray-600" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>New followers acquired</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600 mb-1 tabular-nums" style={{ fontSize: 'clamp(18px, 5vw, 32px)' }}>
                    {formatFollowers(followersGained)}+
                  </div>
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600/60" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup & Revenue */}
          <div className="relative">
            {/* Mobile Phone Mockup */}
            <div className="relative mx-auto w-48 sm:w-64 h-[360px] sm:h-[480px] lg:w-80 lg:h-[600px] bg-gray-900 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] border-2 sm:border-4 lg:border-6 border-gray-700 shadow-2xl max-h-[50vh] sm:max-h-[65vh] lg:max-h-none">
              {/* Screen */}
              <div className="absolute inset-1 sm:inset-2 lg:inset-3 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[1.2rem] sm:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden">
                {/* Status Bar */}
                <div className="h-4 sm:h-6 lg:h-8 bg-gray-900 flex items-center justify-center">
                  <div className="w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="p-2 sm:p-3 lg:p-6 text-white">
                  <div className="text-center mb-3 sm:mb-6">
                    <h4 className="font-bold mb-0.5 sm:mb-1 lg:mb-2" style={{ fontSize: 'clamp(10px, 2.5vw, 14px)' }}>STATEMENTS</h4>
                    <p className="text-gray-300" style={{ fontSize: 'clamp(8px, 2vw, 12px)' }}>EARNING STATISTICS</p>
                  </div>
                  
                  {/* Revenue Chart Placeholder */}
                  <div className="mb-2 sm:mb-4 lg:mb-6">
                    <div className="text-right font-bold text-emerald-400 mb-1 sm:mb-2 tabular-nums" style={{ fontSize: 'clamp(12px, 3vw, 18px)' }}>
                      ${(revenueIncrease * 3.2).toLocaleString()}
                    </div>
                    <div className="h-8 sm:h-12 lg:h-20 rounded flex items-end overflow-hidden relative">
                      <img 
                        src="/images/Screenshot 2025-09-03 at 13.32.52.png"
                        alt="Analytics dashboard showing revenue growth charts and performance metrics"
                        className="absolute inset-0 w-full h-full object-contain rounded cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => window.open('/images/Screenshot 2025-09-03 at 13.32.52.png', '_blank')}
                      />
                    </div>
                  </div>
                  <div className="space-y-1 sm:space-y-2" style={{ fontSize: 'clamp(8px, 2vw, 12px)' }}>
                    <div className="flex justify-between">
                      <span>Subscriptions</span>
                      <span className="text-emerald-400 tabular-nums">${(revenueIncrease * 0.7).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tips</span>
                      <span className="text-emerald-400 tabular-nums">${(revenueIncrease * 0.2).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Messages</span>
                      <span className="text-emerald-400 tabular-nums">${(revenueIncrease * 0.35).toLocaleString()}</span>
                    </div>
                    <hr className="border-gray-600" />
                    <div className="flex justify-between font-bold">
                      <span>TOTAL</span>
                      <span className="text-emerald-400 tabular-nums">${revenueIncrease.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Home indicator */}
              <div className="absolute bottom-0.5 sm:bottom-1 lg:bottom-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-white rounded-full"></div>
            </div>

            {/* Image Caption */}
            <p className="text-center text-gray-600 mt-2 sm:mt-3 px-2 sm:px-4" style={{ fontSize: 'clamp(10px, 2.5vw, 14px)' }}>Live dashboard showing real earnings growth with our management system</p>
            
            {/* Revenue Increase Card */}
            <div className="absolute -bottom-1 -right-1 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 border border-gray-200 shadow-2xl">
              <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
                <TrendingUp className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                <div>
                  <h4 className="font-bold text-gray-900" style={{ fontSize: 'clamp(8px, 2.5vw, 16px)' }}>Biggest Increase</h4>
                  <p className="font-bold text-blue-600 tabular-nums" style={{ fontSize: 'clamp(10px, 3vw, 20px)' }}>
                    {formatRevenue(revenueIncrease)} increase in revenue
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 lg:-top-6 lg:-left-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-1/2 -right-4 sm:-right-6 lg:-right-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;