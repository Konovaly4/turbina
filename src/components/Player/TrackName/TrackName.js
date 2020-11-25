import {memo} from 'react';
import defaultTexts from '../../../data/defaultTexts';
import './TrackName.css';

const TrackName = memo(({currentTrack}) => {
  if (currentTrack.length !== 0) {
    return (
      <p className="player__track-name" >{currentTrack.trackName + ' - ' + currentTrack.artist}{currentTrack.secondArtist ?
        <span className='player__track-name player__feat' > feat </span> : ''}{currentTrack.secondArtist? currentTrack.secondArtist  : ''}
      </p>
    )
  }
   else return (
    <p className="player__track-name">
      {defaultTexts.playerPlaceHolder.noTracks}
    </p>
   )
})

export default TrackName;