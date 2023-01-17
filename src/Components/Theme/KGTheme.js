import { ThemeProvider } from 'styled-components';
import { KGTheme } from '../../theme/Theme';

export const KGThemeProvider = ({ children,options }) => (

  <ThemeProvider theme={{ ...KGTheme, ...options }}>
    {children}
    </ThemeProvider>
);