import React from 'react';

interface Props {
  setRenderComponent: React.Dispatch<React.SetStateAction<string>>
}

export default function NewsletterSuccess({ setRenderComponent }: Props): JSX.Element {
  return (
    <section className='newsletter__signup-sucess'>
      <h3>Seu e-mail foi cadastrado com sucesso!</h3>
      <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
      <button onClick={() => setRenderComponent('form')}>Cadastrar novo e-mail</button>
    </section>
  );
}
