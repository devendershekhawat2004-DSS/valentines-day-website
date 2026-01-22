'use client';

import { useState } from "react"

import React from "react"
import { Heart } from 'lucide-react';

export default function ValentineProposal() {
  const [yesSize, setYesSize] = useState(1);
  const [noClickCount, setNoClickCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [noHovered, setNoHovered] = useState(false);

  const handleNoClick = () => {
    // Increase the size of the Yes button each time No is clicked
    setYesSize((prev) => prev + 0.4);
    setNoClickCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  const handleNoMouseEnter = () => {
    setNoHovered(true);
  };

  const handleNoMouseLeave = () => {
    setNoHovered(false);
  };

  if (accepted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-100 p-4 overflow-hidden relative">
        {/* Falling hearts confetti */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                animation: `fall ${3 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <Heart
                className="text-primary"
                size={16 + Math.random() * 24}
                fill="currentColor"
              />
            </div>
          ))}
        </div>

        {/* Main celebration content */}
        <div className="relative z-10 text-center space-y-8">
          {/* Animated main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-primary animate-bounce" style={{
              textShadow: '0 0 30px rgba(255, 23, 68, 0.5)',
            }}>
              YES! 💕
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-secondary animate-pulse">
              You said YES!
            </p>
          </div>

          {/* Romantic messages */}
          <div className="space-y-6 bg-white/95 backdrop-blur rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl">
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              Soumya, you just made me the happiest person alive! 🎉
            </p>
            
            <div className="space-y-4 text-lg md:text-xl text-foreground leading-relaxed">
              <p className="font-semibold">
                This Valentine's Day is going to be unforgettable...
              </p>
              <p>
                with you by my side, every moment feels like a dream come true. Thank you for saying yes to me, to us, to forever.
              </p>
            </div>

            <div className="flex justify-center gap-2 text-4xl pt-4">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>💕</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💕</span>
              <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>✨</span>
              <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>💕</span>
            </div>
          </div>

          {/* Additional romantic message */}
          <p className="text-xl md:text-2xl text-foreground font-semibold italic">
            I love you, Soumya. Forever and always. 💗
          </p>

          {/* Centered large heart */}
          <div className="pt-8 flex justify-center">
            <Heart
              className="text-primary animate-pulse"
              size={120}
              fill="currentColor"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 23, 68, 0.6))',
              }}
            />
          </div>
        </div>

        <style>{`
          @keyframes fall {
            to {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-100 p-4 overflow-hidden">
      <div className="relative w-full max-w-2xl">
        {/* Floating hearts background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-primary/20 animate-pulse"
              size={24 + Math.random() * 24}
              fill="currentColor"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-8">
          <div className="flex justify-center mb-6">
            <Heart
              className="text-primary animate-bounce"
              size={64}
              fill="currentColor"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Soumya Sadeva, Will You Be My Valentine? 💝
          </h1>

          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Life is so much better when I'm with you. You make my heart skip a beat,
            and every moment with you feels like magic. I'd be the luckiest person in
            the world if you'd be my Valentine.
          </p>

          <div className="pt-8 space-y-4 md:space-y-0 md:flex md:gap-6 md:justify-center">
            {/* Yes Button */}
            <button
              onClick={handleYesClick}
              className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold text-xl rounded-full hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 whitespace-nowrap"
              style={{
                transform: `scale(${yesSize})`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              YES! 💕
            </button>

            {/* No Button */}
            <button
              onClick={handleNoClick}
              className="w-full md:w-auto px-12 py-4 bg-gray-400 hover:bg-gray-500 text-white font-bold text-xl rounded-full transition-all duration-200 whitespace-nowrap hover:scale-105 active:scale-95"
            >
              No 😢
            </button>
          </div>

          <p className="text-sm md:text-base text-muted-foreground pt-4">
            {noClickCount > 0
              ? `You clicked No ${noClickCount} time${noClickCount !== 1 ? 's' : ''}! 😄 But look how big the YES button got! 👀`
              : 'Try clicking No if you dare... 😏'}
          </p>
        </div>
      </div>
    </div>
  );
}
