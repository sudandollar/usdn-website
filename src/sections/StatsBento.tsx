import { useEffect, useRef, useState } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  decoration: 'percent' | 'dots' | 'bars';
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

function StatCard({ value, label, decoration, delay }: StatCardProps) {
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

  return (
    <div
      ref={cardRef}
      className="relative bg-gray-50 rounded-3xl p-6 sm:p-8 overflow-hidden card-hover"
    >
      {/* Value */}
      <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
        <AnimatedValue value={value} />
      </div>
      
      {/* Label */}
      <div className="text-gray-500 text-sm">{label}</div>

      {/* Decoration */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        {decoration === 'percent' && (
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-indigo-200 rounded-full" />
            <div className="absolute inset-0 border-4 border-indigo-400 rounded-full border-t-transparent rotate-45" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-400 rounded-full" />
          </div>
        )}
        {decoration === 'dots' && (
          <div className="grid grid-cols-4 gap-1.5">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i < 8 ? 'bg-indigo-400' : 'bg-indigo-200'
                }`}
              />
            ))}
          </div>
        )}
        {decoration === 'bars' && (
          <div className="flex items-end gap-1.5 h-16">
            {[40, 60, 80, 50, 70].map((h, i) => (
              <div
                key={i}
                className="w-4 bg-indigo-400 rounded-t-full"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function StatsBento() {
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

    const title = sectionRef.current?.querySelector('.section-title');
    if (title) {
      (title as HTMLElement).style.opacity = '0';
      observer.observe(title);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="section-title text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          DeFi's gateway to emerging markets.
        </h2>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large card - spans 2 columns on desktop */}
          <div className="sm:col-span-2 lg:col-span-2">
            <StatCard
              value="$85B"
              label="Annual African remittances."
              decoration="bars"
              delay={0}
            />
          </div>

          {/* Regular cards */}
          <StatCard
            value="4M+"
            label="Sudanese diaspora target users."
            decoration="dots"
            delay={100}
          />
          <StatCard
            value="200M"
            label="Total USDN token supply."
            decoration="percent"
            delay={200}
          />
          <StatCard
            value="12+"
            label="Planned blockchain networks."
            decoration="dots"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}
