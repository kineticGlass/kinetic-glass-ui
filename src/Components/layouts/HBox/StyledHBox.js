import styled from "styled-components";

const StyledHbox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  ${(props) =>
    props.breakpoints.map((breakpoint, index) => {
      return css`
        @media (${props.mediaQueryType}: ${breakpoint}) {
          align-items: ${props.responsive[index].align};
          justify-content: ${props.responsive[index].justify};
        }
      `;
    })}
`;

const StyledVerticalBoxItem = styled.div`
  flex: ${props => props.flex};
  align-self: ${props => props.alignSelf};
  ${props => props.breakpoints.map((breakpoint, index) => {
    return css`
      @media (${props.mediaQueryType}: ${breakpoint}) {
        flex: ${props.responsive[index].flex};
        align-self: ${props.responsive[index].alignSelf};
      }
    `;
  })}
`;


