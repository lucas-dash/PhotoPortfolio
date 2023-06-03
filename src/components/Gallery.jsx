import { gallery } from '../utils/gallery';
import { useInView, motion, useAnimation, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

const Gallery = () => {
  const mainControls = useAnimation();

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate('li', { opacity: [0, 1] }, { delay: 0.1 });
      mainControls.start('visible');
    }
  }, [animate, isInView, mainControls]);

  return (
    <section className="min-h-[500px] px-3 sm:px-12 py-20">
      <motion.ul
        className="columns-2 sm:columns-3 gap-3 space-y-3"
        ref={scope}
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
            <motion.li
              key={index}
              className="place-items-center sm:place-items-start"
            >
              <div className="h-max max-w-full rounded-lg overflow-hidden shadow-lg shadow-textSecondary/50">
                <img
                  src={image}
                  alt={`image${index}`}
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};
export default Gallery;
