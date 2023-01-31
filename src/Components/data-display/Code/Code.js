import React from 'react'
import StyledCode from './StyledCode'

export function Code(props) {
  const {
    language,
    children,
    ...rest
  }= props;
  return (
    <StyledCode
      language={language}
      children={children}
      {...rest}
    />
  )
}

