import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "Traditional remittance services charge exorbitant fees. A decentralized solution like USDN could reduce costs by 80% and deliver funds in minutes instead of days.",
    author: "Dr. Amara Hassan",
    role: "Financial Inclusion Researcher",
    org: "African Development Institute",
  },
  {
    quote: "Currency instability has eroded savings for millions. USDN offers a transparent, market-driven alternative that puts control back in people's hands.",
    author: "Mohamed Ibrahim",
    role: "Blockchain Advocate",
    org: "Sudan Fintech Association",
  },
];

export function ProblemSolution() {
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The problem with traditional finance.
            </h2>
            <p className="reveal text-lg text-gray-600 mb-6 leading-relaxed">
              Millions across Sudan and emerging markets face structural barriers:
              high remittance fees, slow cross-border transfers, currency instability,
              and centralized controls that limit financial freedom.
            </p>
            <p className="reveal text-lg text-gray-600 mb-8 leading-relaxed">
              USDN introduces a decentralized alternative—removing intermediaries,
              enabling peer-to-peer value transfer, and returning control to users.
            </p>

            {/* CTAs */}
            <div className="reveal flex flex-wrap gap-3">
              <Button
                size="lg"
                className="group bg-navy hover:bg-navy-light text-white px-6 py-5 text-sm rounded-full transition-all"
              >
                Read the Whitepaper
                <ArrowRight className="w-4 h-4 ml-2 btn-arrow" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-5 text-sm rounded-full transition-all"
              >
                View Token & Sale
                <ArrowRight className="w-4 h-4 ml-2 btn-arrow" />
              </Button>
            </div>
          </div>

          {/* Right Content - Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="reveal p-6 bg-gray-50 rounded-2xl"
              >
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center">
                    <span className="text-navy font-semibold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.role}, {testimonial.org}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
