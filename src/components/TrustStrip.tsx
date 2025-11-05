import React from 'react';
import { Shield, Users, FileCheck, Unlock, Lock } from 'lucide-react';

const TrustStrip: React.FC = () => {
  const trustItems = [
    { 
      icon: Shield, 
      text: "UK-based, GDPR-aligned",
      subtext: "(ICO reg: {{ICO_Registration_Number}})"
    },
    { 
      icon: Users, 
      text: "18+ creators only",
      subtext: "(ID verified)"
    },
    { 
      icon: FileCheck, 
      text: "OnlyFans Terms compliant",
      subtext: ""
    },
    { 
      icon: Unlock, 
      text: "No lock-in contract",
      subtext: "— leave anytime"
    },
    { 
      icon: Lock, 
      text: "Confidentiality guaranteed",
      subtext: "(NDA)"
    }
  ];

  return (
    <section className="py-6 sm:py-8 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg sm:rounded-2xl p-4 sm:p-8 border border-gray-200 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3 text-center sm:text-left">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 leading-tight" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>
                      {item.text}
                    </p>
                    {item.subtext && (
                      <p className="text-gray-600 leading-tight" style={{ fontSize: 'clamp(9px, 2.2vw, 12px)' }}>
                        {item.subtext}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-center" style={{ fontSize: 'clamp(9px, 2.2vw, 12px)' }}>
              {"{{Registered_Business_Name}}"} complies with UK law and international standards. Placeholders will be updated before publish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;