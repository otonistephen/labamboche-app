import { applyPxDefaults } from 'framer-motion';
import Bakery from './_components/Bakery/Bakery';
import Blog from './_components/Blog/Blog';
import Hero from './_components/Hero/Hero';
import Location from './_components/Location/Location';
import Menu from './_components/Menu/Menu';
import MostPopular from './_components/MostPopular/MostPopular';
import Restaurant from './_components/Restaurant/Restaurant';
// import HashScrollHandler from './_hooks/HashScrollHandler';
// import SmoothScrollHandler from './_hooks/SmoothScrolling/SmoothScrolling';

export default function Home() {
  return (
  <main style={{paddingTop: '100px'}}>
      <div>
        <Hero />
        <Menu />
        <Bakery />
        <MostPopular />
        <Restaurant />
        <Blog />
        <Location />
        
      </div>
    </main>
  );
}
