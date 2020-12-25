import React, { Fragment, useEffect } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Button,
  useMediaQuery
} from "@material-ui/core";
import BlogItem from "./BlogItem";
import TrendingBlogs from "../trending/TrendingBlogs";
import TrendingSideBar from "../trending/TrendingSideBar";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@material-ui/styles";
import { getBlogs } from "../../redux/actions/blog";
import Footer from "../layout/Footer";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center"
    }
  },
  blogs: {
    padding: 10,
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      margin: 0
    }
  },
  blogsTitle: {
    margin: 10
  },
  trendings: {
    margin: 5,
    padding: 5,
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  trendingTitle: {
    margin: 10
  },
  divider: {
    margin: 5
  }
}));

const Blogs = ({ displayTrending }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const trendingSidebar = useMediaQuery(theme.breakpoints.down("xs"));
  const blog = useSelector((state) => state.blog);
  const { blogs, loading, trending } = blog;
  // console.log(blogs, loading);

  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <Grid container className={classes.root} justify='flex-end'>
      <Grid
        item
        xs={12}
        sm={displayTrending === "false" ? 12 : 6}
        className={classes.blogs}>
        <Grid
          container
          item
          direction='column'
          justify='center'
          alignItems='center'>
          {!loading && blogs.length !== 0 ? (
            <Fragment>
              <Typography variant='h4' className={classes.blogsTitle}>
                Blogs
              </Typography>
              <Grid item>
                {blogs.map((blog) => (
                  <BlogItem key={blog._id} blog={blog} />
                ))}
              </Grid>
            </Fragment>
          ) : (
            <Skeleton variant='rect' width='100%'>
              <div />
            </Skeleton>
          )}
        </Grid>
      </Grid>
      {displayTrending !== "false" ? (
        <Grid item xs={3} className={classes.trendings}>
          <Grid container item>
            <Grid item>
              <Typography
                variant='h4'
                align='center'
                className={classes.trendingTitle}>
                Trending
              </Typography>
              {!loading && trending.length !== 0 ? (
                <TrendingBlogs className={classes.trending} />
              ) : (
                <Typography variant='h4'>No Trending Blogs</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Blogs;
