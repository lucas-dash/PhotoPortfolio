import image1 from '../assets/portfolio/Materniny/3-1652216698544.jpeg';
import image2 from '../assets/portfolio/Materniny/1-165245041493.jpeg';
import image3 from '../assets/portfolio/Kids/1-1653124775098.jpeg';
import dotgrid from '../assets/dotgrid.svg';
import arrow from '../assets/sketchArrow.svg';

const Showcase = () => {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 pt-20 container mx-auto">
      <div className="flex flex-col items-center justify-evenly">
        <h3 className="font-primary text-3xl max-w-sm text-center text-textPrimary pb-8">
          I make memories that last forever.
        </h3>

        <div className="hidden sm:block">
          <img src={arrow} alt="" />
        </div>
      </div>

      <div
        className="flex items-center justify-center px-3 sm:px-0"
        style={{
          background: `url(${dotgrid}) center center no-repeat`,
        }}
      >
        <div className="grid grid-cols-2 place-items-center gap-4 ">
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
        </div>
      </div>
    </article>
  );
};
export default Showcase;
