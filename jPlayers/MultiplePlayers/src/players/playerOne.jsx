import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import JPlayer, {
  initializeOptions, Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar, Repeat,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
} from 'react-jplayer';

import '../less/playerOne.less';

const defaultOptions = {
  id: 'PlayerOne',
  verticalVolume: true,
  media: {
    title: 'Bubble',
    artist: 'Miaow',
    sources: {
      m4a: 'http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a',
      oga: 'http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg',
    },
    free: true,
  },
};

initializeOptions(defaultOptions);

const mapStateToProps = ({ jPlayers }) => ({
  jPlayerClass: jPlayers.PlayerOne.fullScreen ? 'jp-sleek' : 'jp-sleek jp-playerOne',
});

const PlayerOne = ({ jPlayerClass }) => (
  <JPlayer id={defaultOptions.id} className={jPlayerClass}>
    <Audio />
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Play><i className="fa">{/* Icon set in css */}</i></Play>
        <Repeat><i className="fa fa-repeat" /></Repeat>
        <div className="jp-progress">
          <SeekBar>
            <BufferBar />
            <PlayBar />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
        <div className="jp-volume-container">
          <Mute>
            <i className="fa">{/* Icon set in css */}</i>
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <Download><i className="fa fa-download" /></Download>
        <div className="jp-title-container">
          <Poster />
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlayer>
);

PlayerOne.propTypes = {
  jPlayerClass: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PlayerOne);
