import { useEffect, useRef } from 'react';
import { Download, Wallet, ArrowRightLeft, Vote } from 'lucide-react';

const features = [
  {
    icon: Download,
    title: 'Acquire',
    description: 'Get USDN through official sale phases or supported exchanges.',
    color: 'from-cyan-100 to-cyan-50',
    iconBg: 'bg-cyan-200',
  },
  {
    icon: Wallet,
    title: 'Store',
    description: 'Use a non-custodial wallet where you control your private keys.',
    color: 'from-purple-100 to-purple-50',
    iconBg: 'bg-purple-200',
  },
  {
    icon: ArrowRightLeft,
    title: 'Use',
    description: 'Transfer, pay, and participate in the USDN ecosystem.',
    color: 'from-orange-100 to-orange-50',
    iconBg: 'bg-orange-200',
  },
  {
    icon: Vote,
    title: 'Govern',
    description: 'Shape the network future through on-chain voting.',
    color: 'from-yellow-100 to-yellow-50',
    iconBg: 'bg-yellow-200',
  },
];

export function HowItWorksBento() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          How it works.
        </h2>

        {/* Bento Grid - 2x2 */}
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal group relative bg-gradient-to-br rounded-3xl p-6 sm:p-8 overflow-hidden card-hover"
              style={{
                background: `linear-gradient(135deg, ${feature.color.includes('cyan') ? '#cffafe' : feature.color.includes('purple') ? '#e9d5ff' : feature.color.includes('orange') ? '#fed7aa' : '#fef08a'} 0%, white 100%)`,
              }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-gray-800" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative shape */}
              <div className="absolute right-4 bottom-4 w-24 h-24 opacity-30">
                <div className={`w-full h-full ${feature.iconBg} rounded-full`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
