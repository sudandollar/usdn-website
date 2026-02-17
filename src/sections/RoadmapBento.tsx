import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Rocket, Globe, Users, Cpu, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const milestones = [
  {
    date: 'May 2026',
    title: 'Multi-chain Activation',
    description: 'Activation across four blockchain networks for interoperability and early liquidity.',
    icon: Globe,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    date: 'Jun 2026',
    title: 'Website Launch',
    description: 'Official launch of the USDN project website and documentation.',
    icon: Rocket,
    color: 'bg-teal-100 text-teal-600',
  },
  {
    date: 'Jul 2026',
    title: 'Private Sale',
    description: 'Initial private offering for early supporters and strategic partners.',
    icon: Users,
    color: 'bg-gold-100 text-gold-600',
  },
  {
    date: 'Oct 2026',
    title: 'Digital Wallet Launch',
    description: 'Release of the USDN digital wallet for secure storage, transfers, and ecosystem access.',
    icon: Wallet,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    date: 'Jan 2027',
    title: 'Platform Launch',
    description: 'USDN application and initial marketplace functionality activation.',
    icon: Calendar,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    date: 'May 2027',
    title: 'Second Offering',
    description: 'Phase II public offering for broader ecosystem adoption.',
    icon: Users,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    date: 'Nov 2027',
    title: 'USDN Blockchain',
    description: 'Activation of the proprietary USDN blockchain network.',
    icon: Cpu,
    color: 'bg-green-100 text-green-600',
  },
];

export function RoadmapBento() {
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
      (el as HTMLElement).style.animationDelay = `${index * 50}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="roadmap" className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="reveal text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Roadmap.
            </h2>
            <p className="reveal text-gray-600">
              A clear path to execution and ecosystem growth.
            </p>
          </div>
          <div className="reveal">
            <Button
              variant="outline"
              className="group border-gray-300 text-gray-700 hover:bg-white px-5 py-2 text-sm rounded-full transition-all"
            >
              View Full Roadmap
              <ArrowRight className="w-4 h-4 ml-2 btn-arrow" />
            </Button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="reveal group bg-white rounded-3xl p-6 border border-gray-100 card-hover"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 ${milestone.color} rounded-xl flex items-center justify-center`}>
                  <milestone.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                  {milestone.date}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {milestone.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
