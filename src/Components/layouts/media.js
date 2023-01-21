import { css } from 'styled-components';
import { KGTheme } from '../../theme/Theme'

const breakpoints = KGTheme.breakpoints;

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;