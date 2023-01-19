import React from "react";
import styled from "styled-components";
import { heights } from "../../../utils/utils";
import { withTheme } from "../../Theme/withTheme";
import { KGTheme } from "../../../theme/Theme";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  width: ${(props) => props.theme.fontSizes[props.size]};
  height: ${(props) => props.theme.fontSizes[props.size]};
  cursor: pointer;
  background: ${(props) =>
    props.checked
      ? props.color
        ? { ...props.theme.colors[props.color] }[props.theme.mode]
        : KGTheme.colors.primary[props.theme.mode]
      : "#e0e0e0"};
  border-radius: 3px;
  border: solid 1px #c4c4c4;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const CheckboxStyled = (props) => {
  const { className, checked, size, color, disabled, ...rest } = props;
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox  checked={checked}
        size={size}
        disabled={disabled}
        color={color} {...rest} />
      <StyledCheckbox
        checked={checked}
        size={size}
        disabled={disabled}
        color={color}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default withTheme(CheckboxStyled);
