import classNames from 'classnames';
import React, { useState } from 'react';
import { postNewsletter } from '../../../service/axios';
import { INewsletter, INewsletterError } from '../../../types/newsletter';

interface Props {
  setRenderComponent: React.Dispatch<React.SetStateAction<string>>
}

export default function NewsletterForm({ setRenderComponent }: Props): JSX.Element {
  const [formError, setFormError] = useState<INewsletterError>({
    'name': false,
    'email': false
  });
  const [inputs, setInputs] = useState<INewsletter>({
    'name': '',
    'email': ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!inputs.name.length) {
      return setFormError({ ...formError, name: true });
    } else if (!inputs.email.length || !validateEmail(inputs.email)) {
      return setFormError({ name: false, email: true });
    }

    postNewsletter('/newsletter', inputs).then(() => {
      setFormError({ email: false, name: false });
      setRenderComponent('success');
    }).catch((error) => console.log(error));
  }

  function validateEmail(email: string) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  return (
    <form className='newsletter__form' onSubmit={handleSubmit}>
      <h2>Participe de nossas news com promoções e novidades!</h2>

      <div className={classNames({
        'newsletter__form-block': true,
        'form-group--danger': formError.name && formError.email
      })}>
        <div className={classNames({ 'input-group': true, 'input-group--danger': formError.name })}>
          <input
            type='text'
            placeholder='Digite seu nome'
            className='newsletter__input'
            name='name'
            value={inputs.name || ''}
            onChange={handleChange}
          />
          <span className='input-group__message'>Preencha com seu nome completo</span>
        </div>
        <div className={classNames({ 'input-group': true, 'input-group--danger': formError.email })}>
          <input
            type='string'
            placeholder='Digite seu email'
            className='newsletter__input'
            name='email'
            value={inputs.email || ''}
            onChange={handleChange}
          />
          <span className='input-group__message'>Preencha com um e-mail válido</span>
        </div>
        <button type='submit' className='newsletter__button'>Eu quero!</button>
      </div>
    </form>
  );
}