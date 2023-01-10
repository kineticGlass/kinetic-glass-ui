const lightTheme = {
  colors: {
    background: '#fff',
    text: '#333',
  },
};

const darkTheme = {
  colors: {
    background: '#333',
    text: '#fff',
  },
};

const baseTheme = {
  colors: {
    primary: '#333',
    secondary: '#999',
    success: '#3c763d',
    info: '#31708f',
    warning: '#8a6d3b',
    danger: '#a94442',
  },
  fonts: {
    body: 'Helvetica, sans-serif',
    heading: 'Arial, sans-serif',
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    bold: 600,
  },
  lineHeights: {
    small: 1.5,
    medium: 1.75,
    large: 2,
  },
  space: {
    small: '8px',
    medium: '16px',
    large: '32px',
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  radii: {
    small: '2px',
    medium: '4px',
    large: '8px',
  },
  transitions: {
    fast: '0.1s ease-in-out',
    normal: '0.2s ease-in-out',
    slow: '0.3s ease-in-out',
  },
};

const theme = {
  light: { ...baseTheme, ...lightTheme },
  dark: { ...baseTheme, ...darkTheme },
};
