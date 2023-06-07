import {
  familyCategory,
  kidsCategory,
  newBornCategory,
} from '../utils/portfolioImg';
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Modal from './Modal';
import PropTypes from 'prop-types';

const Shooting = () => {
  const [selected, setSelected] = useState(null);

  const headRef = useRef(null);
  const isInView = useInView(headRef, { once: true });
  const mainControls = useAnimation();

  const tabs = [
    { id: 'family', label: 'Family' },
    { id: 'kids', label: 'Kids' },
    { id: 'newborn', label: 'NewBorn' },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const categoryDataMap = {
    family: familyCategory,
    kids: kidsCategory,
    newborn: newBornCategory,
  };

  const activeCategoryData = categoryDataMap[activeTab];

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <section className="container mx-auto mt-24 md:mt-44">
      <motion.h2
        className="font-primary text-3xl font-medium pb-10 text-center md:text-left mx-2"
        ref={headRef}
        variants={{
          hidden: { opacity: 0, y: 55 },
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
          className="flex gap-0 sm:gap-5 bg-[#D9CF9E]/70 py-1 px-6 w-max rounded-3xl mx-auto md:mx-2 "
          style={{ boxShadow: 'inset 0px 3px 4px  #625D5D30' }}
        >
          {tabs.map((tab) => {
            return (
              <button
                key={tab.id}
                aria-label={tab.label}
                className={`${
                  activeTab === tab.id ? 'text-textPrimary' : ''
                } relative py-1 px-4 font-secondary text-sm sm:text-base`}
                onClick={() => setActiveTab(tab.id)}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-detail"
                    style={{ borderRadius: 16 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                  />
                )}
                <span className="relative hover:text-textPrimary/60">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className=" bg-detail rounded-[20px] mt-5 p-3 min-h-[400px]">
          <div className=" columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3">
            {activeCategoryData.map((image, index) => {
              return (
                <Card
                  setSelected={setSelected}
                  index={index}
                  image={image}
                  key={index}
                />
              );
            })}
          </div>
        </div>

        <Modal
          selected={selected}
          setSelected={setSelected}
          activeCategory={activeCategoryData}
        />
      </article>
    </section>
  );
};
export default Shooting;

const Card = ({ setSelected, index, image }) => {
  return (
    <motion.div
      className="h-max max-w-full rounded-lg overflow-hidden cursor-pointer"
      whileTap={{ scale: 0.9 }}
      onClick={() => setSelected(index + 1)}
      layoutId={`card-${index + 1}`}
    >
      <motion.img
        src={image}
        alt={`image${index}`}
        loading="lazy"
        className="object-cover w-full h-full"
        whileHover={{ scale: 1.1 }}
      />
    </motion.div>
  );
};

Card.propTypes = {
  setSelected: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
