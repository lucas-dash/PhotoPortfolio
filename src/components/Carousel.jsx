import { useEffect, useRef } from 'react';
import { recentImg } from '../utils/carouselImg';
import { motion, useDragControls, useInView } from 'framer-motion';

const Carousel = () => {
  const controls = useDragControls();

  // const imageInView = useRef(null);
  // const isInView = useInView(imageInView);

  // useEffect(() => {
  //   console.log(isInView);
  // }, [isInView]);

  return (
    <article className="py-10">
      <div className="w-full bg-pink-500 cursor-grab overflow-hidden">
        <motion.div
          className="flex py-4 bg-green-400 overflow-hidden "
          drag="x"
          dragConstraints={{ right: 0 }}
          dragControls={controls}
          whileTap={{ cursor: 'grabbing' }}
        >
          {recentImg.map((img, index) => {
            return (
              <div className="aspect-video px-5 w-64 " key={index}>
                <img
                  src={img}
                  alt="recent image"
                  className="w-full h-full object-cover rounded-[10px] pointer-events-none"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </article>
  );
};
export default Carousel;

{
  /* <article className="py-10">
      <div className="max-w-full bg-pink-500 cursor-grab overflow-hidden">
        <motion.div
          className="flex py-4 bg-green-400"
          drag="x"
          dragConstraints={{ right: 0 }}
          dragControls={controls}
          whileTap={{ cursor: 'grabbing' }}
        >
          {recentImg.map((img, index) => {
            return (
              <div className="h-full w-full px-6" key={index}>
                <img
                  src={img}
                  alt="recent image"
                  className="w-full h-full object-cover rounded-[10px] pointer-events-none"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </article> */
}
