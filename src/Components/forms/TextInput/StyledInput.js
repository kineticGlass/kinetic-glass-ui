import styled from "styled-components";
import { KGTheme } from "../../../theme/Theme";
import { heights, sidePaddings } from "../../../utils/utils";
import CrossIcon from "../../icons/Cross";
import { withTheme } from "../../Theme/withTheme";

export const StyledWrapper = styled.div`
  position: relative;
  width: ${(pr) => pr.width};
  height: ${(pr) => heights[pr.innerSize]}px;
`;
/* Real tag is assigned dynamically */
const StyledTextInput = styled.input`
  box-sizing: border-box;
  position: relative;
  background-color: ${(pr) => (pr.error ? "#ffe3e6" : "#EEEEEE")};
  padding: 0;
  padding-left: ${(pr) =>
    sidePaddings[pr.innerSize] +
    (pr.withIcon ? sidePaddings[pr.innerSize] + 10 /* icon */ : 0)}px;
  padding-right: ${(pr) =>
    sidePaddings[pr.innerSize] +
    (pr.withCross ? sidePaddings[pr.innerSize] /* cross */ : 0)}px;
  height: ${(pr) => heights[pr.innerSize]}px;
  width: ${(pr) => pr.width};
  border: none;
  border-bottom: ${(pr) =>
      !pr.error
        ? pr.color
          ? { ...pr.theme.colors[pr.color] }[pr.theme.mode]
          : KGTheme.colors.primary[pr.theme.mode]
        : KGTheme.colors.error[pr.theme.mode]}
    solid 2px;
  color: ${(pr) => pr.theme.colors.text[pr.theme.mode]};
  ${(pr) =>
    pr.disabled
      ? `
    background-color: #a6a6a6;
    color: #5e5e5e;
    cursor: not-allowed;
    &:hover {
        background-color: #a6a6a6 !important;
        color: #5e5e5e !important;
    }
    `
      : ""}
  border-radius: 2px;
  outline: none;
  transition: 0.1s ease-out;

  box-shadow: inset 0 0 0 2px ${(pr) => (pr.error ? "#d93848" : "transparent")};
  &:focus {
    box-shadow: inset 0 0 0 1px
      ${(pr) =>
        !pr.error
          ? pr.color
            ? { ...pr.theme.colors[pr.color] }[pr.theme.mode]
            : KGTheme.colors.primary[pr.theme.mode]
          : KGTheme.colors.error[pr.theme.mode]};
  }
`;

export const StyledIcon = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: ${(pr) => sidePaddings[pr.innerSize]}px;
  top: 50%;
  transform: translateY(-50%);
  height: 15px;
  width: 15px;
`;

export const StyledCross = styled(CrossIcon)`
  box-sizing: border-box;
  position: absolute;
  right: ${(pr) => sidePaddings[pr.innerSize]}px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  height: 15px;
`;

export default withTheme(StyledTextInput);
