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
        className="fixed top-0 left-0 w-full z-50 bg-background/60 backdrop-blur-sm"
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 flex justify-between items-center relative">
          
          <div className="flex-1 md:hidden">
            {/* Spacer for mobile logo if needed */}
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center pointer-events-none">
            <h1 className="serif text-base md:text-xl font-light tracking-[0.4em] text-foreground uppercase whitespace-nowrap">
              PHOTOGRAPH KOREA
            </h1>
          </div>

          <nav className="hidden md:flex flex-1 justify-end space-x-8 items-center">
            {menuItems.map((item) => (
              <a 
                key={item.en}
                href={item.href} 
                className="flex flex-col items-center group"
              >
                <span className="serif text-xs lg:text-sm tracking-[0.2em] font-light text-foreground group-hover:opacity-50 transition-opacity">
                  {item.en}
                </span>
                <span className="text-[8px] lg:text-[9px] tracking-widest font-light text-gray-400 -mt-1 opacity-80">
                  {item.ko}
                </span>
              </a>
            ))}
          </nav>
          
          <div className="md:hidden flex-1 flex justify-end">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="text-foreground z-50"
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-background shadow-lg z-50 p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <h2 className="serif text-lg tracking-widest">MENU</h2>
                <button 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-foreground"
                  aria-label="Close menu"
                >
                  <X size={28} strokeWidth={1}/>
                </button>
              </div>
              
              <nav className="flex flex-col items-start space-y-8">
                {menuItems.map((item) => (
                  <a 
                    key={item.en}
                    href={item.href} 
                    onClick={handleLinkClick}
                    className="flex flex-col items-start group w-full"
                  >
                    <span className="serif text-2xl tracking-wider font-light text-foreground group-hover:opacity-50 transition-opacity">
                      {item.en}
                    </span>
                    <span className="text-xs tracking-widest font-light text-gray-400 opacity-80">
                      {item.ko}
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
