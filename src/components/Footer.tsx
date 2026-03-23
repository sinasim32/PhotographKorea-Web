const Footer = () => {
  return (
    <footer className="py-8 bg-white text-gray-400 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <h1 className="serif text-sm font-light tracking-tighter text-black uppercase">
            PHOTOGRAPH KOREA
          </h1>
          <p className="text-[7px] uppercase tracking-[0.3em] font-light">
            © 2026 Photograph Korea.
          </p>
        </div>
        
        <div className="flex gap-6 text-[7px] uppercase tracking-[0.3em] font-light">
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
