import React, { useState } from 'react';
import { DIVISION_DATA, divisionColors } from '../constants';
import DivisionSquare from './DivisionSquare';
import { TeamModal } from './TeamModal';
import type { Division, SprintData } from '../types';
import { initializeSprintData } from '../utils';

interface TimelineProps {
  sprintData: SprintData;
}

const Timeline: React.FC<TimelineProps> = ({ sprintData: initialSprintData }) => {
  const [sprintData, setSprintData] = useState<SprintData>(
    () => initializeSprintData(initialSprintData)
  );
  const [selectedDivision, setSelectedDivision] = useState<Division | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSquareClick = (divisionNumber: number) => {
    const division = DIVISION_DATA[divisionNumber - 1];
    setSelectedDivision(division);
    setIsModalOpen(true);
  };

  // Divisions in order 1 → 11
  const orderedDivisions = DIVISION_DATA.map((_, i) => i + 1);

  return (
    <div className="min-h-screen w-full text-white flex flex-col items-center justify-start p-4 sm:p-8 overflow-hidden relative">
      
      {/* Central vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-600 -translate-x-1/2"></div>

      <main className="w-full max-w-4xl flex flex-col items-center space-y-2">
        {orderedDivisions.map((divisionNumber, index) => {
          const division = DIVISION_DATA[divisionNumber - 1];
          const isLeft = index % 2 === 0;

          return (
            <div key={divisionNumber} className="w-full flex relative">
  {/* Left half */}
  <div className="w-1/2 flex justify-end pr-4">
    {isLeft && (
      <DivisionSquare
        divisionNumber={divisionNumber}
        divisionName={division.name}
        className={divisionColors[divisionNumber - 1]}
        emoji={division.emoji}
        onClick={() => handleSquareClick(divisionNumber)}
      />
    )}
  </div>

  {/* Right half */}
  <div className="w-1/2 flex justify-start pl-4">
    {!isLeft && (
      <DivisionSquare
        divisionNumber={divisionNumber}
        divisionName={division.name}
        className={divisionColors[divisionNumber - 1]}
        emoji={division.emoji}
        onClick={() => handleSquareClick(divisionNumber)}
      />
    )}
  </div>
</div>

          );
        })}
      </main>

      <TeamModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        division={selectedDivision}
        sprintData={sprintData}
      />
    </div>
  );
};

export default Timeline;
