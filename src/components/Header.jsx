import Navbar from '../components/Navbar';
import highlight from '../assets/highlight.svg';
import heroImage from '../assets/amir-hosseini-8SqJMKk-8ak-unsplash.jpg';
import { motion } from 'framer-motion';

const Header = () => {
  const bgVariant = {
    init: {
      y: 0,
      x: 0,
    },
    animate: {
      y: 10,
      x: 10,
    },
  };

  return (
    <header className="h-screen">
      <Navbar />

      <div className="grid grid-row-2 sm:grid-cols-6 sm:grid-rows-4 h-[90vh] w-full">
        {/* scroll down cta */}
        <div className="hidden sm:flex items-center sm:row-start-2 sm:row-end-4 w-max bg-gradient-to-tr from-detail to-detail/10 rounded-r-full -translate-x-10">
          <div className="transform rotate-90 flex items-center -translate-x-4">
            <h3 className="font-primary  text-textPrimary text-3xl -translate-x-8">
              Scroll down
            </h3>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="200"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* hero text */}
        <div className="flex justify-center sm:col-start-2 sm:col-end-4 sm:row-start-2 sm:row-end-4">
          <h1 className="text-textPrimary font-primary font-normal text-4xl max-w-[250px] md:text-5xl sm:max-w-sm translate-y-16">
            I&apos;m capturing your{' '}
            <span className="relative z-10">
              moments.
              <img
                src={highlight}
                alt="highlight svg"
                className="absolute top-1.5 left-0 opacity-80 -z-10"
              />
            </span>
          </h1>
        </div>

        {/* hero image */}
        <motion.div className="flex justify-center sm:items-center sm:col-start-4 sm:col-end-7 sm:row-start-2 sm:row-end-4">
          <div className="max-w-max max-h-max ">
            <div className=" max-w-md max-h-80 aspect-square relative z-10 sm:-translate-x-3">
              <motion.div
                className="absolute inset-0 translate-x-2 translate-y-2 -z-10 border-2 border-textSecondary rounded-xl"
                variants={bgVariant}
                initial="init"
                animate="animate"
                transition={{
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 180,
                  delay: 0.5,
                }}
              ></motion.div>
              <img
                src={heroImage}
                alt="hero image"
                loading="eager"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
export default Header;
