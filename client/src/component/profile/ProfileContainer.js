import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Profile from "./Profile";
import ProfileDisplay from "./ProfileDisplay";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "#999",
    margin: 5,
    padding: 20
  }
}));

const ProfileContainer = () => {
  const classes = useStyles();
  return (
    <Grid container justify='center'>
      <Grid item xs={5} md={3} className={classes.grid}>
        <Profile />
      </Grid>
      <Grid item className={classes.grid} xs={12} md={6}>
        <ProfileDisplay />
      </Grid>
    </Grid>
  );
};

export default ProfileContainer;
