import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      100: "#F2F2F7",
      200: "#D9D9E8",
      300: "#B3B3D0",
      400: "#8D8DB9",
      500: "#6767A2",
      600: "#4E4E7E",
      700: "#363659",
      800: "#1F1F33",
      900: "#08080D",
    },
    secondary: {
      100: "#F5F5F4",
      200: "#E2E2DF",
      300: "#C5C5BF",
      400: "#A8A89F",
      500: "#8B8B7E",
      600: "#6B6B61",
      700: "#4B4B44",
      800: "#2B2B27",
      900: "#0B0B0A",
    },
    accent: {
      100: "#FFF3EB",
      200: "#FFDAC2",
      300: "#FFB685",
      400: "#FF9147",
      500: "#FF6C0A",
      600: "#CC5200",
      700: "#8F3900",
      800: "#522100",
      900: "#140800",
    },
    success: {
      100: "#EEFCF8",
      200: "#CBF6EA",
      300: "#97EDD4",
      400: "#63E3BF",
      500: "#2FDAAA",
      600: "#1FAD85",
      700: "#15795D",
      800: "#0C4535",
      900: "#03110D",
    },
    warning: {
      100: "#FFFAEB",
      200: "#FFFAEB",
      300: "#FFE085",
      400: "#FFD147",
      500: "#FFC20A",
      600: "#CC9900",
      700: "#8F6B00",
      800: "#523D00",
      900: "#140F00",
    },
    danger: {
      100: "#FCEEEE",
      200: "#F6CBCB",
      300: "#ED9696",
      400: "#E46262",
      500: "#DC2E2E",
      600: "#AE1E1E",
      700: "#7A1515",
      800: "#460C0C",
      900: "#120303",
    },
  },
  components: {
    Tags: {
      parts: ["tags", "tag"],
      baseStyle: {
        tags: {},
        tag: {
        },
      },
      sizes: {
        sm: {
          tags: {
            spacing: "2",
          },
          tag: {
            py: "1",
            px: "1",
            fontSize: "xs",
          },
        },
        md: {
          tags: {
            spacing: "3",
          },
          tag: {
            py: "1",
            px: "2",
            fontSize: "sm",
          },
        },
      },
      defaultProps: {
        size: "md",
      },
    },
    NoteCard: {
      parts: ["card", "date", "title", "excerpt"],
      baseStyle: {
        card: {
          borderBottom: "1px",
          borderColor: "secondary.200",
        },
        date: {
          fontWeight: "light",
          color: "secondary.400",
        },
        title: {
          color: "secondary.700",
        },
        excerpt: {
          color: "secondary.600",
        },
      },
      sizes: {
        sm: {
          card: {
            p: "2",
            pt: "4",
          },
          date: {
            pb: "1",
            fontSize: "sm",
          },
          title: {
            pb: "1",
            fontSize: "sm",
          },
          excerpt: {
            pb: "2",
            fontSize: "xs",
          },
        },
        md: {
          card: {
            p: "2",
            pt: "4",
          },
          date: {
            pb: "2",
          },
          title: {
            pb: "2",
            fontSize: "md",
          },
          excerpt: {
            pb: "4",
            fontSize: "md",
          },
        },
      },
      variants: {},
      defaultProps: {
        size: "md",
      },
    },
  },
});

export default theme;
