import { useEffect, useRef } from 'react';
import { ArrowRight, FileText, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  'Independent digital asset (not a stablecoin)',
  'Non-custodial, decentralized architecture',
  'Built for real-world economic usage',
];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.animationDelay = `${index * 100}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-white pt-[72px] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              Say hello to{' '}
              <span className="inline-flex items-center gap-2">
                <img 
                  src="/usdn-logo.png" 
                  alt="USDN" 
                  className="w-12 h-12 sm:w-14 sm:h-14 inline-block"
                />
                USDN
              </span>
            </h1>

            {/* Subheadline */}
            <p className="reveal text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
              A decentralized digital asset powering a new financial ecosystem across 
              <span className="text-navy font-medium"> Sudan and emerging markets</span>.
            </p>

            {/* Key Highlights */}
            <div className="reveal flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1.5 bg-gray-50 rounded-full text-sm text-gray-700 border border-gray-100"
                >
                  <span className="w-1.5 h-1.5 bg-teal rounded-full mr-2" />
                  {highlight}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="reveal flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Button
                size="lg"
                className="group bg-navy hover:bg-navy-light text-white px-6 py-5 text-sm rounded-full transition-all hover:shadow-lg"
              >
                <FileText className="w-4 h-4 mr-2" />
                Read the Whitepaper
                <ArrowRight className="w-4 h-4 ml-2 btn-arrow" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-5 text-sm rounded-full transition-all"
              >
                <Coins className="w-4 h-4 mr-2" />
                View Token & Sale Details
                <ArrowRight className="w-4 h-4 ml-2 btn-arrow" />
              </Button>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="reveal relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative w-[280px] sm:w-[320px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Screen content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-8 h-8 bg-navy/10 rounded-full flex items-center justify-center">
                        <img src="/usdn-logo.png" alt="" className="w-5 h-5" />
                      </div>
                      <div className="text-xs text-gray-400">9:41</div>
                    </div>

                    {/* Balance */}
                    <div className="text-center mb-6">
                      <div className="text-sm text-gray-500 mb-1">Your Balance</div>
                      <div className="text-3xl font-bold text-gray-900">$9,326.45</div>
                      <div className="text-sm text-teal mt-1">+2.4% this week</div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mb-6">
                      <div className="flex-1 bg-navy text-white py-3 rounded-xl text-center text-sm font-medium">
                        Send
                      </div>
                      <div className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl text-center text-sm font-medium">
                        Receive
                      </div>
                    </div>

                    {/* Chart placeholder */}
                    <div className="h-32 bg-gradient-to-t from-teal/10 to-transparent rounded-xl mb-4 flex items-end justify-center pb-4">
                      <div className="flex items-end gap-1">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                          <div
                            key={i}
                            className="w-6 bg-teal rounded-t-sm"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Recent activity */}
                    <div className="space-y-3">
                      <div className="text-xs text-gray-400">Recent Activity</div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-teal/10 rounded-full flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-teal rotate-[-45deg]" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Received USDN</div>
                            <div className="text-xs text-gray-400">Today</div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-teal">+$500</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-teal/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom rainbow line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-gold to-navy" />
    </section>
  );
}
