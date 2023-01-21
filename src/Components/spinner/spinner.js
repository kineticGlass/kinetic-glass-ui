import React from 'react';
import { StyledSpinner } from './styled';
import PropTypes from "prop-types";

export const Spinner = (props) =>{
    const {
        className,
        size = 20,
        light = false,
    } = props;

    return (
        <StyledSpinner
            className={className}
            size={size}
            light={light}
        />
    );
}

Spinner.prototype = {
    size: PropTypes.number,
    className: PropTypes.string,
    light: PropTypes.bool
}
