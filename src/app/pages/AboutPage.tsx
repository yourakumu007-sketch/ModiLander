import React from 'react';
import { Link } from 'react-router';
import { FaCaretLeft } from 'react-icons/fa';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-[#04040f] text-white/80 font-sans p-6 md:p-12 relative overflow-y-auto">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto w-full glass-panel p-8 md:p-12 rounded-[24px] border border-white/10 bg-white/5 shadow-2xl relative z-10 mt-safe">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white/90 transition-colors mb-8 text-sm font-bold tracking-widest uppercase mb-6 drop-shadow-md">
          <FaCaretLeft /> Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-black text-white/90 mb-8 border-b border-white/10 pb-4 tracking-tight">About ModiLander</h1>
        
        <div className="space-y-6 text-sm leading-relaxed text-white/70">
          <p className="text-lg font-medium text-white/90">
            Welcome to ModiLander, a premium, fast-paced political satire maze arcade game built entirely for the modern web.
          </p>
          
          <h2 className="text-xl font-bold text-white/80 mt-6 mb-2">Our Mission</h2>
          <p>
            Our mission is to create high-quality, instantly accessible browser games that provide brief moments of entertainment and joy. We believe that browser gaming shouldn't compromise on performance or aesthetics. ModiLander takes classic arcade chasing mechanics, injects them into a high-octane satirical arena, and wraps it all in a sleek, glassmorphic UI that looks great on any screen.
          </p>

          <h2 className="text-xl font-bold text-white/80 mt-6 mb-2">The Technology Behind the Game</h2>
          <p>
            ModiLander is engineered for performance. Built using a modern stack consisting of <strong>React, TypeScript, Vite, and HTML5 Canvas</strong>, the game ensures a flawless 60 FPS rendering loop. We implemented custom Breadth-First Search (BFS) pathfinding algorithms to create smart, responsive AI opponents that adapt to your movements in real-time. The application is also fully optimized as a Progressive Web App (PWA), meaning users can install it to their home screens for native-like performance.
          </p>

          <h2 className="text-xl font-bold text-white/80 mt-6 mb-2">The Creators</h2>
          <p>
            This project was brought to life by <strong>Prince Suthar & Smit Sutariya</strong> under the banner of <strong>ZwP</strong>. We are a duo of passionate web developers and game designers dedicated to pushing the boundaries of what is possible within a mobile browser. Inspiration for this specific project was drawn from the creative concepts of @code.itzpa1 (Pawan Dev).
          </p>

          <div className="bg-black/30 p-6 rounded-xl border border-white/5 my-8">
            <h3 className="font-bold text-white/90 mb-2 uppercase tracking-widest text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500 block"></span>
              Entertainment & Satire Disclaimer
            </h3>
            <p className="text-white/60 italic text-sm">
              ModiLander is an independent project created strictly for entertainment and amusement purposes. The characters, situations, and events depicted in this game are entirely fictional and exaggerated for comedic effect. It is not affiliated with, endorsed by, or meant to accurately represent any real-life political figures, parties, organizations, or governments.
            </p>
          </div>

          <p className="text-center font-bold text-white/80 pt-4">
            We hope you have as much fun playing ModiLander as we had engineering it!
          </p>
        </div>
      </div>
    </div>
  );
};
