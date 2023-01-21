import React from 'react'
import StyledSlider from './StyledSlider'

export function Slider(props) {
  const {
    color,
    size,
    min,
    max,
    step,
    ...rest
  } = props;
  return (

    <StyledSlider 
    color={color}
    size={size}
    min={min}
    max={max}
    step={step}
    {...rest}
    />

  )
}

