import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './style.scss';

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();
const items = [
  <div className='carousel-banner-item'>
    <div className='carousel-banner-item__container'>
      <div className='carousel-banner-item__text'>
        <span>Olá, o que você está buscando?</span>
        <h2>Criar ou migrar seu e-commerce?</h2>
      </div>
    </div>
    <div className='carousel-banner-item__image'>
      {/*<img src="https://supernossoio.vtexassets.com/assets/vtex.file-manager-graphql/images/544400b4-56e4-4e10-92ec-dd6d592fa9ca___e1a57242552ed61430bdebf615d713bd.jpg" 
        onDragStart={handleDragStart} role="presentation" style={{ width: "100%" }} />*/}
    </div>
  </div>,
  <div className='carousel-banner-item'>
    <div className='carousel-banner-item__container'>
      <div className='carousel-banner-item__text'>
        <span>Olá, o que você está buscando?</span>
        <h2>Criar ou migrar seu e-commerce?</h2>
      </div>
    </div>
    <div className='carousel-banner-item__image'>
      {/*<img src="https://supernossoio.vtexassets.com/assets/vtex.file-manager-graphql/images/544400b4-56e4-4e10-92ec-dd6d592fa9ca___e1a57242552ed61430bdebf615d713bd.jpg" 
        onDragStart={handleDragStart} role="presentation" style={{ width: "100%" }} />*/}
    </div>
  </div>,
  <div className='carousel-banner-item'>
    <div className='carousel-banner-item__container'>
      <div className='carousel-banner-item__text'>
        <span>Olá, o que você está buscando?</span>
        <h2>Criar ou migrar seu e-commerce?</h2>
      </div>
    </div>
    <div className='carousel-banner-item__image'>
      {/*<img src="https://supernossoio.vtexassets.com/assets/vtex.file-manager-graphql/images/544400b4-56e4-4e10-92ec-dd6d592fa9ca___e1a57242552ed61430bdebf615d713bd.jpg" 
        onDragStart={handleDragStart} role="presentation" style={{ width: "100%" }} />*/}
    </div>
  </div>,
  <div className='carousel-banner-item'>
    <div className='carousel-banner-item__container'>
      <div className='carousel-banner-item__text'>
        <span>Olá, o que você está buscando?</span>
        <h2>Criar ou migrar seu e-commerce?</h2>
      </div>
    </div>
    <div className='carousel-banner-item__image'>
      {/*<img src="https://supernossoio.vtexassets.com/assets/vtex.file-manager-graphql/images/544400b4-56e4-4e10-92ec-dd6d592fa9ca___e1a57242552ed61430bdebf615d713bd.jpg" 
        onDragStart={handleDragStart} role="presentation" style={{ width: "100%" }} />*/}
    </div>
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