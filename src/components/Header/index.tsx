import React from 'react';

import SearchInput from './SearchInput';
import CartHeader from './HeaderCart';

import MenuIcon from '../../assets/menu-icon.svg';
import UserIcon from '../../assets/user-icon.svg';
import './styles.scss';

export default function Header(): JSX.Element {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__menu--mobile'>
          <MenuIcon />
        </div>

        <div className='header__logo'>
          <img src='/1e617ac05a7fddfc1f24.png' />
        </div>

        <div className='header__search--desktop'>
          <SearchInput />
        </div>

        <div className='header__account'>
          <a href='#0'>
            <UserIcon />
            Minha Conta
          </a>
        </div>

        <CartHeader />
      </div>

      <div className='header__search--mobile container'>
        <SearchInput />
      </div>
    </div>
  );
}
