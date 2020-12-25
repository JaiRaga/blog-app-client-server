import React from "react";
import { Grid, Divider, Typography, Button } from "@material-ui/core";
import BlogItem from "../blogs/BlogItem";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  divider: {
    margin: 5
  }
});

const TrendingBlogItem = () => {
  const classes = useStyles();
  return (
    <Grid item>
      <BlogItem trending />
      <Divider className={classes.divider} />
      <BlogItem trending />
      <Divider className={classes.divider} />
      <BlogItem trending />
      <Divider className={classes.divider} />
      <BlogItem trending />
      <Divider className={classes.divider} />
      <BlogItem trending />
      <Divider className={classes.divider} />
    </Grid>
  );
};

export default TrendingBlogItem;
