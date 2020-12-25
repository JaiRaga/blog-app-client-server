import React from "react";
import { Grid, makeStyles, Paper, Avatar } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    },
    width: "100%",
    backgroundColor: "#cf1b1b"
    // backgroundColor: theme.palette.background.paper
  },
  spacing: {
    // paggingTop: 5,
    margin: 10
  },
  items: {
    padding: 5
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  }
}));

const CommentItem = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.spacing}>
      <Grid container item alignItems='center' className={classes.root}>
        <Grid item className={classes.items}>
          <Avatar className={classes.purple}>R</Avatar>
        </Grid>
        <Grid item className={classes.items}>
          <Grid container item direction='column'>
            <Grid item>Name</Grid>
            <Grid item>handle</Grid>
          </Grid>
        </Grid>
        <Grid item>time</Grid>
        {/* <Divider orientation='vertical' /> */}

        <Grid item className={classes.items}>
          <Grid container item>
            Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Veritatis, molestias.
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CommentItem;
