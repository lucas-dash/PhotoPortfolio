import { motion } from 'framer-motion';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ selected, setSelected, activeCategory }) => {
  useEffect(() => {
    if (selected) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [selected]);

  if (!selected) {
    return <></>;
  }

  return (
    <div
      className="fixed inset-0 bg-textPrimary/70 z-50 cursor-pointer h-screen w-screen"
      onClick={() => setSelected(null)}
    >
      <div
        // onClick={(e) => e.stopPropagation()}
        className="w-full absolute top-1/2 -translate-y-1/2 px-2 "
      >
        <motion.div
          layoutId={`card-${selected}`}
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="h-min max-w-[400px] mx-auto pointer-events-none"
        >
          <img
            src={activeCategory[selected - 1]}
            alt="gallery image"
            className=" h-full w-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Modal;

Modal.propTypes = {
  selected: PropTypes.number,
  setSelected: PropTypes.func.isRequired,
  activeCategory: PropTypes.array.isRequired,
};
