import React from 'react';
import './logo.css';
import logoTurbina from '../../images/logo-turbina.svg';

function Logo() {
  return (
    <div className='main__logo'>
      <img
        className='main__logo-image'
        src={logoTurbina}
        alt='Логотип проекта Турбина.'
      />
    </div>
  );
}

export default Logo;
