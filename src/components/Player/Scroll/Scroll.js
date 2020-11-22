import {useRef} from 'react';
import './scroll.css'

function Scroll ({player}) {
  const scroll = useRef();
  const scrollBar= useRef();

  const trackTimeChange = (e) => {
    let scrollWidth = e.clientX - scrollBar.current.getBoundingClientRect().left;
    player.current.currentTime = (player.current.duration * scrollWidth) / scrollBar.current.clientWidth;
    scroll.current.style.width = scrollWidth + 'px';
  }

  return (
    <div className="player__scroll" ref={scrollBar} onClick={trackTimeChange}>
      <div className="player__scroll-duration" ref={scroll} ></div>
    </div>
  )
}

export default Scroll;
