import React, { useState, useMemo, useEffect } from 'react';
import type { Division, SprintData } from './types';
import { StatsBubble } from './components/StatsBubble';
import { DivisionCard, ActionButtons } from './components/DivisionCard';
import { TeamModal } from './components/TeamModal';
import { FloatingEmoji } from './components/FloatingEmoji';
import { DIVISION_DATA, SPRINT_DATA } from './constants';
import DivisionPyramid from './components/DivisionPyramid';
import { initializeSprintData } from './utils';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState<Division | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [sprintData, setSprintData] = useState<SprintData>(
    () => initializeSprintData(SPRINT_DATA) // initialize with your constants
  );

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const { totalParticipants, totalEmployees } = useMemo(() => {
    const totalParticipants = DIVISION_DATA.reduce((sum, div) => sum + div.participants, 0);
    const totalEmployees = DIVISION_DATA.reduce((sum, div) => sum + div.total, 0);
    return { totalParticipants, totalEmployees };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1a1f3a] to-[#0f1429] text-white overflow-x-auto p-4 sm:p-8 relative flex flex-col items-center">
      <FloatingEmoji emoji="🚀" top="10%" left="5%" animationDelay="0s" size="4rem" />
      <FloatingEmoji emoji="💡" top="20%" left="90%" animationDelay="1s" size="5rem" />
      <FloatingEmoji emoji="🎯" top="70%" left="85%" animationDelay="2s" size="4rem" />
      <FloatingEmoji emoji="✨" top="80%" left="10%" animationDelay="3s" size="6rem" />
      <FloatingEmoji emoji="🎉" top="50%" left="50%" animationDelay="0.5s" size="3rem" />
      <FloatingEmoji emoji="💰" top="60%" left="5%" animationDelay="1.5s" size="3rem" />
      <FloatingEmoji emoji="⚖️" top="25%" left="25%" animationDelay="2.5s" size="4rem" />


      <header className="text-center z-10 w-full max-w-4xl flex-shrink-0">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          🚀 <span className="rainbow-text">AI-First</span> Sprint Dashboard 🎯
        </h1>
        <p className="mt-2 text-lg text-purple-300">✨ Transforming Work Across All of SCG ✨</p>
        <div className="mt-4 max-w-2xl mx-auto p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 animate-pulse-subtle">
          <p className="italic text-sm">
            Our mission: Achieve 100% participation to unlock our collective potential. Every colleague counts on our journey to the top!
          </p>
        </div>
      </header>
      
      <main className="flex-grow w-full flex flex-col items-center justify-start gap-4 md:gap-8 mt-4 md:mt-8 z-10">
        <div className="flex-shrink-0">
          <StatsBubble totalParticipants={totalParticipants} totalEmployees={totalEmployees} />
        </div>
        
        <DivisionPyramid sprintData={sprintData} />
      </main>
    </div>
  );
};

export default App;
