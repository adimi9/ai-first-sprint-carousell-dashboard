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
    <div className="min-h-screen w-full text-white flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
      

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
