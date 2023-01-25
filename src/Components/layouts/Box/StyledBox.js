import styled, { css } from "styled-components";
import { withTheme } from "../../Theme/withTheme";

const StyledBox = styled.div`
  ${(props) => console.log(props)}
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.p || "0"};
  margin: ${(props) => props.m || "0"};
  text-align: ${(props) => props.textAlign || "left"};
  overflow: ${(props) => props.overflow || "visible"};
  display: ${(props) => props.display || "block"};
  background-color: ${(props) =>
    props.theme.colors[props.bg]
      ? { ...props.theme.colors[props.bg] }[props.theme.mode]
      : props.bg || "none"};

  box-shadow: ${(props) =>
    props.shadow
      ? props.theme.shadows[props.shadow]
        ? props.theme.shadows[props.shadow]
        : props.shadow
      : "none"};

  ${(props) => props.css};
  ${(props) =>
    props.responsive
      && props.responsive.map((styles, i) => {
          let dtt = `
        @media (${props.mediaQueryType
                ? props.mediaQueryType
                : props.theme.mediaQueryType}:${props.theme.breakpoints[i]}) {
          ${styles};
        };
      `;
          return ` ${dtt};`;
        })};

`;

export default withTheme(StyledBox);
