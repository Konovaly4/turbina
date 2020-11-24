import {useState, useEffect, useRef} from 'react';
import classNames from 'classnames';
import usePlayer from '../../hooks/usePlayer';
import TrackName from './TrackName/TrackName';
import PlayTime from './PlayTime/PlayTime';
import MovieLinkButton from './MovieLinkButton/MovieLinkButton';
import InfoSwitchButton from './InfoSwitchButton/InfoSwitchButton';
import Scroll from './Scroll/Scroll';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import ShowHideButton from './ShowHideButton/ShowHideButton';
import PlayPauseButton from './PlayButton/PlayButton';
import audioData from '../../data/audioData';
import emptyCover from '../../images/player/rectangle.jpg'
import './player.css';

const Player = (props) => {
  const [visibility, setVisibility] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [titleMode, setTitleMode] = useState('releases');
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

  const playerRef = useRef();

  console.log('re-render');

  useEffect(() => {
    const changeWindowWidth = () => {
      setWindowWidth(document.documentElement.clientWidth);
    }

    window.addEventListener('resize', changeWindowWidth);

    return () => {
      window.removeEventListener('resize', changeWindowWidth);
    }
  })

  useEffect(() => {
    // for checking workability with 2 tracks comment the script below
    const trackList = audioData.map((i) => ({
    // for checking workability with 2 tracks uncomment the script below
    // const trackList = audioData.slice(0, 2).map((i) => ({
    // for checking workability with 1 track uncomment the script below
    // const trackList = audioData.slice(0, 1).map((i) => ({
      id: i.id,
      artist: i.artist,
      secondArtist: i.secondArtist,
      trackName: i.trackName,
      src: i.src,
      cover: i.cover,
      video: i.video,
      text: i.text,
    }))
    setTracks(trackList);
    setCurrentTrack(trackList[0]);
  }, [])

  const showToggler = () => {
    setVisibility(!visibility);
  }

  const switchMode = () => {
    setTitleMode(titleMode === 'releases' ? 'texts' : 'releases')
  }

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

  const trackSelector = (e) => {
    setPlaying(false);
    const selectedTrack = tracks.find((i) => {
      return (i.id === e.target.id);
    });
    setCurrentTrack(selectedTrack);
  }


  return (
    <section className={classNames("player", {
      "player__mobile-blur": windowWidth <= 480 && !!visibility,
      "player__mobile-blur_stretched": windowWidth <= 480 && !!visibility && !props.isHidden,
      })}>
      <audio ref={playerRef}
        src={currentTrack.src}
        type="audio/mp3"
        onTimeUpdate={timeUpdHandle}
        onLoadedData={loadHandle}
        onEnded={trackEndHandle}>
        <p>Ваш браузер не поддерживает HTML5 аудио.</p>
      </audio>
      <div className={classNames ('player__wrapper', {
        'player__wrapper_hidden' : !visibility,
        'player__wrapper_visible' : visibility,
      })}>
        <img  className={classNames ('player__cover', {'player__cover_hidden': !visibility})}
        src={currentTrack.cover !== undefined ? currentTrack.cover : emptyCover} alt='album-cover'/>
        <PlayPauseButton play={isPlaying} currentTrack={currentTrack} playToggler={playHandle} />
        <TrackName currentTrack={currentTrack} />
        <PlayTime currentTime={currentTime} duration={duration} />
        <MovieLinkButton href={currentTrack.video} visibility={visibility} />
        <InfoSwitchButton visibility={visibility} setTitle={switchMode} titleMode={titleMode} />
        <ShowHideButton visibility={visibility} showToggler={showToggler} />
        <Scroll setClickedTime={setClickedTime} currentTime={currentTime} duration={duration} />
        <PlayerInfo data={tracks} selector={trackSelector} titleMode={titleMode} currentTrack={currentTrack} />
      </div>
    </section>
  )
}

export default Player;
