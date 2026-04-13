import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const menuItems = [
  { en: 'HOME', ko: '홈', href: '#hero' },
  { en: 'PORTFOLIO', ko: '포토폴리오', href: '#gallery' },
  { en: 'GUESTBOOK', ko: '방명록', href: '#guestbook' },
  { en: 'INQUIRY', ko: '촬영문의', href: '#contact' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 h-24 flex items-center"
      >
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0">
            <h1 className="serif text-2xl md:text-3xl font-light tracking-[0.4em] text-[#000000] uppercase whitespace-nowrap">
              PHOTOGRAPH KOREA
            </h1>
          </div>

          {/* Menu - Right aligned */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-16">
            {menuItems.map((item) => (
              <a 
                key={item.en}
                href={item.href} 
                className="group py-2"
              >
                <span className="serif text-xs lg:text-sm tracking-[0.2em] font-light text-[#000000] group-hover:opacity-50 transition-opacity">
                  {item.en}
                </span>
              </a>
            ))}
          </nav>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="text-[#000000] p-2 -mr-2 transition-opacity hover:opacity-50"
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-white z-[70] p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <h2 className="serif text-lg tracking-widest text-gray-400 uppercase">MENU</h2>
                <button 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-black"
                  aria-label="Close menu"
                >
                  <X size={28} strokeWidth={1}/>
                </button>
              </div>
              
              <nav className="flex flex-col items-start space-y-10">
                {menuItems.map((item) => (
                  <a 
                    key={item.en}
                    href={item.href} 
                    onClick={handleLinkClick}
                    className="flex flex-col items-start group w-full"
                  >
                    <span className="serif text-2xl tracking-widest font-light text-black group-hover:opacity-50 transition-opacity">
                      {item.en}
                    </span>
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
