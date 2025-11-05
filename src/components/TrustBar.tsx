import React from 'react';
import { Shield, Users, FileCheck, Eye, Lock, Award } from 'lucide-react';

const TrustBar: React.FC = () => {
  const trustItems = [
    { icon: FileCheck, label: 'TOS Compliant' },
    { icon: Shield, label: '18+ ID Verified' },
    { icon: Lock, label: 'Consent Ledger' },
    { icon: Award, label: 'GDPR Certified' },
    { icon: Users, label: '2M+ Followers Managed' },
    { icon: Eye, label: 'Full Transparency' },
  ];

  return (
    <div className="border-y border-gray-200 bg-gradient-to-r from-gray-50 via-white to-gray-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center space-x-1.5 sm:space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="font-medium whitespace-nowrap" style={{ fontSize: 'clamp(10px, 2.5vw, 14px)' }}>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;