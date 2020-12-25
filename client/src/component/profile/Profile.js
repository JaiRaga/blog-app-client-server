import React from "react";
import { Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import pic from "../../img/pic.jpg";

const useStyles = makeStyles((theme) => ({
  // grid: {
  //   backgroundColor: "#eee"
  // }
  avatar: {
    marginRight: 10
  },
  gridRight: {
    marginRight: "auto"
  }
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.grid}>
      <Grid container item justify='space-between' alignItems='center'>
        <Avatar className={classes.avatar} alt='pic' src={pic} />
        <Grid item className={classes.gridRight}>
          <Grid container item direction='column'>
            <Grid item>Name</Grid>
            <Grid item>rating</Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item direction='column'>
        <Grid item>Blogs</Grid>
        <Grid item>Trending</Grid>
        <Grid item>Suggestions</Grid>
        <Grid item>Tags</Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
