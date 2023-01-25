import styled from 'styled-components';
import React from 'react'

const StyledBorderLayoutChild = styled.div`
 

  grid-area:${props=> props.location? props.location: "left"};

`;

const StyledBorderLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
 
  grid-template-areas: 
    "top top top"
    "left center right"
    "bottom bottom bottom";
`;

const BorderLayoutStyled = (props) => {
     const { 
        lwidth,
        rwidth,
        twidth,
        bwidth,
        childrens,
        css,
        ...rest
     }= props;
    return (
        <StyledBorderLayout
         lwidth={lwidth} rwidth={rwidth}
         twidth={twidth} bwidth={bwidth}
         css={css}
         {...rest}
        >
    {React.Children.map(childrens, (child,index) =>{
            return(
            <StyledBorderLayoutChild location={child.props.location} key={index}>
                {child}
            </StyledBorderLayoutChild>)
         })}
           
        </StyledBorderLayout>
    );
}

export default BorderLayoutStyled;
