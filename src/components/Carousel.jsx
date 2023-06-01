import { recentImg } from '../utils/carouselImg';
import { motion, useDragControls } from 'framer-motion';

const Carousel = () => {
  const controls = useDragControls();

  return (
    <article className="py-10">
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
              <div className="max-w-md max-h-72 px-6" key={index}>
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
