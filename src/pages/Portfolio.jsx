import About from '../components/About';
import Shooting from '../components/Shooting';
import Showcase from '../components/Showcase';

const Portfolio = () => {
  return (
    <main
      className="rounded-3xl sm:rounded-[30px] -mt-5 px-2 pb-10 relative z-30"
      style={{ background: 'linear-gradient(180deg, #F7F8F8, #EEDA78' }}
    >
      <Showcase />
      <About />
      <Shooting />
    </main>
  );
};
export default Portfolio;
