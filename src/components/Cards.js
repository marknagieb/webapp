import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out My Resume</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Projects'
              label='Bot'
              path='/projects'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Certifications'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Education/Clubs'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Skills'
              label='Adventure'
              path='/skills'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Experience'
              label='Adrenaline'
              path='/experience'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
