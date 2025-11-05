import React from 'react';
import { Target, Megaphone, BarChart3 } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      step: 'Step 1',
      icon: Target,
      title: 'Strategy & Setup',
      description: 'We take the time to understand your content style, niche, and fanbase to create a data-led strategy that enhances your results. Whether you\'re new to the platform or need guidance moving forward, we have everything to suit you.'
    },
    {
      step: 'Step 2', 
      icon: Megaphone,
      title: 'Promotion & Execution',
      description: 'We promote your OnlyFans across the most effective platforms, like Reddit, and secure influencer collaborations to maximize your reach and conversions. All you need to do is stay consistent and we handle the rest.'
    },
    {
      step: 'Step 3',
      icon: BarChart3,
      title: 'Testing & Scaling',
      description: 'We don\'t leave you in the dark once you\'re up and running. We regularly monitor your performance and evaluate what works and what doesn\'t so we can focus on the strategies that get you the best results.'
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Steps */}
          <div className="space-y-4 sm:space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="group">
                  <div className="flex items-start space-x-3 sm:space-x-6">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-1 sm:mb-2 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                      </div>
                      <div className="text-blue-600 font-semibold" style={{ fontSize: 'clamp(10px, 2.5vw, 14px)' }}>{step.step}</div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 sm:mb-4 group-hover:text-blue-900 transition-colors duration-300" style={{ fontSize: 'clamp(16px, 4vw, 24px)' }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="ml-6 sm:ml-8 mt-2 sm:mt-4 h-6 sm:h-8 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/30"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-gray-200 shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative">
                {/* Professional consultation image */}
                <img 
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional team working together in bright modern office with laptops and natural workspace setting"
                  className="w-full h-full object-cover relative z-10"
                />
                
                {/* Gradient overlay for brand consistency */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/3 z-20"></div>
                
                {/* Screen reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/3 z-30"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;