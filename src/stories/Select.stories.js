import React, { useState } from 'react';
import {Select} from '../Components';
import styled from 'styled-components';
import UserIcon from '../Components/icons/User';


export default {
  title: 'Components/Forms/select',
  component: Select,
} 

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '250px',
  options:options
}
