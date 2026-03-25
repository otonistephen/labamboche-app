import './HeroImage.css';
import { images } from '@/app/_data/data';
import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className='hero-right'>
      
      <div className='hero-image-wrapper'>
        <Image
          src={images.pastries}
          alt='hero image'
          width={300}
          height={300}
          className='hero-image'
        />
       
        
      </div>
    </div>
  );
}
