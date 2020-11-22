import cn from 'classnames';
import MovieButton from '../svg/MovieButton';
import './MovieLinkButton.css';

function MovieLinkButton (props) {
  return (
    <button className={cn('movie-link-button', {
      'movie-link-button_hidden': props.href === undefined || !props.visibility,
      })}>
      <MovieButton />
      <a className='video-link' href={props.href} target='blank'>
    </a>
  </button>
  )
}

export default MovieLinkButton;
