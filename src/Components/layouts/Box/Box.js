import React from 'react'
import StyledBox from './StyledBox'

export function Box(props) {
  const {
    width,
    height,
    p,
    m,
    textAlign,
    overflow,
    display,
    bg,
    css,
    responsive,
    childrens,
    mediaQueryType,
    shadow,
    ...rest
  } = props;
  return (
    <StyledBox 
     width={width}
     height={height}
     p={p}
     m={m}
     textAlign={textAlign}
     overflow={overflow}
     display={display}
     bg={bg}
     shadow={shadow}
     css={css}
     responsive={responsive}
     mediaQueryType={mediaQueryType}
     {...rest}
    >
    {childrens}
    </StyledBox>
  )
}
