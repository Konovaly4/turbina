import {useState, useEffect, useRef} from 'react';
import classNames from 'classnames';
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
  const [firstRun, setFirstRun] = useState(0)
  const [visibility, setVisibility] = useState(true);
  const [play, setPlay] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [titleMode, setTitleMode] = useState('releases');
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

  const playerRef = useRef();
  const scrollBarRef = useRef();

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


  useEffect(() => {
    !!play ? playerRef.current.play() : playerRef.current.pause();
  }, [play])

  const setTime = () => {
    let minutes = Math.floor((playerRef.current.duration - playerRef.current.currentTime) / 60);
    let seconds = Math.floor((playerRef.current.duration - playerRef.current.currentTime) - minutes * 60);
    let minuteValue;
    let secondValue;
    minuteValue = (minutes < 10) ? `0${minutes}` :  minutes;
    secondValue = (seconds < 10) ? `0${seconds}` :  seconds;
    let mediaTime = `${minuteValue}:${secondValue}`;
    // timer.current.textContent = (isNaN(playerRef.current.duration) ? '' :  mediaTime);

    // let scrollLength = scrollBar.current.clientWidth * (player.current.currentTime/player.current.duration);
    // scroll.current.style.width = scrollLength + 'px';

    setCurrentTime(mediaTime);
    // console.log('curTime - ' + currentTime)
  }


  const showToggler = () => {
    setVisibility(!visibility);
  }

  const playToggler = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  }

  const trackSelector = (e) => {
    setPlay(false);
    const selectedTrack = tracks.find((i) => {
      return (i.id === e.target.id);
    });
    setCurrentTrack(selectedTrack);
  }

  // const trackChange = (e) => {
  //   setPlay(false);
  //   const selectedTrack = tracks.indexOf(currentTrack);
  //   const nextTrack = tracks[selectedTrack + 1]
  //   if (!!nextTrack) {
  //     setFirstRun(1);
  //     setCurrentTrack(nextTrack);
  //   }
  // }

  useEffect (() => {
    if (firstRun === 0) return;
    const playTrack = () => {
      setPlay(true);
    }
    setFirstRun(1);
    playTrack()
  }, [currentTrack, firstRun])

  const switchMode = () => {
    setTitleMode(titleMode === 'releases' ? 'texts' : 'releases')
  }

  const trackTimeChange = (e) => {
    let scrollBarWidth = e.target.clientWidth;
    let scrollWidth = e.clientX - e.target.getBoundingClientRect().left;
    playerRef.current.currentTime = (playerRef.current.duration * scrollWidth) / scrollBarWidth;
    // scroll.current.style.width = scrollWidth + 'px';
  }


  return (
    <section className={classNames("player", {
      "player_stretched": !props.isHidden,
      "player__mobile-blur": windowWidth <= 480 && !!visibility,
      "player__mobile-blur_stretched": windowWidth <= 480 && !!visibility && !props.isHidden,
      })}>
      <audio ref={playerRef}
        src={currentTrack.src}
        type="audio/mp3"
        onTimeUpdate={setTime}
        onLoadedData={setTime}
        onEnded={props.selector} />
      <div className={classNames ('player__wrapper', {
        'player__wrapper_hidden' : !visibility,
        'player__wrapper_visible' : visibility,
      })}>
        <img  className={classNames ('player__cover', {'player__cover_hidden': !visibility})}
        src={currentTrack.cover !== undefined ? currentTrack.cover : emptyCover} alt='album-cover'/>
        <PlayPauseButton play={play} currentTrack={currentTrack} playToggler={playToggler} />
        <TrackName currentTrack={currentTrack} />
        <PlayTime currentTime={currentTime} />
        <MovieLinkButton href={currentTrack.video} visibility={visibility} />
        {/* <PlayerWindow visibility={visibility}
          currentTrack={currentTrack}
          playTime={currentTime}
          titleMode={titleMode}
          setTitle={switchMode}
          windowWidth={windowWidth}
          selector={trackChange} /> */}
        <InfoSwitchButton visibility={visibility} setTitle={switchMode} titleMode={titleMode} />
        <ShowHideButton visibility={visibility} showToggler={showToggler} />
        <Scroll ref={scrollBarRef} trackTimeChange={trackTimeChange} track={playerRef} />
        {/* {windowWidth <= 480 &&
          <PlayerInfoSwitcher currentTrack={currentTrack} visibility={visibility} titleMode={titleMode} setTitle={switchMode} />
        } */}
        <PlayerInfo data={tracks} selector={trackSelector} titleMode={titleMode} currentTrack={currentTrack} />
      </div>
    </section>
  )
}

export default Player;
