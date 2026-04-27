import React from 'react';
import { FaBolt, FaMobileAlt, FaTrophy, FaGhost } from 'react-icons/fa';

export const SEOContent: React.FC = () => {
  return (
    <section className="w-full bg-[#04040f] py-20 px-6 sm:px-12 relative z-0 border-t border-white/5 overflow-hidden">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

       <div className="max-w-4xl mx-auto relative z-10 glass-panel p-8 sm:p-12 md:p-16 rounded-[32px] border border-white/10 shadow-2xl space-y-10 text-white/70 font-sans leading-relaxed">
          
          {/* Header Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-black text-white/90 tracking-tight leading-tight">
              Play ModiLander: <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500">The Premium Political Maze Arcade Game</span>
            </h1>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-transparent" />
            <p className="text-lg md:text-xl text-white/80 font-medium">
              Welcome to <strong>ModiLander</strong>, a highly engaging and meticulously engineered browser-based arcade game that combines classic retro maze-chasing mechanics with a fun, satirical political twist.
            </p>
            <p className="text-base">
              Designed for both casual gamers looking for a quick break and high-score enthusiasts aiming for the top of the leaderboards, ModiLander offers a seamless, 60-FPS experience directly in your web browser. There are no heavy downloads, no paywalls, and no complex installations required—just pure, instant arcade fun.
            </p>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
            <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <FaBolt className="text-yellow-500 text-2xl mb-4" />
              <h3 className="text-lg font-bold text-white/90 mb-2">Lightning Fast Performance</h3>
              <p className="text-sm">Built with React and native HTML5 Canvas rendering for an ultra-responsive, lag-free 60 FPS experience.</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <FaMobileAlt className="text-blue-400 text-2xl mb-4" />
              <h3 className="text-lg font-bold text-white/90 mb-2">Cross-Platform Ready</h3>
              <p className="text-sm">Play flawlessly on iOS, Android, PC, or Mac. PWA support allows installation directly to your home screen.</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <FaGhost className="text-red-400 text-2xl mb-4" />
              <h3 className="text-lg font-bold text-white/90 mb-2">Dynamic AI Opposition</h3>
              <p className="text-sm">Outsmart ghosts powered by Breadth-First Search (BFS) pathfinding that dynamically track your movements.</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <FaTrophy className="text-orange-400 text-2xl mb-4" />
              <h3 className="text-lg font-bold text-white/90 mb-2">Difficulty Scaling</h3>
              <p className="text-sm">Choose between Easy, Medium, and Hard modes depending on the level of challenge you seek.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white/90 tracking-tight">Why You Should Play ModiLander</h2>
            <p>
              In today's fast-paced digital world, finding a game that is both entertaining and instantly accessible can be a challenge. We have meticulously fine-tuned the mechanics to ensure perfection. Whether you are using a desktop keyboard, navigating via touch-screen swipe gestures, or utilizing our on-screen digital D-pad, the controls are perfectly optimized for precision. You must navigate complex, procedurally styled labyrinths, collect all the standard points to advance, and outsmart the AI-driven "opposition" ghosts.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white/90 tracking-tight">A Commitment to Quality Entertainment</h2>
            <p>
              ModiLander is carefully developed by passionate independent developers (Prince & Smit) under ZwP. Our core focus was to deliver a high-quality user experience utilizing modern UI/UX design paradigms, such as deep glassmorphism aesthetics, subtle micro-animations, and striking visual contrasts.
            </p>
            <p>
              This project is a completely free-to-play, satirical entertainment product. It is specifically designed to provide quick, satisfying gaming sessions that are easy to pick up but difficult to master. By providing this game free of charge, we hope to build a fun community of players who appreciate retro mechanics modernized for the web era.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border-l-4 border-l-primary/50 mt-10 flex gap-4">
            <div className="flex-1">
              <p className="text-xs text-white/50 leading-relaxed uppercase tracking-wider font-bold mb-1">Disclaimer</p>
              <p className="text-sm italic text-white/60">
                ModiLander is a work of fiction and political satire created for entertainment purposes only. The characters and scenarios depicted within the game are exaggerated and do not represent real-world events, nor does the game endorse or criticize any real-life political viewpoints, figures, or parties.
              </p>
            </div>
          </div>

       </div>
    </section>
  );
};
