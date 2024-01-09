import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import {store} from '../redux/store'
import styled from "styled-components"
import Sidebar from 'components/Sidebar';
import MusicPlayer from 'components/MusicPlayer';


const Wrapper = styled.div`
    display: flex;
    position: relative;
`
function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <Wrapper>
          <Sidebar />
          <Component {...pageProps} />
          <MusicPlayer />
        </Wrapper>
    </Provider>
  );
}

export default App;