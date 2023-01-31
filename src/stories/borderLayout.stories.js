import React, { useState } from "react";
import { BorderLayout, Box } from "../Components";

export default {
  title: "Components/layouts/BorderLayout",
  component: BorderLayout,
};
export const SimplBorderLayout = () => {
  return (
    <BorderLayout
    
   
    
    >
        
      <Box
        bg="primary"
       
        textAlign="center"
        css={{ alignItems: "center" }}
        location="top"

      >
        Top
      </Box>
      <Box
        bg="success"
       
        textAlign="center"
        css={{ alignItems: "center" }}
        location="left"
        height="100%"
      >
     Left
      </Box>
      <Box
        bg="green"
        
        textAlign="center"
        css={{ alignItems: "center" }}
        location="right"
        height="100%"
      >
        Right
      </Box>
     
     
     
      <Box
        bg="blue"
        textAlign="center"
        css={
            {
                paddingLeft:"10rem",
                paddingRight:"10rem"
            }
        }
        location="center"
        
      >
         <Box 
         bg="purple"
         textAlign="center"
         p="50px">
          inner Box
         </Box>
        
      </Box>
      <Box
        bg="red"
        textAlign="center"
        css={{ alignItems: "center" }}
        location="bottom"
      >
        bottom
      </Box>
    </BorderLayout>
  );
};
