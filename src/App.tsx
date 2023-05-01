import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

import Header from "./components/Header";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
