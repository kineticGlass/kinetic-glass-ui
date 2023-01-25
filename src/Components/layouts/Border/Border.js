import React from "react";
import BorderLayoutStyled from "./StyledBorder"
export function BorderLayout(props) {
  const { lwidth, rwidth, twidth, bwidth, children, css, ...rest } = props;
  return (
    <BorderLayoutStyled
      lwidth={lwidth}
      rwidth={rwidth}
      twidth={twidth}
      bwidth={bwidth}
      childrens = {children}
      css = {css}
      {...rest}
    />
      
  );
}
