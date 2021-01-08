import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Profile from "./Profile";
import ProfileDisplay from "./ProfileDisplay";
import PageNavigation from "../layout/PageNavigation"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center"
    }
  },
  grid: {
    backgroundColor: "#999",
    // margin: 5,
    padding: 20
  },
  profileContent: {
    marginLeft: 14
  }
}));

const ProfileContainer = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
      {/* <Grid item xs={0} md={3}> */}
      {/* <Hidden only={['xs', 'sm', 'md']}> */}
      <PageNavigation />
      {/* </Hidden> */}
      {/* </Grid> */}
      <Grid item xs={12} sm={6} lg={8} className={classes.profileContent}>
        <Grid container item>
          <Grid item xs={5} md={3} className={classes.grid}>
            <Profile />
          </Grid>
          <Grid item className={classes.grid} xs={12} md={6}>
            <ProfileDisplay />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileContainer;
