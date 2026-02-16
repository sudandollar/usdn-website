import { useEffect, useRef } from 'react';
import { Shield, Eye, AlertTriangle, FileCheck, Lock, Scale } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Security Audits',
    description: 'Comprehensive smart contract audits by leading security firms',
    color: 'bg-teal/10 text-teal',
  },
  {
    icon: Eye,
    title: 'On-Chain Governance',
    description: 'All governance decisions transparent and verifiable',
    color: 'bg-navy/10 text-navy',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Disclosure',
    description: 'Clear communication of risks and market volatility',
    color: 'bg-gold/10 text-gold-dark',
  },
];

export function Trust() {
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
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.animationDelay = `${index * 100}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Built with Transparency and Responsibility
          </h2>
          <div className="reveal space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              USDN is developed with a strong commitment to transparency,
              responsible growth, and risk disclosure. Smart contracts will undergo
              security audits, and governance decisions will be visible on-chain.
            </p>
            <p>
              Participants are encouraged to review the whitepaper and conduct
              independent due diligence before engaging.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal p-8 bg-gradient-to-br from-cream/50 to-white rounded-2xl border border-gray-100 card-hover"
            >
              <div
                className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="reveal mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center mb-3">
              <FileCheck className="w-6 h-6 text-navy" />
            </div>
            <div className="font-semibold text-navy">Smart Contract Audits</div>
            <div className="text-sm text-gray-500">By leading security firms</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center mb-3">
              <Lock className="w-6 h-6 text-navy" />
            </div>
            <div className="font-semibold text-navy">Non-Custodial</div>
            <div className="text-sm text-gray-500">You control your keys</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center mb-3">
              <Scale className="w-6 h-6 text-navy" />
            </div>
            <div className="font-semibold text-navy">Fair Governance</div>
            <div className="text-sm text-gray-500">Community-driven decisions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
