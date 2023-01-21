import React from 'react';
import styled from 'styled-components';
import media from '../media';
import { KGTheme } from '../../../theme/Theme';

const  breakpoints = KGTheme.breakpoints;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  grid-gap: 20px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  ${media.lessThan(breakpoints.md)`
    grid-template-columns: repeat(2, 1fr);
  `}
`;
const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  border-radius: 5px;
  padding: 20px;
  min-height: 300px;
  grid-column: span ${props => props.colSpan};
  grid-row: span ${props => props.rowSpan};
`;
const ResponsiveGrid = ({ children }) => (
  <GridContainer>
    {children.map((child, index) => (
       <GridItem key={index} colSpan={colSpan} rowSpan={rowSpan}>
       {child}
     </GridItem>
    ))}
  </GridContainer>
);

export default ResponsiveGrid;