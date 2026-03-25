'use client';
import './ReservationForm.css';
import { useState } from 'react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    location: 'leslieville',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/resend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Reservation sent! We’ll call you to confirm.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
      });
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className='reservation-form'>
      <div className='form-row'>
        <input
          name='name'
          placeholder='Name'
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name='email'
          type='email'
          placeholder='Email'
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className='form-row'>
        <input
          name='phone'
          placeholder='Phone'
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <select
          name='location'
          value={formData.location}
          onChange={handleChange}
          required
        >
          <option value='leslieville'>Leslieville (Queen St E)</option>
          <option value='north-york'>North York (Avenue Rd)</option>
        </select>
      </div>
      <div className='form-row'>
        <input
          name='date'
          type='date'
          required
          value={formData.date}
          onChange={handleChange}
        />
        <input
          name='time'
          type='time'
          required
          value={formData.time}
          onChange={handleChange}
        />
      </div>
      <div className='form-row'>
        <select name='guests' value={formData.guests} onChange={handleChange}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
            <option key={n} value={n}>
              {n} Guest{n > 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </div>
      <button type='submit' className='submit-btn'>Send Reservation</button>
    </form>
  );
}
