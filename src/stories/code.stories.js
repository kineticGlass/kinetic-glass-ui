import React, { useState } from 'react';
import {Code} from '../Components';


export default {
  title: 'Components/DataDisplay/Code',
  component: Code,
} 



export const CodeDisplay = ()=>
    <Code
     language={"javascript"}>
       {` var a = 10;
        function callme(){
            a=20;
        }`}
    </Code>

