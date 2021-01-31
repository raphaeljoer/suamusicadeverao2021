import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    color: {
      purple: {
        lighter: string;
        light: string;
        normal: string;
        dark: string;
      };

      yellow: {
        light: string;
        normal: string;
        dark: string;
      };

      pink: {
        lighter: string;
        light: string;
        normal: string;
        dark: string;
      };

      green: {
        normal: string;
      };

      white: {
        normal: string;
      };
    };

    font: {
      title: string;
      body: string;
    };

    breakpoint: {
      mobile: {
        small: string;
        midle: string;
        large: string;
      };

      tablet: {
        small: string;
        midle: string;
        large: string;
        xlarge: string;
      };

      desktop: {
        small: string;
        midle: string;
        large: string;
      };
    };
  }
}
