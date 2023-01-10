import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 8px;
  padding-top: 8px;
  font-size: 16px;
  background-color: #3d47ff;
  border: 4px ;
  border-radius: 5px;
  color: #fff;   
  &:hover {
    opacity: 0.9;
    transition: 0.2s;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  ${(props) => {
    if (props.color === "secondary") {
      return css`
        background-color: #a12eff;
      `;
    }
    if (props.color === "primary") {
      return css`
        background-color: #3d47ff;
      `;
    }
    if(props.color==="success"){
        return css`
         background-color: #44c242;
        `;
    }if(props.color==="error"){
        return css`
        background-color:#de2828`
    }
  }}

  ${(props)=>{
     if (props.size === "small") {
      return css`
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 5px;
        padding-top: 5px;
        font-size: 14px;
      `;
    }
    if (props.size === "medium") {
      return css`
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 8px;
        padding-top: 8px;
        font-size: 16px;
      `;
    }
    if (props.size === "large") {
      return css`
        padding-left: 32px;
        padding-right: 32px;
        padding-bottom: 9px;
        padding-top: 9px;
        font-size: 16px;
      `;
    }
  }}
`;
