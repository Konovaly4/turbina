import {useRef, useEffect} from 'react';
import './Scroll.css'

function Scroll ({setClickedTime, currentTime, duration}) {
  const scrollBar = useRef();
  const scroll = useRef();

  useEffect(() => {
    let scrollValue = scrollBar.current.clientWidth * (currentTime/duration);
    scroll.current.style.width = scrollValue + 'px';
  },)

  const trackTimeChange = (e) => {
    const scrollStart = scrollBar.current.getBoundingClientRect().left;
    let selectedTime = e.pageX - scrollStart;
    setClickedTime((selectedTime * duration) / scrollBar.current.clientWidth);
  }

  return (
    <div className="player__scroll" ref={scrollBar} onClick={trackTimeChange}>
      <div className="player__scroll-duration" ref={scroll} ></div>
    </div>
  )
}

export default Scroll;
