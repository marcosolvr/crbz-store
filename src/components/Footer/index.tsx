import classNames from "classnames";
import React from "react";

import HeadsetIcon from '../../assets/icon-headset.svg';
import MailIcon from '../../assets/icon-mail.svg';
import CorebizTag from '../../assets/corebiz-tag.svg';
import VtexTag from '../../assets/vtex-tag.svg';
import './styles.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container container'>
        <section className='footer__location'>
          <h3>Localização</h3>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </section>

        <div className='footer__contact'>
          <a href="#0" className={classNames({
            'footer__button': true,
            'footer__button__mail': true,
          })}>
            <MailIcon />
            Entre em contato
          </a>

          <a href="#0" className={classNames({
            'footer__button': true,
            'footer__button__phone': true,
          })}>
            <HeadsetIcon />
            Fale com o nosso consultor online
          </a>
        </div>

        <div className='footer__tags-block'>
          <div className='footer__tag'>
            <span>Created by</span>
            <CorebizTag />
          </div>

          <div className='footer__tag'>
            <span>Powered by</span>
            <VtexTag />
          </div>
        </div>
      </div>
    </div>
  );
}