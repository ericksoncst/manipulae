import theme from 'styles/theme';
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components'
import Providers from './provider';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
              <ThemeProvider theme={theme}>
                {props.children}
              </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}