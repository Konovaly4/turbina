import cn from 'classnames';
import './links.css';

function Links(props) {
  return (
      <li className={cn('header-links__list-item', {
        'header-links__list-item_hidden': props.windowWidth < 660 && !props.hidden
      })}>
        <a
          href={props.link}
          className='header__link'
          target='blank'>
         {props.title}
        </a>
      </li>
  );
}

export default Links;
