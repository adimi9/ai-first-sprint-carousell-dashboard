import { DIVISION_DATA } from './constants';
import type { SprintData } from './types';

export const initializeSprintData = (data?: SprintData): SprintData => {
  const sprintData: SprintData = {};

  DIVISION_DATA.forEach((division) => {
    // If data exists for this division, keep it; otherwise initialize as empty object
    sprintData[division.name] = data?.[division.name] ?? {};
  });

  return sprintData;
};
