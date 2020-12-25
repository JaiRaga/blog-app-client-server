import { createMuiTheme } from "@material-ui/core";

// Create a theme instance
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f4441"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: "#d92027"
    },
    background: {
      default: "#feceab"
    }
  },
  overrides: {
    MuiDrawer: {
      paperAnchorRight: {
        left: 0,
        right: 0
      }
    }
  }
});

export default theme;
