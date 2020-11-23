import {memo} from 'react';
import PlayButton from '../svg/PlayButton';
import PauseButton from '../svg/PauseButton';
import './PlayButton.css';

const  PlayPauseButton = memo(({currentTrack, play, playToggler}) => {
  console.log('playbutton-re-render');
    return (
      <button className='play-button' onClick={currentTrack.length !== 0 ? playToggler : undefined}>
          {!play && <PlayButton />}
          {play && <PauseButton />}
        </button>
    )
  }
)

export default PlayPauseButton;
