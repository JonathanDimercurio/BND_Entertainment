import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import MapItemList from './MapItemList';

export function MapItemWallet({ error }) {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Map Wallet</span>
        </h1>
      </nav>
      <MapItemList />
    </div>
  );
}

MapItemWallet.propTypes = {
  /** The error message */
  error: PropTypes.string,
};

MapItemWallet.defaultProps = {
  error: null,
};

export default connect(({ error }) => ({ error }))(MapItemWallet);
