import {memo} from 'react';
import CloseButton from '../svg/CloseButton';
import OpenButton from '../svg/OpenButton';
import './ShowHideButton.css';

const ShowHideButton = memo(({visibility, showToggler}) => {
  console.log('hide-button-re-render');
  return (
    <button className='show-hide-button' onClick={showToggler}>
      {!visibility && <OpenButton />}
      {visibility && <CloseButton />}
    </button>
  )
})

export default ShowHideButton;
