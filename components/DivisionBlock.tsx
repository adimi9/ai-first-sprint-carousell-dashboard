import React, { useState, useEffect } from 'react';
import { divisionColors, SPRINT_DATA } from '../constants';
import type { RankedDivision } from '../types';

interface DivisionBlockProps {
  division: RankedDivision;
  onDivisionClick: (division: RankedDivision) => void;
}

const getWittyComment = (percentage: number): string => {
  if (percentage >= 100) return "Sprint Complete! 🏆";
  if (percentage > 75) return "Nearing the finish line!";
  if (percentage > 50) return "Wow, more than 50% completed the lap!";
  if (percentage > 25) return "Making great progress!";
  return "Warming up on the track!";
};

const getMedal = (rank: number): string => {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return '';
};


const DivisionBlock: React.FC<DivisionBlockProps> = ({ division, onDivisionClick }) => {
  const { rank, name, emoji, participants, total, percentage } = division;
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  const sprintDetails = SPRINT_DATA[name];

  useEffect(() => {
    const timeout = setTimeout(() => {
        setAnimatedPercentage(percentage);
    }, 100 + rank * 100); // Stagger animation start
    return () => clearTimeout(timeout);
  }, [percentage, rank]);


  const colorClass = divisionColors[rank - 1] || 'bg-gray-700/20 border-gray-600 text-gray-400';
  const percentageFormatted = percentage.toFixed(1);

  return (
    <div
      className={`w-60 sm:w-64 p-4 border rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl ${colorClass} fade-in-up flex flex-col ${sprintDetails ? 'cursor-pointer' : ''}`}
      style={{ animationDelay: `${rank * 60}ms`, opacity: 0 }}
      onClick={() => sprintDetails && onDivisionClick(division)}
      onKeyDown={(e) => {
        if (sprintDetails && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onDivisionClick(division);
        }
      }}
      role={sprintDetails ? "button" : "group"}
      tabIndex={sprintDetails ? 0 : -1}
    >
      <div className="flex-grow flex flex-col">
        <div>
          <div className="flex justify-between items-start mb-2">
            <div className={`text-4xl font-black flex items-center gap-2 ${rank === 1 ? 'text-yellow-300' : rank === 2 ? 'text-slate-300' : rank === 3 ? 'text-amber-400' : 'text-slate-500'}`}>
               <span>#{rank}</span>
               <span className="text-3xl">{getMedal(rank)}</span>
            </div>
            <div className="text-4xl transition-transform duration-300 group-hover:scale-125">{emoji}</div>
          </div>
          <h3 className="font-bold text-lg truncate h-7">{name}</h3>
          <p className="text-sm opacity-80 mb-4">{`${participants} of ${total} Participants`}</p>

          <div className="relative h-8 w-full bg-black/30 rounded-full overflow-hidden border border-white/10 mb-2" title={`${percentageFormatted}% complete`}>
            <div
              className="absolute top-0 left-0 h-full bg-sky-500/90 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${animatedPercentage}%` }}
            ></div>
            <div className="absolute top-0 left-1 h-full flex items-center text-xl">🚩</div>
            <div 
              className="absolute top-0 h-full text-xl transition-all duration-1000 ease-out"
              style={{ 
                left: `calc(${Math.min(animatedPercentage, 95)}% - 10px)`,
                transform: 'scaleX(-1)'
              }}
            >
              🏃
            </div>
            <div className="absolute top-0 right-1 h-full flex items-center text-xl">🏁</div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-xs font-bold text-white" style={{textShadow: '0 1px 2px rgba(0,0,0,0.7)'}}>{percentageFormatted}%</span>
            </div>
          </div>
          
          <p className="text-xs text-center italic opacity-70 h-4 mb-3">{getWittyComment(percentage)}</p>
        </div>
      </div>
    </div>
  );
};

export default DivisionBlock;