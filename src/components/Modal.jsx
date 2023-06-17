import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronLeft } from 'react-icons/fi';

const Modal = ({ selected, setSelected, activeCategory }) => {
  console.log(selected);
  const boxRef = useRef(null);
  const leftArrow = useRef(null);
  const rightArrow = useRef(null);

  const handleClickOutside = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setSelected(null);
    }
  };

  useEffect(() => {
    if (selected) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [selected]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!selected) {
    return <></>;
  }

  return (
    <div
      className="fixed inset-0 bg-textPrimary/70 z-40 cursor-pointer h-screen w-screen "
      // onClick={() => setSelected(null)}
    >
      <div
        // onClick={(e) => e.stopPropagation()}
        ref={boxRef}
        onClick={handleClickOutside}
        className="w-full absolute h-0.5 top-1/2 -translate-y-1/2 px-2 flex items-center z-50"
      >
        <button
          className="h-8 w-8 rounded-full text-white border border-secondary flex items-center justify-center active:scale-95 disabled:text-textSecondary disabled:border-textSecondary"
          onClick={() => setSelected(selected - 1)}
          ref={leftArrow}
          aria-label="see to previous image"
          disabled={selected === 1}
          aria-disabled={selected === 1}
        >
          <FiChevronLeft size={35} />
        </button>
        <motion.div
          layoutId={`card-${selected}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="h-min max-w-[400px] mx-auto pointer-events-none"
        >
          <img
            src={activeCategory[selected - 1]}
            alt="gallery image"
            className=" h-full w-full object-cover rounded-lg"
          />
        </motion.div>
        <button
          ref={rightArrow}
          className="h-8 w-8 rounded-full z-50 text-white border border-secondary flex items-center justify-center active:scale-95 disabled:text-textSecondary disabled:border-textSecondary"
          onClick={() => setSelected(selected + 1)}
          aria-label="see to next image"
          disabled={selected === activeCategory.length}
          aria-disabled={selected === activeCategory.length}
        >
          <FiChevronRight size={35} />
        </button>
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
