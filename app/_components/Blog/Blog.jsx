import './Blog.css';
import Image from 'next/image';
import { blogList, images } from '@/app/_data/data';

export default function Blog() {
  return (
    <section className='blog-section'>
      <div className='container'>
        <h2 className='blog-title'>La bamboche Blog and News</h2>
        <p className='blog-subtitle'>
          Stay updated with our latest creations, seasonal specials, events, and
          behind-the-scenes stories from both our Leslieville and North York
          locations.
        </p>

        <div className='blog-content-container'>
          {blogList.map(list => (
            <div key={list.id} className='blog-card'>
              <div className='blog-image-wrapper'>
                <Image
                  src={list.image}
                  alt={list.title}
                  width={250}
                  height={200}
               
                  className='blog-content-image'
                />
              </div>
              <div className='blog-content'>
                <div className='blog-content-wrapper'>
                  <div className='date-wrapper-header'>
                    <h3>{list.title}</h3>
                    <p className='date-span'>
                      <span>
                        <i className='bx  bx-calendar-alt'></i>{' '}
                      </span>
                      {list.date}
                    </p>
                  </div>
                  <p className='content-post'>{list.post}</p>
                </div>
              </div>
              <button className='read-more-btn'>
                read more<i className='bx  bx-chevrons-right'></i>{' '}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
