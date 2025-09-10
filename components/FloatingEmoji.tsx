
import React from 'react';

interface FloatingEmojiProps {
  emoji: string;
  top: string;
  left: string;
  animationDelay: string;
  size: string;
}

export const FloatingEmoji: React.FC<FloatingEmojiProps> = ({ emoji, top, left, animationDelay, size }) => {
  return (
    <div
      className="absolute animate-float opacity-20"
      style={{ top, left, animationDelay, fontSize: size }}
    >
      {emoji}
    </div>
  );
};
