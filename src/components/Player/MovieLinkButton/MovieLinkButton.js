import cn from 'classnames';
import MovieButton from '../svg/MovieButton';
import './MovieLinkButton.css';

function MovieLinkButton ({href, visibility}) {
  return (
    <button className={cn('movie-link-button', {
      'movie-link-button_hidden': href === undefined || !visibility,
      })}>
      <MovieButton />
      <a className='video-link' href={href} target='blank'>
    </a>
  </button>
  )
}

export default MovieLinkButton;
