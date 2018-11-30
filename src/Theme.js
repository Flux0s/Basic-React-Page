import lightGreen from "@material-ui/core/colors/lightGreen";
import cyan from "@material-ui/core/colors/cyan";
import red from "@material-ui/core/colors/red";

const theme = {
  palette: {
    primary: { main: lightGreen[600] },
    secondary: { main: cyan[800] },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
};

export default theme;
