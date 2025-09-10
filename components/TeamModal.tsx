import React, { useEffect } from 'react';
import type { Division, SprintData, SprintTeam } from '../types';
import { initializeSprintData } from '../utils';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  division: Division | null;
  sprintData?: SprintData; // optional input
}

export const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose, division, sprintData }) => {
  // Always initialize sprintData to have every division key
  const safeSprintData: SprintData = initializeSprintData(sprintData);

  useEffect(() => {
    console.log('Modal open:', isOpen);
    console.log('Selected division:', division);
    console.log('SprintData keys:', Object.keys(safeSprintData));
    if (division) {
      console.log('Sprint data for division:', safeSprintData[division.name]);
    }
  }, [isOpen, division, safeSprintData]);

  if (!isOpen || !division) return null;

  const divisionSprintData = safeSprintData[division.name];

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-slate-800/50 backdrop-blur-lg border border-white/20 rounded-2xl text-white p-6 w-full max-w-md m-4 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-3xl mr-2">{division.emoji}</span> {division.name}
            </h2>
            <p className="text-purple-300">
              Participants: {division.participants} / {division.total}
            </p>
          </div>
          <button onClick={onClose} className="text-2xl text-gray-400 hover:text-white">&times;</button>
        </div>

        <div className="mt-6 max-h-[60vh] overflow-y-auto pr-2">
          {divisionSprintData && Object.keys(divisionSprintData).length > 0 ? (
            Object.entries(divisionSprintData).map(([sprintKey, teams]) => (
              <div key={sprintKey} className="mb-4">
                <h3 className="text-lg font-semibold capitalize text-purple-300 border-b border-purple-500/30 pb-1 mb-2">
                  {sprintKey.replace('sprint', 'Sprint ')}
                </h3>
                <ul className="space-y-2">
                  {(teams as SprintTeam[]).map((team, index) => (
                    <li key={index} className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <a href={team.slackLink} target="_blank" rel="noopener noreferrer" className="block text-sm">
                        <p className="font-medium">{team.name}</p>
                        <p className="text-xs text-blue-400 hover:underline">View on Slack</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 bg-black/20 p-4 rounded-lg">
              No sprint data available for this division yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
