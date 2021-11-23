import React from 'react';
+ import PropTypes from 'prop-types';

export default function MapItem({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  // ...
}

+ MapItem.propTypes = {
+  /** Composition of the task */
+  mapitem: PropTypes.shape({
+    /** Id of the task */
+    id: PropTypes.string.isRequired,
+    /** Title of the task */
+    title: PropTypes.string.isRequired,
+    /** Current state of the task */
+    state: PropTypes.string.isRequired,
+  }),
+  /** Event to change the task to archived */
+  onArchiveTask: PropTypes.func,
+  /** Event to change the task to pinned */
+  onPinTask: PropTypes.func,
+ };
