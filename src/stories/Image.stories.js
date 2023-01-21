import React, { useState } from 'react';
import {Image} from '../Components';
import styled from 'styled-components';


export default {
  title: 'Components/Media/Image',
  component: Image,
} 

const Template = (args) => <Image {...args} />;
export const Default = Template.bind({});
Default.args = {
 
  src:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
}
/*
 */

export const Customized = Template.bind({});
Customized.args = {
  width: '200px',
  height:'200px',
  fit:"contain",
  radius: '33px',
  isLoading: false,
  shadow:"lg",
  src:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
}


const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () =>{
  return (
  <>
  <Row>
    <Image width="50px" height="50px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image width="100px" height="100px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image width="200px" height="200px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image />
  </Row>

</>)
}


export const Radius = () =>{
  return (
  <>
  <Row>
    <Image width="50px" height="50px" radius="50px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image width="100px" height="100px" radius="50px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image width="200px" height="200px" radius="50px" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image />
  </Row>

</>)
}

export const isLoading = () =>{
  return (
  <>
  <Row>
    <Image width="50px" height="50px" isLoading src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image width="100px" height="100px" isLoading src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image width="200px" height="200px" isLoading src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image />
  </Row>

</>)
}

export const Shadows = () =>{
  return (
  <>
  <Row>
    <Image width="50px" height="50px" shadow="sm" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image width="100px" height="100px" shadow="md" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image width="200px" height="200px" shadow="lg" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image />
  </Row>
</>)
}



export const IncorrectURL = () =>{
  return (
  <>
  <Row>
    <Image width="80px" height="50px" shadow="sm" alt="Alternative" src="https://.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image width="100px" height="100px" shadow="md" alt="not found" src="htt//img.freepik/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image width="200px" height="200px" shadow="lg" alt="Incorrect Path" src="https://img.freecom/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Image />
  </Row>
</>)
}








