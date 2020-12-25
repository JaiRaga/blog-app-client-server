import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: 10,
    margin: 5,
    marginTop: 10
  }
}));

const CreateBlogBtn = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Button
      size='large'
      variant='contained'
      color='primary'
      fullWidth
      onClick={() => history.push("/create")}
      className={classes.btn}>
      Write a Blog!
    </Button>
  );
};

export default CreateBlogBtn;
