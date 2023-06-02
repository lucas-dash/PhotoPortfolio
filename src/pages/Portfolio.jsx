import About from '../components/About';
import Shooting from '../components/Shooting';
import Showcase from '../components/Showcase';

const Portfolio = () => {
  return (
    <main className="bg-gradient-to-br from-detail to-accent rounded-[30px] -mt-5 px-2 pb-10 relative z-30">
      <Showcase />
      <About />
      <Shooting />
    </main>
  );
};
export default Portfolio;
