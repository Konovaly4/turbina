import {useState, useEffect} from 'react';
import classNames from 'classnames';
import PlayerControls from './PlayerControls/PlayerControls';
import MovieLinkButton from './MovieLinkButton/MovieLinkButton';
import InfoSwitchButton from './InfoSwitchButton/InfoSwitchButton';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import ShowHideButton from './ShowHideButton/ShowHideButton';
import audioData from '../../data/audioData';
import emptyCover from '../../images/player/rectangle.jpg'
import './player.css';

const Player = () => {
  const [visibility, setVisibility] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [titleMode, setTitleMode] = useState('releases');
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

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

  const trackSelector = (e) => {
    const selectedTrack = tracks.find((i) => {
      return (i.id === e.target.id);
    });
    setCurrentTrack(selectedTrack);
  }


  return (
    <>
      {windowWidth <= 480 && !!visibility && <div className='player__mobile-blur' />}
      <section className='player'>
        <div className={classNames ('player__wrapper', {
          'player__wrapper_hidden' : !visibility,
          'player__wrapper_visible' : visibility,
        })}>
          <img  className={classNames ('player__cover', {'player__cover_hidden': !visibility})}
          src={currentTrack.cover !== undefined ? currentTrack.cover : emptyCover} alt='album-cover'/>
          <PlayerControls currentTrack={currentTrack} />
          <MovieLinkButton href={currentTrack.video} visibility={visibility} windowWidth={windowWidth} />
          <InfoSwitchButton visibility={visibility} setTitle={switchMode} titleMode={titleMode} />
          <ShowHideButton visibility={visibility} showToggler={showToggler} />
          <PlayerInfo data={tracks} selector={trackSelector} titleMode={titleMode} currentTrack={currentTrack} />
        </div>
      </section>
    </>
  )
}

export default Player;
