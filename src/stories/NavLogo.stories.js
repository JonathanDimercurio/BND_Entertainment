import React from 'react';
import '../navigation/NavLogo.module.css';

import NavLogo from './NavLogo';

export default {
  component: NavLogo,
  title: 'Nav Logo',
};

const Template = args => <NavLogo {...args} />;

export const Default = Template.bind({});
