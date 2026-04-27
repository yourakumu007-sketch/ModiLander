import React from 'react';
import { Link } from 'react-router';
import { FaCaretLeft } from 'react-icons/fa';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-[#04040f] text-white/80 font-sans p-6 md:p-12 relative overflow-y-auto">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto w-full glass-panel p-8 md:p-12 rounded-[24px] border border-white/10 bg-white/5 shadow-2xl relative z-10 mt-safe">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white/90 transition-colors mb-8 text-sm font-bold tracking-widest uppercase mb-6 drop-shadow-md">
          <FaCaretLeft /> Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-black text-white/90 mb-8 border-b border-white/10 pb-4 tracking-tight">Privacy Policy</h1>
        
        <div className="space-y-8 text-sm leading-relaxed text-white/70">
          <p>Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">1. Introduction</h2>
            <p>
              Welcome to ModiLander ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information when you visit our website and play our web-based arcade game.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">2. Information We Collect</h2>
            <p>
              ModiLander is designed as a free-to-play browser game. We do <strong>not</strong> require you to create an account, nor do we actively collect personally identifiable information (PII) such as your name, email, or physical address to play the game.
            </p>
            <p className="mt-2">
              <strong>Automatically Collected Information:</strong> When you visit our website, our servers and third-party partners (such as analytics and advertising providers) may automatically record certain non-identifiable technical data, including your IP address, browser type, device type, operating system, and geographic location (at the city or country level).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">3. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze site traffic, and serve targeted advertisements.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Essential Cookies:</strong> Necessary for the basic functionality of the website.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our game so we can improve performance.</li>
              <li><strong>Advertising Cookies:</strong> Used by our advertising partners to show relevant ads.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">4. Third-Party Advertising (Google AdSense)</h2>
            <p>
              We use Google AdSense to display ads. Google and its partners use cookies to serve ads based on your prior visits to our website or other websites.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Google uses the DoubleClick (DART) cookie to enable it and its partners to serve ads based on your browsing history.</li>
              <li>You may opt-out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Ads Settings</a>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect against unauthorized access or alteration of any data we collect. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">6. Children's Privacy</h2>
            <p>
              Our website is intended for a general audience. We do not knowingly collect personal information from children under the age of 13. If you believe we have inadvertently collected data from a child, please contact us immediately so we can remove it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white/80 mb-3 tracking-wide">7. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us via our <Link to="/contact" className="text-primary hover:underline">Contact Page</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
