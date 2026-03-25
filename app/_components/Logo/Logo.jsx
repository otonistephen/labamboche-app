import './Logo.css';
import { images } from '@/app/_data/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className='logo'>
      <Link href='/'>
        <div className='image'>
          <Image src={images.logo} alt='logo image' width={80} height={80} 
          className='logo-image'/>
        </div>
      </Link>
    </div>
  );
}
