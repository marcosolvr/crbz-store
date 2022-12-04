import React, { useState } from 'react';
import NewsletterForm from './NewsletterForm';
import NewsletterSuccess from './NewsletterSuccess';
import './styles.scss';

export default function Newsletter(): JSX.Element {
  const [renderComponent, setRenderComponent] = useState<string>('form');

  return (
    <div className='newsletter'>
      <section className='container'>
        {renderComponent === 'form'
          ? <NewsletterForm setRenderComponent={setRenderComponent} />
          : <NewsletterSuccess setRenderComponent={setRenderComponent} />}
      </section>
    </div>
  );
}
