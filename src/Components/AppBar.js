import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    flexGrow: 1
  }
});

class AppBar extends Component {
  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Steven
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(AppBar);
