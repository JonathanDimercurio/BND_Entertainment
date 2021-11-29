/*  Author: JD Date: Nov. 23, 2021
 */

import React from "react";
import PropTypes from "prop-types";

import MapItem from "./MapItem";

import { connect } from 'react-redux';
import { archiveMapItem, pinMapItem } from '../lib/ReduxStore1';

export function MapItemList({
  loading,
  mapitemlist,
  onPinMapItem,
  onArchiveMapItem,
}) {
  const events = {
    onPinMapItem,
    onArchiveMapItem,
  };

  console.log(mapitemlist);

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
          <div className="title-message">You have no map list</div>
          <div className="subtitle-message">Go find some DM!</div>
        </div>
      </div>
    );
  }
  const mapitemlistInOrder = [
    ...mapitemlist.filter((t) => t.state === "MAPITEM_PINNED"),
    ...mapitemlist.filter((t) => t.state !== "MAPITEM_PINNED"),
  ];
  return (
    <div className="list-items">
      {mapitemlistInOrder.map((mapitem) => (
        <MapItem key={mapitem.id} mapitem={mapitem} {...events} />
      ))}
    </div>
  );
}

MapItemList.propTypes = {
  loading: PropTypes.bool,
  mapitemlist: PropTypes.arrayOf(MapItem.propTypes.mapitem).isRequired,
  onPinMapItem: PropTypes.func.isRequired,
  onArchiveMapItem: PropTypes.func.isRequired,
};

MapItemList.defaultProps = {
  loading: false,
};

export default connect(
  ({ mapitemlist }) => ({
    mapitemlist: mapitemlist.filter(m => m.state === 'MAPITEM_INBOX' || m.state === 'MAPITEM_PINNED'),
  }),
  dispatch => ({
    onArchiveMapItem: id => dispatch(archiveMapItem(id)),
    onPinMapItem: id => dispatch(pinMapItem(id)),
  })
)(MapItemList);
