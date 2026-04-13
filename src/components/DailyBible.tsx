import { motion } from 'framer-motion';
import { DAILY_BIBLE_CONTENT } from '../constants/dailyBible';

const DailyBible = () => {
  return (
    <section id="daily-bible" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen Background Image with Subtle Parallax effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={DAILY_BIBLE_CONTENT.backgroundImage} 
          alt="Daily Bible Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="serif text-4xl md:text-6xl font-light tracking-[0.2em] text-white uppercase">
              {DAILY_BIBLE_CONTENT.title}
            </h2>
            <p className="text-xs md:text-sm tracking-[0.4em] font-light text-white/70 uppercase">
              {DAILY_BIBLE_CONTENT.subtitle}
            </p>
          </div>

          {/* YouTube Video Container - minimalist and elegant */}
          <div className="w-full aspect-video bg-black/20 backdrop-blur-md rounded-sm overflow-hidden shadow-2xl border border-white/10">
            <iframe
              className="w-full h-full"
              src={DAILY_BIBLE_CONTENT.youtubeUrl}
              title="Daily Bible Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Decorative minimalist elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 opacity-50">
        <div className="w-[1px] h-12 bg-white/30"></div>
      </div>
    </section>
  );
};

export default DailyBible;