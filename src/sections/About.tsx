import { useEffect, useRef, useState } from 'react';
import { Wallet, ArrowRightLeft, Landmark, Vote } from 'lucide-react';

const tabs = [
  {
    id: 'wallet',
    label: 'Wallet',
    icon: Wallet,
    title: 'Non-custodial wallet.',
    description: 'Store USDN securely with full control over your private keys. No intermediaries, no restrictions.',
  },
  {
    id: 'transfer',
    label: 'Transfer',
    icon: ArrowRightLeft,
    title: 'Low-cost transfers.',
    description: 'Send and receive USDN across borders with near-zero fees and near-instant settlement.',
  },
  {
    id: 'marketplace',
    label: 'Marketplace',
    icon: Landmark,
    title: 'Unified marketplace.',
    description: 'Exchange goods and services using USDN as the primary currency for commerce.',
  },
  {
    id: 'governance',
    label: 'Governance',
    icon: Vote,
    title: 'Community governance.',
    description: 'Token holders shape the future of the network through transparent on-chain voting.',
  },
];

export function About() {
  const [activeTab, setActiveTab] = useState('wallet');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => {
      (el as HTMLElement).style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About USDN.
          </h2>
          <p className="reveal text-lg text-gray-600">
            Secure storage. Low-cost transfers. Real-world utility.
          </p>
        </div>

        {/* Visual Display */}
        <div className="reveal relative bg-gray-50 rounded-3xl overflow-hidden mb-8 aspect-[2/1] max-h-[400px]x">
          {/* Abstract geometric pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full ${
                    i % 3 === 0
                      ? 'bg-teal/30'
                      : i % 3 === 1
                      ? 'bg-navy/20'
                      : 'bg-gold/20'
                  }`}
                  style={{
                    transform: `translateY(${i % 2 === 0 ? '10px' : '-10px'})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="reveal">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeContent && (
            <div className="text-center max-w-xl mx-auto animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {activeContent.title}
              </h3>
              <p className="text-gray-600">{activeContent.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
