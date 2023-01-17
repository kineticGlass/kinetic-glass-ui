import styled, { css } from "styled-components";
import { KGTheme } from "../../../theme/Theme";
import { sidePaddings, heights } from "../../../utils/utils";
import { withTheme } from "../../Theme/withTheme";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  & > *:nth-child(1) {
    margin: ${(pr) =>
      pr.withText
        ? pr.leftIcon
          ? "0px 12px 0px 0px"
          : "0px 0px 0px 12px"
        : 0};
  }

  font-size: ${(pr) =>
    pr.size ? pr.theme.fontSizes[pr.size] : KGTheme.fontSizes.md};
  font-family: ${(pr) => pr.theme.fonts.button};
  font-weight: ${(pr) => pr.theme.fontWeights.semibold};
  border: none;
  cursor: pointer;
  background-color: ${(pr) =>
    pr.color
      ? { ...pr.theme.colors[pr.color] }[pr.theme.mode]
      : KGTheme.colors.primary[KGTheme.mode]};
  padding: 0 ${(pr) => (pr.size ? sidePaddings[pr.size] : sidePaddings.md)}px;
  height: ${(pr) => (pr.size ? heights[pr.size] : heights.md)}px;
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
      : ""};

  ${(pr) =>
    pr.loading
      ? `
     cursor : not-allowed;
    `
      : ""}
  border-radius: 5px;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 1px #fff,
      0 0 0 2px ${(pr) => ({ ...pr.theme.colors[pr.color] }[pr.theme.mode])};
  }
`;

export default withTheme(StyledButton);

export const StyledIcon = styled.div`
  height: 20px;
`;
