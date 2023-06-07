import { FiInstagram, FiFacebook, FiMail } from 'react-icons/fi';
import image1 from '../assets/amir-hosseini-8SqJMKk-8ak-unsplash.jpg';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <footer
      className="py-10 px-5 container mx-auto overflow-hidden"
      id="contact"
    >
      <motion.h2
        className="font-primary text-3xl font-medium text-center sm:text-left "
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        Contact me
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-10 sm:pt-2">
        <motion.div
          className="flex flex-col gap-5 justify-center items-center"
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <div className="flex gap-2" aria-label="email">
            <FiMail size={20} />
            <p>lucie.homolkova@gmail.com</p>
          </div>
          <a
            href="https://www.instagram.com/luci_homolkova/?igshid=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            className="flex gap-2 items-center relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-purple-400 hover:before:w-full hover:before:opacity-100"
            aria-label="link to instagram"
            rel="noreferrer"
          >
            <FiInstagram size={20} />
            <p>Instagram</p>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100000356562716"
            target="_blank"
            aria-label="link to facebook"
            className="flex gap-2 items-center relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-purple-400 hover:before:w-full hover:before:opacity-100"
            rel="noreferrer"
          >
            <FiFacebook size={20} />
            <p>facebook</p>
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <div className="rounded-md bg-detail max-h-[480px] max-w-[400px] p-5 shadow-lg shadow-textSecondary/50">
            <div className="max-w-[430px] max-h-[300px] overflow-hidden mb-16 rounded-sm">
              <img
                src={image1}
                alt="my photo at polaroit"
                loading="lazy"
                className="object-cover aspect-square w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
export default Contact;
