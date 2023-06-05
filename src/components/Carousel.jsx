import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images, count }) => {
  const container = useRef(null);
  const inView = useInView(container, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start('visible');
    }
  }, [inView, mainControls]);

  const variants = {
    enter: (count) => ({ x: count * 320 }),
    center: { x: 0 },
    exit: (count) => ({ x: count * 320 }),
  };

  return (
    <article className="py-10" ref={container}>
      <div className="w-full overflow-hidden ">
        <motion.div
          className="flex py-4 w-[320px] mx-auto"
          variants={{
            hidden: { x: 400 },
            visible: { x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >
          <AnimatePresence custom={count}>
            <motion.div
              className="flex justify-center items-center"
              variants={variants}
              initial="center"
              animate="enter"
              exit="exit"
              custom={count}
              transition={{
                duration: 0.35,
                type: 'spring',
              }}
            >
              {images.map((img, index) => {
                return (
                  <motion.div
                    className="px-2 min-w-[320px] min-h-max"
                    key={index}
                  >
                    <img
                      src={img}
                      alt="recent image"
                      className="w-full h-full object-cover rounded-[10px] pointer-events-none"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </article>
  );
};
export default Carousel;

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
};
