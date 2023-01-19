import React from 'react'
import  RadioStyled  from './StyledRadio';
import  PropTypes  from 'prop-types';
import { COLORS, SIZES } from "../../../utils/utils";

export const Radio =(props)=> {
  const { 
    size="lg",
    color="primary",
    checked=false,
    disabled=false,
    className,
    childrens,
    ...rest
  } =props;
  return (
    <div>
      <RadioStyled
       size = {size}
       color={color}
       checked={checked}
       disabled={disabled}
       className= {className}
       type="radio"
       childrens = {childrens}
       {...rest}
      />
    </div>
  )
}


Radio.proptypes = {
  size: PropTypes.oneOf(SIZES),
  color: PropTypes.oneOf(COLORS),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  children: PropTypes.node,
};
