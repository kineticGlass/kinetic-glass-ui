import React, { useState } from 'react';
import {Switch} from '../Components';
import styled from 'styled-components';
import UserIcon from '../Components/icons/User';


export default {
  title: 'Components/Forms/Switch',
  component: Switch,
} 



const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  
}
