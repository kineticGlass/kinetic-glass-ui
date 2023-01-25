
import React from 'react';
import styled,{css} from "styled-components";
import { withTheme } from '../../Theme/withTheme';

const StyledVBoxChild = styled.div`

  ${(props)=> 
   props.inner ? props.inner.border? css`
   border-${props.inner.border}: ${props.inner.borderWidth} ${props.inner.borderStyle} ${props.inner.borderColor}; `: "" :""};
  
  ${(props)=> props.inner? props.inner.css : ""};
`;


const StyleVBox = styled.div`
  display: flex;
  flex-direction: column;
  ${props=> {console.log(props)}};
  ${props => props.align && css`align-items: ${props.align};`}
  ${props => props.justify && css`justify-content: ${props.justify};`}
  flex-wrap:  ${props => props.wrap ? "wrap": "nowrap"};
  ${props => props.height && css`height: ${props.height};`}
  width:${props => props.width? props.width:"100%"};

  background-color: ${(props) =>
    props.bg && (
    props.theme.colors[props.bg]
      ? { ...props.theme.colors[props.bg] }[props.theme.mode]
      : props.bg || "none")};

  box-shadow: ${(props) =>
    props.shadow
      ? props.theme.shadows[props.shadow]
        ? props.theme.shadows[props.shadow]
        : props.shadow
      : "none"};

  ${(props) =>
     props.responsive
      &&
      props.responsive.map((styles, i) => {
          let dtt = `
        @media (${props.mediaQueryType
                ? props.mediaQueryType
                : props.theme.mediaQueryType}:${props.breakpoints?props.breakpoints[i]:props.theme.breakpoints[i]}) {
          ${styles};
        };
      `;
      console.log(dtt);
          return ` ${dtt};`;
        })};
  ${props => props.css};    
`;

const  VerticalBox=(props)=> {
    const {
      align,
      justify,
      wrap,
      height,
      width,
      bg,
      responsive,
      breakpoints,
      mediaQueryType,
      css,
      childrens,
      inner,
      ...rest
    }=props;
    return (
      <StyleVBox 
        align={align}
        justify={justify}
        wrap = {wrap}
        height={height}
        width={width}
        bg={bg}
        responsive={responsive}
        breakpoints={breakpoints}
        mediaQueryType={mediaQueryType}
        css={css}
        {...rest}
      >
        {console.log(props)}
         {React.Children.map(childrens, (child,index) =>{
            return(
            <StyledVBoxChild inner={inner} key={index}>
                
                {child}
            </StyledVBoxChild>)
         })}
      </StyleVBox>
    )
  }
export default withTheme(VerticalBox);
