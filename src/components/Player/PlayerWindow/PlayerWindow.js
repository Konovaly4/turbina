import React from 'react';
import Scroll from '../Scroll/Scroll';
import PlayTime from '../PlayTime/PlayTime';
import TrackName from  '../TrackName/TrackName';
import PlayerInfoSwitcher from '../PlayerInfoSwitcher/PlayerInfoSwitcher';
// import defaultTexts from '../../../data/defaultTexts';
import './playerWindow.css';

const PlayerWindow = props => {
  console.log('player-window-re-render')

  // let playStatus = props.playStatus;
  let currentTime = props.playTime;
  let currentTrack = props.currentTrack;
  const player = React.useRef();
  // const timer = React.useRef();

  console.log('player-window-currentTime' + currentTime);

  // React.useEffect(() => {
  //   !!playStatus ? player.current.play() : player.current.pause();
  // }, [playStatus])

  // const setTime = () => {
  //   let minutes = Math.floor((player.current.duration - player.current.currentTime) / 60);
  //   let seconds = Math.floor((player.current.duration - player.current.currentTime) - minutes * 60);
  //   let minuteValue;
  //   let secondValue;
  //   minuteValue = (minutes < 10) ? `0${minutes}` :  minutes;
  //   secondValue = (seconds < 10) ? `0${seconds}` :  seconds;
  //   let mediaTime = `${minuteValue}:${secondValue}`;
  //   timer.current.textContent = (isNaN(player.current.duration) ? '' :  mediaTime);

  //   let scrollLength = scrollBar.current.clientWidth * (player.current.currentTime/player.current.duration);
  //   scroll.current.style.width = scrollLength + 'px';
  // }

  // const trackTimeChange = (e) => {
  //   let scrollWidth = e.clientX - scrollBar.current.getBoundingClientRect().left;
  //   player.current.currentTime = (player.current.duration * scrollWidth) / scrollBar.current.clientWidth;
  //   scroll.current.style.width = scrollWidth + 'px';
  // }

  return (
    <div className="player__play-window">
      <div className="player__trackbar">
        <TrackName currentTrack={currentTrack} />
        <PlayTime currentTime={currentTime} />
        <Scroll player={player} />
      </div>
      {props.windowWidth > 480 &&
        <PlayerInfoSwitcher currentTrack={currentTrack} visibility={props.visibility} titleMode={props.titleMode} setTitle={props.setTitle} />
      }
    </div>
  )
}

export default PlayerWindow;
