import { useEffect, useRef } from 'react';
import { ArrowRight, ShoppingBag, Globe, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: ShoppingBag,
    title: 'Simplified Commerce',
    description: 'Unified marketplace for goods and services',
  },
  {
    icon: Globe,
    title: 'Cross-Border Trade',
    description: 'Low-cost international transactions',
  },
  {
    icon: TrendingUp,
    title: 'Real Economic Activity',
    description: 'Demand driven by actual usage',
  },
];

export function Marketplace() {
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
      id="marketplace"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              A Unified Digital Marketplace
            </h2>
            <div className="reveal space-y-4 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                As part of its long-term vision, USDN is building a unified online
                marketplace where goods and services can be exchanged using USDN as
                the primary currency. This marketplace is designed to simplify
                commerce, reduce reliance on fragmented payment systems, and enable
                low-cost, cross-border trade.
              </p>
              <p>
                By anchoring USDN to real economic activity, the marketplace
                strengthens long-term utility and adoption.
              </p>
            </div>

            {/* Benefits */}
            <div className="reveal space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-cream/50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="reveal">
              <Button
                size="lg"
                className="group bg-navy hover:bg-navy-light text-white px-8 py-6 text-base rounded-xl transition-all hover:shadow-lg"
              >
                Explore Marketplace Vision
                <ArrowRight className="w-5 h-5 ml-2 btn-arrow" />
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="reveal flex justify-center">
            <div className="relative">
              <img
                src="/images/marketplace-illustration.png"
                alt="Digital marketplace illustration"
                className="w-full max-w-lg rounded-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
