import React from "react";
import CheckboxStyled from "./StyledCheckBox";
import PropTypes from "prop-types";
import { COLORS, SIZES } from "../../../utils/utils";
import "./checkBoxStyles.css";

export const CheckBox = (props) => {
  const { color = "primary", size="md", disabled=false, children, className, checked=true,onChange,...rest} = props;
  
  return (
    <div className="checkBox">
      <CheckboxStyled
        color={color}
        size={size}
        className={className}
        disabled={disabled}
        checked={checked}
        onChange = {onChange}
        {...rest}
      />
      {children}
    </div>
  );
};
CheckBox.proptypes = {
    size: PropTypes.oneOf(SIZES),
    color: PropTypes.oneOf(COLORS),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    children: PropTypes.node,
  };
  