import { Division, SprintData } from "./types";

// The structure of the staircase, from bottom row to top row.
export const divisionStructure: number[][] = [
  [11, 10, 9, 8, 7],
  [6, 5, 4],
  [3, 2],
  [1],
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

export const divisionNames: string[] = [
  'People & Organisation',      // Div 1
  'Digital Governance',         // Div 2
  'Procurement',                // Div 3
  'Finance',                    // Div 4
  'Strategy & Transformation',  // Div 5
  'Comms & Marketing',          // Div 6
  'Internal Audit',             // Div 7
  'Partnerships & Engagement',  // Div 8
  'CIO Office',                 // Div 9
  'Legal',                      // Div 10
  'Org Excellence',             // Div 11
];

// A gradient of color styles for each division, from 1 to 11.
// The styles are designed to show a clear progression from "undesirable" to "prestigious".
export const divisionColors: string[] = [
  // Top Ranks (1-3): Prestigious, metallic, and radiant
  'bg-amber-600/10 border-amber-500/80 text-amber-300 hover:bg-amber-600/20 hover:border-amber-400', // Div 1 (Bronze)
  'bg-slate-400/10 border-slate-300/80 text-slate-200 hover:bg-slate-400/20 hover:border-slate-200',   // Div 2 (Silver)
  'bg-yellow-400/10 border-yellow-400/80 text-yellow-200 hover:bg-yellow-400/20 hover:border-yellow-300', // Div 3 (Gold)

  // Mid Ranks (4-6): More vibrant, respectable colors
  'bg-purple-500/10 border-purple-500/80 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400', // Div 4
  'bg-fuchsia-500/10 border-fuchsia-500/80 text-fuchsia-300 hover:bg-fuchsia-500/20 hover:border-fuchsia-400', // Div 5
  'bg-pink-500/10 border-pink-500/80 text-pink-300 hover:bg-pink-500/20 hover:border-pink-400',         // Div 6

  // Low Ranks (7-11): Muted, flat, and "undesirable"
  'bg-slate-700/20 border-slate-600 text-slate-400 hover:bg-slate-700/30 hover:border-slate-500', // Div 7
  'bg-slate-700/20 border-slate-600 text-slate-400 hover:bg-slate-700/30 hover:border-slate-500', // Div 8
  'bg-zinc-700/20 border-zinc-600 text-zinc-400 hover:bg-zinc-700/30 hover:border-zinc-500',     // Div 9
  'bg-zinc-700/20 border-zinc-600 text-zinc-400 hover:bg-zinc-700/30 hover:border-zinc-500',     // Div 10
  'bg-neutral-700/20 border-neutral-600 text-neutral-400 hover:bg-neutral-700/30 hover:border-neutral-500', // Div 11
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