import image1 from '../assets/portfolio/Materniny/3-1652216698544.jpeg';
import image2 from '../assets/portfolio/Materniny/1-165245041493.jpeg';
import image3 from '../assets/portfolio/Kids/1-1653124775098.jpeg';
import dotgrid from '../assets/dotgrid.svg';
import { useInView, motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Showcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const pathVariant = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: 'easeInOut', delay: 0.55 },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 pt-20 container mx-auto">
      <div className="flex flex-col items-center justify-evenly">
        <motion.h3
          className="font-primary text-3xl max-w-sm text-center text-textPrimary pb-8"
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          I make memories that last forever.
        </motion.h3>

        <motion.div
          className="hidden sm:block"
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <svg
            width="110"
            height="110"
            viewBox="0 0 110 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={pathVariant}
              initial="hidden"
              animate={mainControls}
              d="M89.1292 87.4461C70.7111 89.826 51.8337 87.5492 36.9428 75.0758C23.5021 63.8171 19.7639 47.4376 37.401 38.1651C45.7499 33.7756 58.583 34.1519 64.7975 42.0656C71.7211 50.882 58.9941 58.2316 51.5591 58.4934C34.1936 59.1051 16.7376 46.2245 14.5466 27.3117C11.9518 4.91472 35.1286 5.84043 35.0718 5.98379"
              stroke="#625D5D"
              strokeWidth="4"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path
              variants={pathVariant}
              initial="hidden"
              animate={mainControls}
              d="M76.925 104.153C77.3248 102.139 78.5132 100.51 79.6156 98.8251C83.2351 93.2904 88.9025 88.4867 95.48 86.931C88.1853 86.3023 78.9264 83.0275 75.5172 76.1304"
              stroke="#625D5D"
              strokeWidth="4"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="flex items-center justify-center px-3 sm:px-0"
        style={{
          background: `url(${dotgrid}) center center no-repeat`,
        }}
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.35 }}
      >
        <motion.div
          className="grid grid-cols-2 place-items-center gap-4 "
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <div className="max-w-xs max-h-72 rounded-[10px] overflow-hidden shadow-lg shadow-textSecondary/50">
            <img
              src={image1}
              alt=""
              className="w-full h-full object-cover aspect-square rounded-[10px]"
            />
          </div>
          <div className="max-w-xs max-h-72 rounded-[10px] overflow-hidden shadow-lg shadow-textSecondary/50">
            <img
              src={image3}
              alt=""
              className="w-full h-full object-cover aspect-square rounded-[10px]"
            />
          </div>
          <div className="max-w-xs max-h-72 rounded-[10px] overflow-hidden col-span-2 shadow-lg shadow-textSecondary/50">
            <img
              src={image2}
              alt=""
              className="w-full h-full object-cover aspect-square rounded-[10px]"
            />
          </div>
        </motion.div>
      </motion.div>
    </article>
  );
};
export default Showcase;
