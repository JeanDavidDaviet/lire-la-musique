import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setRunning, incrementTempo, decrementTempo, decrementScale, incrementScale } from '../../store/actions/global.action';


const ControlsKeyboard = ({ setRunning, incrementTempo, decrementTempo, incrementScale, decrementScale }) => {
  const handleKeyboard = (event) => {
    switch (event.keyCode) {
      case 32:
        setRunning();
        break;
      case 37:
        decrementTempo();
        break;
      case 39:
        incrementTempo();
        break;
      case 38:
        incrementScale();
        break;
      case 40:
        decrementScale();
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard, false);
    return () => {
      document.addEventListener("keydown", handleKeyboard, false);
    }
  }, []);
  return null
}

export const mapDispatchToProps = dispatch => {
  return {
    setRunning: () => dispatch(setRunning()),
    incrementTempo: () => dispatch(incrementTempo()),
    decrementTempo: () => dispatch(decrementTempo()),
    incrementScale: () => dispatch(incrementScale()),
    decrementScale: () => dispatch(decrementScale()),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ControlsKeyboard);