import {useRef, useEffect} from 'react';
import './Scroll.css'

function Scroll ({trackTimeChange, track}) {
  const scroll = useRef();
  const scrollBar= useRef();

  useEffect(() => {
    let scrollLength = scrollBar.current.clientWidth * (track.current.currentTime/track.current.duration);
    scroll.current.style.width = scrollLength + 'px';
  })

  // const trackTimeChange = (e) => {
  //   let scrollWidth = e.clientX - scrollBar.current.getBoundingClientRect().left;
  //   player.current.currentTime = (player.current.duration * scrollWidth) / scrollBar.current.clientWidth;
  //   scroll.current.style.width = scrollWidth + 'px';
  // }

  return (
    <div className="player__scroll" ref={scrollBar} onClick={trackTimeChange}>
      <div className="player__scroll-duration" ref={scroll} ></div>
    </div>
  )
}

export default Scroll;
