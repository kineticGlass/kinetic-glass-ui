import React, { useState } from 'react';
import {TextInput} from '../Components';
import styled from 'styled-components';


export default {
  title: 'Components/Forms/TextInput',
  component: TextInput,
} 

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '250px'
}

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder',
  width: '250px'
}

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: 'Login',
  width: '250px'
}

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Wrong input',
  width: '250px',
  error: true
}

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled',
  width: '250px',
  disabled: true,
}

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  placeholder: 'Not editable',
  width: '250px',
  readonly: true,
}

export const Clearable = () => {
  const [value, setValue] = useState('');

  return (
    <TextInput
      placeholder='Type and clear'
      width='250px'
      value={value}
      onChange={e => setValue(e.target.value)}
      clearable
    />
  );
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
        <TextInput placeholder='large' size='lg' />
        <TextInput placeholder='medium' size='md' />
        <TextInput placeholder='small' size='sm' />
      </Row>
    </>
  );
};

export const Colors = () => {
  return (
    <>
      <Row>
        <TextInput color='primary' placeholder='primary'  />
        <TextInput color="secondary" placeholder='secondary' />
        <TextInput color="error" placeholder='error' />
       
      </Row>
      <Row>
      <TextInput color="success" placeholder='success' />
        <TextInput color="warning" placeholder='warning' />
        <TextInput color='danger' placeholder='danger'  />
      </Row>
    </>
  );
};