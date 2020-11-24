import {memo} from 'react';
import cn from 'classnames';
import './PlayButton.css';

const  PlayPauseButton = memo(({currentTrack, play, playToggler}) => {
  // console.log('playbutton-re-render');
    return (
      <button className={cn('play-button', {
        'play-button_play-mode': !play,
        'play-button_pause-mode': play,
      })} onClick={currentTrack.length !== 0 ? playToggler : undefined} />
    )
  }
)

export default PlayPauseButton;
