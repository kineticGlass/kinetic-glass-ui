import React from 'react'
import StyledAvatar from './StyledAvatar'

export function Avatar(props) {

  const {
    size="md",
    color="primary",
    icon,
    shape,
    alt,
    src,
    children,
    letter="A",
...rest
  } = props;
  console.log(props)
  return (
    <StyledAvatar
    size={size}
    src={src}
    alt={alt}
    icon={icon}
    color={color}
    shape={shape}
    childrens={children}
    letter = {letter}
       {...rest}
    />
  )
}