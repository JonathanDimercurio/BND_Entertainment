import React from "react";

import { MapItemList } from "./MapItemList";
import * as MapItemStories from "./MapItem.stories";

export default {
  component: MapItemList,
  title: "Map List",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

const Template = (args) => <MapItemList {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  mapitemlist: [
    { ...MapItemStories.Default.args.mapitem, id: "1", title: "Map 1" },
    { ...MapItemStories.Default.args.mapitem, id: "2", title: "Map 2" },
    { ...MapItemStories.Default.args.mapitem, id: "3", title: "Map 3" },
    { ...MapItemStories.Default.args.mapitem, id: "4", title: "Map 4" },
    { ...MapItemStories.Default.args.mapitem, id: "5", title: "Map 5" },
    { ...MapItemStories.Default.args.mapitem, id: "6", title: "Map 6" },
  ],
};

export const WithPinnedMapItems = Template.bind({});
WithPinnedMapItems.args = {
    
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
    
  mapitemlist: [
    ...Default.args.mapitemlist.slice(0, 5),
    { id: "6", title: "MAP 6 (pinned)", state: "MAPITEM_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  mapitemlist: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
