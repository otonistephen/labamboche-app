import Image from 'next/image';
import './Hero.css';
import { images } from '@/app/_data/data';
import HeroText from '../HeroText/HeroText';


export default function Hero() {
  return (
    <section className='hero'>
     <div className="hero-overlay"></div>
      <Image
           src={images.cakeandmacarons}
        // src={images.cookies_gradient}
        // src={images.background}
        // src={images.cakes}
        
        fill
       
        className='hero-image'
        alt='Hero Image'
        priority
        style={{objectPosition:'10% right'}}
      
    
      />
      <div className='container'>
        <HeroText />
        {/* <HeroImage /> */}
      </div>
    </section>
  );
}
