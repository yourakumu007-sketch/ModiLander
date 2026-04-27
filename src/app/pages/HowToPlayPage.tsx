import React from 'react';
import { Link } from 'react-router';
import { FaCaretLeft, FaGhost, FaCircle, FaStar } from 'react-icons/fa';

export const HowToPlayPage: React.FC = () => {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-[#04040f] text-white/80 font-sans p-6 md:p-12 relative overflow-y-auto">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto w-full glass-panel p-8 md:p-12 rounded-[24px] border border-white/10 bg-white/5 shadow-2xl relative z-10 mt-safe">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white/90 transition-colors mb-8 text-sm font-bold tracking-widest uppercase mb-6 drop-shadow-md">
          <FaCaretLeft /> Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-black text-white/90 mb-8 border-b border-white/10 pb-4 tracking-tight">How to Play</h1>
        
        <div className="space-y-8 text-sm leading-relaxed text-white/70">
          <p className="text-lg text-white/90">
            Master the maze, collect points, and outsmart the opposition. Whether you're on a desktop or a smartphone, ModiLander offers precise and intuitive controls.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-4 border-l-4 border-primary pl-3">The Objective</h2>
            <p>
              Your goal is to navigate your chosen character through the maze and consume all the standard dots scattered across the board. Once you clear all the dots, you win the level and secure your political victory! However, you must avoid the enemy ghosts roaming the corridors. If they catch you, you lose a life.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-4 border-l-4 border-primary pl-3">Game Elements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-4">
                <FaCircle className="text-white/40 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white/90 block mb-1">Standard Dots</strong>
                  <span className="text-xs">Collect these to increase your score and progress towards victory.</span>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-4">
                <FaStar className="text-yellow-400 mt-1 flex-shrink-0 text-lg" />
                <div>
                  <strong className="text-white/90 block mb-1">Power Pellets</strong>
                  <span className="text-xs">Large glowing orbs. Eating these grants you temporary invincibility and the ability to eat ghosts for bonus points!</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-4 sm:col-span-2">
                <FaGhost className="text-red-500 mt-1 flex-shrink-0 text-lg" />
                <div>
                  <strong className="text-white/90 block mb-1">The Opposition (Ghosts)</strong>
                  <span className="text-xs">They track your movements. Avoid them at all costs, unless you have activated a Power Pellet, in which case they will turn blue and run away.</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-4 border-l-4 border-primary pl-3">Controls</h2>
            
            <div className="space-y-4">
              <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                <h3 className="font-bold text-white/90 mb-2">Desktop (Keyboard)</h3>
                <p>Use the <strong>Arrow Keys</strong> (Up, Down, Left, Right) to steer your character. The character will continue moving in the chosen direction until they hit a wall.</p>
              </div>

              <div className="bg-black/30 p-5 rounded-xl border border-white/5">
                <h3 className="font-bold text-white/90 mb-2">Mobile (Touchscreen)</h3>
                <p>
                  <strong>Swipe Controls:</strong> Simply swipe your finger anywhere on the screen in the direction you wish to go.<br/><br/>
                  <strong>On-Screen D-Pad:</strong> You can also use the integrated digital D-pad located at the bottom of the screen for precise directional tapping.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
