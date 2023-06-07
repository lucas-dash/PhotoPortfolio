import aboutImg from '../assets/amir-hosseini-8SqJMKk-8ak-unsplash.jpg';
import { useInView, motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const textRef = useRef(null);

  const isInView = useInView(ref, { once: true });
  const textInView = useInView(textRef, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView || textInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls, textInView]);

  return (
    <section className="container mx-auto mt-28" id="about">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col items-center">
          <motion.h2
            className="font-primary text-3xl font-medium pb-14"
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            About me
          </motion.h2>

          <motion.div
            className=" max-w-[340px] h-[400px] rounded-[10px] overflow-hidden shadow-lg shadow-textSecondary/50"
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 0.5,
              delay: 0.7,
              type: 'spring',
              stiffness: 80,
            }}
          >
            <img
              src={aboutImg}
              alt="me on photo"
              loading="lazy"
              className="w-full h-full object-cover aspect-video"
            />
          </motion.div>
        </div>

        <div className="flex items-center">
          <motion.p
            className="text-xl font-secondary w-max p-5"
            ref={textRef}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nam
            vel perspiciatis sit impedit doloremque provident delectus neque
            odio exercitationem repellendus magnam ipsum id labore, facilis
            dignissimos! Iure, possimus quia.
          </motion.p>
        </div>
      </article>
    </section>
  );
};
export default About;
