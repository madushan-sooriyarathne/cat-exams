import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      // primaryMedium: string;
      // primaryLight: string;
      secondary: string;
      // secondaryMedium: string;
      // secondaryLight: string;
      white: string;
      black: string;
      // blackLight: string;
      // danger: string;
      // warning: string;
      // success: string;
    };
    fonts: {
      primary: string;
      secondary: string;
      sinhala: string;
    };
    gradients: {
      background: string;
      primary: string;
      secondary: string;
    };
    shadows: {
      close: string;
      spread: string;
    };
    responsive: {
      large: string;
      next: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "red",
    // primaryMedium: string,
    // primaryLight: string,
    secondary: "yellow",
    // secondaryMedium: string,
    // secondaryLight: string,
    white: "white",
    black: "black",
    // blackLight: string,
    // danger: string,
    // warning: string,
    // success: string,
  },
  fonts: {
    primary: "'Source Sans Pro', Arial, Helvetica, sans-serif",
    secondary: "'Playfair Display', 'Times New Roman', Times, serif",
    sinhala: " 'Abhaya Libre', serif",
  },
  gradients: {
    background: " linear-gradient(135deg, #fdfcfb 10%, #e2d1c3 100%)",
    primary: "linear-gradient(135deg, #3b2667 10%, #bc78ec 100%)",
    secondary: "linear-gradient(135deg, #536976 10%, #292E49 100%);",
  },
  shadows: {
    close: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
    spread: " 0 0 20px 0 rgba(0, 0, 0, 0.15)",
  },
  responsive: {
    large: "@media only screen and (max-width: 100em)",
    next: "@media only screen and (max-width: 84.375em)",
  },
};

export default theme;
