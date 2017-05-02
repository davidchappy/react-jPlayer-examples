/* eslint react/prop-types: 0 */
import React from 'react';
import { connect, JPlayer, Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar, Repeat,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
 } from 'react-jplayer';

const PlayerOne = props => (
  <JPlayer className="jp-sleek" style={!props.options.fullScreen ? { position: 'relative', top: '100px' } : null}>
    <Audio />
    <Gui style={!props.options.fullScreen ? { bottom: 'auto', position: 'static' } : null}>
      <div className="jp-controls jp-icon-controls">
        <Play><i className="fa">{/* Icon set in css*/}</i></Play>
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
            <i className="fa">{/* Icon set in css*/}</i>
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


const options = {
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

export default connect(PlayerOne, options);
