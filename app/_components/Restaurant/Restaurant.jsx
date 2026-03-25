import './Restaurant.css';
import Image from 'next/image';
import { images, restaurantList } from '@/app/_data/data';
import Link from 'next/link';

export default function Restaurant() {
  return (
    <section className='restaurant'>
      <div className='container'>
        <div className='restaurant-container'>
          <div className='restaurant-image-wrapper'>
            {restaurantList.map(list => (
              <div className='image-wrapper' key={list.id}>
                <Image
                  src={list.image}
                  alt='list.name'
                  width={150}
                  height={150}
                />
              </div>
            ))}
          </div>

          <div className='restaurant-content'>
            <h2>Our Restaurant</h2>
            <p>
              Enjoy a comfortable environment for hanging out with friends and
              family, enjoying a business conversation, with good coffee and
              amazing pastry and lunch options. We also offer gluten-free and
              vegan cookies.
            </p>
            <h3>after dark</h3>
            <p>
              Experience the enchanting ambiance of La Bamboche After Dark,
              where the lights dim and the night begins to sparkle. Our evening
              setting offers a perfect blend of cozy intimacy and lively energy,
              making it an ideal spot for romantic dates, social gatherings, or
              simply unwinding after a long day.
            </p>
            <Link href='/reservation'>Book Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
