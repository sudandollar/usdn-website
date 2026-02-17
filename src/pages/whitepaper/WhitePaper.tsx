import { useState, useEffect } from 'react';
import { 
  Download, 
  ChevronRight, 
  ExternalLink,
  Shield,
  Globe,
  Users,
  Zap,
  Lock,
  TrendingUp,
  FileText,
  CheckCircle
} from 'lucide-react';
import { InfoCard, Navbar, RoadmapItem, Section, TableOfContents, TokenDistribution } from './components/WhitePaperComp';
import { Footer } from '@/sections/Footer';

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



// --- Main Page Component ---

export default function WhitepaperPage() {
  const [activeSection, setActiveSection] = useState('executive-summary');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -80% 0%' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-gray-100" style={{ color: COLORS.text }}>
      <Navbar />
      
      {/* Hero Header */}
      <header className="pt-32 pb-20 border-b" style={{ borderColor: COLORS.border }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm mb-6" style={{ color: COLORS.textMuted }}>
            <span>Documentation</span>
            <ChevronRight size={14} />
            <span>Whitepaper</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: COLORS.text }}>
            USDN <span style={{ color: COLORS.primary }}>Whitepaper</span>
          </h1>
          
          <p className="text-xl max-w-2xl mb-8" style={{ color: COLORS.textMuted }}>
            A Decentralized Financial Ecosystem for Sudan & Emerging Markets
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
            <div className="flex items-center gap-2">
              <FileText size={16} />
              <span>Version 1.1</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.border }} />
              <span>January 2020</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.border }} />
              <span>Public Draft</span>
            </div>
            <div className="flex items-center gap-2 font-medium" style={{ color: COLORS.primary }}>
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.primary }} />
              <span>Founder: Alcont Ibrahim</span>
            </div>
          </div>
        </div>
      </header>

      {/* Disclaimer Banner */}
      <div className="border-y" style={{ backgroundColor: `${COLORS.accent}08`, borderColor: `${COLORS.accent}20` }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm" style={{ color: COLORS.accent }}>
            <strong>Disclaimer:</strong> This whitepaper is provided for informational purposes only and does not constitute financial, legal, or investment advice. 
            Cryptocurrencies involve significant risk including potential loss of capital.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex gap-12">
          <TableOfContents activeSection={activeSection} />
          
          <div className="flex-1 min-w-0">
            
            {/* 01 Executive Summary */}
            <Section id="executive-summary" number="01" title="Executive Summary">
              <p className="leading-relaxed mb-6" style={{ color: COLORS.textMuted }}>
                USDN (Sudan Dollar) is a blockchain-based utility and governance token designed to power a decentralized financial ecosystem focused on Sudan and underserved African markets. The project addresses core challenges such as high remittance fees, currency instability, limited access to global financial tools, and excessive reliance on centralized intermediaries.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: COLORS.textMuted }}>
                USDN enables secure peer-to-peer value transfer, decentralized wallet infrastructure, and access to digital financial services without traditional banking barriers. The ecosystem launches on Ethereum (ERC-20) to ensure security and liquidity, with a long-term roadmap toward a dedicated, scalable blockchain network.
              </p>
              <div className="rounded-xl p-6 border-l-4 my-8" 
                   style={{ backgroundColor: COLORS.surface, borderColor: COLORS.primary }}>
                <p className="italic" style={{ color: COLORS.text }}>
                  "The initial target audience includes over 4 million Sudanese immigrants and their families, with phased expansion across Africa and other emerging economies."
                </p>
              </div>
            </Section>

            {/* 02 Problem Statement */}
            <Section id="problem" number="02" title="Problem Statement">
              <p className="leading-relaxed mb-6" style={{ color: COLORS.textMuted }}>
                Sudan and many African economies face persistent financial and structural challenges that prevent individuals from preserving value, transacting freely, and participating in the global digital economy.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 my-8">
                <InfoCard 
                  title="Remittance Cost" 
                  value="15-20%" 
                  subtext="Average fees to Sudan"
                  icon={TrendingUp}
                />
                <InfoCard 
                  title="Unbanked Adults" 
                  value="60%+" 
                  subtext="In target regions"
                  icon={Users}
                />
                <InfoCard 
                  title="Settlement Time" 
                  value="3-5 Days" 
                  subtext="Traditional transfers"
                  icon={Zap}
                />
                <InfoCard 
                  title="Currency Volatility" 
                  value="High" 
                  subtext="Annual inflation impact"
                  icon={Lock}
                />
              </div>

              <ul className="space-y-4" style={{ color: COLORS.textMuted }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: COLORS.primary }}>•</span>
                  <span><strong style={{ color: COLORS.text }}>High Remittance Costs:</strong> Cross-border transfers to Sudan are expensive, slow, and burdened by intermediaries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: COLORS.primary }}>•</span>
                  <span><strong style={{ color: COLORS.text }}>Currency Instability:</strong> Inflation, devaluation, and limited access to stable assets erode savings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: COLORS.primary }}>•</span>
                  <span><strong style={{ color: COLORS.text }}>Restricted Financial Access:</strong> Millions remain unbanked or underbanked.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: COLORS.primary }}>•</span>
                  <span><strong style={{ color: COLORS.text }}>Centralized Control:</strong> Government and institutional restrictions limit financial sovereignty.</span>
                </li>
              </ul>
            </Section>

            {/* 03 Solution */}
            <Section id="solution" number="03" title="The USDN Solution">
              <p className="leading-relaxed mb-6" style={{ color: COLORS.textMuted }}>
                USDN introduces a decentralized financial ecosystem built on blockchain technology, combining a non-custodial digital wallet, a utility token, and governance mechanisms.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4" style={{ color: COLORS.text }}>Core Principles</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: 'Decentralization', desc: 'Users retain full control over their assets' },
                  { title: 'Accessibility', desc: 'Simple onboarding without traditional banking' },
                  { title: 'Low-Cost Transfers', desc: 'Near-zero transaction costs' },
                  { title: 'Transparency', desc: 'On-chain governance and verifiable contracts' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg border"
                       style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: COLORS.primary }} />
                    <div>
                      <div className="font-medium" style={{ color: COLORS.text }}>{item.title}</div>
                      <div className="text-sm" style={{ color: COLORS.textMuted }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4" style={{ color: COLORS.text }}>Unified Digital Marketplace</h3>
              <p className="leading-relaxed mb-6" style={{ color: COLORS.textMuted }}>
                As part of its long-term vision, USDN aims to establish a comprehensive online marketplace that facilitates the exchange of goods and services across Sudan and emerging markets. This marketplace will function as a decentralized commercial layer within the USDN ecosystem.
              </p>
            </Section>

            {/* 04 Wallet */}
            <Section id="wallet" number="04" title="USDN Digital Wallet">
              <p className="leading-relaxed mb-6" style={{ color: COLORS.textMuted }}>
                The USDN Wallet is a non-custodial, app-based wallet designed for secure asset storage and peer-to-peer transactions.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="rounded-xl p-6 border"
                     style={{ backgroundColor: `${COLORS.primary}08`, borderColor: `${COLORS.primary}30` }}>
                  <h4 className="font-bold mb-4 flex items-center gap-2" style={{ color: COLORS.primary }}>
                    <span className="text-xs px-2 py-1 rounded text-white" style={{ backgroundColor: COLORS.primary }}>PHASE 1</span>
                    MVP Features
                  </h4>
                  <ul className="space-y-3 text-sm" style={{ color: COLORS.textMuted }}>
                    <li>• USDN token storage and transfers</li>
                    <li>• Ethereum-compatible wallet support</li>
                    <li>• Secure private-key encryption</li>
                    <li>• Transaction history and balance tracking</li>
                  </ul>
                </div>
                <div className="rounded-xl p-6 border"
                     style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
                  <h4 className="font-bold mb-4 flex items-center gap-2" style={{ color: COLORS.textMuted }}>
                    <span className="text-xs px-2 py-1 rounded text-white" style={{ backgroundColor: COLORS.secondary }}>PHASE 2+</span>
                    Future Features
                  </h4>
                  <ul className="space-y-3 text-sm" style={{ color: COLORS.textMuted }}>
                    <li>• Multi-asset support</li>
                    <li>• Merchant payments (QR/NFC)</li>
                    <li>• Cross-border remittance tools</li>
                    <li>• DeFi integrations (staking, lending)</li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* 05 Architecture */}
            <Section id="architecture" number="05" title="Blockchain Architecture">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="rounded-xl p-6 border"
                     style={{ backgroundColor: `${COLORS.primary}08`, borderColor: `${COLORS.primary}30` }}>
                  <h4 className="font-bold mb-4" style={{ color: COLORS.primary }}>Initial Deployment</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span style={{ color: COLORS.textMuted }}>Network</span>
                      <span style={{ color: COLORS.text }}>Ethereum, Polygon, BNB, Avalanche</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: COLORS.textMuted }}>Standard</span>
                      <span style={{ color: COLORS.text }}>ERC-20</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: COLORS.textMuted }}>Rationale</span>
                      <span style={{ color: COLORS.text }}>Security, liquidity, ecosystem</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl p-6 border"
                     style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
                  <h4 className="font-bold mb-4" style={{ color: COLORS.text }}>Long-Term Architecture</h4>
                  <p className="text-sm mb-4" style={{ color: COLORS.textMuted }}>
                    Migration to proprietary blockchain optimized for:
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: COLORS.textMuted }}>
                    <li>• High transaction throughput</li>
                    <li>• Low-cost microtransactions</li>
                    <li>• Modular scalability (sharding/rollups)</li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* 06 Token Overview */}
            <Section id="token" number="06" title="Token Overview">
              <div className="rounded-2xl p-8 border mb-8" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-sm mb-2" style={{ color: COLORS.textMuted }}>Token Name</div>
                    <div className="text-3xl font-bold" style={{ color: COLORS.text }}>USDN</div>
                    <div style={{ color: COLORS.primary }}>Sudan Dollar</div>
                  </div>
                  <div>
                    <div className="text-sm mb-2" style={{ color: COLORS.textMuted }}>Type</div>
                    <div className="text-3xl font-bold" style={{ color: COLORS.text }}>Utility &</div>
                    <div className="text-3xl font-bold" style={{ color: COLORS.text }}>Governance</div>
                  </div>
                  <div>
                    <div className="text-sm mb-2" style={{ color: COLORS.textMuted }}>Total Supply</div>
                    <div className="text-3xl font-bold" style={{ color: COLORS.text }}>200M</div>
                    <div style={{ color: COLORS.textMuted }}>Fixed Supply</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg p-6 border"
                   style={{ backgroundColor: `${COLORS.accent}08`, borderColor: `${COLORS.accent}30` }}>
                <p className="text-sm" style={{ color: COLORS.accent }}>
                  <strong>Important:</strong> USDN is not a stablecoin. It is designed to function as a digital asset and independent store of value, with its price determined by market supply and demand.
                </p>
              </div>
            </Section>

            {/* 07 Tokenomics */}
            <Section id="tokenomics" number="07" title="Tokenomics">
              <h3 className="text-xl font-bold mb-6" style={{ color: COLORS.text }}>Distribution</h3>
              <TokenDistribution />

              <h3 className="text-xl font-bold mt-12 mb-6" style={{ color: COLORS.text }}>Vesting Schedule</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border"
                     style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5" style={{ color: COLORS.primary }} />
                    <span style={{ color: COLORS.text }}>Team & Advisors</span>
                  </div>
                  <span style={{ color: COLORS.textMuted }}>12-month cliff, 36-month linear vesting</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border"
                     style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5" style={{ color: COLORS.primary }} />
                    <span style={{ color: COLORS.text }}>Treasury / Unallocated</span>
                  </div>
                  <span style={{ color: COLORS.textMuted }}>Locked, released by governance vote</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-12 mb-6" style={{ color: COLORS.text }}>Utility</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {['Governance voting', 'Network fees', 'Staking and incentives', 'Ecosystem access', 'Marketplace transactions'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border text-sm"
                       style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border, color: COLORS.textMuted }}>
                    <Zap className="w-4 h-4" style={{ color: COLORS.primary }} />
                    {item}
                  </div>
                ))}
              </div>
            </Section>

            {/* 08 ICO */}
            <Section id="ico" number="08" title="ICO & Use of Funds">
              <div className="grid md:grid-cols-5 gap-4 my-8">
                {[
                  { label: 'Development', value: '35%', color: COLORS.primary },
                  { label: 'Marketing', value: '25%', color: COLORS.accent },
                  { label: 'Legal', value: '15%', color: COLORS.secondary },
                  { label: 'Operations', value: '15%', color: '#6b7280' },
                  { label: 'Reserves', value: '10%', color: '#d1d5db' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div 
                      className="h-32 rounded-lg mb-3 mx-auto w-16"
                      style={{ backgroundColor: item.color, opacity: 0.9 }}
                    />
                    <div className="font-bold" style={{ color: COLORS.text }}>{item.value}</div>
                    <div className="text-xs" style={{ color: COLORS.textMuted }}>{item.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm" style={{ color: COLORS.textMuted }}>
                Soft cap, hard cap, and pricing details will be announced prior to the ICO.
              </p>
            </Section>

            {/* 09 Roadmap */}
            <Section id="roadmap" number="09" title="Roadmap">
              <div className="space-y-0">
                <RoadmapItem 
                  date="May 2026"
                  title="Multi-chain Activation"
                  desc="Deployment across four blockchain networks for interoperability"
                  status="upcoming"
                />
                <RoadmapItem 
                  date="Jun 2026"
                  title="Official Website Launch"
                  desc="Public project launch and brand activation"
                  status="upcoming"
                />
                <RoadmapItem 
                  date="Jul 2026"
                  title="Private Pre-Sale"
                  desc="Initial private offering for early supporters"
                  status="upcoming"
                />
                <RoadmapItem 
                  date="Oct 2026"
                  title="Wallet Release"
                  desc="USDN digital wallet for secure storage and transfers"
                  status="upcoming"
                />
                <RoadmapItem 
                  date="Jan 2027"
                  title="Platform Activation"
                  desc="Application launch with initial marketplace functionality"
                  status="upcoming"
                />
                <RoadmapItem 
                  date="May 2027"
                  title="Second Public Offering"
                  desc="Phase II to expand ecosystem"
                  status="upcoming"
                />
                <RoadmapItem 
                  date="Nov 2027"
                  title="Proprietary Blockchain"
                  desc="Activation of native USDN network"
                  status="upcoming"
                />
              </div>
            </Section>

            {/* 10 Market Analysis */}
            <Section id="market" number="10" title="Market Analysis">
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="p-6 rounded-xl border" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
                  <Globe className="w-8 h-8 mb-4" style={{ color: COLORS.primary }} />
                  <div className="text-3xl font-bold mb-2" style={{ color: COLORS.text }}>$85B+</div>
                  <div className="text-sm" style={{ color: COLORS.textMuted }}>African remittances annually</div>
                </div>
                <div className="p-6 rounded-xl border" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
                  <Users className="w-8 h-8 mb-4" style={{ color: COLORS.primary }} />
                  <div className="text-3xl font-bold mb-2" style={{ color: COLORS.text }}>4M+</div>
                  <div className="text-sm" style={{ color: COLORS.textMuted }}>Sudanese diaspora target</div>
                </div>
                <div className="p-6 rounded-xl border" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
                  <Shield className="w-8 h-8 mb-4" style={{ color: COLORS.primary }} />
                  <div className="text-3xl font-bold mb-2" style={{ color: COLORS.text }}>60%</div>
                  <div className="text-sm" style={{ color: COLORS.textMuted }}>Unbanked population in region</div>
                </div>
              </div>
            </Section>

            {/* 11 Team */}
            <Section id="team" number="11" title="Team & Governance">
              <div className="rounded-xl p-8 border mb-8" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                       style={{ backgroundColor: `${COLORS.primary}15` }}>
                    <span className="text-2xl font-bold" style={{ color: COLORS.primary }}>AI</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1" style={{ color: COLORS.text }}>Alcont Ibrahim</h4>
                    <p className="text-sm mb-3 font-medium" style={{ color: COLORS.primary }}>Founder</p>
                    <p className="text-sm leading-relaxed" style={{ color: COLORS.textMuted }}>
                      Vision focused on decentralized financial inclusion for emerging markets. 
                      Leading the development of USDN's ecosystem and strategic partnerships.
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-bold mb-4" style={{ color: COLORS.text }}>Governance Model</h4>
              <p className="leading-relaxed" style={{ color: COLORS.textMuted }}>
                USDN is governed by token holders through on-chain proposals and voting mechanisms. 
                Additional team members and advisors will be disclosed as development progresses.
              </p>
            </Section>

            {/* 12 Legal */}
            <Section id="legal" number="12" title="Legal & Compliance">
              <p className="leading-relaxed mb-6" style={{ color: COLORS.textMuted }}>
                USDN will implement KYC/AML procedures where required and restrict participation from prohibited jurisdictions. 
                The project will adapt to evolving regulatory frameworks to ensure long-term sustainability.
              </p>
              <div className="flex items-center gap-3 p-4 rounded-lg border"
                   style={{ backgroundColor: '#f0fdf4', borderColor: '#86efac' }}>
                <Shield className="w-5 h-5 text-emerald-600" />
                <span className="text-sm text-emerald-700">Committed to regulatory compliance and transparency</span>
              </div>
            </Section>

            {/* 13 Risks */}
            <Section id="risks" number="13" title="Risks">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Market Volatility', desc: 'Cryptocurrency price fluctuations' },
                  { title: 'Regulatory Uncertainty', desc: 'Evolving legal frameworks' },
                  { title: 'Technical Vulnerabilities', desc: 'Smart contract and security risks' },
                  { title: 'Adoption Challenges', desc: 'Market penetration and user growth' },
                ].map((risk, i) => (
                  <div key={i} className="p-4 rounded-lg border-l-4"
                       style={{ backgroundColor: COLORS.surface, borderColor: COLORS.accent }}>
                    <h5 className="font-medium mb-1" style={{ color: COLORS.text }}>{risk.title}</h5>
                    <p className="text-sm" style={{ color: COLORS.textMuted }}>{risk.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm mt-6" style={{ color: COLORS.textMuted }}>
                Mitigation includes comprehensive audits, phased rollouts, and transparent governance practices.
              </p>
            </Section>

            {/* 14 Conclusion */}
            <Section id="conclusion" number="14" title="Conclusion">
              <p className="leading-relaxed mb-6 text-lg" style={{ color: COLORS.textMuted }}>
                USDN aims to empower individuals in Sudan and emerging markets with decentralized financial tools that prioritize freedom, accessibility, and transparency. 
              </p>
              <p className="leading-relaxed mb-8" style={{ color: COLORS.textMuted }}>
                By leveraging blockchain technology responsibly, USDN seeks to build a sustainable and inclusive financial ecosystem that serves the needs of millions while honoring the rich cultural heritage of the regions it operates in.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-white transition-colors hover:opacity-90"
                        style={{ backgroundColor: COLORS.primary }}>
                  Join the Ecosystem
                  <ExternalLink size={18} />
                </button>
                <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium transition-colors border"
                        style={{ color: COLORS.text, borderColor: COLORS.border, backgroundColor: 'white' }}>
                  Download PDF
                  <Download size={18} />
                </button>
              </div>
            </Section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}