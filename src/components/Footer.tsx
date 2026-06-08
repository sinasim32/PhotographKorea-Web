import { Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white text-gray-400 border-t border-gray-100">
      <div className="w-[92%] mx-auto flex flex-col gap-8">
        {/* Main Brand & Description */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="serif text-xl md:text-2xl font-light tracking-[0.15em] text-[#000000] uppercase mb-1">
            PHOTOGRAPH KOREA
          </h1>
          <p className="text-[0.7rem] text-black tracking-[0.15em] font-light mb-12">
            © 2026 PHOTOGRAPH KOREA. All rights reserved.
          </p>
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
      </div>
    </footer>
  );
};

export default Footer;
