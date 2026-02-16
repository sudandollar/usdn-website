import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, ArrowRightLeft, Landmark, Vote, ArrowRight, Info } from 'lucide-react';

const subData = [
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

function AnimatedNumber({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const numericValue = parseInt(value.replace(/,/g, ''));
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(numericValue * easeOut);
              setDisplayValue(current.toLocaleString());
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  // If value is not a number, just display it
  if (isNaN(parseInt(value.replace(/,/g, '')))) {
    return <span>{value}</span>;
  }

  return <span ref={ref}>{displayValue}</span>;
}

export function AboutUSDN() {
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
    <section
      ref={sectionRef}
      id="about"
      className="py-24 lg:py-32 bg-gradient-primary relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About USDN.
          </h2>
          <p className="reveal text-lg text-white/80 max-w-2xl mx-auto">
            Secure storage. Low-cost transfers. Real-world utility.
          </p>
        </div>

        {/* Token Data Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {subData.map((item, index) => (
            <div
              key={index}
              className="reveal p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              {item.icon && (
                <item.icon className="w-6 h-6 text-gold mb-4" />
              )}
              <div className="text-2xl sm:text-3xl font-bold text-white">
                <AnimatedNumber value={item.label} />
              </div>
              {item.title && (
                <div className="text-sm text-white/60 mt-1">{item.title}</div>
              )}
              {item.description && (
                <div className="text-sm text-white/60 mt-1">{item.description}</div>
              )}
            </div>
          ))}
        </div>

        {/* Stability Note */}
        <div className="reveal max-w-3xl mx-auto">
          <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <Info className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-white mb-2">Important Note</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                USDN is <span className="font-semibold text-gold">not a stablecoin</span>.
                Its value is determined by supply and demand and may fluctuate based on
                market conditions and ecosystem usage. Participants should be aware of
                potential volatility.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="group border-white text-white hover:bg-white hover:text-navy px-8 py-6 text-base rounded-xl transition-all"
          >
            View Full Tokenomics
            <ArrowRight className="w-5 h-5 ml-2 btn-arrow" />
          </Button>
        </div>
      </div>
    </section>
  );
}
