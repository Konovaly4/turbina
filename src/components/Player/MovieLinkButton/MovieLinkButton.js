import {memo} from 'react';
import cn from 'classnames';
import MovieButton from '../svg/MovieButton';
import './MovieLinkButton.css';

const MovieLinkButton = memo(({href, visibility}) => {
  console.log('moviebutton-re-render')
  return (
    <button className={cn('movie-link-button', {
      'movie-link-button_hidden': href === undefined || !visibility,
      })}>
      <MovieButton />
      <a className='video-link' href={href} target='blank'>
    </a>
  </button>
  )
})

export default MovieLinkButton;
