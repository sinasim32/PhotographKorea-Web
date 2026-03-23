import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-background/60 backdrop-blur-sm"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 flex justify-between items-center relative">
        {/* Spacer for balancing flex or Logo place if needed in future */}
        <div className="flex-1 hidden md:block"></div>

        {/* Centered Company Name */}
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center pointer-events-none">
          <h1 className="serif text-base md:text-xl font-light tracking-[0.4em] text-foreground uppercase whitespace-nowrap">
            PHOTOGRAPH KOREA
          </h1>
        </div>

        {/* Menu Items */}
        <nav className="hidden md:flex flex-1 justify-end space-x-8 items-center">
          {[
            { en: 'HOME', ko: '홈', href: '#hero' },
            { en: 'PORTFOLIO', ko: '포토폴리오', href: '#gallery' },
            { en: 'GUESTBOOK', ko: '방명록', href: '#guestbook' },
            { en: 'INQUIRY', ko: '촬영문의', href: '#contact' }
          ].map((item) => (
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
        
        {/* Mobile Menu Button (kept for layout consistency) */}
        <button className="md:hidden text-foreground ml-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
