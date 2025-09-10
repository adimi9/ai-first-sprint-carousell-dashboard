import React from 'react';

interface DivisionSquareProps {
  divisionNumber: number;
  divisionName: string;
  className: string;
  emoji: string;
  onClick?: () => void;
}

const DivisionSquare: React.FC<DivisionSquareProps> = ({ divisionNumber, divisionName, className, emoji, onClick }) => {
  const getBadgeStyle = (rank: number): string => {
    if (rank === 11) return 'bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 text-slate-900 border-2 border-yellow-200 shadow-xl shadow-yellow-500/40';
    if (rank === 10) return 'bg-gradient-to-br from-slate-200 via-gray-300 to-slate-400 text-slate-800 border-2 border-slate-100 shadow-lg shadow-gray-500/40';
    if (rank === 9) return 'bg-gradient-to-br from-amber-600 via-orange-700 to-yellow-800 text-white border-2 border-amber-400 shadow-lg shadow-orange-700/40';
    if (rank >= 6) return 'bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white border-2 border-purple-300 shadow-lg shadow-fuchsia-500/40';
    return 'bg-slate-600 text-slate-300 border-2 border-slate-500 shadow-md shadow-black/30';
  };

  return (
    <>
      <div
        onClick={onClick}
        className={`
          group
          relative 
          w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40
          m-2 sm:m-3
          border-2 rounded-xl 
          flex flex-col items-center justify-center 
          cursor-pointer 
          transition-all duration-300 ease-in-out
          transform hover:scale-105 hover:shadow-2xl
          shadow-lg
          overflow-hidden
          p-2
          ${className}
          ${divisionNumber === 11 ? 'animate-pulse-glow' : ''}
        `}
      >
        <div 
          className={`
            absolute -top-2 -right-2
            w-10 h-10 sm:w-12 sm:h-12
            flex items-center justify-center
            rounded-full border-2
            font-bold
            transition-all duration-300
            group-hover:scale-110 group-hover:rotate-6
            z-20
            ${getBadgeStyle(divisionNumber)}
          `}
          aria-label={`Rank ${divisionNumber}`}
        >
          <span className="text-base sm:text-lg select-none drop-shadow-md">
            {divisionNumber}
          </span>
        </div>

        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        <div className="relative z-10 text-center">
          <span className="block text-2xl">{emoji}</span>
          <span className="block text-base sm:text-lg font-semibold leading-tight tracking-wide">
            {divisionName}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(253, 224, 71, 0.4), 0 0 25px rgba(251, 191, 36, 0.3), 0 0 10px rgba(0,0,0,0.5) inset;
          }
          50% {
            box-shadow: 0 0 30px rgba(253, 224, 71, 0.7), 0 0 50px rgba(251, 191, 36, 0.5), 0 0 10px rgba(0,0,0,0.5) inset;
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s infinite ease-in-out;
        }
      `}</style>
    </>
  );
};

export default DivisionSquare;
