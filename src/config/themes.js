//createcontext allows you to pass data through the component tree without having to pass props down manually at every level
//memo lets you skip re-rendering a component when its props are unchanged
//useState is a hook that lets you add a state variable to your component
import { createContext, useState, useMemo } from "react";

//createtheme used to create own theme on top of mui theme
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  //spread syntax
  ...(mode === "dark"
    ? {
        white: {
          100: "#fefdfb",
          200: "#fcfbf7",
          300: "#fbf8f4",
          400: "#f9f6f0",
          500: "#f8f4ec",
          600: "#c6c3bd",
          700: "#95928e",
          800: "#63625e",
          900: "#32312f",
        },
        lightPinkAccent: {
          100: "#ffebf6",
          200: "#ffd7ed",
          300: "#ffc3e4",
          400: "#ffafdb",
          500: "#ff9bd2",
          600: "#cc7ca8",
          700: "#995d7e",
          800: "#663e54",
          900: "#331f2a",
        },
        pinkAccent: {
          100: "#f7d6e6",
          200: "#efaece",
          300: "#e685b5",
          400: "#de5d9d",
          500: "#d63484",
          600: "#ab2a6a",
          700: "#801f4f",
          800: "#561535",
          900: "#2b0a1a",
        },
        primary: {
          100: "#d9d5d8",
          200: "#b3aab0",
          300: "#8c8089",
          400: "#665561",
          500: "#402b3a",
          600: "#33222e",
          700: "#261a23",
          800: "#1a1117",
          900: "#0d090c",
        },
      }
    : {
        white: {
          100: "#32312f",
          200: "#63625e",
          300: "#95928e",
          400: "#c6c3bd",
          500: "#f8f4ec",
          600: "#f9f6f0",
          700: "#fbf8f4",
          800: "#fcfbf7",
          900: "#fefdfb",
        },
        lightPinkAccent: {
          100: "#331f2a",
          200: "#663e54",
          300: "#995d7e",
          400: "#cc7ca8",
          500: "#ff9bd2",
          600: "#ffafdb",
          700: "#ffc3e4",
          800: "#ffd7ed",
          900: "#ffebf6",
        },
        pinkAccent: {
          100: "#2b0a1a",
          200: "#561535",
          300: "#801f4f",
          400: "#ab2a6a",
          500: "#d63484",
          600: "#de5d9d",
          700: "#e685b5",
          800: "#efaece",
          900: "#f7d6e6",
        },
        primary: {
          100: "#0d090c",
          200: "#1a1117",
          300: "#261a23",
          400: "#33222e",
          500: "#402b3a",
          600: "#665561",
          700: "#8c8089",
          800: "#b3aab0",
          900: "#d9d5d8",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,

      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.pinkAccent[500],
            },
            neutral: {
              dark: colors.white[700],
              main: colors.white[500],
              light: colors.white[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.pinkAccent[500],
            },
            neutral: {
              dark: colors.white[700],
              main: colors.white[500],
              light: colors.white[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Manrope", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Manrope", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Manrope", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Manrope", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Manrope", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Manrope", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Manrope", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
