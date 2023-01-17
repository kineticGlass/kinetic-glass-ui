import { ThemeProvider } from "styled-components";
import { KGTheme  } from "../../theme/Theme";
export const withTheme = Component => props => (
    <ThemeProvider theme={{ ...KGTheme, ...props.theme }}>
      <Component {...props} />
    </ThemeProvider>
  );