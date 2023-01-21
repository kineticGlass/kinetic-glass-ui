import React, { useState } from 'react';
import {Box} from '../Components';
import styled from 'styled-components';

export default {
  title: 'Components/Layouts/Box',
  component: Box,
} 

const Template = (args) => <Box {...args} />;

export const CustomBox = Template.bind({});
CustomBox.args = {
  width: '800px',
  height: '150px',
  bg:"primary",
  shadow:"lg",
  childrens:<h1>Box</h1>,
  p:"30px",
  m:"10px",
  textAlign:"center",
  css: {borderRadius:40}
}

export const ResponsiveBox = Template.bind({});
ResponsiveBox.args = {
  width: '800px',
  height: '150px',
  bg:"secondary",
  shadow:"lg",
  childrens:<h1>Responsive </h1>,
  p:"30px",
  m:"10px",
  textAlign:"center",
  mediaQueryType:"max-width",
  responsive:[
    "width:800px",
    "width:600px",
    "width:300px",
  ],

}
