import styled, { css } from 'styled-components';

const Divider = styled.hr`
  border: none;
  height: 1px;
  ${props => props.color && css`background-color: ${props.color};`}
  ${props => props.width && css`width: ${props.width};`}
  ${props => props.align && css`text-align: ${props.align};`}
  ${props => props.margin && css`margin: ${props.margin};`}
  &::before {
    content: ${props => props.beforeIcon};
    ${props => props.beforeWidth && css`width: ${props.beforeWidth};`}
    ${props => props.beforeHeight && css`height: ${props.beforeHeight};`}
    ${props => props.beforeColor && css`background-color: ${props.beforeColor};`}
    ${props => props.beforeBorderRadius && css`border-radius: ${props.beforeBorderRadius};`}
    ${props => props.beforeMargin && css`margin: ${props.beforeMargin};`}
    ${props => props.beforePadding && css`padding: ${props.beforePadding};`}
    ${props => props.beforeTransform && css`transform: ${props.beforeTransform};`}
    display: inline-block;
    transform: translateY(-50%);
    margin-right: 8px;
  }
`;

export default Divider;
