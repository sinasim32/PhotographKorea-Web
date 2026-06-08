import { motion } from 'framer-motion';
import SecureImage from './SecureImage';
import Masonry from 'react-masonry-css';

// Final production gallery data
const row1Images = [ 
  { src: '/images/gallery-2.jpg', title: '작품 2' }, 
  { src: '/images/gallery-3.jpg', title: '작품 3' }
];

const row2Images = [
  { src: '/images/gallery-4.jpg', title: '작품 4' }, 
  { src: '/images/gallery-5.jpg', title: '작품 5' }
];

const row3Images = [
  { src: '/images/gallery-7.jpg', title: '작품 7' }, 
  { src: '/images/gallery-8.png', title: '작품 8' }, 
  { src: '/images/gallery-9.jpg', title: '작품 9' }, 
  { src: '/images/gallery-10.jpg', title: '작품 10' } 
];

const GalleryItem = ({ image, index }: { image: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
    className="relative group overflow-hidden rounded-sm mb-4 bg-light-gray w-full h-auto"
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

        {/* [첫줄]: gallery-2, gallery-3 (2열) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {row1Images.map((img, idx) => (
            <GalleryItem key={img.src} image={img} index={idx} />
          ))}
        </div>

        {/* [둘째줄]: gallery-4, gallery-5 (2열) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {row2Images.map((img, idx) => (
            <GalleryItem key={img.src} image={img} index={idx} />
          ))}
        </div>

        {/* [셋째줄]: gallery-7, 8, 9, 10 (4열) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {row3Images.map((img, idx) => (
            <GalleryItem key={img.src} image={img} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
