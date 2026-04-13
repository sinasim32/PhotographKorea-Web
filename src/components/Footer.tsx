const Footer = () => {
  return (
    <footer className="py-12 bg-white text-gray-400 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col gap-8">
        {/* Main Brand & Description */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="serif text-lg font-light tracking-[0.3em] text-black uppercase mb-4">
            PHOTOGRAPH KOREA
          </h1>
          <p className="text-[10px] md:text-xs font-light leading-relaxed tracking-wider text-gray-500 mb-6">
            We are a Christian-based creative company dedicated to sharing the beauty of God's creation through professional photography and the truth of His Word through our official YouTube channel, serving as a peaceful space where art and faith meet.
          </p>
          <a 
            href="https://www.youtube.com/@photographkorea" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-black hover:opacity-60 transition-opacity border-b border-black/20 pb-1"
          >
            PHOTOGRAPH KOREA YOUTUBE
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-50 flex justify-center">
          <p className="text-[8px] uppercase tracking-[0.4em] font-light">
            © 2026 Photograph Korea. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
