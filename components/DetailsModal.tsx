import React from 'react';
import type { RankedDivision } from '../types';
import { SPRINT_DATA } from '../constants';

interface DetailsModalProps {
  division: RankedDivision;
  onClose: () => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ division, onClose }) => {
  const sprintDetails = SPRINT_DATA[division.name];

  if (!sprintDetails) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-slate-800 border border-slate-600 rounded-xl p-6 w-full max-w-md m-4 text-white fade-in-up"
        onClick={(e) => e.stopPropagation()}
        style={{ animationDuration: '0.4s'}}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{division.emoji} {division.name}</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors text-2xl"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {sprintDetails.sprint1 && (
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-2">Sprint 1 Participants</h3>
              <ul className="list-disc list-inside space-y-1">
                {sprintDetails.sprint1.map((team) => (
                  <li key={team.name} className="text-slate-300">{team.name}</li>
                ))}
              </ul>
            </div>
          )}
          {sprintDetails.sprint2 && (
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mt-3 mb-2">Sprint 2 Participants</h3>
              <ul className="list-disc list-inside space-y-1">
                {sprintDetails.sprint2.map((team) => (
                  <li key={team.name} className="text-slate-300">{team.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
