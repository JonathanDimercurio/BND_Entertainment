import React from 'react';
import { Provider } from 'react-redux';
import { MapItemWallet } from './MapItemWallet';
import { action } from '@storybook/addon-actions';
import * as MapItemListStories from './MapItemList.stories';

 const store = {
   getState: () => {
    return {
      mapitemlist: MapItemListStories.Default.args.mapitemlist,
    };
   },
   subscribe: () => 0,
   dispatch: action('dispatch'),
};

export default {
  component: MapItemWallet,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
  title: 'Map Wallet',
};

const Template = args => <MapItemWallet {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});

Error.args = {
  error: 'Something',
};
  
