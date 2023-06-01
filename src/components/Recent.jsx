import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Carousel from './Carousel';

const Recent = () => {
  return (
    <section className="text-textPrimary pb-20">
      <div className="flex justify-between mt-16 w-11/12 mx-auto">
        <h2 className="font-primary text-3xl sm:text-4xl font-medium">
          Recent Work
        </h2>
        <div className="flex items-center gap-3">
          <FiArrowLeft
            size={20}
            className="cursor-pointer"
            role="button"
            aria-label="slide left"
          />
          <p className="font-secondary text-lg">1 / 10</p>
          <FiArrowRight
            size={20}
            className="cursor-pointer"
            role="button"
            aria-label="slide right"
          />
        </div>
      </div>
      <Carousel />
    </section>
  );
};
export default Recent;
