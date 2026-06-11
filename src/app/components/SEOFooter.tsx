import React from "react";
import { Link } from "react-router";
import { FaTwitter, FaInstagram, FaGamepad, FaInfoCircle, FaShieldAlt, FaFileContract, FaEnvelope } from 'react-icons/fa';
import Logo from "../../assets/favicon.png";

export const SEOFooter: React.FC = () => {
  return (
    <footer id="seo-content" className="w-full bg-[#04040f] border-t border-white/5 pt-16 pb-12 px-6 sm:px-12 z-0 relative flex flex-col items-center selection:bg-white/20 overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-6xl w-full flex flex-col gap-12 text-center sm:text-left text-white/70 font-sans relative z-10">
        
        {/* Footer Navigation & Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          <div className="md:col-span-2 flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                  <img src={Logo} alt="ModiLander Logo" className="w-9 h-9 object-contain transform group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-black text-white/90 tracking-tighter leading-none">ModiLander</h3>
                <span className="text-[9px] font-black tracking-[4px] uppercase text-orange-500/80 mt-1">Arcade Elite</span>
              </div>
            </div>
            <p className="text-sm text-white/50 text-center md:text-left leading-relaxed max-w-sm">
              India's premier web-based satirical maze arcade game. Play instantly, dodge the opposition, and secure your high score.
            </p>
            <div className="flex gap-4 mt-4">
               <a href="https://x.com/PrinceDaszon/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-blue-400 transition-all text-white/40">
                 <FaTwitter size={16} />
               </a>
               <a href="https://www.instagram.com/_itx.me_prince_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-pink-500 transition-all text-white/40">
                 <FaInstagram size={16} />
               </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-bold text-white/90 uppercase tracking-widest text-xs mb-2">Game Info</h4>
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
            >
              <FaGamepad className="text-white/20 group-hover:text-primary transition-colors" /> Play Game
            </Link>
            <Link to="/how-to-play" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group">
              <FaInfoCircle className="text-white/20 group-hover:text-primary transition-colors" /> How to Play
            </Link>
            <Link to="/about" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group">
              <FaShieldAlt className="text-white/20 group-hover:text-primary transition-colors" /> About Developers
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-bold text-white/90 uppercase tracking-widest text-xs mb-2">Legal & Support</h4>
            <Link to="/privacy" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group">
              <FaShieldAlt className="text-white/20 group-hover:text-primary transition-colors" /> Privacy Policy
            </Link>
            <Link to="/terms" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group">
              <FaFileContract className="text-white/20 group-hover:text-primary transition-colors" /> Terms of Service
            </Link>
            <Link to="/contact" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group">
              <FaEnvelope className="text-white/20 group-hover:text-primary transition-colors" /> Contact Us
            </Link>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="flex flex-col items-center text-center gap-6 pt-4">
          <div className="glass-panel px-6 py-4 rounded-xl border border-white/5 max-w-4xl text-left">
            <p className="text-[11px] text-white/40 leading-relaxed">
              <strong className="text-white/60">Disclaimer:</strong> This game is a work of political satire created strictly for entertainment and amusement purposes. The characters, situations, and events depicted are fictional and exaggerated. It does not represent factual events and is not affiliated with, endorsed by, or meant to accurately represent any real-life political figures, organizations, or governments.
            </p>
          </div>
          
          <div className="text-xs text-white/40 flex flex-col md:flex-row items-center gap-2 md:gap-4 font-medium">
            <span>&copy; {new Date().getFullYear()} ModiLander Arcade Game. All rights reserved.</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span>
              Engineered by <span className="text-white/60">Prince & Smit</span> | <a href="https://www.instagram.com/z___w___p/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">ZwP</a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
