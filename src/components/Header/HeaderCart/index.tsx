import React from 'react';

import CartIcon from '../../../assets/cart-icon.svg';
import './styles.scss';

export default function HeaderCart(): JSX.Element {
  return (
    <button className='header-cart'>
      <CartIcon />
      <div className='header-cart__quantity-block'>
        <span className='header-cart__quantity'>1</span>
      </div>
    </button>
  );
}