import { useEffect, useRef } from 'react';
import { Download, Wallet, ArrowRightLeft, Vote } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Acquire USDN',
    description: 'Through official sale phases or supported exchanges.',
  },
  {
    number: '02',
    icon: Wallet,
    title: 'Store USDN Securely',
    description: 'Using a non-custodial wallet where users control their private keys.',
  },
  {
    number: '03',
    icon: ArrowRightLeft,
    title: 'Use USDN',
    description: 'For transfers, payments, and participation in the USDN ecosystem.',
  },
  {
    number: '04',
    icon: Vote,
    title: 'Participate in Governance',
    description: 'Token holders help shape the future of the network through on-chain voting.',
  },
];

export function HowItWorks() {
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
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            How USDN Works
          </h2>
          <p className="reveal text-lg text-gray-600 max-w-2xl mx-auto">
            A simple four-step process to get started with USDN and join the
            decentralized financial ecosystem.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="reveal relative group"
            >
              <div className="p-8 bg-gradient-to-br from-cream/50 to-white rounded-2xl border border-gray-100 h-full card-hover">
                {/* Step Number */}
                <div className="text-5xl font-bold text-gold/30 mb-4 group-hover:text-gold/50 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy/10 transition-colors">
                  <step.icon className="w-6 h-6 text-navy" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-teal rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
