import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './style.scss';

const items = [
  <div className='carousel-banner-item'>
    <div className='carousel-banner-item__container'>
      <div className='carousel-banner-item__text'>
        <span>Olá, o que você está buscando?</span>
        <h2>Criar ou migrar seu e-commerce?</h2>
      </div>
    </div>
    <div className='carousel-banner-item__image'></div>
  </div>,
  <div className='carousel-banner-item'>
    <div className='carousel-banner-item__container'>
      <div className='carousel-banner-item__text'>
        <span>Olá, o que você está buscando?</span>
        <h2>Criar ou migrar seu e-commerce?</h2>
      </div>
    </div>
    <div className='carousel-banner-item__image'></div>
  </div>,
  <div className='carousel-banner-item'>
    <div className='carousel-banner-item__container'>
      <div className='carousel-banner-item__text'>
        <span>Olá, o que você está buscando?</span>
        <h2>Criar ou migrar seu e-commerce?</h2>
      </div>
    </div>
    <div className='carousel-banner-item__image'></div>
  </div>,
  <div className='carousel-banner-item'>
    <div className='carousel-banner-item__container'>
      <div className='carousel-banner-item__text'>
        <span>Olá, o que você está buscando?</span>
        <h2>Criar ou migrar seu e-commerce?</h2>
      </div>
    </div>
    <div className='carousel-banner-item__image'></div>
  </div>,
];

export default function CarouselBanner(): JSX.Element {
  return (
    <div className='carousel-banner'>
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls={true}
        infinite={true}
        autoPlay={true}
        autoPlayInterval={10000}
      />
    </div>
  );
}