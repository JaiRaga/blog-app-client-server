import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Typography,
  Button
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postBlog } from "../../redux/actions/blog";

const useStyles = makeStyles((theme) => ({
  container: {},
  spacing: {
    marginTop: 10,
    width: "100%"
  }
}));

const CreateBlog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [blog, setBlog] = useState({ title: "", body: "" });
  // console.log(blog);

  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(blog);
    dispatch(postBlog(blog));
  };

  return (
    <Grid
      container
      direction='column'
      //   justify='center'
      alignItems='center'
      className={classes.container}>
      {/* <form> */}
      <Grid item xs={6} className={classes.spacing}>
        <Typography variant='h4' color='primary'>
          Blog Title
        </Typography>
        <TextField
          id='title'
          name='title'
          label='Title of the Blog Post!'
          fullWidth
          autoFocus
          multiline
          required
          type='text'
          onChange={onChange}
          // error
          // helperText='Error'
        />
      </Grid>

      <Grid item xs={6} className={classes.spacing}>
        <Typography variant='h4' color='primary'>
          Blog Body
        </Typography>
        <TextField
          id='body'
          name='body'
          label='Body of the blog Post!'
          fullWidth
          variant='filled'
          multiline
          required
          type='text'
          onChange={onChange}
          // error
          // helperText='Error'
        />
      </Grid>

      <Grid item xs={6} className={classes.spacing}>
        <Button variant='outlined' color='primary' onClick={onSubmit}>
          Submit Blog
        </Button>
      </Grid>
      {/* </form> */}
    </Grid>
  );
};

export default CreateBlog;
