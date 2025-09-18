import { useState, useRef } from 'react';

interface HoverGifProps {
  staticSrc: string; // Static image/first frame
  gifSrc: string;    // Animated GIF
  alt: string;
  className?: string;
}

export function HoverGif({ staticSrc, gifSrc, alt, className = "" }: HoverGifProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [gifKey, setGifKey] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Force GIF to restart by changing key
    setGifKey(prev => prev + 1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static image (always visible) */}
      <img
        src={staticSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        } ${className}`}
      />
      
      {/* GIF (visible on hover) */}
      {isHovered && (
        <img
          key={gifKey}
          src={gifSrc}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
        />
      )}
    </div>
  );
}