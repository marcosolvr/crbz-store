import React from 'react';

import SearchInput from './SearchInput';
import CartHeader from './HeaderCart';

import MenuIcon from '../../assets/menu-icon.svg';
import Logo from '../../assets/corebiz.svg';
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
          <Logo />
        </div>

        <div className='header__search--descktop'>
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

      <div className='container'>
        <SearchInput />
      </div>
    </div>
  );
}
