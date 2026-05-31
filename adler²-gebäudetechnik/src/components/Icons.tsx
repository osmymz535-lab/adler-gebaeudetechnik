import React from 'react';

export const FireWaterIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Flame half */}
    <path d="M8 9c0 0-1.5 2-1.5 4s1.5 4 1.5 4" strokeOpacity="0.8" />
    <path d="M7 11c0 0-1 1-1 2.5s1 2.5 1 2.5" strokeOpacity="0.5" />
    <path d="M11 6c-.5-1-1.5-2-3-3 0 1-.5 3 0 5s2.5 4 2.5 6c0 2-1 4-2.5 5 2 0 4.5-2 4.5-6s-1-5-1.5-7z" fill="currentColor" fillOpacity="0.2" />
    
    {/* Water Drop half */}
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" strokeWidth="2" clipPath="inset(0 0 0 50%)" />
    <path d="M14 12c.5 1 1 2 1 3s-.5 2-1.5 2.5" />
  </svg>
);
