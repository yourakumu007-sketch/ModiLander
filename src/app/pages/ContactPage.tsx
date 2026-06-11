import React from 'react';
import { Link } from 'react-router';
import { FaCaretLeft, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-[#04040f] text-white/80 font-sans p-6 md:p-12 relative overflow-y-auto">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-2xl mx-auto w-full glass-panel p-8 md:p-12 rounded-[24px] border border-white/10 bg-white/5 shadow-2xl relative z-10 mt-safe">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white/90 transition-colors mb-8 text-sm font-bold tracking-widest uppercase mb-6 drop-shadow-md">
          <FaCaretLeft /> Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-black text-white/90 mb-8 border-b border-white/10 pb-4 tracking-tight">Contact Us</h1>
        
        <div className="space-y-6 text-sm leading-relaxed text-white/70">
          <p className="text-lg font-medium text-white/90 mb-2">
            We value our players and community. Whether you have questions, feedback, or business inquiries, we are here to help.
          </p>
          
          <p>
            The ModiLander development team is committed to providing a flawless, high-quality arcade experience. If you encounter any bugs, have suggestions for gameplay improvements, or wish to discuss advertising opportunities, please reach out to us using the information below. We aim to respond to all legitimate inquiries within 48-72 hours.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="yourakumu007@gmail.com" 
                className="flex-1 flex items-center gap-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-xl px-6 py-5 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-primary text-lg" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/40 uppercase tracking-wider font-bold">Email Support</span>
                  <span className="text-white font-medium text-base break-all">yourakumu007@gmail.com</span>
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-5">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <FaGlobe className="text-blue-500 text-lg" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/40 uppercase tracking-wider font-bold">Developer Studio</span>
                  <span className="text-white font-medium text-base">ZwP</span>
                </div>
              </div>

              <div className="flex-1 flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-5">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-green-500 text-lg" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/40 uppercase tracking-wider font-bold">Location</span>
                  <span className="text-white font-medium text-base">Rtanpur, Bankura, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <h3 className="font-bold text-white/80 uppercase tracking-widest text-xs mb-3">For AdSense & Advertising Inquiries</h3>
            <p className="text-white/60">
              We welcome partnerships with ad networks and brands. If you are reaching out regarding website monetization, sponsorships, or Google AdSense matters, please use the email address above with the subject line <strong>[Business Inquiry]</strong> to ensure prompt routing to our administrative team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
