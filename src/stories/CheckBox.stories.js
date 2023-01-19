import React from 'react';
import { CheckBox } from '../Components';


export default {
  title: 'Components/chk',
  component: CheckBox,
  argTypes: { onChange: { action: 'clicked' } },
}


const Template = (args) => <CheckBox {...args} />;

export const CheckBox1 = Template.bind({});
CheckBox1.args = {
  color:"primary",
  size:"2xl",
}

export const CheckBox2 = Template.bind({});
CheckBox2.args = {
  color:"secondary",
  size:"2xl",
  checked:false,
  children:<>label</>
}