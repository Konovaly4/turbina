import {memo} from 'react';
import cn from 'classnames';
import './MovieLinkButton.css';

const MovieLinkButton = memo(({href, visibility, windowWidth}) => {
  return (
    <button className={cn('movie-link-button', {
      'movie-link-button_small': windowWidth <= 480,
      'movie-link-button_big': windowWidth > 480,
      'movie-link-button_hidden': href === undefined || !visibility,
      })}>
      <a className='video-link' href={href} target='blank'>
    </a>
  </button>
  )
})

export default MovieLinkButton;
