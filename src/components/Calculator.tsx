import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, TrendingUp } from 'lucide-react';

const Calculator: React.FC = () => {
  const [subscribers, setSubscribers] = useState(7500);
  const [subscriptionPrice, setSubscriptionPrice] = useState(15);
  const [isPaid, setIsPaid] = useState(true);
  const [revenue, setRevenue] = useState(0);
  const [multiplier, setMultiplier] = useState(10);

  useEffect(() => {
    // Calculate estimated revenue
    const baseRevenue = isPaid ? subscribers * subscriptionPrice : subscribers * 5;
    const ppvRevenue = baseRevenue * (multiplier / 10);
    setRevenue(Math.round(baseRevenue + ppvRevenue));
  }, [subscribers, subscriptionPrice, isPaid, multiplier]);

  return (
    <section id="calculator" className="py-4 sm:py-6 lg:py-12 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-12">
          <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full border border-pink-500/20 backdrop-blur-sm mb-2 sm:mb-3 lg:mb-4">
            <CalcIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-1 sm:mr-2" />
            <span className="font-medium text-blue-700" style={{ fontSize: 'clamp(10px, 2.5vw, 14px)' }}>Earnings Calculator</span>
          </div>
          
          <h2 className="font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-6" style={{ fontSize: 'clamp(18px, 5vw, 32px)' }}>
            Let's Calculate Your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Potential Earnings
            </span>
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          {/* Calculator Controls */}
          <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2 sm:mb-3" style={{ fontSize: 'clamp(14px, 3.5vw, 18px)' }}>Income Calculator</h3>
            <p className="text-gray-600 mb-3 sm:mb-4" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>Move the sliders to see your potential</p>

            <div className="space-y-3 sm:space-y-4">
              {/* Subscribers */}
              <div>
                <div className="flex justify-between items-center mb-1 sm:mb-2">
                  <label className="text-gray-900 font-semibold" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>Subscribers</label>
                  <span className="font-bold text-blue-600 tabular-nums" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>
                    {subscribers.toLocaleString()}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="100"
                    max="50000"
                    value={subscribers}
                    onChange={(e) => setSubscribers(Number(e.target.value))}
                    className="w-full h-2 sm:h-2.5 bg-gray-700 rounded-sm appearance-none cursor-pointer slider touch-manipulation"
                  />
                  <div
                    className="absolute top-0 left-0 h-2 sm:h-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-sm pointer-events-none"
                    style={{ width: `${(subscribers - 100) / (50000 - 100) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Account Type Toggle */}
              <div>
                <label className="text-gray-900 font-semibold mb-1 sm:mb-2 block" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>Account Type</label>
                <div className="flex bg-gray-200 rounded-full p-1">
                  <button
                    onClick={() => setIsPaid(true)}
                    className={`flex-1 py-2 px-3 rounded-full font-semibold transition-all duration-300 min-h-[44px] text-center ${
                      isPaid
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`} style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}
                  >
                    Paid
                  </button>
                  <button
                    onClick={() => setIsPaid(false)}
                    className={`flex-1 py-2 px-3 rounded-full font-semibold transition-all duration-300 min-h-[44px] text-center ${
                      !isPaid
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`} style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}
                  >
                    Free
                  </button>
                </div>
              </div>

              {/* Subscription Price - only show for paid accounts */}
              {isPaid && (
                <div>
                  <div className="flex justify-between items-center mb-1 sm:mb-2">
                    <label className="text-gray-900 font-semibold" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>Subscription Price</label>
                    <span className="font-bold text-blue-600 tabular-nums" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>${subscriptionPrice}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="3"
                      max="50"
                      value={subscriptionPrice}
                      onChange={(e) => setSubscriptionPrice(Number(e.target.value))}
                      className="w-full h-2 sm:h-2.5 bg-gray-700 rounded-sm appearance-none cursor-pointer slider touch-manipulation"
                    />
                    <div
                      className="absolute top-0 left-0 h-2 sm:h-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-sm pointer-events-none"
                      style={{ width: `${(subscriptionPrice - 3) / (50 - 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-3 sm:space-y-4">

            {/* Apply Now Button */}
            <div className="text-center">
              <button className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-blue-500/25 min-h-[44px]" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>
                Apply Now
              </button>
              <p className="text-gray-600 mt-2 sm:mt-3" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>Start maximizing your earnings today</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;