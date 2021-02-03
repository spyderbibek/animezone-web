import './App.css';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';
import myFont from './assets/fonts/Logo.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Logo';
    src: url(${myFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
