import './Reservation.css';
import ReservationForm from '../_components/ReservationForm/ReservstionForm';
import Image from 'next/image';
import { images } from '../_data/data';

export default function Reservation() {
  return (
    <div className='reservation-section'>
      <div className='reservation-hero'>
        <div className='reservation-overlay'></div>
        <div className='reservation-background-image'>
          <Image
            src={images.reservation}
            alt='restaurant image'
            fill
           
            priority
            placeholder='blur'
            blurDataURL={images.reservation}
            style={{ objectFit: 'cover', objectPosition: 'center 75%' }}
          />
        </div>
      </div>
      <div className='reservation-hero-content'>
        <div className='container'>
          <h1 className='reservation-title'>Reservation</h1>
        </div>
      </div>
      <div className='container form-container'>
        <div className='reservation-container'>
          <h1>Make a reservation</h1>
          <p className='reservation-note'>
            * We will call or email you to confirm your reservation within 24
            hours.
          </p>
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}
