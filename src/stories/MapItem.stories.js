import React from "react";

import MapItem from "./MapItem";

export default {
  component: MapItem,
  title: "Map Item",
};

const Template = (args) => <MapItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  mapitem: {
    id: "1",
    title: "Test Map",
    state: "MAP_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  mapitem: {
    ...Default.args.mapitem,
    state: "MAP_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  mapitem: {
    ...Default.args.mapitem,
    state: "MAP_ARCHIVED",
  },
};
