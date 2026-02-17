import { Twitter, Github, Facebook, Instagram } from 'lucide-react';

const resourceLinks = [
  { name: 'Whitepaper', href: '#whitepaper' },
  { name: 'Token & Sale', href: '#token' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Marketplace', href: '#marketplace' },
];

const developerLinks = [
  { name: 'Wallet', href: '#wallet' },
  { name: 'Documentation', href: '#' },
  { name: 'Security', href: '#' },
];

const companyLinks = [
  { name: 'About', href: '#about' },
  { name: 'Legal', href: '#' },
  { name: 'Contact', href: '#' },
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/SudanDollar' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100063619448948&sk=about' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/sudandollar' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/usdn_wallet' },
  // { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/images/usdn_logo.png"
                alt="USDN"
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold text-gray-900">USDN</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A decentralized financial ecosystem for Sudan and emerging markets.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label={social.name}
                  target='_black'
                >
                  <social.icon className="w-4 h-4 text-gray-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Developers</h3>
            <ul className="space-y-3">
              {developerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} USDN Project. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
