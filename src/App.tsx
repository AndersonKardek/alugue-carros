import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

import { Outlet } from "react-router-dom";

import Header from "./components/Header";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
