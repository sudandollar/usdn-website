import { useEffect, useRef } from 'react';
import { Shield, Globe, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Decentralization',
    description: 'Users retain full control over their assets',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Simple onboarding without banking requirements',
  },
  {
    icon: Zap,
    title: 'Low-Cost Transfers',
    description: 'Near-zero transaction costs',
  },
  {
    icon: Users,
    title: 'Transparency',
    description: 'On-chain governance and verifiable contracts',
  },
];

export function Solution() {
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
      className="py-24 lg:py-32 bg-gradient-to-b from-white to-cream/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Illustration */}
          <div className="reveal flex justify-center">
            <div className="relative">
              <img
                src="/images/solution-illustration.png"
                alt="Decentralized network illustration"
                className="w-full max-w-lg rounded-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-xl" />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              A Decentralized Financial Alternative
            </h2>
            <div className="reveal space-y-4 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                USDN introduces a decentralized financial ecosystem that removes
                unnecessary intermediaries and returns control to users. Built on
                blockchain technology, USDN enables peer-to-peer value transfer,
                transparent governance, and access to digital financial services
                without reliance on traditional banking infrastructure.
              </p>
              <p>
                USDN is designed as a utility-driven digital asset whose value is
                shaped by market demand and ecosystem adoption.
              </p>
            </div>

            {/* Features Grid */}
            <div className="reveal grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm card-hover"
                >
                  <feature.icon className="w-8 h-8 text-teal mb-3" />
                  <h3 className="font-semibold text-navy mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
