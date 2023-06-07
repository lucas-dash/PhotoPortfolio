import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Carousel from './Carousel';
import { recentImg } from '../utils/carouselImg';
import { useState } from 'react';

const Recent = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="text-textPrimary pb-20" id="recent">
      <div className="flex justify-between mt-16 w-11/12 mx-auto">
        <h2 className="font-primary text-3xl sm:text-4xl font-medium">
          Recent Work
        </h2>
        <div className="flex items-center gap-3">
          <button
            className="cursor-pointer disabled:opacity-25 active:scale-95 hover:scale-110 transition-all"
            aria-label="slide left"
            onClick={() => setCount((prev) => prev + 1)}
            disabled={count === 0 ? true : false}
            aria-disabled={count === 0 ? 'true' : 'false'}
          >
            <FiArrowLeft size={25} />
          </button>
          <button
            className="cursor-pointer disabled:opacity-25 active:scale-95 hover:scale-110 transition-all"
            aria-label="slide right"
            onClick={() => setCount((prev) => prev - 1)}
            disabled={count === -(recentImg.length - 1) ? true : false}
            aria-disabled={count === -(recentImg.length - 1) ? 'true' : 'false'}
          >
            <FiArrowRight size={25} />
          </button>
        </div>
      </div>
      <Carousel images={recentImg} count={count} />
    </section>
  );
};
export default Recent;
