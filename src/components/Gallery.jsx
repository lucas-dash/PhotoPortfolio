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
    <section className="min-h-[500px] px-3 sm:px-12 py-20">
      <motion.ul
        className="columns-2 sm:columns-3 gap-3 space-y-3"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {gallery.map((image, index) => {
          return (
            <li key={index} className="place-items-center sm:place-items-start">
              <div className="h-max max-w-full rounded-lg overflow-hidden shadow-lg shadow-textSecondary/50">
                <img
                  src={image}
                  alt={`image${index}`}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
};
export default Gallery;
