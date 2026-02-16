import { useEffect, useRef, useState } from 'react';
import { Info } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
  color: 'indigo' | 'teal' | 'blue';
  delay: number;
}

function AnimatedValue({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
            const prefix = value.match(/^[^0-9]*/)?.[0] || '';
            const suffix = value.match(/[A-Za-z]*$/)?.[0] || '';
            
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = (numericValue * easeOut).toFixed(0);
              setDisplayValue(`${prefix}${current}${suffix}`);
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

  return <span ref={ref}>{hasAnimated ? displayValue : value}</span>;
}

function StatCard({ value, label, color, delay }: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      (cardRef.current as HTMLElement).style.opacity = '0';
      (cardRef.current as HTMLElement).style.animationDelay = `${delay}ms`;
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const colorClasses = {
    indigo: 'bg-indigo-100',
    teal: 'bg-teal-100',
    blue: 'bg-blue-100',
  };

  const circleColors = {
    indigo: 'bg-indigo-400',
    teal: 'bg-teal-400',
    blue: 'bg-blue-400',
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${colorClasses[color]} rounded-3xl p-6 overflow-hidden card-hover`}
    >
      {/* Decorative circles */}
      <div className="absolute right-0 top-0 w-32 h-32 opacity-50">
        <div className={`absolute top-4 right-4 w-16 h-16 ${circleColors[color]} rounded-full`} />
        <div className={`absolute top-12 right-16 w-12 h-12 ${circleColors[color]} opacity-50 rounded-full`} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          <AnimatedValue value={value} />
        </div>
        <div className="text-gray-700 text-sm max-w-[200px]">{label}</div>
      </div>
    </div>
  );
}

export function TokenStats() {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => {
      (el as HTMLElement).style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content - Sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Why choose USDN?
            </h2>
            <p className="reveal text-lg text-gray-600">
              Built for emerging markets with transparency, security, and real-world utility at its core.
            </p>
          </div>

          {/* Right Content - Scrolling Cards */}
          <div className="space-y-4">
            <StatCard
              value="200M"
              label="Total USDN supply — fixed and transparent."
              color="indigo"
              delay={0}
            />
            <StatCard
              value="ERC-20"
              label="Ethereum standard for maximum compatibility."
              color="teal"
              delay={100}
            />
            <StatCard
              value="Utility"
              label="Governance, transfers, and marketplace payments."
              color="blue"
              delay={200}
            />

            {/* Important Note */}
            <div className="reveal mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-amber-900 text-sm mb-1">
                    Important Note
                  </div>
                  <p className="text-amber-800 text-xs leading-relaxed">
                    USDN is <span className="font-semibold">not a stablecoin</span>.
                    Its value is determined by supply and demand and may fluctuate based on
                    market conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
