import logo from '../assets/Logo.svg';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className=" flex items-center justify-between text-textPrimary h-[60px] container mx-auto px-2 relative z-40"
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 90 }}
    >
      <div className="flex items-center gap-2 font-primary font-medium text-lg">
        <img src={logo} alt="logo" />
        <p>Lucie Homolková</p>
      </div>
      <ul className="hidden sm:flex items-center gap-4 md:gap-10 justify-between font-secondary text-lg">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Portfolio</li>
        <li className="cursor-pointer">Services</li>
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
