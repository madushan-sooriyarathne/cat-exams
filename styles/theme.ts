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
      sinhalaPrimary: string;
      sinhalaSecondary: string;
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
      medium: string;
      small: string;
      extraSmall: string;
      tiny: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "#d8684e",
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
    primary: "'Inter', Arial, Helvetica, sans-serif",
    secondary: "'Playfair Display', 'Times New Roman', Times, serif",
    sinhalaPrimary: "'Malithi', serif",
    sinhalaSecondary: "'Yaldevi', serif",
  },
  gradients: {
    background: " linear-gradient(135deg, #fdfcfb 10%, #e2d1c3 100%)",
    primary: "linear-gradient(135deg, #FF9D6C 10%, #BB4E75 100%)",
    secondary: "linear-gradient(135deg, #09203F 10%, #537895 100%);",
  },
  shadows: {
    close: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
    spread: " 0 0 20px 0 rgba(0, 0, 0, 0.15)",
  },
  responsive: {
    large: "@media only screen and (max-width: 100em)",
    next: "@media only screen and (max-width: 84.375em)",
    medium: "@media only screen and (max-width: 87.5em)", // 1400px
    small: "@media only screen and (max-width: 68.75em)",
    extraSmall: "@media only screen and (max-width: 50em)", // 80px
    tiny: "@media only screen and (max-width: 31.25em)", //500px
  },
};

export default theme;
