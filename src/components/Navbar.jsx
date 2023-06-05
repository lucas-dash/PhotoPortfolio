import logo from '../assets/Logo.svg';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiInstagram, FiFacebook, FiMail } from 'react-icons/fi';

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    if (mobileNav) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [mobileNav]);

  return (
    <motion.nav
      className=" flex items-center justify-between text-textPrimary h-[60px] container mx-auto px-2 relative z-40"
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 60 }}
    >
      <div className="flex items-center gap-2 font-primary font-medium text-lg">
        <img
          src={logo}
          alt="logo"
          className="w-[35px] sm:w-[42px] h-[35px] sm:h-[42px]"
        />
        <p>Lucie Homolková</p>
      </div>

      {/* hamburger btn */}
      <motion.button
        initial="hide"
        animate={mobileNav ? 'show' : 'hide'}
        onClick={toggleMobileNav}
        className="sm:hidden flex flex-col space-y-1 relative z-10"
      >
        <motion.span
          variants={{
            hide: {
              rotate: 0,
            },
            show: {
              rotate: 45,
              y: 6,
            },
          }}
          className="w-6 bg-black h-[2px] block"
        ></motion.span>
        <motion.span
          variants={{
            hide: {
              opacity: 1,
            },
            show: {
              opacity: 0,
            },
          }}
          className="w-6 bg-black h-[2px] block"
        ></motion.span>
        <motion.span
          variants={{
            hide: {
              rotate: 0,
            },
            show: {
              rotate: -45,
              y: -5,
            },
          }}
          className="w-6 bg-black h-[2px]  block"
        ></motion.span>
      </motion.button>

      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: 'spring',
              bounce: 0.1,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                hide: {
                  x: '-100%',
                  transition: {
                    type: 'spring',
                    bounce: 0.1,
                    when: 'afterChildren',
                    staggerChildren: 0.15,
                  },
                },
                show: {
                  x: '0%',
                  transition: {
                    type: 'spring',
                    bounce: 0.1,
                    when: 'beforeChildren',
                    staggerChildren: 0.15,
                  },
                },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="fixed inset-0 bg-accent p-6 flex flex-col justify-center space-y-10 sm:hidden"
            >
              <motion.ul
                variants={{
                  hide: {
                    y: '25%',
                    opacity: 0,
                  },
                  show: {
                    y: '0%',
                    opacity: 1,
                  },
                }}
                className="list-none space-y-6"
              >
                <li>
                  <a
                    href="#"
                    className="text-5xl font-medium font-secondary text-white hover:text-detail transition-all"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-5xl font-medium font-secondary text-white hover:text-detail transition-all"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-5xl font-medium font-secondary text-white hover:text-detail transition-all"
                  >
                    Gallery
                  </a>
                </li>
              </motion.ul>
              <motion.div
                variants={{
                  hide: {
                    y: '25%',
                    opacity: 0,
                  },
                  show: {
                    y: '0%',
                    opacity: 1,
                  },
                }}
                className="w-full h-[2px] rounded-full bg-detail"
              ></motion.div>
              <motion.ul
                variants={{
                  hide: {
                    y: '25%',
                    opacity: 0,
                  },
                  show: {
                    y: '0%',
                    opacity: 1,
                  },
                }}
                className="list-none flex justify-center gap-x-4"
              >
                <li>
                  <motion.div
                    className="bg-detail flex items-center justify-center rounded-lg w-10 h-10 "
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      duration: 0.2,
                      type: 'spring',
                      stiffness: 180,
                    }}
                  >
                    <a href="#" target="_blank">
                      <FiMail size={24} />
                    </a>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    className="bg-detail flex items-center justify-center rounded-lg w-10 h-10 "
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      duration: 0.2,
                      type: 'spring',
                      stiffness: 180,
                    }}
                  >
                    <a href="#" target="_blank">
                      <FiInstagram size={24} />
                    </a>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    className="bg-detail flex items-center justify-center rounded-lg w-10 h-10 "
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      duration: 0.2,
                      type: 'spring',
                      stiffness: 180,
                    }}
                  >
                    <a href="#" target="_blank">
                      <FiFacebook size={24} />
                    </a>
                  </motion.div>
                </li>
              </motion.ul>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>

      <ul className="hidden sm:flex items-center gap-4 md:gap-10 font-secondary text-lg">
        <li className="cursor-pointer">
          <a href="#">About</a>
        </li>
        <li className="cursor-pointer">
          <a href="#">Portfolio</a>
        </li>
        <li className="cursor-pointer">
          <a href="#">Gallery</a>
        </li>
      </ul>

      <div className="hidden sm:block">
        <motion.button
          className="font-secondary font-bold bg-accent px-9 py-2 rounded-[15px] shadow-md shadow-textSecondary/50 active:shadow-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact
        </motion.button>
      </div>
    </motion.nav>
  );
};
export default Navbar;
