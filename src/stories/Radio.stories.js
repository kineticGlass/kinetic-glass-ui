import React from 'react';
import { Radio } from '../Components';

import styled from 'styled-components';

export default {
  title: 'Components/Forms/Radio',
  component: Radio,
  
}


const Template = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked:true,
  disabled:false,
  childrens:<p>This is a radio</p>,
  color:"primary",
  size:"2xl",

}


export const Disabled = Template.bind({});
Disabled.args = {
  checked:true,
  disabled:true,
  childrens:<p>This is a radio</p>,
  color:"primary",
  size:"2xl",

}




const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <Row>
        <Radio  size='sm' />
        <Radio  size='md' />
        <Radio  size='lg' />
        <Radio  size='xl' />
        <Radio  size='2xl' />
        <Radio  size='3xl' />
      </Row>
      <Row>
        <Radio  size='sm' checked/>
        <Radio  size='md' checked/>
        <Radio  size='lg' checked/>
        <Radio  size='xl' checked/>
        <Radio  size='2xl' checked/>
        <Radio  size='3xl' checked/>
      </Row>
    </>
  );
};


export const Colors = () => {
    return (
      <>
        <Row>
          <Radio  size='sm' color="primary"/>
          <Radio  size='md' color="secondary"/>
          <Radio  size='lg' color="danger" />
          <Radio  size='xl' color="error" />
          <Radio  size='2xl' color="success" />
          <Radio  size='3xl'  color="warning"/>
        </Row>
        <Row>
        <Radio  size='sm' color="primary"  checked/>
          <Radio  size='md' color="secondary" checked/>
          <Radio  size='lg' color="danger"  checked/>
          <Radio  size='xl' color="error"  checked/>
          <Radio  size='2xl' color="success"  checked/>
          <Radio  size='3xl'  color="warning" checked/>
        </Row>
      </>
    );
  };
  