import React from "react";
import styled from "styled-components";
import { heights, fontSizes } from "../../../utils/utils";
import { withTheme } from "../../Theme/withTheme";
import { KGTheme } from "../../../theme/Theme";

const Item = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => fontSizes[props.size] * 2}rem;
  position: relative;
`;
const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  width: ${(props) => fontSizes[props.size]}rem;
  height: ${(props) => fontSizes[props.size]}rem;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  cursor: pointer;
  width: ${(props) => fontSizes[props.size]}rem;
  height: ${(props) => fontSizes[props.size]}rem;

  &:hover ~ ${RadioButtonLabel} {
    background: ${(props) =>
      props.color
        ? { ...props.theme.colors[props.color] }[props.theme.mode]
        : KGTheme.colors.primary[props.theme.mode]};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: ${(props) => fontSizes[props.size] / 2}rem;
      height: ${(props) => fontSizes[props.size] / 2}rem;
      margin: ${(props) => fontSizes[props.size] / 4}rem;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: ${(props) =>
        props.color
          ? { ...props.theme.colors[props.color] }[props.theme.mode]
          : KGTheme.colors.primary[props.theme.mode]};
      border: ${(props) => fontSizes[props.size] / 2}rem solid #db7290;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width:${(props) => fontSizes[props.size] / 2}rem;
        height:${(props) => fontSizes[props.size] / 2}rem;
        margin: ${(props) => fontSizes[props.size] / 4}rem;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }
  `}
`;

const RadioSpan = styled.span`
  display: flex;
  align-items: center;

  border-radius: 50%; // or something higher...
  transition: 0.25s ease;

  &:before {
    
    display: flex;
    flex-shrink: 0;
    content: "";
    background-color: #fff;
    width: ${(props) => props.theme.fontSizes[props.size] };
    height: ${(props) => props.theme.fontSizes[props.size] };
    border-radius: 50%;
    transition: 0.25s ease;
    margin-right: 0.2222rem;
    
    cursor: ${props=> props.disabled? 
       "not-allowed":"pointer"
     };


    box-shadow: inset 0 0 0 0.125em
      ${(props) =>
      props.disabled? 
       "gray":
        props.color
          ? { ...props.theme.colors[props.color] }[props.theme.mode]
          : KGTheme.colors.primary[props.theme.mode]
          }
  }
`;

const NewRadio = styled.input`
  position: absolute;
  left: -9999px;
  
  
  &:checked + ${RadioSpan} {
    
    &:before {
      box-shadow: inset 0 0 0 ${(props) => fontSizes[props.size]/3.5 }rem
      ${(props) =>
      props.disabled? 
       "gray":
        props.color
          ? { ...props.theme.colors[props.color] }[props.theme.mode]
          : KGTheme.colors.primary[props.theme.mode]
          }
    }
  }
`;

const RadioStyled = (props) => {
  return (
    <>
      <NewRadio {...props}></NewRadio>
      <RadioSpan {...props}>{props.childrens}</RadioSpan>
    </>
  );
};

export default withTheme(RadioStyled);
