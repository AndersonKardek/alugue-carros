import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    breakpoints: {
      desktop: string;
    };

    colors: {
      primary: tring;
      secundary: string;

      background: string;
      text: string;
    };
  }
}
