import React from 'react';
import { Link } from 'react-router';
import { FaCaretLeft } from 'react-icons/fa';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-[#04040f] text-white/80 font-sans p-6 md:p-12 relative overflow-y-auto">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto w-full glass-panel p-8 md:p-12 rounded-[24px] border border-white/10 bg-white/5 shadow-2xl relative z-10 mt-safe">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white/90 transition-colors mb-8 text-sm font-bold tracking-widest uppercase mb-6 drop-shadow-md">
          <FaCaretLeft /> Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-black text-white/90 mb-8 border-b border-white/10 pb-4 tracking-tight">Terms and Conditions</h1>
        
        <div className="space-y-8 text-sm leading-relaxed text-white/70">
          <p>Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">1. Acceptance of Terms</h2>
            <p>
              By accessing and using ModiLander (the "Website" and "Game"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">2. Use of the Website</h2>
            <p>
              ModiLander is provided for personal, non-commercial entertainment purposes. You agree not to use the website for any illegal or unauthorized purpose. You must not attempt to hack, disrupt, or modify the game code, servers, or any network associated with the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">3. Intellectual Property Rights</h2>
            <p>
              All original content, features, gameplay mechanics, UI design, and functionality are owned by the creators of ModiLander (Prince & Smit) and are protected by international copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from this website without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">4. Disclaimer of Liability</h2>
            <p>
              The game is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the site will be bug-free, secure, or continuously available. Under no circumstances shall the creators be liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">5. Political Satire Disclaimer</h2>
            <p>
              ModiLander is a work of political satire. Characters, names, events, and situations depicted in the game are highly exaggerated for comedic and entertainment purposes. It does not represent factual events and should not be construed as an endorsement or criticism of any real-world political entity or figure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">6. External Links and Advertisements</h2>
            <p>
              Our website may contain links to third-party websites or advertisements provided by networks such as Google AdSense. We do not endorse and are not responsible for the content, privacy policies, or practices of any third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site constitutes acceptance of the revised Terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
