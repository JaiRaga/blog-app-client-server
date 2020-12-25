import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import CommentItem from "./CommentItem";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.background.default,
    width: "100%"
  }
}));

const Comments = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.background}>
      <Grid container item direction='column'>
        <CommentItem />
        <CommentItem />
      </Grid>
    </Paper>
  );
};

export default Comments;
