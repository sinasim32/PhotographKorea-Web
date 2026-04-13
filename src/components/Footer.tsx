import { Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white text-gray-400 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col gap-8">
        {/* Main Brand & Description */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="border border-black px-6 py-2 mb-8">
            <h1 className="serif text-xl md:text-2xl font-light tracking-[0.4em] text-[#000000] uppercase leading-none">
              PHOTOGRAPH KOREA
            </h1>
          </div>
          <p className="text-sm md:text-lg font-medium leading-relaxed tracking-wide text-gray-700 mb-12 max-w-4xl">
            We are a Christian-based creative company dedicated to sharing the beauty of God's creation through professional photography and the truth of His Word through our official YouTube channel, serving as a peaceful space where art and faith meet.
          </p>
          
          <a 
            href="https://www.youtube.com/@photographkorea" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-4 text-xs md:text-sm font-bold tracking-[0.2em] text-black transition-all duration-300"
          >
            <div className="p-2 rounded-full bg-[#FF0000] text-white shadow-sm transform transition-transform duration-300 group-hover:scale-125">
              <Youtube size={16} strokeWidth={2} />
            </div>
            <span className="border-b-2 border-black/5 group-hover:border-black/80 pb-0.5 transition-all duration-300">
              PHOTOGRAPH KOREA YOUTUBE
            </span>
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
