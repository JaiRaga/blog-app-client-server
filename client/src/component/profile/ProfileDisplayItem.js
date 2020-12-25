import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "#666",
    margin: 10,
    padding: 10
  }
}));

const ProfileDisplayItem = () => {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, veniam.
    </div>
  );
};

export default ProfileDisplayItem;
