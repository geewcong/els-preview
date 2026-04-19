import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Characters', href: '#characters' },
  { label: 'Videos', href: '#videos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Feedback', href: '#feedback' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary fill-primary flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span className="font-display font-bold text-lg sm:text-2xl text-foreground tracking-tight truncate">Emotion Little Stars</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors whitespace-nowrap">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden flex-shrink-0 p-2 rounded-xl hover:bg-muted transition-colors" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="flex flex-col px-4 py-4 gap-1">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}
                className="py-3 px-4 rounded-xl text-lg font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
