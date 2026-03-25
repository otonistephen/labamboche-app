import './about.css';
import Image from 'next/image';
import { images } from '@/app/_data/data';

export default function aboutPage() {
  return (
    <section className='about'>
      <div className='about-hero'>
        <div className='about-overlay'></div>
        <div className='about-background-image'>
          <Image
            src={images.bakery_3}
            alt='bakery-image'
            fill
            // sizes='100vw'
            priority
            placeholder='blur'
            blurDataURL={images.bakery_1}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className='about-hero-content'>
        <div className='container'>
          <h1>Who we are</h1>
        </div>
      </div>
      <div className='about-container'>
        <div className='container'>
          <div className='about-content'>
            <div className='about-content-wrapper'>
              <h1>About Us</h1>
              <p>
                La Bamboche Patisserie is a woman-owned, Japanese-French
                inspired bakery located in North York. We focus on fresh
                pastries handmade everyday, made with high quality ingredients,
                from flours to final products. Our artisan menu features a
                delicate balance of traditional French techniques and refined
                Japanese flavors.
                </p>
                <br />
                <br />
                <div className='about-content-image mobile-about'>
                  <Image
                    src={images.chef}
                    alt='chef image'
                    width={300}
                    height={300}
                  />
                </div>
                <p>
                From our signature light-as-air cream puffs to intricately
                layered mille-crêpe cakes, every creation is designed to be a
                feast for both the eyes and the palate. Driven by a passion for
                excellence, we source only the finest seasonal fruits and
                premium chocolates to ensure a superior tasting experience in
                every bite.
                <br />
                <br />
                Whether you are stopping by for a morning croissant or seeking a
                bespoke cake for a special celebration, La Bamboche Patisserie
                offers a warm, welcoming escape into the world of elevated
                sweets.
              </p>
            </div>
            <div className='about-content-image desktop-about'>
              <Image
                src={images.chef}
                alt='chef image'
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
