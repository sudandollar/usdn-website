import { useEffect, useRef } from 'react';

export function Problem() {
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
    elements?.forEach((el) => {
      (el as HTMLElement).style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Why Existing Financial Systems Fall Short
            </h2>
            <div className="reveal space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Millions of people across Sudan and emerging markets face structural
                barriers to modern financial services. High remittance fees, slow
                cross-border transfers, currency instability, and centralized controls
                limit financial freedom and economic participation.
              </p>
              <p>
                Traditional financial systems are costly, restrictive, and poorly suited
                for a digital, global economy—leaving individuals and businesses without
                reliable tools to store value or transact efficiently.
              </p>
            </div>

            {/* Stats */}
            <div className="reveal grid grid-cols-2 gap-6 mt-10">
              <div className="p-6 bg-cream/50 rounded-2xl">
                <div className="text-3xl font-bold text-navy mb-1">$85B+</div>
                <div className="text-sm text-gray-600">Annual African remittances</div>
              </div>
              <div className="p-6 bg-cream/50 rounded-2xl">
                <div className="text-3xl font-bold text-navy mb-1">4M+</div>
                <div className="text-sm text-gray-600">Sudanese diaspora</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="reveal order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img
                src="/problem-illustration.png"
                alt="Financial barriers illustration"
                className="w-full max-w-lg rounded-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100 rounded-full blur-xl opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
