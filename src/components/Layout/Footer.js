import React from 'react';
import Flags from './Flags';
import Credits from './Credits';
import SettingsDialog from './SettingsDialog';
import { useMedia } from '../../useMedia';
import config from '../../config';
import { connect } from 'react-redux';
import { setDisplayLatin } from '../../store/actions/global.action';

const Footer = ({ setDisplayLatin }) => {
  const isSmallHeight = useMedia([`(max-height: ${config.isSmallHeight}px)`],[true],false);
  return (
    <footer className={`footer ${isSmallHeight ? 'footer--small' : ''}`}>
      <Flags />
      <button className="displayLatin blue-link" onClick={setDisplayLatin}>C/Do</button>
      <Credits />
      <SettingsDialog />
    </footer>
  )
}

const mapDispatchToProps = dispatch => ({
  setDisplayLatin: () => dispatch(setDisplayLatin()),
})

export default connect(
  null,
  mapDispatchToProps
)(Footer);