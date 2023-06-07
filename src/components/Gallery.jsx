import { gallery } from '../utils/gallery';
import { useInView, motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Gallery = () => {
  const mainControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <section className="min-h-[500px] px-3 py-20 ">
      <motion.ul
        className="columns-2 sm:columns-3 space-y-3 container mx-auto"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {gallery.map((image, index) => {
          return (
            <li
              key={index}
              className="h-max max-w-max rounded-lg overflow-hidden shadow-lg shadow-textSecondary/50"
            >
              <img
                src={image}
                alt={`image${index}`}
                loading="lazy"
                className="object-cover"
              />
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
};
export default Gallery;
