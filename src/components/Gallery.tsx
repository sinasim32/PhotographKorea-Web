import { motion } from 'framer-motion';
import SecureImage from './SecureImage';
import Masonry from 'react-masonry-css';

// Final production gallery data
const images = [ 
  { src: '/images/gallery-1.jpg', title: '작품 1' }, 
  { src: '/images/gallery-2.jpg', title: '작품 2' }, 
  { src: '/images/gallery-3.jpg', title: '작품 3' }, 
  { src: '/images/gallery-4.jpg', title: '작품 4' }, 
  { src: '/images/gallery-5.jpg', title: '작품 5' }, 
  { src: '/images/gallery-6.jpg', title: '작품 6' }, 
  { src: '/images/gallery-7.jpg', title: '작품 7' }, 
  { src: '/images/gallery-8.jpg', title: '작품 8' }, 
  { src: '/images/gallery-9.jpg', title: '작품 9' }, 
  { src: '/images/gallery-10.jpg', title: '작품 10' } 
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
    className="relative group overflow-hidden rounded-sm mb-4 bg-light-gray"
  >
    <SecureImage 
      src={image.src} 
      alt={image.title}
      objectFit="contain"
      className="w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-105"
    />
  </motion.div>
);

const Gallery = () => {
  return (
    <section id="gallery" className="py-12 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-5">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <GalleryItem key={img.src} image={img} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
