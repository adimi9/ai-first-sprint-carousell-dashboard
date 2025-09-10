
import React from 'react';
import type { Division } from '../types';

interface DivisionCardProps {
  division: Division;
  index: number;
  totalSteps: number;
  onViewTeams: () => void;
}

export const DivisionCard: React.FC<DivisionCardProps> = ({ division, index, totalSteps, onViewTeams }) => {
  const { name, participants, total, emoji } = division;
  const percentage = total > 0 ? Math.round((participants / total) * 100) : 0;

  const isChampion = percentage >= 70;
  const isSleepy = percentage < 20;

  const cardClasses = `
    relative w-[160px] h-[120px] rounded-xl p-2.5 flex flex-col justify-between
    bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
    transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/40 cursor-pointer
    ${isChampion ? 'animate-champion-glow' : ''}
    ${isSleepy ? 'animate-sleepy-shake' : ''}
  `;

  const backgroundStyle = isChampion 
    ? { background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(255,215,0,0.1) 60%), rgba(255,255,255,0.1)' }
    : isSleepy 
    ? { background: 'radial-gradient(circle, rgba(255,0,0,0.2) 0%, rgba(255,0,0,0.05) 60%), rgba(255,255,255,0.1)' }
    : {};

  const distanceToStar = totalSteps - 1 - index;

  return (
    <div className="relative group" onClick={onViewTeams}>
      <div className={cardClasses} style={backgroundStyle}>
        <div>
          <div className="flex items-center justify-between">
            <span className="text-2xl">{emoji}</span>
             {isChampion && <span className="text-yellow-300 text-xs font-bold">CHAMPION!</span>}
            {!isChampion && distanceToStar <= 2 && distanceToStar > 0 && (
                <span className="text-xs text-yellow-300 font-semibold">⭐ {distanceToStar} step{distanceToStar > 1 ? 's' : ''} to go!</span>
            )}
          </div>
          <p className="text-xs font-bold leading-tight mt-1 h-8">{name}</p>
        </div>
        <div>
          <div className="flex justify-between items-baseline">
            <span className="text-lg font-bold">{participants}/{total}</span>
            <span className={`font-bold px-2 py-0.5 rounded-full text-sm ${isChampion ? 'bg-yellow-400 text-black' : 'bg-purple-600 text-white'}`}>{percentage}%</span>
          </div>
          <div className="w-full bg-black/30 rounded-full h-1.5 mt-1.5">
            <div className={`h-1.5 rounded-full ${isChampion ? 'bg-yellow-400' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`} style={{ width: `${percentage}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ActionButtons: React.FC<{ onViewTeams: () => void }> = ({ onViewTeams }) => {
  return (
    <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 group-hover:-right-4 transition-all duration-300">
      <button className="text-xs font-bold text-white px-2 py-1 rounded-md rainbow-bg shadow-lg whitespace-nowrap hover:scale-110 transition-transform">
        🚀 Join Sprint!
      </button>
      <button 
        onClick={(e) => { e.stopPropagation(); onViewTeams(); }}
        className="text-xs font-bold text-white px-2 py-1 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg whitespace-nowrap hover:scale-110 transition-transform">
        👥 View Teams
      </button>
    </div>
  )
}
