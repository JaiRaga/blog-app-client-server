import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  Divider
} from "@material-ui/core";
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {},
  divider: {
    margin: "40px 0",
    background:
      "linear-gradient(90deg, rgba(16,3,158,1) 0%, rgba(9,73,121,1) 15%, rgba(4,204,245,1) 48%)"
  },
  title: {
    padding: "20px 0",
    cursor: 'pointer'
  },
  tags: {
    padding: "20px 0"
  }
}));

const BlogItem = ({ blog, trending }) => {
  const classes = useStyles();
  const history = useHistory()
  const mediumScreenTitle = trending ? 12 : 8;
  const mediumScreenTags = trending ? 12 : 4;

  return (
    <Fragment>
      <Grid container item justify='center' className={classes.root}>
        <Grid item xs={12} md={mediumScreenTitle} className={classes.title} onClick={() => history.push(`/blog/${blog._id}`)}>
          <Typography variant='h4' align='center'>
            {blog.title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={mediumScreenTags} className={classes.tags}>
          <Grid container item justify='center'>
            {blog.category.map((tag) => (
              <Button key={uuidv4()} variant='contained' color='primary' onClick={() => history.push("/tags")}>
                {tag}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Fragment>
  );
};

export default BlogItem;
