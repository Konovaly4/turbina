import {useState, useEffect} from 'react';
import logoMarshak from '../../images/logo-marshak.svg';
import {linksData} from '../../data/linksData';
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

  return (
    <div className='header'>
      <a href={linkMarshak} target='blank'><img className='header__logo' src={logoMarshak} alt='Логотип книжного магазина Маршак'/></a>
      <ul className="header-links__list">
      {windowWidth<=645 && 
        <Streamings
          hidden = {isStreamigsHidden}
          onClick={handleVisible}
          title = 'Стриминги'/>
      }
      {linksData.map((item, num) => {
        return(
          <Links
          key = {num}
          windowWidth={windowWidth}
          hidden = {isStreamigsHidden}
          link = {item.link}
          title = {item.title} />
        )
      })}
      </ul>
    </div>
  )
}

export default Header;
