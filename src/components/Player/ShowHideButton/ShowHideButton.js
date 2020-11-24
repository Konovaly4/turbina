import {memo} from 'react';
import cn from 'classnames';
import './ShowHideButton.css';

const ShowHideButton = memo(({visibility, showToggler}) => {
  // console.log('hide-button-re-render');
  return (
    <button className= {cn('show-hide-button', {
      'show-hide-button_show': !visibility,
      'show-hide-button_hide': visibility,
    })} onClick={showToggler} />
  )
})

export default ShowHideButton;
