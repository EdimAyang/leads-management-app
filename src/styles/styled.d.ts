import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark";
    layout: {
      sidebar: {
        expanded: string;
        collapsed: string;
      };
      header: {
        height: string;
      };
    };

    colors: {
      primary: string;
      secondary: string;

      success: string;
      warning: string;
      danger: string;

      background: string;
      surface: string;

      border: string;

      text: string;
      textLight: string;
    };

    radius: {
      sm: string;
      md: string;
      lg: string;
    };

    shadows: {
      sm: string;
      md: string;
    };
  }
}
