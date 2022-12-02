import React from 'react';

import SearchIcon from '../../../assets/search-icon.svg';
import './styles.scss';

export default function SearchInput(): JSX.Element {
  return (
    <form className='search-input'>
      <input 
        type="text" 
        placeholder='O que está procurando?'
      />
      <button>
        <SearchIcon />
      </button>
    </form>
  );
}
