import {useState, useEffect} from 'react';
import logoMarshak from '../../images/logo-marshak.svg';
import Links from '../Links/Links'
import Streamings from '../Streamings/Streamings'
import './header.css';

const linkMarshak = 'https://marshakbooks.ru/'

function Header(props) {
  const [isStreamigsHidden, setIsStreamigsHidden] = useState(false);

  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

  function handleVisible() {
    props.handleVisible()
    setIsStreamigsHidden(!isStreamigsHidden)
  }

  useEffect(() => {
    const changeWindowWidth = () => {
      setWindowWidth(document.documentElement.clientWidth);
    }
    window.addEventListener('resize', changeWindowWidth);
    return () => {
    window.removeEventListener('resize', changeWindowWidth);
    }
  })

  if(windowWidth<=645){
    return (
      <div className='header'>
        <a href={linkMarshak} target='blank'><img className='headerLogo' src={logoMarshak} alt='Логотип книжного магазина Маршак'/></a>
        <ul className="headerLinksList">
          <Streamings
            hidden = {isStreamigsHidden}
            onClick={handleVisible}
            title = 'Стриминги'/>
          <Links
            windowWidth={windowWidth}
            hidden = {isStreamigsHidden}
            link = 'https://music.yandex.ru/home'
            title = 'Яндекс.Музыка ↗'/>
          <Links
            windowWidth={windowWidth}
            hidden = {isStreamigsHidden}
            link = 'https://www.spotify.com/ru-ru/'
            title = 'Spotify ↗'/>
          <Links
            windowWidth={windowWidth}
            hidden = {isStreamigsHidden}
            link = 'https://music.apple.com/ru/browse'
            title = 'Apple Music ↗'/>
          <Links
            windowWidth={windowWidth}
            hidden = {isStreamigsHidden}
            link = 'https://vk.com/vkmusic'
            title = 'VK Music ↗'/>
        </ul>
      </div>
    )
  }
  return (
    <div className='header'>
      <a href={linkMarshak} target='blank'><img className='headerLogo' src={logoMarshak} alt='Логотип книжного магазина Маршак'/></a>
      <ul className="headerLinksList">
        <Links
          link = 'https://music.yandex.ru/home'
          title = 'Яндекс.Музыка ↗'/>
        <Links
          link = 'https://www.spotify.com/ru-ru/'
          title = 'Spotify ↗'/>
        <Links
          link = 'https://music.apple.com/ru/browse'
          title = 'Apple Music ↗'/>
        <Links
          link = 'https://vk.com/vkmusic'
          title = 'VK Music ↗'/>
      </ul>
    </div>
  )
}

export default Header;
