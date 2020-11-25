import {useEffect, useRef} from 'react'
import usePlayer from '../../../hooks/usePlayer';
import PlayPauseButton from '../PlayButton/PlayButton';
import TrackName from '../TrackName/TrackName';
import PlayTime from '../PlayTime/PlayTime';
import Scroll from '../Scroll/Scroll';
import './PlayerControls.css';

const PlayerControls = ({currentTrack}) => {
  const playerRef = useRef();

  const {
    isPlaying,
    duration,
    currentTime,
    playHandle,
    loadHandle,
    timeUpdHandle,
    trackEndHandle,
    setClickedTime,
    setPlaying,
  } = usePlayer(playerRef, currentTrack)

  useEffect(() => {
    setPlaying(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrack])

  return (
    <div className='player__controls'>
      <audio ref={playerRef}
        src={currentTrack.src}
        type="audio/mp3"
        onTimeUpdate={timeUpdHandle}
        onLoadedData={loadHandle}
        onEnded={trackEndHandle}>
        <p>Ваш браузер не поддерживает HTML5 аудио.</p>
      </audio>
      <PlayPauseButton play={isPlaying} currentTrack={currentTrack} playToggler={playHandle} />
      <TrackName currentTrack={currentTrack} />
      <PlayTime currentTime={currentTime} duration={duration} />
      <Scroll setClickedTime={setClickedTime} currentTime={currentTime} duration={duration} />
    </div>
  )
}

export default PlayerControls;