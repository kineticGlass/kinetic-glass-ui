import React from 'react';
import {  StyledWrapper, StyledIcon, StyledCross } from './StyledInput';
import StyledTextInput from './StyledInput'

export const TextInput = React.forwardRef((props, ref) => {
    const { 
        color = "primary",
        icon,
        size = 'md',
        className,
        disabled = false,
        error = false,
        value,
        onChange,
        placeholder,
        width = '100%',
        readonly = false,
        clearable = false,
        ...rest
    } = props;

    const styles = {
        innerSize: size,
        disabled: disabled,
        error,
        width,
        withIcon: icon !== undefined,
        withCross: clearable
    };
    return (
        <StyledWrapper width={width} innerSize={size}>
            <StyledTextInput
                type={rest.type || 'text'}
                value={value}
                onChange={onChange}
                color = {color}
                readOnly={readonly}
                ref={ref}
                className={className}
                placeholder={placeholder}
                {...styles}
                {...rest}
            />
            <StyledIcon as={icon} innerSize={size} />
            {clearable && value ? (
                <StyledCross 
                    innerSize={size} 
                    onClick={() => 
                        onChange 
                        && onChange({ currentTarget: { value: '' } } )
                    }
                />
            ) : null}
        </StyledWrapper>
    );
});

