import React, { useState, useEffect } from 'react';
import { DIVISION_DATA } from './constants';
import type { RankedDivision } from './types';
import Leaderboard from './components/Leaderboard';
import DetailsModal from './components/DetailsModal';

const App: React.FC = () => {
  const [rankedDivisions, setRankedDivisions] = useState<RankedDivision[]>([]);
  const [selectedDivision, setSelectedDivision] = useState<RankedDivision | null>(null);

  useEffect(() => {
    const calculatedDivisions = DIVISION_DATA
      .map(division => ({
        ...division,
        percentage: division.total > 0 ? (division.participants / division.total) * 100 : 0,
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .map((division, index) => ({
        ...division,
        rank: index + 1,
      }));
    setRankedDivisions(calculatedDivisions);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-white p-4 sm:p-8 overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(121,_94,_219,_0.15),_transparent_40%)]"></div>
      <div className="relative z-10">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 pb-2">
            AI-First Sprint Leaderboard
          </h1>
          <p className="text-slate-400 mt-2 text-lg max-w-2xl mx-auto">
            Tracking participation across all divisions. Who will reach the finish line first?
          </p>
        </header>
        <main>
          <Leaderboard divisions={rankedDivisions} onDivisionClick={setSelectedDivision} />
        </main>
      </div>
      {selectedDivision && (
        <DetailsModal 
          division={selectedDivision} 
          onClose={() => setSelectedDivision(null)} 
        />
      )}
    </div>
  );
};

export default App;