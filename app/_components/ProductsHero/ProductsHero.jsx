import './ProjectsHero.css';
import Image from 'next/image';
import { images } from '@/app/_data/data';

export default function ProductsHero() {
  return (
    <div className='products-hero'>
      <div className='products-overlay'></div>
      <div className='background-img'>
        <Image
          src={images.pastry_2}
          alt='Products Hero'
          fill
          sizes='100vw'
          priority
          placeholder='blur'
          blurDataURL={images.pastry_2}
          style={{ objectFit: 'cover' }}
        />
        <div className='products-hero-content'>
          <div className='container'>
            <h1>
              {' '}
              our products 
              {/* including cakes, pastries,
              sandwiches, and more.  */}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
