
export interface Division {
  name: string;
  participants: number;
  total: number;
  emoji: string;
}

export interface SprintTeam {
  name: string;
  slackLink: string;
}

export interface SprintData {
  [key: string]: {
    [sprintKey: string]: SprintTeam[];
  };
}
