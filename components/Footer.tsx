import React from 'react';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111] text-white py-16 text-sm">
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          
          <div className="mb-10 md:mb-0">
            <h2 className="text-2xl font-serif tracking-widest mb-6">Across AI</h2>
            <address className="not-italic text-gray-400 leading-7 text-xs">
              運営会社: 株式会社アクロス<br />
              〒107-0061 東京都港区北青山1-3-1<br />
              アールキューブ青山 3F<br />
              運営拠点: 東京・札幌<br />
              Email: info@across-ai.com
            </address>
          </div>

          <div className="flex flex-col md:items-end">
            <nav className="mb-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-gray-400 text-xs">
              <Link to="/legal" className="hover:text-white transition-colors">特定商取引法に基づく表記</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
              <Link to="/terms" className="hover:text-white transition-colors">利用規約</Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© 2025 Across AI. All rights reserved.</p>
        </div>

        <button 
          onClick={scrollToTop}
          className="absolute right-6 top-0 md:top-auto md:bottom-20 p-3 bg-gray-800 hover:bg-gray-700 transition-colors rounded-full md:rounded-none"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;