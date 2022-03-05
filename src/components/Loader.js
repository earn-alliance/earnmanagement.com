import * as React from 'react';
import SpinnerGif from '../../static/img/Loader.gif'

const Spinner = () => (
  <div
    style={{
      display: 'flex',
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1325456,
      background: 'transparent',
    }}
  >
    <img
      src={SpinnerGif}
      layout="intrinsic"
      width="190"
      height="188"
      alt="Loading"
    />
  </div>
);

export default Spinner;