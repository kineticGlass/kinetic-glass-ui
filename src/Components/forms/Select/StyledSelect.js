import React from "react";
import ReactSelect from "react-select";
import styled from 'styled-components';
import { withTheme } from "../../Theme/withTheme";
import { KGTheme } from "../../../theme/Theme";

export const MultiSelect = styled(ReactSelect)`
  & .Select__indicator Select__dropdown-indicator {
    border-color: red red red !important;
    background-color: red !important;
    height: 300px !important;
    color:red !important;
  }
`;

export default withTheme(MultiSelect);
