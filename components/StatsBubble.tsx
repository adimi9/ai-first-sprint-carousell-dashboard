
import React, { useState, useEffect } from 'react';

interface StatsBubbleProps {
  totalParticipants: number;
  totalEmployees: number;
}

const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const nextValue = Math.floor(progress * value);
      setCurrentValue(nextValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value]);

  return <span>{currentValue}</span>;
};


export const StatsBubble: React.FC<StatsBubbleProps> = ({ totalParticipants, totalEmployees }) => {
  const percentage = totalEmployees > 0 ? (totalParticipants / totalEmployees) * 100 : 0;
  const circumference = 2 * Math.PI * 90; // radius is 90
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const remaining = totalEmployees - totalParticipants;

  return (
    <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] flex items-center justify-center text-white">
      <div className="absolute w-full h-full rounded-full" style={{ background: 'conic-gradient(from 180deg at 50% 50%, #764ba2, #667eea, #f093fb, #764ba2)' }}></div>
      <div className="absolute w-[180px] h-[180px] sm:w-[270px] sm:h-[270px] bg-[#141931] rounded-full flex items-center justify-center">
         <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="transparent" />
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="url(#progressGradient)"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
          />
           <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f093fb" />
              <stop offset="100%" stopColor="#667eea" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center p-2 sm:p-4 text-center">
        <div className="text-3xl sm:text-5xl font-bold text-white tracking-tighter">
          <AnimatedNumber value={Math.round(percentage)} />%
        </div>
        <div className="text-base sm:text-lg font-semibold mt-1 sm:mt-2">
          <AnimatedNumber value={totalParticipants} /> of <AnimatedNumber value={totalEmployees} />
        </div>
        <div className="text-[10px] sm:text-xs mt-1 sm:mt-2 text-purple-300">
           SCG employees participating
        </div>
        <div className="mt-2 sm:mt-4 text-xs sm:text-sm font-bold text-center">
          🎉 Just <span className="text-yellow-300">{remaining}</span> more to go! 🎊
        </div>
      </div>
    </div>
  );
};
