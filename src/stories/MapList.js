/*  Author: JD Date: Nov. 23, 2021
 */

import React from 'react';
import PropTypes from 'prop-types';

import MapItem from './MapItem';

export default function MapItemList({ loading, mapitemlist, onPinMapItem, onArchiveMapItem }) {
  const events = {
    onPinMapItem,
    onArchiveMapItem,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (mapitemlist.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no mapitemlist</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const mapitemlistInOrder = [
    ...mapitemlist.filter(t => t.state === 'MAP_PINNED'),
    ...mapitemlist.filter(t => t.state !== 'MAP_PINNED'),
  ];
  return (
    <div className="list-items">
      {mapitemlistInOrder.map(mapitem => (
        <MapItem key={mapitem.id} mapitem={mapitem} {...events} />
      ))}
    </div>
  );
}

MapItemList.propTypes = {
    loading: PropTypes.bool,
    mapitemlist: PropTypes.arrayOf(MapItem.propTypes.mapitem).isRequired,
    onPinTask: PropTypes.func,
    onArchiveTask: PropTypes.func,
};
MapItemList.defaultProps = {
    loading: false,
}
