import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to hash if navigated with state (for external page -> home section link)
  useEffect(() => {
    const target = location.hash || (location.state as any)?.target;
    if (isHome && target) {
      const element = document.querySelector(target);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location, isHome]);

  const navLinks = [
    { name: 'ホーム', path: '/', isHash: false },
    { name: 'Across AIについて', path: '/about', isHash: false },
    { name: 'サービス', path: '#services', isHash: true },
    { name: '実績', path: '#case-studies', isHash: true },
    { name: 'CLIENT VOICE', path: '#testimonials', isHash: true },
    { name: 'お問い合わせ', path: '#contact', isHash: true },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string, isHash: boolean) => {
    setIsMenuOpen(false);

    if (isHash) {
      if (isHome) {
        e.preventDefault();
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If not home, navigate to home with hash (Router will handle it via generic hash logic or simple redirect)
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors transition-shadow duration-300 ${
        isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-widest uppercase font-serif z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded">
          Across AI
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
             if (link.isHash) {
               return (
                 isHome ? (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path, true)}
                    className="text-sm text-gray-600 hover:text-black transition-colors tracking-wider cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded"
                  >
                     {link.name}
                   </a>
                 ) : (
                  <Link
                    key={link.name}
                    to="/"
                    state={{ target: link.path }}
                    className="text-sm text-gray-600 hover:text-black transition-colors tracking-wider cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded"
                  >
                     {link.name}
                   </Link>
                 )
               );
             } else {
               return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-gray-600 hover:text-black transition-colors tracking-wider cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded"
                >
                  {link.name}
                </Link>
               );
             }
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-gray-800 z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in-down">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.isHash && !isHome ? "/" : link.path}
              onClick={(e) => {
                 if (link.isHash && isHome) {
                    handleNavClick(e, link.path, true);
                 } else {
                    setIsMenuOpen(false);
                 }
              }}
              className="text-gray-800 text-xl font-light tracking-widest hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;