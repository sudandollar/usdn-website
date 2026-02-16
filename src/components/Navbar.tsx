import { useState, useEffect } from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Whitepaper', href: '#whitepaper' },
  { name: 'Token & Sale', href: '#token' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Marketplace', href: '#marketplace' },
  { name: 'Wallet', href: '#wallet' },
  { name: 'About', href: '#about' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="/usdn_logo.png"
              alt="USDN"
              className="h-8 w-auto transition-transform group-hover:scale-105"
            />
            <span className="text-lg font-bold text-gray-900">USDN</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full text-sm px-4 py-2 h-auto"
            >
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-[64px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-base text-gray-600 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 mt-4 rounded-full"
          >
            <Wallet className="w-4 h-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
}
