import CloseButton from '../svg/CloseButton';
import OpenButton from '../svg/OpenButton';
import './ShowHideButton.css';

function ShowHideButton ({visibility, showToggler}) {
  return (
    <button className='show-hide-button' onClick={showToggler}>
      {!visibility && <OpenButton />}
      {visibility && <CloseButton />}
    </button>
  )
}

export default ShowHideButton;
