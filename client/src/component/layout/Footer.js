import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    backgroundColor: "#fff"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="flex-end">
      <Grid item>
        <BottomNavigation showLabels value={0} className={classes.root}>
          <BottomNavigationAction
            showLabel
            label='Made By Raga Jai Santhosh'
            color='primary'
          />
        </BottomNavigation>
      </Grid>
    </Grid>
  );
};

export default Footer;
