import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Header />
        <Hero />
      </ThemeProvider>
    </>
  );
}

export default App;
