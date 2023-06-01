import About from '../components/About';
import Shooting from '../components/Shooting';
import Showcase from '../components/Showcase';

const Portfolio = () => {
  return (
    <section className="bg-gradient-to-br from-detail to-accent rounded-[30px] -mt-5">
      <Showcase />
      <About />
      <Shooting />
    </section>
  );
};
export default Portfolio;
