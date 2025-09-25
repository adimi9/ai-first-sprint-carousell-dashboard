
export interface Division {
  name: string;
  participants: number;
  total: number;
  emoji: string;
}

export interface RankedDivision extends Division {
  percentage: number;
  rank: number;
}

export interface SprintTeam {
  name: string;
  slackLink: string;
}

export interface SprintData {
  [divisionName: string]: {
    sprint1?: SprintTeam[];
    sprint2?: SprintTeam[];
  };
}
