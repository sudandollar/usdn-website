import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const milestones = [
  {
    date: 'Feb 2026',
    title: 'Multi-chain Activation',
    description: 'Activation across four blockchain networks for interoperability',
    status: 'upcoming',
  },
  {
    date: 'Mar 2026',
    title: 'Official Website Launch',
    description: 'Launch of the USDN project website and documentation',
    status: 'upcoming',
  },
  {
    date: 'Apr 2026',
    title: 'Private Sale',
    description: 'Initial private offering for early supporters',
    status: 'upcoming',
  },
  {
    date: 'Oct 2026',
    title: 'Platform Activation',
    description: 'USDN application and initial marketplace functionality',
    status: 'upcoming',
  },
  {
    date: 'Feb 2027',
    title: 'Second Offering',
    description: 'Phase II public offering for broader adoption',
    status: 'upcoming',
  },
  {
    date: 'Aug 2027',
    title: 'Proprietary Blockchain',
    description: 'Activation of the dedicated USDN blockchain network',
    status: 'upcoming',
  },
];

export function Roadmap() {
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
      id="roadmap"
      className="py-24 lg:py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            A Clear Path to Execution
          </h2>
          <p className="reveal text-lg text-gray-600 max-w-2xl mx-auto">
            Our phased roadmap ensures gradual adoption, regulatory readiness, and
            technical stability.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />

          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

          {/* Milestones */}
          <div className="grid lg:grid-cols-6 gap-8 lg:gap-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="reveal relative"
              >
                {/* Desktop: Vertical layout */}
                <div className="hidden lg:flex flex-col items-center text-center">
                  {/* Date */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-navy/10 text-navy text-sm font-semibold rounded-full">
                      {milestone.date}
                    </span>
                  </div>

                  {/* Connector */}
                  <div className="relative w-full flex justify-center mb-4">
                    <div className="w-4 h-4 bg-teal rounded-full border-4 border-white shadow-md z-10" />
                  </div>

                  {/* Content */}
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm card-hover w-full">
                    <h3 className="font-semibold text-navy mb-2 text-sm">
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Mobile: Horizontal layout */}
                <div className="lg:hidden flex items-start gap-6">
                  {/* Connector */}
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 bg-teal rounded-full border-4 border-white shadow-md mt-1" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <span className="inline-block px-3 py-1 bg-navy/10 text-navy text-xs font-semibold rounded-full mb-3">
                      {milestone.date}
                    </span>
                    <h3 className="font-semibold text-navy mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="group border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 text-base rounded-xl transition-all"
          >
            View Full Roadmap
            <ArrowRight className="w-5 h-5 ml-2 btn-arrow" />
          </Button>
        </div>
      </div>
    </section>
  );
}
