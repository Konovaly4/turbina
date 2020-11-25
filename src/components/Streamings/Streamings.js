import React from 'react';
import './streamings.css';

function Streamings (props) {
  if(props.hidden){
    return (
      <li className='header__list-item '>
        <button
        type='button'
          onClick={props.onClick}
          className='header__close-button'
        >
        </button>
      </li>
  );
  }
  return (
      <li className={ props.hidden ? 'header__list-item  header__list-item_hidden': 'header__list-item' }>
        <button
        type='button'
          onClick={props.onClick}
          className='header__button'
        >
         {props.title}
        </button>
      </li>
  );
}

export default Streamings;

