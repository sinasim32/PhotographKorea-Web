const Hero = () => {
  return (
    <section id="hero" className="mt-24 mx-4 md:mx-8 bg-light-gray overflow-hidden rounded-sm">
      <img 
        src="/images/hero.jpg" 
        alt="Main Hero Image"
        style={{ width: '100%', height: 'auto' }}
        className="block"
      />
    </section>
  );
};

export default Hero;
