'use client'
import './Bakery.css';

import Image from 'next/image';
import { bakeryList, images } from '@/app/_data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Bakery() {
  return (
    <section className='bakery-section'>
      <div className='container'>
        <div className='content-container'>
          <div>
            <div className='header-image-text'>
              <h2>Wholesale Bakery Delivery</h2>
              <div className='image-wrapper'>
                <h2>- - - - - - - -</h2>
                <Image
                  src={images.delivery}
                  alt='delivery image'
                  height={70}
                  width={70}
                />
              </div>
            </div>

            <div className='bakery-content'>
              <p>
                {' '}
                We provide a catalog of wholesale products which include:
                croissants, macarons, cookies, butter tarts, scones, and
                quiches. We deliver early in the morning to bakeries and cafés
                in the area. We offer frozen goods for baking in the store, or
                we have them ready to serve.
              </p>
              <div className='btn'>
            <a href="">Order Now</a>
              </div>
            </div>
          </div>
          <div className='bakery-content-image'>
            <div className='image-box'>
              <Image
                src={images.bakery_bread}
                alt='delivery image'
                height={350}
                width={300}
                
                sizes='(max-width: 768px) 100vw, 300px'
                style={{ width:'100%',height:'350px', maxWidth:'300px', display:'block'

                 }}
                className='bakery-image'
              />
            </div>
            {/* <div className='image-box'>
              <Image
                src={images.bakery}
                alt='delivery image'
                height={350}
                width={300}
                
                sizes='(max-width: 768px) 100vw, 300px'
                style={{ width:'100%',height:'350px', maxWidth:'300px', display:'block'

                 }}
                className='bakery-image'
              />
            </div> */}
          </div>
        </div>
        
      </div>
    </section>
  );
}
