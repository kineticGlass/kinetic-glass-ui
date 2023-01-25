import React from 'react'
import HorizontalBox from './StyledHBox'

export function HBox(props) {
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
    children,
    inner,
    ...rest
  }=props;
  return (
    <HorizontalBox 
      align={align}
      justify={justify}
      wrap = {wrap}
      height={height}
      width={width}
      bg={bg}
      responsive={responsive}
      breakpoints={breakpoints}
      mediaQueryType={mediaQueryType}
      inner={inner}
      css={css}
      childrens={children}
      {...rest}
    
    />
     
  )
}