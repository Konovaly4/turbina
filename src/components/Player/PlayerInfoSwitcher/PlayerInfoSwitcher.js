import React from 'react';
import MovieLinkButton from '../MovieLinkButton/MovieLinkButton';
import InfoSwitchButton from '../InfoSwitchButton/InfoSwitchButton';
import './playerInfoSwitcher.css';

const PlayerInfoSwitcher = props => {

  return (
    <div className='player__info-button-wrapper'>
      <MovieLinkButton href={props.currentTrack.video} visibility={props.visibility}  />
      <InfoSwitchButton visibility={props.visibility} setTitle={props.setTitle} titleMode={props.titleMode} />
    </div>
  )
}

export default PlayerInfoSwitcher;
