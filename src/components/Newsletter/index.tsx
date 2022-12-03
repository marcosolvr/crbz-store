import React from 'react';

import './styles.scss';

export default function Newsletter(): JSX.Element {
  return (
    <div className='newsletter'>
      <section className='container'>
        <form className='newsletter__form form-group--danger'>
          <h2>Participe de nossas news com promoções e novidades!</h2>

          <div className='newsletter__form-block'>
            <div className='input-group'>
              <input type='text' placeholder='Digite seu nome' className='newsletter__input' />
              <span className='input-group__message'>Preencha com seu nome completo</span>
            </div>
            <div className='input-group'>
              <input type='text' placeholder='Digite seu email' className='newsletter__input' />
              <span className='input-group__message'>Preencha com um e-mail válido</span>
            </div>
            <button className='newsletter__button'>Eu quero!</button>
          </div>
        </form>

        <section className='newsletter__signup-sucess' style={{ display: 'none' }}>
          <h3>Seu e-mail foi cadastrado com sucesso!</h3>
          <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
          <button>Cadastrar novo e-mail</button>
        </section>
      </section>
    </div>
  );
}
