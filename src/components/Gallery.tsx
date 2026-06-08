import { motion } from 'framer-motion';
import SecureImage from './SecureImage';
import Masonry from 'react-masonry-css';

// Final production gallery data
const landscapeImages = [ 
  { src: '/images/gallery-5.jpg', title: '작품 5' }, 
  { src: '/images/gallery-6.jpg', title: '작품 6' }, 
  { src: '/images/gallery-9.jpg', title: '작품 9' }, 
  { src: '/images/gallery-10.jpg', title: '작품 10' } 
];

const sceneryImages = [
  { src: '/images/gallery-7.jpg', title: '작품 7' }, 
  { src: '/images/gallery-8.png', title: '작품 8' }
];

const portraitImages = [
  { src: '/images/gallery-1.jpg', title: '작품 1' }, 
  { src: '/images/gallery-2.jpg', title: '작품 2' }, 
  { src: '/images/gallery-3.jpg', title: '작품 3' }, 
  { src: '/images/gallery-4.jpg', title: '작품 4' }
];

const GalleryItem = ({ image, index, aspectRatio }: { image: any, index: number, aspectRatio: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
    className={`relative group overflow-hidden rounded-sm mb-4 bg-light-gray ${aspectRatio}`}
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

        {/* [1구역 - 상단]: 일반 가로형 사진 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {landscapeImages.map((img, idx) => (
            <GalleryItem key={img.src} image={img} index={idx} aspectRatio="aspect-[16/9]" />
          ))}
        </div>

        {/* [2구역 - 중단]: 나무와 파도 사진 (독립 2열) */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {sceneryImages.map((img, idx) => (
            <GalleryItem key={img.src} image={img} index={idx} aspectRatio="aspect-[16/9]" />
          ))}
        </div>

        {/* [3구역 - 최하단]: 세로형 인물 사진 (한 줄에 4장 꽉 차게) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portraitImages.map((img, idx) => (
            <GalleryItem key={img.src} image={img} index={idx} aspectRatio="aspect-[3/4]" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
