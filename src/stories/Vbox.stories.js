import React, { useState } from "react";
import { Box, VBox } from "../Components";
import { storiesOf } from "@storybook/react";

export default {
  title: "Components/layouts/VBox",
  component: VBox,
};
export const SimplVbox = () => {
  return (
    <VBox
      width="600px"
      height="400px"
      bg="secondary"
      justify="space-between"
      align="center"
      wrap
      mediaQueryType="min-width"
      responsive={[
        "width:400px; background-color:red; height:600px",
        "width:600px; background-color:yellow; height:400px",
        "width:800px; background-color:green; height:300px",
      ]}
      breakpoints={[
         "450px",
          "600px",
          "700px"
      ]}
      inner={
        {border:"top",
         borderSize:"3px",
         borderColor:"red",
         borderStyle:"solid",
         css:{
            borderBottom:"3px solid yellow",
         }
        
        }

      }
    >
        
      <Box
        bg="primary"
        width="300px"
        height="153px"
        textAlign="center"
        css={{ alignItems: "center" }}

      >
        child 1
      </Box>
      <Box
        bg="success"
        width="205px"
        height="153px"
        textAlign="center"
        css={{ alignItems: "center" }}
      >
        child 1
      </Box>
      <Box
        bg="glass"
        width="205px"
        height="153px"
        textAlign="center"
        css={{ alignItems: "center" }}
      >
        child 1
      </Box>
    </VBox>
  );
};
