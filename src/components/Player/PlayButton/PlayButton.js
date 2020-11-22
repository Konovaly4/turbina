import PlayButton from '../svg/PlayButton';
import PauseButton from '../svg/PauseButton';
import './PlayButton.css';

function PlayPauseButton ({currentTrack, play, playToggler}) {
  return (
    <button className='play-button' onClick={currentTrack.length !== 0 ? playToggler : undefined}>
        {!play && <PlayButton />}
        {play && <PauseButton />}
      </button>
  )
}

export default PlayPauseButton;
