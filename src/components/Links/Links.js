import React from 'react';
import './links.css';

function Links(props) {
  return (
      <li className={ props.windowWidth < 660 && !props.hidden ? 'header-links__list-item header-links__list-item_hidden' : 'header-links__list-item'}>
        <a
          href={props.link}
          className='header__link'
          target='blank'
        >
         {props.title}
        </a>
      </li>
  );
}

export default Links;
