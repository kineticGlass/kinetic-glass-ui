import React from 'react';
import styled from 'styled-components';

import { Button } from '../../Components';
import Download from '../../Components/icons/Download';
export default {
  title: 'Components/Forms/Button',
  component: Button,
 
};

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const colors = () =>{
  return (
  <>
  <ButtonRow>
    <Button color="primary">Large</Button>
    <Button color="secondary">secondary</Button>
    <Button color="success">success</Button>
    <Button color="danger">danger</Button>
    <Button color="warning">warning</Button>
    <Button color="error">error</Button>
  </ButtonRow>

</>)
}


export const Sizes = () => {
  return (
    <>
      <ButtonRow>
        <Button size='lg'>Large</Button>
        <Button size='md'>medium</Button>
        <Button size='sm'>Small</Button>
      </ButtonRow>
      
      <ButtonRow>
        <Button color='danger' size='lg'>Large</Button>
        <Button color='danger' size='md'>Medium</Button>
        <Button color='danger' size='sm'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button color='primary' size='lg'>Large</Button>
        <Button color='primary' size='md'>Medium</Button>
        <Button color='primary' size='sm'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button color='secondary' size='lg'>Large</Button>
        <Button color='secondary' size='md'>Medium</Button>
        <Button color='secondary' size='sm'>Small</Button>
      </ButtonRow>
      <ButtonRow>
        <Button loading disabled size='lg'>Large</Button>
        <Button loading disabled size='md'>Medium</Button>
        <Button loading disabled size='sm'>Small</Button>
      </ButtonRow>
    </>
  );
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click me"
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
    color: "primary",
    leftIcon:Download,
    children: "Click me"
};

export const RightIcon = Template.bind({});
RightIcon.args = {
    color: "primary",
    rightIcon:Download,
    children: "Click me"
};

export const loadingButton = Template.bind({});
loadingButton.args = {
  size: 'lg',
  children: "Click me",
  loading:true
};

export const RippleEffect = Template.bind({});
RippleEffect.args = {
  children: "Click me",
  ripple:true
};
