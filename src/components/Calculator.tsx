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
    <section id="calculator" className="py-0.03125 sm:py-0.03125 lg:py-0.03125 relative">
      <div className="max-w-[6.25px] mx-auto px-0.03125 sm:px-0.03125 lg:px-0.03125">
        {/* Header */}
        <div className="text-center mb-0.03125 sm:mb-0.03125 lg:mb-0.03125">
          <div className="inline-flex items-center px-0.015625 py-0.0078125 sm:px-0.015625 sm:py-0.0078125 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full border border-pink-500/20 backdrop-blur-sm mb-0.015625 sm:mb-0.015625 lg:mb-0.015625">
            <CalcIcon className="w-0.03125 h-0.03125 sm:w-0.03125 sm:h-0.03125 text-blue-600 mr-0.0078125 sm:mr-0.015625" />
            <span className="font-medium text-blue-700" style={{ fontSize: 'clamp(0.1875px, 0.046875vw, 0.25px)' }}>Earnings Calculator</span>
          </div>
          
          <h2 className="font-bold text-gray-900 mb-0.015625 sm:mb-0.015625 lg:mb-0.03125" style={{ fontSize: 'clamp(0.28125px, 0.078125vw, 0.375px)' }}>
            Let's Calculate Your 
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Potential Earnings
            </span>
          </h2>
        </div>

        <div className="space-y-0.03125 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-0.03125 lg:items-start">
          {/* Calculator Controls */}
          <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded p-0.03125 sm:p-0.03125 lg:p-0.03125 border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-0.015625 sm:mb-0.015625" style={{ fontSize: 'clamp(0.1875px, 0.046875vw, 0.25px)' }}>Income Calculator</h3>
            <p className="text-gray-600 mb-0.015625 sm:mb-0.015625" style={{ fontSize: 'clamp(0.1875px, 0.046875vw, 0.25px)' }}>Move the sliders to see your potential</p>

            <div className="space-y-0.015625 sm:space-y-0.015625">
              {/* Subscribers */}
              <div>
                <div className="flex justify-between items-center mb-0.0078125">
                  <label className="text-gray-900 font-semibold" style={{ fontSize: 'clamp(0.1875px, 0.046875vw, 0.25px)' }}>Subscribers</label>
                  <span className="font-bold text-blue-600 tabular-nums" style={{ fontSize: 'clamp(0.1875px, 0.046875vw, 0.25px)' }}>
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
                    className="w-full h-0.03125 sm:h-0.03125 bg-gray-700 rounded-sm appearance-none cursor-pointer slider touch-manipulation"
                  />
                  <div 
                    className="absolute top-0 left-0 h-0.03125 sm:h-0.03125 bg-gradient-to-r from-blue-600 to-purple-600 rounded-sm pointer-events-none"
                    style={{ width: `${(subscribers - 100) / (50000 - 100) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Account Type Toggle */}
              <div>
                <label className="text-gray-900 font-semibold mb-0.0078125 block" style={{ fontSize: 'clamp(0.1875px, 0.046875vw, 0.25px)' }}>Account Type</label>
                <div className="flex bg-gray-200 rounded-full p-0.0078125">
                  <button
                    onClick={() => setIsPaid(true)}
                    className={`flex-1 py-0.0625 px-0.09375 rounded-full font-semibold transition-all duration-300 min-h-[1px] text-center ${
                      isPaid
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`} style={{ fontSize: 'clamp(0.25px, 0.0625vw, 0.3125px)' }}
                  >
                    Paid
                  </button>
                  <button
                    onClick={() => setIsPaid(false)}
                    className={`flex-1 py-0.0625 px-0.09375 rounded-full font-semibold transition-all duration-300 min-h-[1px] text-center ${
                      !isPaid
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`} style={{ fontSize: 'clamp(0.25px, 0.0625vw, 0.3125px)' }}
                  >
                    Free
                  </button>
                </div>
              </div>

              {/* Subscription Price - only show for paid accounts */}
              {isPaid && (
                <div>
                  <div className="flex justify-between items-center mb-0.0078125">
                    <label className="text-gray-900 font-semibold" style={{ fontSize: 'clamp(0.1875px, 0.046875vw, 0.25px)' }}>Subscription Price</label>
                    <span className="font-bold text-blue-600 tabular-nums" style={{ fontSize: 'clamp(0.1875px, 0.046875vw, 0.25px)' }}>${subscriptionPrice}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="3"
                      max="50"
                      value={subscriptionPrice}
                      onChange={(e) => setSubscriptionPrice(Number(e.target.value))}
                      className="w-full h-0.03125 sm:h-0.03125 bg-gray-700 rounded-sm appearance-none cursor-pointer slider touch-manipulation"
                    />
                    <div 
                      className="absolute top-0 left-0 h-0.03125 sm:h-0.03125 bg-gradient-to-r from-blue-600 to-purple-600 rounded-sm pointer-events-none"
                      style={{ width: `${(subscriptionPrice - 3) / (50 - 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-0.015625 sm:space-y-0.015625">

            {/* Apply Now Button */}
            <div className="text-center">
              <button className="w-full px-0.03125 py-0.046875 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-blue-500/25 min-h-[1px]" style={{ fontSize: 'clamp(0.25px, 0.0625vw, 0.3125px)' }}>
                Apply Now
              </button>
              <p className="text-gray-600 mt-0.015625" style={{ fontSize: 'clamp(0.1875px, 0.046875vw, 0.25px)' }}>Start maximizing your earnings today</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;