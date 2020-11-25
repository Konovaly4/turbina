import {useState} from 'react';
import Header from './Header/Header';
import Logo from './Logo/Logo';
import Footer from './Footer/Footer';
import About from './About/About';
import Player from './Player/Player';
import './app.css';


const App = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleVisible = () => {
    setIsHidden(!isHidden)
  }

  return (
    <section className='main'>
      <article className='main-wrapper'>
        <Header isHidden={isHidden} handleVisible={handleVisible} />
        <Logo />
        <Player isHidden={isHidden} />
      </article>
      <About />
      <Footer />
    </section>
  )
}

export default App;
