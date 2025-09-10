import React, { useState } from 'react';
import { divisionStructure, divisionColors, DIVISION_DATA } from '../constants';
import DivisionSquare from './DivisionSquare';
import { TeamModal } from './TeamModal';
import type { Division, SprintData } from '../types';

import { initializeSprintData } from '../utils';

interface DivisionPyramidProps {
  sprintData: SprintData;
}

const DivisionPyramid: React.FC<DivisionPyramidProps> = ({ sprintData: initialSprintData }) => {
  const [sprintData, setSprintData] = useState<SprintData>(
    () => initializeSprintData(initialSprintData)
  );

  const [selectedDivision, setSelectedDivision] = useState<Division | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSquareClick = (divisionNumber: number) => {
    const division = DIVISION_DATA[divisionNumber - 1];
    console.log('Clicked division:', division);
    console.log('SprintData keys:', Object.keys(sprintData));
    setSelectedDivision(division);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
      <header className="text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-500">
          Division Hierarchy
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
          A visual representation of 11 divisions arranged in a staircase, from lowest to highest rank.
        </p>
      </header>

      <main className="flex flex-col items-center justify-center w-full max-w-7xl">
        {divisionStructure.slice().reverse().map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center items-center flex-wrap"
            style={{ animation: `fadeInUp 0.5s ${rowIndex * 0.15}s ease-out forwards`, opacity: 0 }}
          >
            {row.map((divisionNumber) => {
              const division = DIVISION_DATA[divisionNumber - 1];
              return (
                <DivisionSquare
                  key={divisionNumber}
                  divisionNumber={divisionNumber}
                  divisionName={division.name}
                  className={divisionColors[divisionNumber - 1]}
                  emoji={division.emoji}
                  onClick={() => handleSquareClick(divisionNumber)}
                />
              );
            })}
          </div>
        ))}
      </main>

      <TeamModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        division={selectedDivision}
        sprintData={sprintData}
      />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default DivisionPyramid;
