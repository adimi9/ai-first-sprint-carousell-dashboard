import React from 'react';
import { divisionStructure } from '../constants';
import type { RankedDivision } from '../types';
import DivisionBlock from './DivisionBlock';

interface LeaderboardProps {
  divisions: RankedDivision[];
  onDivisionClick: (division: RankedDivision) => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ divisions, onDivisionClick }) => {
  if (divisions.length === 0) {
    return <div className="text-center text-slate-400">Calculating rankings...</div>;
  }

  const findDivisionByRank = (rank: number): RankedDivision | undefined => {
    return divisions.find(d => d.rank === rank);
  };

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-4">
      {divisionStructure.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center items-end gap-2 sm:gap-4 flex-wrap">
          {row.map(rank => {
            const division = findDivisionByRank(rank);
            if (!division) return <div key={rank} className="w-60 sm:w-64 h-48 bg-slate-800/50 rounded-lg animate-pulse"></div>;
            return <DivisionBlock key={division.name} division={division} onDivisionClick={onDivisionClick} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;