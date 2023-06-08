import Navbar from '../components/Navbar';
import heroImage from '../assets/heroimg.jpeg';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

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

  const pathVariant = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: 'easeInOut', delay: 1 },
    },
  };

  return (
    <header className="h-screen overflow-hidden">
      <Navbar />

      <div className="grid grid-row-2 gap-8 sm:gap-0 sm:grid-cols-6 sm:grid-rows-4 h-[90vh] w-full ">
        <div className="hidden sm:flex max-h-96 items-center sm:row-start-2 sm:row-end-4 w-max -translate-x-10 bg-gradient-to-br from-detail to-detail/10 rounded-r-full">
          <Link
            to="recent"
            spy={true}
            offset={-30}
            smooth={true}
            duration={100}
            aria-label="scrool down"
            role="button"
          >
            <div className="transform rotate-90 flex items-center -translate-x-4 cursor-pointer ">
              <h3 className="font-primary text-textPrimary text-3xl -translate-x-8">
                Scroll down
              </h3>
              <div>
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
          </Link>
        </div>

        {/* hero text */}
        <div className="flex justify-center sm:col-start-2 sm:col-end-4 sm:row-start-2 sm:row-end-4">
          <h1 className="text-textPrimary font-primary font-normal text-4xl max-w-[250px] md:text-5xl sm:max-w-sm translate-y-16 ">
            I&apos;m capturing your{' '}
            <span className="relative z-10">
              moments.
              <div className="absolute top-0.5 -left-2 md:top-1.5 md:-left-1.5 opacity-80 -z-10 h-20 w-[180px] md:w-[229px]">
                <svg
                  viewBox="0 0 229 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    variants={pathVariant}
                    initial="hidden"
                    animate="visible"
                    d="M176.364 11.4428C140.143 -3.84022 70.4936 -1.25462 34.7423 12.1188C18.4603 18.2095 -11.5632 35.8575 6.70626 52.5195C9.92852 55.4584 13.8453 57.8459 17.8977 59.9119C62.4964 82.6475 124.7 80.3321 172.564 66.7281C179.703 64.6992 186.727 62.2907 193.19 59.0171C198.023 56.5688 202.696 53.5342 206.46 49.9928C217.478 39.6255 214.6 29.1922 202.745 20.4029C189.001 10.2124 170.205 7.05445 152.47 5.32496C136.962 3.81268 121.473 3.52229 105.892 4.13949C76.67 5.29686 42.9938 7.13844 18.4853 21.0707C7.78068 27.1561 -3.72008 40.1595 5.45573 50.684C15.3989 62.0884 38.8438 65.7812 54.613 68.1877C97.1535 74.6801 164.464 71.4609 203.213 54.4239C207.392 52.5867 211.625 50.8745 215.363 48.4586C218.316 46.5496 221.144 44.3728 223.598 42.0171C240.983 25.3224 202.189 14.8256 188.507 13.0229C145.466 7.35208 81.7638 -0.831526 42.1254 14.254"
                    stroke="#625D5D"
                    strokeWidth="2"
                    strokeMiterlimit="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </span>
          </h1>
        </div>

        <motion.div
          className="flex justify-center sm:items-center sm:col-start-4 sm:col-end-7 sm:row-start-2 sm:row-end-4"
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, type: 'spring', stiffness: 60 }}
        >
          <div className="max-w-max max-h-max">
            <div className="w-[280px] sm:w-[300px] md:w-auto max-w-md max-h-80 aspect-square relative z-10 sm:-translate-x-3">
              <motion.div
                className="absolute inset-0 translate-x-2 translate-y-2 -z-10 border-2 border-textSecondary rounded-xl"
                variants={bgVariant}
                initial="init"
                animate="animate"
                transition={{
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 160,
                  delay: 0.75,
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
