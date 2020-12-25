import React, { useEffect } from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import SearchItem from "./SearchItem";
import { getBlogs } from "../../redux/actions/blog";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  result: {
    marginTop: 5
  },
  searchResult: {
    marginTop: 10
  }
}));

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);
  const { blogs, loading, trending } = blog;

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item>
        <Typography variant='h5' className={classes.result}>
          Results
        </Typography>
        <Divider />
      </Grid>
      <Grid item className={classes.searchResult}>
        {blogs.map((blog) => (
          <SearchItem blog={blog} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Search;
