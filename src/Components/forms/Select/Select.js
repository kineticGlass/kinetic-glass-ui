import React from "react";
import StyledSelect from "./StyledSelect";
import ReactSelect from "react-select";
import styled from "styled-components";
import { withTheme } from "../../Theme/withTheme";
import { KGTheme } from "../../../theme/Theme";
import { heights } from "../../../utils/utils";

export const Select = (props) => {

  const {color,size,options,...rest} = props;
  return (
    <ReactSelect
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          height:heights[size],
          borderBottomStyle:"solid",
          borderBottomWidth:"3px",
          borderBottomColor: color
          ? { ...props.theme.colors[props.color] }[props.theme.mode]
          : KGTheme.colors.primary[KGTheme.mode],
        }),
      }}
      options = {options}
      {...rest}
    ></ReactSelect>
  );
};

Select.prototype = {};
