import { useEffect, useRef } from 'react';
import { ArrowRight, FileText, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
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
      className="py-20 lg:py-28 bg-navyx bg-gradient-cta relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Join the USDN Ecosystem
        </h2>
        <p className="reveal text-lg text-white/70 max-w-2xl mx-auto mb-10">
          Explore the whitepaper, understand the token model, and follow project
          updates as USDN moves toward launch.
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            size="lg"
            variant="outline"
            className="group border-white hover:bg-white hover:text-navy px-6 py-5 text-sm rounded-full transition-all"
          >
            <FileText className="w-4 h-4 mr-2" />
            Read the Whitepaper
            <ArrowRight className="w-4 h-4 ml-2 btn-arrow" />
          </Button>
          <Button
            size="lg"
            className="group bg-gold hover:bg-gold-light text-navy px-6 py-5 text-sm rounded-full transition-all"
          >
            <Coins className="w-4 h-4 mr-2" />
            View Token & Sale
            <ArrowRight className="w-4 h-4 ml-2 btn-arrow" />
          </Button>
        </div>
      </div>
    </section>
  );
}
