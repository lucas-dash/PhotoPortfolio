import { useEffect, useState } from 'react';
import {
  familyCategory,
  kidsCategory,
  newBornCategory,
} from '../utils/portfolioImg';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

const Shooting = () => {
  const headRef = useRef(null);
  const isInView = useInView(headRef, { once: true });
  const mainControls = useAnimation();

  const categories = ['Family', 'Kids', 'NewBorn'];
  const [activeCategory, setActiveCategory] = useState('Family');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const categoryDataMap = {
    Family: familyCategory,
    Kids: kidsCategory,
    NewBorn: newBornCategory,
  };

  const activeCategoryData = categoryDataMap[activeCategory];

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <section className="container mx-auto mt-24 md:mt-44">
      <motion.h2
        className="font-primary text-3xl font-medium pb-14 text-center md:text-left mx-2"
        ref={headRef}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        What Am I Shooting?
      </motion.h2>

      <article>
        <div
          className="flex gap-0 sm:gap-5 md:gap-10 bg-[#D9CF9E]/70 py-1 px-6 w-max rounded-3xl mx-auto md:mx-2 "
          style={{ boxShadow: 'inset 0px 3px 4px #625D5D' }}
        >
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className={`${
                  activeCategory === category
                    ? 'bg-secondary shadow-md shadow-textSecondaty/50'
                    : ''
                } py-1 px-4 rounded-2xl font-secondary text-sm sm:text-base`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* gallery */}
        <div className=" bg-detail rounded-[20px] mt-5 p-3 min-h-[400px]">
          <div className=" columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3">
            {activeCategoryData.map((image, index) => {
              return (
                <div
                  key={index}
                  className="place-items-center sm:place-items-start"
                >
                  <motion.div
                    className="h-max max-w-full rounded-lg overflow-hidden cursor-pointer"
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.img
                      src={image}
                      alt={`image${index}`}
                      className="object-cover"
                      whileHover={{ scale: 1.1 }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};
export default Shooting;
