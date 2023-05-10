import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";

import {Outlet} from "react-router-dom"

import Home from "./routes/Home";


function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle /> 
        <Home />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
