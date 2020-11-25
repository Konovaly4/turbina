import {memo} from 'react';
import cn from 'classnames';
import defaultTexts from '../../../data/defaultTexts';
import './InfoSwitchButton.css';

const InfoSwitchButton = memo(({visibility, setTitle, titleMode}) => {
  return (
    <button
    className={cn('info-switch-button', {'info-switch-button_hidden' : !visibility})}
    onClick={setTitle}> {titleMode === 'releases' ?
    defaultTexts.playerInfoButton.textMode :
    defaultTexts.playerInfoButton.releaseMode}
  </button>
  )
})

export default InfoSwitchButton;
