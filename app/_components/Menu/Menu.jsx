'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Menu.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, FreeMode } from 'swiper/modules';
import { listMenu, menuList } from '@/app/_data/data';
import Image from 'next/image';

import Link from 'next/link';

export default function Menu() {
  return (
    <section className='menu' id='menu'>
      <div className='container'>
        <div className='menu-container'>
          <div className='menu-content'>
            <h2 className='menu-h2'>Our Menu</h2>
            <p>
              Enjoy delicious cupcakes, sweet and savory pastries, or order a
              soup and sandwich. From Japanese pastries to almond croissants and
              chocolate puffs, we have options for everyone. We also have
              gluten-free and vegan cookie options.
            </p>
            <h3>Explore Our Menu</h3>
            <ul className='list-menu'>
              <li>Cakes and Macarons</li>
              <li>Cookies and Tart</li>
              <li>croissants and pastries</li>
              <li>Jam, Honey and Beverages</li>
              <li>pasta, quiches, soups and sandwishes</li>
              <li>scones, muffins and bread</li>
              <li></li>
            </ul>
            <Link href='/products'> Order Now</Link>
          </div>

          <div className='products'>
            <h3>Featured items</h3>
            <Swiper
              //   modules={[Autoplay, FreeMode]}
              //   spaceBetween={0}
              //   freeMode={true}
              //   slidesPerView={2}
              //   loop={true}
              //   speed={3000}
              //   autoplay={{
              //     delay: 0,
              //     disableOnInteraction: false,
              //   }}
              //   breakpoints={{
              //     320: { slidesPerView: 1.5, spaceBetween: 120 },
              //     360: { slidesPerView: 2, spaceBetween: 240 },
              //     430:{slidesPerView: 3, spaceBetween:340},
              //     767: { slidesPerView: 6},
              //     1024: { slidesPerView: 2 },
              //   }}
              //   className='product-carousel'
              // >
              modules={[Autoplay, FreeMode]}
              spaceBetween={20} // ← start with reasonable spacing
              freeMode={true}
              slidesPerView='auto' // ← very helpful for responsive cards
              loop={true}
              speed={3000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1.4, spaceBetween: 16 },
                480: { slidesPerView: 2, spaceBetween: 20 },
                640: { slidesPerView: 3, spaceBetween: 24 },
                768: { slidesPerView: 3, spaceBetween: 26 },
                1024: { slidesPerView: 3, spaceBetween: 26 },
                1280: { slidesPerView: 3, spaceBetween: 26 },
              }}
              className='product-carousel'
            >
              {listMenu.map(item => (
                <SwiperSlide key={item.id} className='product-card'>
                  <div className='product-card-container'>
                    <div className='product-card-wrapper'>
                      <div className='product-card-image'>
                        <Image
                          src={item.img}
                          alt={item.name}
                          sizes='(max-width: 480px) 40vw, (max-width: 768px) 30vw, 192px'
                          fill
                          style={{ objectFit: 'cover' }}
                          quality={82}
                        />
                      </div>
                      <p className='product-name'>{item.name}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
