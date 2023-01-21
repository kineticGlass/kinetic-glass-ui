import React, { useState } from 'react';
import { StyledFormControl, StyledLabel, StyledError, StyledHint } from './StyledFormControl';
import PropTypes from "prop-types";

 
export const FormControl=(props) => {
    const {
        label = 'dddd',
        htmlFor = 'ddd',
        error = 'dsada',
        hint = 'sdaddasad sad',
        disabled = false,
        className,
        children,
        onBlur = () => {},
        onFocus = () => {},
        forceLabel = false,
    } = props;

    const [focused, setFocused] = useState(false);

    return (
        <StyledFormControl 
            className={className}
            onFocus={(e) => { setFocused(true); onFocus(e); }}
            onBlur={(e) => { setFocused(false); onBlur(e); }}
        >
            {label ? <StyledLabel
                htmlFor={htmlFor}
                focused={forceLabel || disabled || focused || error !== ''}
                error={error !== ''}
            >{label}</StyledLabel> : null}
            {children}
            {error ? <StyledError>{error}</StyledError> : (
                hint ? <StyledHint>{hint}</StyledHint> : null
            )}
        </StyledFormControl>
    );
}

FormControl.propTypes = {
  label:   PropTypes.string,
  htmlFor: PropTypes.string,
  error: PropTypes.string,
  hint: PropTypes.string,
  /* Disabled forces to always show label */
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  onBlur:PropTypes.func,
  onFocus:PropTypes.func,
  /* Forces to always show label */
  forceLabel:PropTypes.bool,
}
