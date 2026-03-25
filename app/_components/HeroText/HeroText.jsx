import Link from 'next/link';
import './HeroText.css';
import HeroImage from '../HeroImage/HeroImage';

export default function HeroText() {
  return (
    <div className='hero-text'>
      <div className='containers'>
        <div className='hero-content'>
          <h3>Handcrafted with care, baked to delight.</h3>
          <h1>
            Experience French <br /> Pastry at <br /> La Bamboche{' '}
          </h1>

          <p>
            Blending French elegance with Japanese precision. Every pastry is
            made to savor and share.
          </p>
          <Link href='/products'>Explore Our Products</Link>
        </div>
       
      </div>
    </div>
  );
}
