import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
      
      {/* Highly Visible Flowing Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" stopOpacity="0" />
              <stop offset="30%" stopColor="#1e40af" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#7c3aed" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="25%" stopColor="#7c3aed" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#1e40af" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Thick Horizontal Lines */}
          <g className="animate-flow-right">
            <line x1="-20" y1="20" x2="120" y2="20" stroke="url(#pinkGradient)" strokeWidth="1" opacity="1" />
            <line x1="-30" y1="30" x2="130" y2="30" stroke="url(#redGradient)" strokeWidth="0.8" opacity="0.8" />
          </g>

          <g className="animate-flow-right-delayed">
            <line x1="-25" y1="40" x2="125" y2="40" stroke="url(#pinkGradient)" strokeWidth="1.2" opacity="1" />
            <line x1="-15" y1="50" x2="115" y2="50" stroke="url(#redGradient)" strokeWidth="1" opacity="0.9" />
          </g>

          <g className="animate-flow-left">
            <line x1="120" y1="60" x2="-20" y2="60" stroke="url(#pinkGradient)" strokeWidth="0.8" opacity="1" />
            <line x1="130" y1="70" x2="-30" y2="70" stroke="url(#redGradient)" strokeWidth="1" opacity="0.8" />
          </g>

          <g className="animate-flow-left-delayed">
            <line x1="125" y1="80" x2="-25" y2="80" stroke="url(#pinkGradient)" strokeWidth="1.2" opacity="1" />
            <line x1="115" y1="90" x2="-15" y2="90" stroke="url(#redGradient)" strokeWidth="0.8" opacity="0.9" />
          </g>

          {/* Vertical Lines */}
          <g className="animate-flow-down">
            <line x1="20" y1="-10" x2="20" y2="110" stroke="#1e40af" strokeWidth="0.8" opacity="0.6" />
            <line x1="80" y1="-15" x2="80" y2="115" stroke="#7c3aed" strokeWidth="1" opacity="0.8" />
          </g>

          <g className="animate-flow-up">
            <line x1="40" y1="110" x2="40" y2="-10" stroke="#7c3aed" strokeWidth="1.2" opacity="0.7" />
            <line x1="60" y1="115" x2="60" y2="-15" stroke="#1e40af" strokeWidth="0.8" opacity="0.8" />
          </g>
        </svg>
      </div>

      {/* Large Visible Connection Nodes */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[15%] w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-pulse-slow">
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30"></div>
        </div>
        <div className="absolute top-[60%] right-[20%] w-8 h-8 bg-purple-500 rounded-full opacity-50 animate-pulse-slow delay-1000">
          <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping delay-1000 opacity-30"></div>
        </div>
        <div className="absolute bottom-[30%] left-[70%] w-6 h-6 bg-blue-400 rounded-full opacity-70 animate-pulse-slow delay-2000">
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping delay-2000 opacity-30"></div>
        </div>
        <div className="absolute top-[40%] left-[60%] w-4 h-4 bg-purple-400 rounded-full opacity-80 animate-pulse-slow delay-500">
          <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping delay-500 opacity-30"></div>
        </div>
      </div>

      {/* Visible Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={i} 
              className="border-r border-b border-blue-500/20 animate-grid-glow"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${6 + (i % 3) * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Bright Energy Sweeps */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-40 animate-energy-pulse"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30 animate-energy-pulse delay-3000"></div>
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-energy-pulse delay-1500"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40 animate-energy-pulse delay-4500"></div>
      </div>

      {/* Test Visibility Elements */}
      <div className="absolute top-4 left-4 z-20">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-4 right-4 z-20">
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;