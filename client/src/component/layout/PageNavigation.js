import React from 'react'
import { Grid, Button, makeStyles, Hidden, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core"
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: "#666"
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
    return (
        // <Grid item xs={0} sm={2} className={classes.background}>
        <Hidden only={['xs', 'sm']}>
            <Grid item className={classes.root}>
                {/* <Grid container item direction="column" justify="center" alignItems="center"> */}
                <List component="nav" aria-label="side-navigation" classNAme={classes.list}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
            </Grid>
            {/* </Grid> */}
        </Hidden>
        // </Grid>
    )
}

export default PageNavigation
