import React from "react";
import { Grid } from "@material-ui/core";
import TrendingBlogItem from "./TrendingBlogItem";
import BlogItem from "../blogs/BlogItem";

const TrendingBlogs = ({ trending }) => {
  return (
    <Grid item>
      {trending.map((blog) => (
        <BlogItem blog={blog} trending />
      ))}
    </Grid>
  );
};

export default TrendingBlogs;
