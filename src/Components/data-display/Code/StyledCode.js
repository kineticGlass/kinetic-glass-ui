import React from 'react'
import styled, { css } from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const StyledCodeContainer = styled.pre`
  border-radius: 5px;
  font-size: ${props => props.fontSize};
  padding: 10px;
  overflow-x: auto;
`

const StyledCode = ({ children, language, ...rest }) => {
  return (
    <StyledCodeContainer language={language} {...rest}>
   <SyntaxHighlighter language={language} style={tomorrow} >
      {children}
    </SyntaxHighlighter>
     
    </StyledCodeContainer>
  )
}

export default StyledCode
