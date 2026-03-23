import { motion } from 'framer-motion';
import SecureImage from './SecureImage';
import Masonry from 'react-masonry-css';

const images = [
  { id: 1, src: "/images/gallery-1.jpg", alt: "Seoul Palace" },
  { id: 2, src: "/images/gallery-2.jpg", alt: "Lotte Tower" },
  { id: 3, src: "/images/gallery-3.jpg", alt: "Rural Landscape" },
  { id: 4, src: "/images/gallery-4.jpg", alt: "Traditional Street" },
  { id: 5, src: "/images/gallery-5.jpg", alt: "Street Photography" },
  { id: 6, src: "/images/gallery-6.jpg", alt: "Mountain View" },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const GalleryItem = ({ image, index }: { image: typeof images[0], index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
    className="relative group overflow-hidden rounded-sm mb-2 bg-light-gray"
  >
    <SecureImage 
      src={image.src} 
      alt={image.alt}
      objectFit="contain"
      className="w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-105"
    />
  </motion.div>
);

const Gallery = () => {
  return (
    <section id="gallery" className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="mb-8">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="serif text-2xl md:text-3xl font-light tracking-tighter text-gray-800 uppercase"
          >
            PORTFOLIO
          </motion.h3>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-2"
          columnClassName="pl-2 bg-clip-padding"
        >
          {images.map((img, idx) => (
            <GalleryItem key={img.id} image={img} index={idx} />
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Gallery;
