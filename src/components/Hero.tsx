import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SecureImage from './SecureImage';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={containerRef} className="relative h-[85vh] mt-16 mx-4 md:mx-8 overflow-hidden bg-light-gray">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <SecureImage 
          src="/images/hero.jpg" 
          alt="Main Hero Image"
          objectFit="cover"
          className="w-full h-full transition-all duration-1000"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/5"></div>
    </section>
  );
};

export default Hero;
