const Hero = () => {
  return (
    <section id="hero" className="mt-24 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <img 
          src="/images/hero.jpg" 
          alt="Main Hero Image"
          className="w-full h-auto block rounded-sm"
          style={{ 
            width: '100%', 
            maxWidth: '100%', 
            height: 'auto', 
            display: 'block',
            objectFit: 'contain'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
