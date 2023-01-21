import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import {FormControl} from '../Components';
import {TextInput} from '../Components';

export default {
  title: 'Components/Forms/FormControl',
  component: FormControl,
  argTypes: { onBlur: { action: 'clicked' } ,onChange: { action: 'onChange' } 
},

} 

export const FormInput = () => {
    const [value, setValue] = React.useState('');
    const [isValid, setIsValid] = React.useState(true);
    const [isVisited, setIsVisited] = React.useState(false);
    const shouldShowError = !isValid && isVisited;
    const onChange = (event) => {
        const {value} = event.currentTarget;
        setIsValid(!(value));
        setValue(value);
    };

    return (
        <FormControl
            label='Email'
            htmlFor='email'
            error={
                shouldShowError
                ? 'Please type a valid email address'
                : undefined
            }
            hint="You won't be able to change it later"
            onBlur={() => setIsVisited(true) }
        >
            <TextInput
                id='email'
                width='250px'
                value={value}
                placeholder='Enter your email'
                onChange={onChange}
                error={shouldShowError}
            />
        </FormControl>
    )
}

export const DisabledFormInput = () => {
    
    return (
        <FormControl
            label='Username'
            htmlFor='username'
            hint="You can't change this field"
            disabled
        >
            <TextInput
                id='username'
                width='250px'
                value='john_doe'
                disabled
            />
        </FormControl>
    )
}


