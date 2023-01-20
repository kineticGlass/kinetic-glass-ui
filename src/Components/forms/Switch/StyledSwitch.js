import React from "react";
import styled from "styled-components";
import { heights,fontSizes } from "../../../utils/utils";
import { withTheme } from "../../Theme/withTheme";
import { KGTheme } from "../../../theme/Theme";
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
  background-color: yellow;
`;
const Knobs = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  &:before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: ${fontSizes["6xl"]/3}rem;
    height: ${fontSizes["6xl"]/3}rem;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    background-color: #03A9F4;
    border-radius: 50%;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
    
    ${Checkbox}:active + & {
      width: ${fontSizes["6xl"]/2}rem;
      border-radius: 100px;
    }
    ${Checkbox}:checked:active + & {
      margin-left: -${fontSizes["6xl"]/2}rem;
    }
    ${Checkbox}:checked + & {
      content: '';
      left: ${fontSizes["6xl"]/2}rem;
      background-color: #ffff;
    }
  }
`;

const Layer = styled.div`
 position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  width: 100%;
  background-color:#bde0ff;


  transition: 0.3s ease all;
  z-index: 1;
  ${Checkbox}:checked ~ & {
    background-color: #03A9F4;
  }
`;

const Button = styled.div`
  border-radius: 100px;
  position: relative;
  top: 50%;
  width: ${fontSizes["6xl"]}rem;
  height: ${fontSizes["6xl"]/2}rem;
  overflow: hidden;
`;



const StyledSwitch= () =>{
  
    return (
     
        <Button>
          <Checkbox type="checkbox" onChange={() => {}} />
          <Knobs> </Knobs>
          <Layer />
        </Button>
      
     
    );
  
}


export default StyledSwitch;
/*
const SwitchContainer = styled.div`
  position: relative;
  top: 50%;
  width: 74px;
  height: 36px;
  margin: -20px auto 0 auto;
  overflow: hidden;
  border-radius: 100px;
`;
const Knobs = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  &:before {
    content: "YES";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 50%;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  }
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  background-color: #ebf7fc;
  transition: 0.3s ease all;
  z-index: 1;
`;

const CheckBox = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;

  &:active + ${Knobs}:before {
    width: 46px;
    border-radius: 100px;
  }
  &:checked:active + ${Knobs}:before {
    margin-left: -26px;
  }

  &:checked + ${Knobs}:before {
    content: "NO";
    left: 42px;
    background-color: #f44336;
  }

  &:checked + ${Layer} {
    content: "NO";
    left: 42px;
    background-color: #f44336;
  }
`;

export const StyledSwitch = () => {
  return (
    <SwitchContainer>
      <CheckBox type="checkbox"></CheckBox>
      <Layer></Layer>
      <Knobs></Knobs>
    </SwitchContainer>
  );
};
*/