import {useRef, useEffect} from 'react';
import './PlayTime.css';

function Playtime ({currentTime, duration}) {
  const timerRef = useRef();

  useEffect(() => {
    let minutes = Math.floor((duration - currentTime) / 60);
    let seconds = Math.floor((duration - currentTime) - minutes * 60);
    let minuteValue = (minutes < 10) ? `0${minutes}` :  minutes;
    let secondValue = (seconds < 10) ? `0${seconds}` :  seconds;
    return timerRef.current.textContent = `${minuteValue}:${secondValue}`;
  })

  return (
    <p className="track-time" ref={timerRef}></p>
  )
}

export default Playtime;