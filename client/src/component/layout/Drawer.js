import React, { Fragment, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  Tooltip,
  Zoom
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DehazeIcon from "@material-ui/icons/Dehaze";
import AdjustIcon from "@material-ui/icons/Adjust";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SearchIcon from "@material-ui/icons/Search";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TrendingSideBar from "../trending/TrendingSideBar";
import { toggleTrending } from "../../redux/actions/blog";
import { logout } from "../../redux/actions/auth";
// import SideProfile from "../profile/SideProfile";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  list: {
    width: "auto",
    padding: 0
  },
  display: {
    [theme.breakpoints.down("md")]: {
      display: "flex"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  grid: {
    paddingBottom: 3,
    paddingLeft: 10,
    fontStyle: "italic",
    fontWeight: 500
  },
  link: {
    textDecoration: "none",
    color: "#1976d2"
  },
  right: {
    padding: 0
  },
  // btnLink: {
  //   textDecoration: "none"
  // },
  icons: {
    color: "#1976d2",
    minWidth: "35px",
    paddingRight: 20
  },
  hamburger: {
    color: "white"
  },
  trending: {
    color: "white",
    marginLeft: "auto"
  },
  title: {
    fontWeight: "800",
    padding: "5px 16px"
  }
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = React.useState({
    left: false
  });

  // For toggling Trending
  const openTrending = useSelector((state) => state.blog.openTrending);
  const [isOpen, setIsOpen] = useState(openTrending);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const authLinks = (
    <Fragment>
      <Typography className={classes.title} color='primary' variant='body1'>
        Account Info
      </Typography>
      <Divider />
      <List className={classes.list}>
        <Link to='/' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <ChangeHistoryIcon />
            </ListItemIcon>
            <ListItemText primary='Pom' />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List className={classes.right}>
        <Link to='/dashboard' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>

        <Link to='/search' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary='Search' />
          </ListItem>
        </Link>

        <Link to='/profile' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonPinIcon />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItem>
        </Link>

        <Link to='/setting' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <AdjustIcon />
            </ListItemIcon>
            <ListItemText primary='Setting' />
          </ListItem>
        </Link>

        <Link to='/' className={classes.link}>
          <ListItem button onClick={() => dispatch(logout())}>
            <ListItemIcon className={classes.icons}>
              <DirectionsRunIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
        </Link>
      </List>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <List className={classes.list}>
        <Tooltip
          title='Most Viewed Blog'
          placement='top'
          TransitionComponent={Zoom}>
          <Button fullWidth className={classes.link}>
            Tag
          </Button>
        </Tooltip>
        <Tooltip title='Most Viewed Tag' TransitionComponent={Zoom}>
          <Button fullWidth className={classes.link}>
            Tag
          </Button>
        </Tooltip>
      </List>
      <Divider />
      <List className={classes.list}>
        <Link to='/' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <ChangeHistoryIcon />
            </ListItemIcon>
            <ListItemText primary='Pom' />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List className={classes.right}>
        <Link to='/search' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary='Search' />
          </ListItem>
        </Link>

        <Link to='/login' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary='Login' />
          </ListItem>
        </Link>

        <Link to='/register' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary='Register' />
          </ListItem>
        </Link>

        <Link to='/blogs' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary='Blogs' />
          </ListItem>
        </Link>

        <Link to='/profile' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItem>
        </Link>
      </List>
    </Fragment>
  );

  const { isAuthenticated } = useSelector((state) => state.auth);

  const list = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      {isAuthenticated ? authLinks : guestLinks}
    </div>
  );
  const anchor = "bottom";
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.display}>
        <Toolbar>
          <IconButton
            className={classes.hamburger}
            onClick={toggleDrawer(anchor, true)}>
            <DehazeIcon />
          </IconButton>
          <Typography className={classes.grid} variant='h6'>
            Pom
          </Typography>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
          <IconButton
            className={classes.trending}
            onClick={() => dispatch(toggleTrending(!isOpen))}>
            <TrendingUpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
