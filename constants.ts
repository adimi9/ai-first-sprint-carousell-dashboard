import type { Division, SprintData } from "./types";

// The structure of the staircase, from top row to bottom row.
export const divisionStructure: number[][] = [
  [1],
  [2, 3],
  [4, 5, 6],
  [7, 8, 9, 10, 11],
];

export const DIVISION_DATA: Division[] = [
  { name: "Digital Governance", participants: 28, total: 45, emoji: "💻" },
  { name: "Strategy & Transformation", participants: 22, total: 42, emoji: "🚀" },
  { name: "Partnerships & Engagement", participants: 19, total: 38, emoji: "🤝" },
  { name: "People & Organisation", participants: 31, total: 68, emoji: "👥" },
  { name: "Comms & Marketing", participants: 15, total: 35, emoji: "📢" },
  { name: "CIO Office", participants: 24, total: 52, emoji: "⚙️" },
  { name: "Org Excellence", participants: 18, total: 41, emoji: "⭐" },
  { name: "Procurement", participants: 12, total: 33, emoji: "📋" },
  { name: "Finance", participants: 8, total: 42, emoji: "💰" },
  { name: "Legal", participants: 6, total: 28, emoji: "⚖️" },
  { name: "Internal Audit", participants: 3, total: 18, emoji: "🔍" },
];

// A gradient of color styles for each division, from 1 to 11.
export const divisionColors: string[] = [
  // Top Ranks (1-3): Prestigious, metallic, and radiant
  'bg-yellow-400/10 border-yellow-400/80 text-yellow-200 hover:bg-yellow-400/20 hover:border-yellow-300 shadow-yellow-400/20', // Div 1 (Gold)
  'bg-slate-400/10 border-slate-400/80 text-slate-200 hover:bg-slate-400/20 hover:border-slate-300 shadow-slate-400/20', // Div 2 (Silver)
  'bg-amber-600/10 border-amber-500/80 text-amber-300 hover:bg-amber-600/20 hover:border-amber-400 shadow-amber-600/20', // Div 3 (Bronze)

   // Mid Ranks (4-6): Vibrant colors
  'bg-purple-500/10 border-purple-500/80 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 shadow-purple-500/20', // Div 4
  'bg-fuchsia-500/10 border-fuchsia-500/80 text-fuchsia-300 hover:bg-fuchsia-500/20 hover:border-fuchsia-400 shadow-fuchsia-500/20', // Div 5
  'bg-pink-500/10 border-pink-500/80 text-pink-300 hover:bg-pink-500/20 hover:border-pink-400 shadow-pink-500/20', // Div 6

  // Low Ranks (7-11): Muted, "undesirable"
  'bg-slate-700/20 border-slate-600/80 text-slate-400 hover:bg-slate-700/30 hover:border-slate-500 shadow-slate-700/20', // Div 7
  'bg-slate-700/20 border-slate-600/80 text-slate-400 hover:bg-slate-700/30 hover:border-slate-500 shadow-slate-700/20', // Div 8
  'bg-zinc-700/20 border-zinc-600/80 text-zinc-400 hover:bg-zinc-700/30 hover:border-zinc-500 shadow-zinc-700/20', // Div 9
  'bg-zinc-700/20 border-zinc-600/80 text-zinc-400 hover:bg-zinc-700/30 hover:border-zinc-500 shadow-zinc-700/20', // Div 10
  'bg-neutral-700/20 border-neutral-600/80 text-neutral-400 hover:bg-neutral-700/30 hover:border-neutral-500 shadow-neutral-700/20', // Div 11
];

export const SPRINT_DATA: SprintData = {
  "Digital Governance": {
    sprint1: [
      {name: "🎯 The Insighters: Anna Lee, Barry Chan", slackLink: "#"},
      {name: "📊 Data Drivers: Priya Singh, Tom Nguyen", slackLink: "#"}
    ],
    sprint2: [
      {name: "🛡️ Policy Guardians: Chloe Kim, David Wu", slackLink: "#"},
    ]
  },
  "Finance": {
     sprint1: [
      {name: "💸 Budget Wizards: John Doe", slackLink: "#"},
    ],
  }
};