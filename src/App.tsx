import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Stats from './components/Stats';
import AdditionalServices from './components/AdditionalServices';
import Process from './components/Process';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function App() {
  const [showCalculator, setShowCalculator] = React.useState(false);
  const [calculatorData, setCalculatorData] = React.useState({
    currentFollowers: '0-1000',
    postFrequency: 'irregular',
    engagementStrategy: 'none',
    chatManagement: 'self',
    promotionChannels: 'onlyfans-only',
    contentQuality: 'phone-basic',
    pricingStrategy: 'guessing',
    socialMediaPresence: 'none',
    contentScheduling: 'random',
    fanRetention: 'poor',
    upsellStrategy: 'none',
    analyticsTracking: 'none',
    competitorAnalysis: 'none',
    brandStrategy: 'none',
    crossPlatformSync: 'none',
    liveStreaming: 'none',
    customContent: 'none'
  });

  const calculateLosses = () => {
    let baseEarnings = 1500;
    let multiplier = 1;
    
    // Calculate potential based on current situation
    if (calculatorData.currentFollowers === '1000-5000') multiplier += 0.5;
    if (calculatorData.currentFollowers === '5000-15000') multiplier += 0.8;
    if (calculatorData.currentFollowers === '15000+') multiplier += 1.2;
    if (calculatorData.postFrequency === 'few-times-week') multiplier += 0.2;
    if (calculatorData.postFrequency === 'daily') multiplier += 0.3;
    if (calculatorData.postFrequency === 'multiple-daily') multiplier += 0.5;
    if (calculatorData.engagementStrategy === 'basic') multiplier += 0.4;
    if (calculatorData.engagementStrategy === 'advanced') multiplier += 0.8;
    if (calculatorData.chatManagement === 'assisted') multiplier += 0.3;
    if (calculatorData.chatManagement === 'basic') multiplier += 0.2;
    if (calculatorData.chatManagement === 'professional') multiplier += 0.9;
    if (calculatorData.promotionChannels === 'reddit-only') multiplier += 0.3;
    if (calculatorData.promotionChannels === 'reddit-twitter') multiplier += 0.6;
    if (calculatorData.promotionChannels === 'multi-platform') multiplier += 1.2;
    if (calculatorData.promotionChannels === 'full-ecosystem') multiplier += 1.8;
    if (calculatorData.contentQuality === 'semi-pro') multiplier += 0.4;
    if (calculatorData.contentQuality === 'professional') multiplier += 0.7;
    if (calculatorData.contentQuality === 'studio-grade') multiplier += 1.1;
    if (calculatorData.pricingStrategy === 'basic-testing') multiplier += 0.3;
    if (calculatorData.pricingStrategy === 'strategic') multiplier += 0.5;
    if (calculatorData.pricingStrategy === 'data-driven') multiplier += 0.8;
    
    // New factors
    if (calculatorData.socialMediaPresence === 'basic') multiplier += 0.3;
    if (calculatorData.socialMediaPresence === 'active') multiplier += 0.6;
    if (calculatorData.socialMediaPresence === 'strategic') multiplier += 1.0;
    if (calculatorData.contentScheduling === 'planned') multiplier += 0.4;
    if (calculatorData.contentScheduling === 'optimized') multiplier += 0.7;
    if (calculatorData.fanRetention === 'average') multiplier += 0.3;
    if (calculatorData.fanRetention === 'good') multiplier += 0.6;
    if (calculatorData.fanRetention === 'excellent') multiplier += 1.0;
    if (calculatorData.upsellStrategy === 'basic') multiplier += 0.4;
    if (calculatorData.upsellStrategy === 'advanced') multiplier += 0.8;
    if (calculatorData.upsellStrategy === 'professional') multiplier += 1.2;
    if (calculatorData.analyticsTracking === 'basic') multiplier += 0.3;
    if (calculatorData.analyticsTracking === 'advanced') multiplier += 0.6;
    if (calculatorData.analyticsTracking === 'professional') multiplier += 0.9;
    if (calculatorData.competitorAnalysis === 'occasional') multiplier += 0.2;
    if (calculatorData.competitorAnalysis === 'regular') multiplier += 0.5;
    if (calculatorData.competitorAnalysis === 'strategic') multiplier += 0.8;
    if (calculatorData.brandStrategy === 'basic') multiplier += 0.3;
    if (calculatorData.brandStrategy === 'developed') multiplier += 0.6;
    if (calculatorData.brandStrategy === 'professional') multiplier += 1.0;
    if (calculatorData.crossPlatformSync === 'basic') multiplier += 0.4;
    if (calculatorData.crossPlatformSync === 'advanced') multiplier += 0.8;
    if (calculatorData.crossPlatformSync === 'seamless') multiplier += 1.2;
    if (calculatorData.liveStreaming === 'occasional') multiplier += 0.3;
    if (calculatorData.liveStreaming === 'regular') multiplier += 0.6;
    if (calculatorData.liveStreaming === 'strategic') multiplier += 1.0;
    if (calculatorData.customContent === 'some') multiplier += 0.4;
    if (calculatorData.customContent === 'regular') multiplier += 0.7;
    if (calculatorData.customContent === 'premium') multiplier += 1.1;
    
    const currentEstimate = Math.round(baseEarnings * multiplier);
    const withManagement = 24500;
    const monthlyLoss = withManagement - currentEstimate;
    const yearlyLoss = monthlyLoss * 12;
    
    return { currentEstimate, withManagement, monthlyLoss, yearlyLoss };
  };

  const results = calculateLosses();
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <TrustStrip />
        
        {/* Why Choose NVSN - Standalone Section */}
        <section className="py-4 sm:py-6 lg:py-16 relative">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-6 lg:p-8 border border-gray-200 shadow-2xl">
                <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">Why Choose Modellaire MGMT</h3>
                
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 group">
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      Aggressive promotion to push past $50k/month
                    </p>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm lg:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      Tailored campaigns that put your brand in spotlight
                    </p>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm lg:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      Full team managing promotion across all channels
                    </p>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm lg:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      Optimized posts, ads, and campaigns for maximum reach
                    </p>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm lg:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      Position you in front of the right audience at the right time
                    </p>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 lg:mt-8 pt-3 sm:pt-4 lg:pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      $70K+
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600 mt-1">
                      Average Revenue Increase
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 lg:-top-4 lg:-right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 lg:-bottom-4 lg:-left-4 w-10 h-10 sm:w-16 sm:h-16 lg:w-32 lg:h-32 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </section>
        
        <TrustBar />
        <Services />
        {/* Client Transformation Results */}
        <section className="py-4 sm:py-6 lg:py-12 relative">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-4 sm:mb-6 lg:mb-16">
              <h2 className="text-xs lg:text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 sm:mb-3 lg:mb-4">Revenue Transformation</h2>
              <h3 className="text-lg sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
                From Zero to
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Six-Figure Monthly
                </span>
              </h3>
              <div className="w-12 sm:w-16 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center">

              {/* Left Column - Before/After Transformations */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-8">
                {/* Transformation 1 */}
                <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-8 border border-gray-200 shadow-xl">
                  <div className="text-center mb-3 sm:mb-4 lg:mb-6">
                    <h4 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Revenue Potential Calculator</h4>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">See your earning potential with different strategies</p>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {/* Strategy Comparison */}
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-2 sm:p-3 lg:p-4 border border-red-100">
                      <div className="text-center mb-2 sm:mb-3">
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">Without Professional Management</span>
                       <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600 mt-1">$1,500</div>
                        <div className="text-xs text-red-600">Average monthly earnings</div>
                      </div>
                    </div>
                    
                    {/* VS Divider */}
                    <div className="flex items-center justify-center py-1 sm:py-2">
                      <div className="flex-1 h-px bg-gray-300"></div>
                      <span className="px-2 sm:px-3 lg:px-4 text-xs sm:text-sm font-bold text-gray-500 bg-white">VS</span>
                      <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-2 sm:p-3 lg:p-4 border border-emerald-100">
                      <div className="text-center mb-2 sm:mb-3">
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">With Modellaire MGMT</span>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-600 mt-1">$18,500</div>
                        <div className="text-xs text-emerald-600">Projected monthly earnings</div>
                      </div>
                      <div className="w-full bg-emerald-200 rounded-full h-2 mt-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                      <div className="text-center mt-1 sm:mt-2">
                       <span className="text-sm sm:text-base lg:text-lg font-bold text-emerald-600">1,133% increase</span>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center pt-2 sm:pt-3 lg:pt-4 border-t border-gray-200">
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Ready to unlock your potential?</p>
                      <button 
                        onClick={() => setShowCalculator(!showCalculator)}
                        className="px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs sm:text-sm rounded-full font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 min-h-[44px]"
                      >
                        {showCalculator ? 'Hide Calculator' : 'Calculate My Potential'}
                      </button>
                      
                      {/* Advanced Calculator Dropdown */}
                      {showCalculator && (
                        <div className="mt-3 sm:mt-4 lg:mt-6 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl border-2 border-gray-200 shadow-2xl p-3 sm:p-4 lg:p-8 text-left animate-in slide-in-from-top duration-300">
                          <div className="mb-3 sm:mb-4 lg:mb-6">
                            <h4 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Revenue Loss Calculator</h4>
                            <p className="text-xs sm:text-sm lg:text-base text-gray-600">Answer these questions to see exactly how much you're potentially losing each month</p>
                          </div>
                          
                          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                            {/* Current Followers */}
                            <div>
                              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-2">Current Follower Count</label>
                              <select
                                value={calculatorData.currentFollowers}
                                onChange={(e) => setCalculatorData({...calculatorData, currentFollowers: e.target.value})}
                                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none text-xs sm:text-sm min-h-[44px]"
                              >
                                <option value="0-1000">0 - 1,000 followers</option>
                                <option value="1000-5000">1,000 - 5,000 followers</option>
                                <option value="5000-15000">5,000 - 15,000 followers</option>
                                <option value="15000+">15,000+ followers</option>
                              </select>
                              {calculatorData.currentFollowers === '0-1000' && (
                                <p className="text-red-600 text-xs mt-1">⚠️ Low follower count = missing 80% of earning potential</p>
                              )}
                            </div>

                            {/* Post Frequency */}
                            <div>
                              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-2">How Often Do You Post?</label>
                              <select 
                                value={calculatorData.postFrequency}
                                onChange={(e) => setCalculatorData({...calculatorData, postFrequency: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                              >
                                <option value="irregular">Irregular / When I remember</option>
                                <option value="few-times-week">Few times a week</option>
                                <option value="daily">Daily posting</option>
                                <option value="multiple-daily">Multiple posts daily</option>
                              </select>
                              {calculatorData.postFrequency === 'irregular' && (
                                <p className="text-red-600 text-xs mt-1">⚠️ Inconsistent posting can reduce earnings by up to 60%</p>
                              )}
                            </div>
                            
                            {/* Engagement Strategy */}
                            <div>
                              <label className="block text-sm font-semibold text-gray-900 mb-2">Fan Engagement Strategy</label>
                              <select 
                                value={calculatorData.engagementStrategy}
                                onChange={(e) => setCalculatorData({...calculatorData, engagementStrategy: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                              >
                                <option value="none">No specific strategy</option>
                                <option value="basic">Basic responses to comments</option>
                                <option value="advanced">Strategic engagement & upselling</option>
                              </select>
                              {calculatorData.engagementStrategy === 'none' && (
                                <p className="text-red-600 text-xs mt-1">⚠️ No engagement strategy = missing 70%+ revenue potential</p>
                              )}
                            </div>
                            
                            {/* Chat Management */}
                            <div>
                              <label className="block text-sm font-semibold text-gray-900 mb-2">Who Manages Your Fan Messages?</label>
                              <select 
                                value={calculatorData.chatManagement}
                                onChange={(e) => setCalculatorData({...calculatorData, chatManagement: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                              >
                                <option value="self">I handle all messages myself</option>
                                <option value="assisted">Partially assisted chat management</option>
                                <option value="basic">Basic chatting, no sales focus</option>
                                <option value="professional">Professional chat management</option>
                              </select>
                              {calculatorData.chatManagement === 'self' && (
                                <p className="text-red-600 text-xs mt-1">⚠️ DIY chat management typically converts only 15% vs 60%+ professional</p>
                              )}
                            </div>
                            
                            {/* Promotion Channels */}
                            <div>
                              <label className="block text-sm font-semibold text-gray-900 mb-2">Where Do You Promote Your Content?</label>
                              <select 
                                value={calculatorData.promotionChannels}
                                onChange={(e) => setCalculatorData({...calculatorData, promotionChannels: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                              >
                                <option value="onlyfans-only">Only on OnlyFans</option>
                                <option value="reddit-only">Reddit only</option>
                                <option value="reddit-twitter">Reddit + Twitter</option>
                                <option value="multi-platform">Multi-platform strategy</option>
                                <option value="full-ecosystem">Full platform ecosystem</option>
                              </select>
                              {calculatorData.promotionChannels === 'onlyfans-only' && (
                                <p className="text-red-600 text-xs mt-1">⚠️ OnlyFans-only promotion limits growth by 85%</p>
                              )}
                            </div>
                            
                            {/* Content Quality */}
                            <div>
                              <label className="block text-sm font-semibold text-gray-900 mb-2">Content Production Quality</label>
                              <select 
                                value={calculatorData.contentQuality}
                                onChange={(e) => setCalculatorData({...calculatorData, contentQuality: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                              >
                                <option value="phone-basic">Phone camera, basic setup</option>
                                <option value="semi-pro">Some equipment, planned shots</option>
                                <option value="professional">Professional setup & editing</option>
                                <option value="studio-grade">Studio-grade production</option>
                              </select>
                              {calculatorData.contentQuality === 'phone-basic' && (
                                <p className="text-red-600 text-xs mt-1">⚠️ Basic content quality reduces subscriber retention by 45%</p>
                              )}
                            </div>
                            
                            {/* Pricing Strategy */}
                            <div>
                              <label className="block text-sm font-semibold text-gray-900 mb-2">How Do You Set Your Prices?</label>
                              <select 
                                value={calculatorData.pricingStrategy}
                                onChange={(e) => setCalculatorData({...calculatorData, pricingStrategy: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                              >
                                <option value="guessing">Guessing / copying others</option>
                                <option value="basic-testing">Basic testing approach</option>
                                <option value="strategic">Data-driven pricing strategy</option>
                                <option value="data-driven">Advanced data-driven optimization</option>
                              </select>
                              {calculatorData.pricingStrategy === 'guessing' && (
                                <p className="text-red-600 text-xs mt-1">⚠️ Wrong pricing can cost 40%+ in potential revenue</p>
                              )}
                            </div>
                            
                            {/* Social Media Presence */}
                            <div>
                              <label className="block text-sm font-semibold text-gray-900 mb-2">Social Media Marketing Strategy</label>
                              <select 
                                value={calculatorData.socialMediaPresence}
                                onChange={(e) => setCalculatorData({...calculatorData, socialMediaPresence: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                              >
                                <option value="none">No social media marketing</option>
                                <option value="basic">Basic social media posting</option>
                                <option value="active">Active on multiple platforms</option>
                                <option value="strategic">Strategic social media campaigns</option>
                              </select>
                              {calculatorData.socialMediaPresence === 'none' && (
                                <p className="text-red-600 text-xs mt-1">⚠️ No social media presence = losing 90% of potential traffic</p>
                              )}
                            </div>
                            
                            {/* Content Scheduling */}
                            <div>
                              <label className="block text-sm font-semibold text-gray-900 mb-2">Content Scheduling Approach</label>
                              <select 
                                value={calculatorData.contentScheduling}
                                onChange={(e) => setCalculatorData({...calculatorData, contentScheduling: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                              >
                                <option value="random">Post whenever I remember</option>
                                <option value="planned">Basic content calendar</option>
                                <option value="optimized">Optimized timing & scheduling</option>
                              </select>
                              {calculatorData.contentScheduling === 'random' && (
                                <p className="text-red-600 text-xs mt-1">⚠️ Random posting reduces engagement by up to 55%</p>
                              )}
                            </div>
                            
                            {/* Fan Retention */}
                            <div>
                              <label className="block text-sm font-semibold text-gray-900 mb-2">Fan Retention & Loyalty Programs</label>
                              <select 
                                value={calculatorData.fanRetention}
                                onChange={(e) => setCalculatorData({...calculatorData, fanRetention: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                              >
                                <option value="poor">No retention strategy</option>
                                <option value="average">Basic fan interaction</option>
                                <option value="good">Regular loyalty activities</option>
                                <option value="excellent">Advanced retention programs</option>
                              </select>
                              {calculatorData.fanRetention === 'poor' && (
                                <p className="text-red-600 text-xs mt-1">⚠️ Poor retention = 70% subscriber churn rate</p>
                              )}
                            </div>
                            
                            {/* Upsell Strategy */}
                            <div>
                              <label className="block text-sm font-semibold text-gray-900 mb-2">Upselling & Premium Content Strategy</label>
                              <select 
                                value={calculatorData.upsellStrategy}
                                onChange={(e) => setCalculatorData({...calculatorData, upsellStrategy: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                              >
                                <option value="none">No upselling strategy</option>
                                <option value="basic">Occasional premium offers</option>
                                <option value="advanced">Strategic upselling campaigns</option>
                                <option value="professional">Professional conversion funnels</option>
                              </select>
                              {calculatorData.upsellStrategy === 'none' && (
                                <p className="text-red-600 text-xs mt-1">⚠️ No upselling = missing 65% of revenue per subscriber</p>
                              )}
                            </div>
                            
                            {/* Analytics Tracking */}
                            <div>
                              <label className="block text-sm font-semibold text-gray-900 mb-2">Performance Analytics & Tracking</label>
                              <select 
                                value={calculatorData.analyticsTracking}
                                onChange={(e) => setCalculatorData({...calculatorData, analyticsTracking: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:outline-none"
                              >
                                <option value="none">No tracking or analytics</option>
                                <option value="basic">Basic platform insights only</option>
                                <option value="advanced">Multi-platform analytics</option>
                                <option value="professional">Professional data analysis</option>
                              </select>
                              {calculatorData.analyticsTracking === 'none' && (
                                <p className="text-red-600 text-xs mt-1">⚠️ No analytics = flying blind, missing optimization opportunities</p>
                              )}
                            </div>
                          </div>
                          
                          {/* Results */}
                          <div className="mt-3 sm:mt-4 lg:mt-8 p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg sm:rounded-xl border border-red-200">
                            <h5 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">💸 Your Current Revenue Loss Analysis</h5>

                            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3 lg:mb-4">
                              <div className="text-center">
                                <div className="text-xs sm:text-sm text-gray-600">Current Estimate</div>
                                <div className="text-base sm:text-lg lg:text-xl font-bold text-red-600">${results.currentEstimate.toLocaleString()}/mo</div>
                              </div>
                              <div className="text-center">
                                <div className="text-xs sm:text-sm text-gray-600">With Professional Management</div>
                                <div className="text-base sm:text-lg lg:text-xl font-bold text-emerald-600">${results.withManagement.toLocaleString()}/mo</div>
                              </div>
                            </div>
                            
                            <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 border border-red-200">
                              <div className="text-center mb-2 sm:mb-3">
                                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600">-${results.monthlyLoss.toLocaleString()}</div>
                                <div className="text-xs sm:text-sm text-red-600">You're potentially losing per month</div>
                              </div>
                              <div className="text-center">
                                <div className="text-sm sm:text-base lg:text-lg font-bold text-red-700">${results.yearlyLoss.toLocaleString()}</div>
                                <div className="text-xs text-red-700">Potential yearly loss</div>
                              </div>
                              <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-red-200 text-center">
                                <div className="text-xs sm:text-sm text-red-800 font-semibold">⏰ Time Cost: {Math.round(results.monthlyLoss / 50)} hours monthly</div>
                                <div className="text-xs text-red-600">Time you spend on tasks we handle professionally</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* What We Do */}
                          <div className="mt-2 p-2 sm:p-3 lg:p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg sm:rounded-xl border border-emerald-200">
                            <div className="text-center mb-2 sm:mb-3 lg:mb-4">
                              <h5 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">🚀 How Modellaire MGMT Guarantees Your Success</h5>
                              <div className="inline-block bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
                                ✅ 90-DAY MONEY-BACK GUARANTEE
                              </div>
                            </div>
                            
                            <div className="space-y-2 sm:space-y-3">
                              <div className="flex items-start space-x-2 sm:space-x-3">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <div>
                                  <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">🎯 Complete Business Takeover</div>
                                  <div className="text-xs sm:text-sm text-gray-600">We handle 100% of promotion, chat management, strategy, analytics, and optimization while you focus purely on content creation</div>
                                </div>
                              </div>
                              
                              <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900">📱 15+ Platform Domination</div>
                                  <div className="text-sm text-gray-600">Reddit, Twitter, Instagram, TikTok, Snapchat, Telegram, Discord + 8 more platforms - we post optimized content 24/7</div>
                                </div>
                              </div>
                              
                              <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900">💬 Elite Chat Team (75% Conversion Rate)</div>
                                  <div className="text-sm text-gray-600">24/7 expert chat managers who convert 75%+ of conversations into sales using psychology-based scripts and personalization</div>
                                </div>
                              </div>
                              
                              <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900">📊 AI-Powered Revenue Optimization</div>
                                  <div className="text-sm text-gray-600">Advanced AI analytics, real-time A/B testing, dynamic pricing, and competitor analysis to maximize every revenue stream</div>
                                </div>
                              </div>
                              
                              <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900">🎨 Content Strategy & Optimization</div>
                                  <div className="text-sm text-gray-600">Professional content planning, viral trend analysis, optimal posting times, and content performance tracking</div>
                                </div>
                              </div>
                              
                              <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900">🔥 Premium Upsell Systems</div>
                                  <div className="text-sm text-gray-600">Automated premium content delivery, personalized upsell campaigns, and VIP fan tier management systems</div>
                                </div>
                              </div>
                              
                              <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900">⚡ 24/7 Growth Acceleration</div>
                                  <div className="text-sm text-gray-600">Round-the-clock optimization, instant trend capitalization, and rapid response to platform algorithm changes</div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Guarantee Box */}
                            <div className="mt-3 sm:mt-4 lg:mt-6 p-2 sm:p-3 lg:p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                              <div className="text-center">
                                <h6 className="text-xs sm:text-sm lg:text-base font-bold text-yellow-800 mb-1 sm:mb-2">🏆 Our Ironclad Success Guarantee</h6>
                                <div className="text-xs sm:text-sm text-yellow-700 space-y-1">
                                  <p>✅ 300% ROI within 90 days or full refund</p>
                                  <p>✅ Minimum $15K monthly revenue by month 3</p>
                                  <p>✅ 50+ hours time saved monthly guaranteed</p>
                                  <p className="font-semibold">If we don't deliver, you don't pay.</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-3 sm:mt-4 lg:mt-6 text-center">
                              <button className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs sm:text-sm lg:text-base rounded-full font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px]">
                                🚀 Stop Losing ${results.monthlyLoss.toLocaleString()}/Month - Start Now
                              </button>
                              <div className="text-xs text-gray-600 mt-1 sm:mt-2">90-day money-back guarantee • No setup fees • Cancel anytime</div>
                              <div className="text-xs text-emerald-600 mt-1 font-semibold">⚡ Limited: Only 5 new clients accepted monthly</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Success Tiers & Guarantee */}
              <div className="relative">
                {/* Success Tiers */}
                <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-3xl p-3 sm:p-4 lg:p-8 border border-gray-200 shadow-2xl">


                  <div className="text-center mb-3 sm:mb-4 lg:mb-8">
                    <h4 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">Success Tiers</h4>
                    
                    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                      {/* Tier 1 */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2 sm:p-3 lg:p-4 border border-green-200 text-left">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs sm:text-sm font-semibold text-green-700">STARTER TIER</div>
                            <div className="text-sm sm:text-base lg:text-lg font-bold text-green-600">$5K - $15K</div>
                          </div>
                          <div className="text-lg sm:text-xl lg:text-2xl">🌟</div>
                        </div>
                        <div className="text-xs text-green-600 mt-1 sm:mt-2">Month 1-2 • 87% of clients</div>
                      </div>

                      {/* Tier 2 */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-2 sm:p-3 lg:p-4 border border-blue-200 text-left">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold text-blue-700">GROWTH TIER</div>
                            <div className="text-lg font-bold text-blue-600">$20K - $50K</div>
                          </div>
                          <div className="text-2xl">🚀</div>
                        </div>
                        <div className="text-xs text-blue-600 mt-2">Month 3-6 • 62% of clients</div>
                      </div>
                      
                      {/* Tier 3 */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200 text-left">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold text-purple-700">ELITE TIER</div>
                            <div className="text-lg font-bold text-purple-600">$75K - $200K</div>
                          </div>
                          <div className="text-2xl">👑</div>
                        </div>
                        <div className="text-xs text-purple-600 mt-2">Month 6+ • 31% of clients</div>
                      </div>
                    </div>
                  </div>

                  {/* Guarantee Box */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-yellow-200 mb-3 sm:mb-4 lg:mb-6">
                    <div className="text-center">
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-yellow-800 mb-1 sm:mb-2">30-Day Revenue Guarantee</div>
                      <p className="text-xs sm:text-sm text-yellow-700">
                        We guarantee minimum $5K monthly revenue within 30 days or your money back
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                  {/* CTA */}
                    <button className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm lg:text-base rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 min-h-[44px]">
                      Join Our Success Stories
                      Claim Your Transformation
                    </button>
                    <p className="text-xs lg:text-sm text-gray-500 mt-1 sm:mt-2">Start your transformation today</p>
                    <p className="text-xs lg:text-sm text-gray-500 mt-1 sm:mt-2">Join 500+ successful creators</p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 lg:-top-6 lg:-left-6 w-8 h-8 sm:w-12 sm:h-12 lg:w-24 lg:h-24 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 lg:-top-6 lg:-left-6 w-8 h-8 sm:w-12 sm:h-12 lg:w-24 lg:h-24 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Study Section */}
        <section className="py-4 sm:py-6 lg:py-20 relative">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-2 sm:mb-3 lg:mb-6">
              <h2 className="text-lg sm:text-xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-6">
                $10K in 30 Days —
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  From Zero to Breakthrough!
                </span>
              </h2>
              <p className="text-xs sm:text-sm lg:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                From ZERO PRESENCE to over $10K! in just ONE MONTH. This creator had no social media, no followers, and no prior audience — we built everything brick by brick. The dashboard shows daily growth climbing to record highs by month's end, with earnings driven by subscriptions, tips, and especially fan messaging. Proof that starting from scratch can still deliver massive results.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center">
              {/* Left Column - Screenshot */}
              <div className="relative">
                <div className="flex justify-center">
                  <img
                    src="/assets/uploads/3966668235efb5df2659ed69ff4b3211ac3bca84d3eb56c2621e583b5b88bec9.png"
                    alt="Verified earnings dashboard showing $10,321.66 total earnings with breakdown of subscriptions, tips, and messages"
                    className="max-w-48 sm:max-w-56 lg:max-w-72 object-contain bg-gray-900 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-2xl"
                  />
                </div>
                  {/* Verification Badge */}
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    ✓ Verified Data
                  </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 lg:-top-4 lg:-left-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
              </div>

              {/* Right Column - Stats */}
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="space-y-2 lg:space-y-3">
                  {/* Total Earnings */}
                  <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg lg:rounded-xl p-2 sm:p-3 lg:p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xs lg:text-sm text-gray-600 font-medium">Total Earnings</h4>
                        <p className="text-base sm:text-lg lg:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                          $10,321.66
                        </p>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-base sm:text-lg lg:text-xl">💰</span>
                      </div>
                    </div>
                  </div>

                  {/* Breakdown Stats */}
                  <div className="grid grid-cols-1 gap-1">
                    <div className="flex items-center justify-between p-1.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded border border-blue-200/50">
                      <span className="text-xs text-gray-700 font-medium">Subscriptions</span>
                      <span className="text-xs font-bold text-blue-600">$1,200.09</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-1.5 bg-gradient-to-r from-purple-50 to-pink-50 rounded border border-purple-200/50">
                      <span className="text-xs text-gray-700 font-medium">Tips</span>
                      <span className="text-xs font-bold text-purple-600">$261.00</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded border border-emerald-200/50">
                      <span className="text-xs text-gray-700 font-medium">Messages</span>
                      <span className="text-xs font-bold text-emerald-600">$8,860.57</span>
                    </div>
                  </div>
                </div>

                {/* Transformation 2 */}
                <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-8 border border-gray-200 shadow-xl">
                  <div className="text-center mb-3 sm:mb-4 lg:mb-6">
                    <h4 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">90-Day Scale-Up</h4>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">From established to elite performer</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                    {/* Before */}
                    <div className="text-center">
                      <div className="text-gray-500 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">BEFORE</div>
                      <div className="bg-gray-100 rounded-lg p-2 sm:p-3 lg:p-4">
                        <div className="text-base sm:text-lg lg:text-2xl font-bold text-gray-600">$8K</div>
                        <div className="text-xs text-gray-500">Monthly Revenue</div>
                      </div>
                    </div>
                    
                    {/* After */}
                    <div className="text-center">
                      <div className="text-purple-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">AFTER</div>
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-2 sm:p-3 lg:p-4 border border-purple-200">
                        <div className="text-base sm:text-lg lg:text-2xl font-bold text-purple-600">$87K</div>
                        <div className="text-xs text-purple-700">Monthly Revenue</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Arrow */}
                  <div className="flex justify-center my-2 sm:my-3 lg:my-4">
                    <div className="w-full h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-gray-400 via-blue-500 to-purple-500 rounded-full relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-xs sm:text-sm text-gray-600">Growth Rate: </span>
                    <span className="text-xs sm:text-sm font-bold text-purple-600">987% increase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-4 sm:mt-6 lg:mt-12 text-center">
              <p className="text-xs lg:text-sm text-gray-500 italic">
                Performance results may vary by creator. These figures are from one verified model's first month with Modellaire MGMT.
              </p>
            </div>
          </div>
        </section>
        
        <AdditionalServices />
        <Process />
        <Calculator />
      </main>
      <Footer />
    </div>
  );
}

export default App;