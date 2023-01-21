import React from 'react';

import styled from 'styled-components';

const RangeInput = styled.input`
  -webkit-appearance: none;
  width: 80%;
  height: 100%;
  background: transparent;
  &:focus {
    outline: none;
  }
  
  //WEBKIT
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ffffff;
    margin-top: -5px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  
  &::-webkit-slider-runnable-track {
    width: 60%;
    height: 9px;
    background: #bdbdbd;
    border-radius: 3rem;
    transition: all 0.5s;
    cursor: pointer;
  }
  
  &:hover::-webkit-slider-runnable-track {
    background: #ff6e40;
  }
  
  // IE
  &::-ms-track {
    width: 60%;
    cursor: pointer;
    height: 9px;
    transition: all 0.5s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  
  &::-ms-thumb {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ffffff;
    margin-top: -5px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  
  &::-ms-fill-lower {
    background: #bdbdbd;
    border-radius: 3rem;
  }
  
  &:focus::-ms-fill-lower {
    background: #ff6e40;
  }
  
  &::-ms-fill-upper {
    background: #bdbdbd;
    border-radius: 3rem;
  }
  
  &:focus::-ms-fill-upper {
    background: #ff6e40;
  }
  
  //FIREFOX
  &::-moz-range-thumb {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ffffff;
    margin-top: -5px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  
  &::-moz-range-track {
    width: 60%;
    height: 9px;
    background: #bdbdbd;
    border-radius: 3rem;
    transition: all 0.5s;
    cursor: pointer;
  }
  
  &:hover::-moz-range-track {
    background: #ff6e40;
  }
`

export default (props) => (
    <RangeInput type="range" {...props} />
)