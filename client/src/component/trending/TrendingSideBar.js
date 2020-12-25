import React, { Fragment } from "react";
import { Typography, IconButton, Tooltip, Zoom } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CloseIcon from "@material-ui/icons/Close";
import TrendingBlogs from "./TrendingBlogs";
import { toggleTrending } from "../../redux/actions/blog";

const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor: "white",
    margin: 10
  },
  display: {
    [theme.breakpoints.down("md")]: {
      display: "flex"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  link: {
    textDecoration: "none",
    color: "#ffffdd"
  },
  icons: {
    color: "#ffffdd",
    minWidth: "35px",
    paddingRight: 20
  },
  hamburger: {
    color: "black"
  },
  title: {
    fontWeight: "800",
    padding: "5px 16px",
    color: "#ebebeb"
  },
  divider: {
    backgroundColor: "#334ad8"
  },
  listBtn: {
    padding: "8px 0"
  }
}));

export default function TrendingSideBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { openTrending, trending, loading } = useSelector(
    (state) => state.blog
  );

  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      console.log("No condition");
      return;
    }
    console.log(open);
    setState({ [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Tooltip title='Close' TransitionComponent={Zoom}>
        <IconButton
          aria-label='close'
          color='secondary'
          onClick={() => dispatch(toggleTrending(!openTrending))}>
          <CloseIcon />
        </IconButton>
      </Tooltip>
      <Typography variant='h3' align='center'>
        Trending
      </Typography>
      {!loading && trending.length !== 0 ? (
        <TrendingBlogs trending={trending} />
      ) : (
        <Typography variant='h4' align='center'>
          No Trending Blogs.
        </Typography>
      )}
    </div>
  );

  const anchor = "right";

  return (
    <Fragment>
      <SwipeableDrawer
        anchor={anchor}
        open={openTrending ? toggleDrawer(anchor, openTrending) : null}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}>
        {list(anchor)}
      </SwipeableDrawer>
    </Fragment>
  );
}
