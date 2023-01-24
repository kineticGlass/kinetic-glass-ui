import React, { useState } from 'react';
import {Avatar, Badge} from '../Components';
import styled from 'styled-components';


export default {
  title: 'Components/Media/Avatar',
  component: Avatar,
} 



const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {

  color:"primary",
  shape:"round",
  size:"sm",
  badge:{
    text:"",
    color:"green",
    size:"sm"
  }
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
    <Avatar size="xs"/>
    <Avatar size="sm"/>
    <Avatar size="md"/>
    <Avatar size="lg"/>
  </Row>
  <Row>
    <Avatar letter="R" size="xs" shape="round"/>
    <Avatar letter="G" size="sm" shape="round"/>
    <Avatar letter="D" size="md" shape="round"/>
    <Avatar letter="Z" size="lg" shape="round"/>
  </Row>
  <Row>
    <Avatar  size="xs" shape="round" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Avatar size="sm" shape="round" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Avatar size="md" shape="round" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Avatar size="lg" shape="round" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
  </Row>

</>)
}



export const Badges = () =>{
  return (
  <>
  <Row>
    <Avatar size="xs" badge={{color:"green" ,size:"xs" }}/>
    <Avatar size="sm" badge={{color:"red" ,size:"sm"}}/>
    <Avatar size="md" badge={{color:"yellow" ,size:"md"}}/>
    <Avatar size="lg" badge={{color:"purple" ,size:"md",text:"a"}}/>
  </Row>
  <Row>
    <Avatar size="xs" shape="round" badge={{color:"green" ,size:"xs" }}/>
    <Avatar size="sm" shape="round" badge={{color:"green" ,size:"xs" }}/>
    <Avatar size="md" shape="round" badge={{color:"green" ,size:"xs" }}/>
    <Avatar size="lg" shape="round" badge={{color:"green" ,size:"xs" }}/>
  </Row>
</>)
}

export const Colors = () =>{
  return (
  <>
  <Row>
    <Avatar color="primary" size="xs"/>
    <Avatar color="secondary" size="sm"/>
    <Avatar  color="success" size="md"/>
    <Avatar color="danger" size="lg"/>
  </Row>
  <Row>
    <Avatar color="primary" letter="R" size="xs" shape="round"/>
    <Avatar color="secondary" letter="G" size="sm" shape="round"/>
    <Avatar color="success" letter="D" size="md" shape="round"/>
    <Avatar color="danger" letter="Z" size="lg" shape="round"/>
  </Row>
</>)
}


export const Tags = () =>{
  return (
  <>
 
  <Row>
    <Avatar  size="xs" shape="round" icon="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Avatar size="sm" shape="round" icon="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Avatar size="md" shape="round" icon="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
    <Avatar size="lg" shape="round" icon="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"/>
  </Row>

</>)
}



