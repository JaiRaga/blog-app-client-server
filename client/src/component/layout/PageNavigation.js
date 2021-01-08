import React from 'react'
import { Grid, Button, makeStyles, Hidden, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core"
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import CreateBlogBtn from '../blogs/CreateBlogBtn';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
        // backgroundColor: "#666"
    },
    background: {

    },
    list: {
        display: "flex",
        justifyContent: "center"
    }
}))

const PageNavigation = () => {
    const classes = useStyles()
    const history = useHistory()
    const path = history.location.pathname
    console.log(history)
    return (
        // <Grid item xs={0} sm={2} className={classes.background}>
        <Hidden only={['xs', 'sm']}>
            <Grid item className={classes.root}>
                {/* <Grid container item direction="column" justify="center" alignItems="center"> */}
                <List component="nav" aria-label="side-navigation" classNAme={classes.list}>
                    <ListItem button onClick={() => history.push("/dashboard")} selected={path === "/dashboard" ? true : false}>
                        <ListItemIcon>
                            <HomeSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/profile")} selected={path === "/profile" ? true : false}>
                        <ListItemIcon>
                            <PersonSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/setting")} selected={path === "/setting" ? true : false}>
                        <ListItemIcon>
                            <SettingsSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/setting")} selected={path === "/0000" ? true : false}>
                        <ListItemIcon>
                            <HomeSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/setting")} selected={path === "/0000" ? true : false}>
                        <ListItemIcon>
                            <PersonSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button onClick={() => history.push("/setting")} selected={path === "/0000" ? true : false}>
                        <ListItemIcon>
                            <SettingsSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem>
                        <CreateBlogBtn />
                    </ListItem>
                </List>
            </Grid>
            {/* </Grid> */}
        </Hidden>
        // </Grid>
    )
}

export default PageNavigation
