const Hero = () => {
  return (
    <section id="hero" className="mt-24 bg-white">
      <div className="w-[92%] mx-auto">
        <img 
          src="/images/hero.jpg" 
          alt="Main Hero Image"
          style={{ 
            width: '100%', 
            maxWidth: '100%', 
            height: 'auto', 
            display: 'block' 
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
