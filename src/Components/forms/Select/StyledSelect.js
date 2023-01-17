import React from "react";
import ReactSelect from "react-select";
import styled from 'styled-components';
import { withTheme } from "../../Theme/withTheme";
const MultiSelect = styled(ReactSelect)`
    &.Select--multi  {

        .Select-value {
            display: inline-flex;
            align-items: center;
        }
    }

    & .Select-placeholder {
        font-size: smaller;
    }
`

export default withTheme(MultiSelect);
