import React from "react";
import { StyledButton } from "./ButtonWrapper";
import PropTypes from 'prop-types';
import { COLORS,FONTSIZES } from "../../utils/utils";
export const Button = (props) => {
 
  const {color,size,children,...rest} = props;
  return (
    <div>
      <StyledButton color={color} size={size} {...rest}>
            {children}
      </StyledButton>
    </div>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(COLORS),
  icon: PropTypes.elementType,
  size:PropTypes.oneOf(FONTSIZES),
  children: PropTypes.string,
  disabled: PropTypes.bool,
  ripple: PropTypes.bool,
  loading: PropTypes.bool,
  ...rest
}
