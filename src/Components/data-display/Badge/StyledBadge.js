import React from "react";
import styled from "styled-components";
import { KGTheme } from "../../../theme/Theme";
import { sidePaddings, heights } from "../../../utils/utils";
import { withTheme } from "../../Theme/withTheme";

const Badge = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: ${(props) =>
    props.size ? props.theme.fontSizes[props.size] : "18px"};
  height: ${(props) =>
    props.size ? props.theme.fontSizes[props.size] : "18px"};
  background-color: ${(props) =>
    props.color ? props.color : KGTheme.colors.primary[KGTheme.mode]};
  border-radius: 50%;
  font-size: 12px;
  color: white;
  text-align: center;
  line-height: 20px;
  overflow: visible;
`;

const StyledBadge = ({ color, size, text }) => (
  <Badge color={color} size={size}>
    {text}
  </Badge>
);

export default withTheme(StyledBadge);
