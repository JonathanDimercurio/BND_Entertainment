import React from 'react';
import PropTypes from 'prop-types';

export default function MapItem({ mapitem: { id, title, state }, onArchiveMapItem, onPinMapItem }) {
    
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'MAP_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveMapItem(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'MAP_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinMapItem(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}

MapItem.propTypes = {
    mapitem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onArchiveMapItem: PropTypes.func,
    onPinMapItem: PropTypes.func,
};
