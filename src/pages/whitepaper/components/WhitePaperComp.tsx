
import type { PaperInfoCardProps, PaperRoadmapItemProps, PaperSerctionProps, TableOfContentsProps } from '@/types/types';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
} from 'lucide-react';
import { useEffect, useState } from "react";

// --- Color Palette Based on Logo ---
const COLORS = {
  primary: '#166534',      // Green from logo
  secondary: '#1f2937',    // Dark gray from logo
  accent: '#991b1b',       // Red/maroon from logo
  background: '#ffffff',   // White background
  surface: '#f9fafb',      // Light gray for cards
  text: '#111827',         // Dark text
  textMuted: '#6b7280',    // Muted text
  border: '#e5e7eb',       // Light borders
};


export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/USDN-Whitepaper.pdf'; // public folder
    link.download = 'usdn-whitepaper.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "USDN whitepaper",
          text: "Check out usdn whitpaper",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Sharing failed", error);
      }
    } else {
      alert("Sharing not supported on this browser");
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity" style={{ color: COLORS.text }}>
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back to USDN</span>
        </a>
        
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="/images/usdn_logo.png"
              alt="USDN"
              className="h-8 w-auto transition-transform group-hover:scale-105"
            />
            <span className="text-lg font-bold text-gray-900">USDN</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={handleShare} className="p-2 transition-colors" style={{ color: COLORS.textMuted }}>
            <Share2 size={18} />
          </button>
          <button onClick={handleDownload} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-white"
            style={{ backgroundColor: COLORS.primary }}>
            <Download size={16} />
            <span className="hidden sm:inline">Download PDF</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export const TableOfContents = ({ activeSection }:TableOfContentsProps) => {
  const sections = [
    { id: 'executive-summary', title: 'Executive Summary', number: '01' },
    { id: 'problem', title: 'Problem Statement', number: '02' },
    { id: 'solution', title: 'The USDN Solution', number: '03' },
    { id: 'wallet', title: 'Digital Wallet', number: '04' },
    { id: 'architecture', title: 'Blockchain Architecture', number: '05' },
    { id: 'token', title: 'Token Overview', number: '06' },
    { id: 'tokenomics', title: 'Tokenomics', number: '07' },
    { id: 'ico', title: 'ICO & Use of Funds', number: '08' },
    { id: 'roadmap', title: 'Roadmap', number: '09' },
    { id: 'market', title: 'Market Analysis', number: '10' },
    { id: 'team', title: 'Team & Governance', number: '11' },
    { id: 'legal', title: 'Legal & Compliance', number: '12' },
    { id: 'risks', title: 'Risks', number: '13' },
    { id: 'conclusion', title: 'Conclusion', number: '14' },
  ];

  return (
    <div className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: COLORS.textMuted }}>Contents</h3>
        <nav className="space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all"
              style={{
                backgroundColor: activeSection === section.id ? COLORS.surface : 'transparent',
                color: activeSection === section.id ? COLORS.primary : COLORS.textMuted,
                fontWeight: activeSection === section.id ? 500 : 400
              }}
            >
              <span style={{ color: activeSection === section.id ? COLORS.primary : COLORS.textMuted, opacity: 0.5 }}>{section.number}</span>
              <span className="truncate">{section.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export const Section = ({ id, number, title, children }: PaperSerctionProps) => (
  <section id={id} className="mb-20 scroll-mt-24">
    <div className="flex items-center gap-4 mb-8">
      <span className="text-4xl font-bold" style={{ color: COLORS.border }}>{number}</span>
      <h2 className="text-3xl font-bold" style={{ color: COLORS.text }}>{title}</h2>
    </div>
    <div className="prose prose-lg max-w-none" style={{ color: COLORS.text }}>
      {children}
    </div>
  </section>
);

export const InfoCard = ({ title, value, subtext, icon: Icon }: PaperInfoCardProps) => (
  <div className="rounded-xl p-6 border transition-all hover:shadow-md"
       style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center"
           style={{ backgroundColor: `${COLORS.primary}15` }}>
        <Icon className="w-5 h-5" style={{ color: COLORS.primary }} />
      </div>
    </div>
    <div className="text-2xl font-bold mb-1" style={{ color: COLORS.text }}>{value}</div>
    <div className="text-sm mb-1" style={{ color: COLORS.textMuted }}>{title}</div>
    {subtext && <div className="text-xs" style={{ color: COLORS.textMuted, opacity: 0.7 }}>{subtext}</div>}
  </div>
);

export const TokenDistribution = () => {
  const data = [
    { label: 'Treasury / Unallocated', value: 30, color: COLORS.secondary, tokens: '60M' },
    { label: 'Team & Marketing', value: 25, color: COLORS.primary, tokens: '50M' },
    { label: 'Public ICO', value: 15, color: COLORS.accent, tokens: '30M' },
    { label: 'IEO', value: 10, color: '#7f1d1d', tokens: '20M' },
    { label: 'Private Sale', value: 10, color: '#374151', tokens: '20M' },
    { label: 'Operations', value: 10, color: '#9ca3af', tokens: '20M' },
  ];

  return (
    <div className="rounded-xl p-8 border" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
      <div className="flex items-end gap-2 h-48 mb-6">
        {data.map((item, i) => (
          <div key={i} className="h-full flex-1 flex flex-col items-center gap-2 group">
            <div 
              className="w-full rounded-t-lg transition-all duration-500 group-hover:opacity-80"
              style={{ 
                // height: `${item.value * 1.5}%`, 
                height: `${item.value * 1.5}%`, 
                backgroundColor: item.color,
                opacity: 0.9
              }}
            />
            <span className="text-xs font-mono" style={{ color: COLORS.textMuted }}>{item.tokens}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
            <div className="text-sm" style={{ color: COLORS.textMuted }}>{item.label}</div>
            <div className="text-sm ml-auto font-medium" style={{ color: COLORS.text }}>{item.value}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const RoadmapItem = ({ date, title, desc, status }: PaperRoadmapItemProps) => (
  <div className="flex gap-6">
    <div className="flex flex-col items-center">
      <div className={`w-3 h-3 rounded-full ${
        status === 'completed' ? 'bg-emerald-500' : 
        status === 'active' ? 'animate-pulse' : ''
      }`} style={{ 
        backgroundColor: status === 'active' ? COLORS.primary : 
        status === 'completed' ? '#10b981' : COLORS.border 
      }} />
      <div className="w-px h-full mt-2" style={{ backgroundColor: COLORS.border }} />
    </div>
    <div className="pb-8">
      <div className="text-sm font-medium mb-1" style={{ color: COLORS.primary }}>{date}</div>
      <h4 className="font-bold text-lg mb-2" style={{ color: COLORS.text }}>{title}</h4>
      <p className="text-sm" style={{ color: COLORS.textMuted }}>{desc}</p>
    </div>
  </div>
);