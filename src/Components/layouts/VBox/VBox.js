import React from 'react'
import VerticalBox from './StyledVBox'

export function VBox(props) {
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
    ...rest
  }=props;
  return (
    <VerticalBox 
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
      childrens={children}
      {...rest}
    
    />
     
  )
}