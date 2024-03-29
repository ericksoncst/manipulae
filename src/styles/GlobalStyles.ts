import { createGlobalStyle, css } from 'styled-components'

const styles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;