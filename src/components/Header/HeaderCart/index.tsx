import React from 'react';

import CartIcon from '../../../assets/cart-icon.svg';
import { useOrderContext } from '../../../context/OrderContext';
import { IOrderContext } from '../../../types/order';
import './styles.scss';

export default function HeaderCart(): JSX.Element {
  const orderContext: IOrderContext = useOrderContext();

  return (
    <button className='header-cart'>
      <CartIcon />
      <div className='header-cart__quantity-block'>
        <span className='header-cart__quantity'>
          {orderContext.order.items?.length ?? '0'}
        </span>
      </div>
    </button>
  );
}