import React from 'react'
import StyledBadge from './StyledBadge';

export function Badge(props) {
  const {
    color="green",
    size="sm",
    text="",
    ...rest
  } = props;
  return (
    <StyledBadge
      color={color}
      size={size}
      text={text}
      {...rest}
    />
  )
}