import React from "react";
import { Grid } from "@material-ui/core";
import BlogItem from "../blogs/BlogItem";

const SearchItem = ({ blog }) => {
  return (
    <Grid container item>
      <Grid item xs={12}>
        <BlogItem blog={blog} divider='dark' />
      </Grid>
    </Grid>
  );
};

export default SearchItem;
