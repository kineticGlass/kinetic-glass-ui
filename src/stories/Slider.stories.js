import React, { useState } from 'react';
import {Slider} from '../Components';

export default {
  title: 'Components/Forms/Slider',
  component: Slider,
} 

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  min:1,
  max:100,
  step:1,
  color:"primary"
}
