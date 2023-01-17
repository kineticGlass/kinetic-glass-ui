import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ArrowDown from './ArrowDown';
export default {
  title: 'Components/Icons',
} as Meta;

const Template: Story = (args) => <ArrowDown {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Button'
}