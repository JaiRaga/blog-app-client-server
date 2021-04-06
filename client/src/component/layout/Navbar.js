import React, { Fragment } from 'react'
import {
	fade,
	makeStyles,
	AppBar,
	Toolbar,
	InputBase,
	IconButton,
	Typography,
	Button,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core'

import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import PersonIcon from '@material-ui/icons/Person'
import HomeIcon from '@material-ui/icons/Home'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import AdjustIcon from '@material-ui/icons/Adjust'
import SearchIcon from '@material-ui/icons/Search'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth'
import Search from './Search'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	navbar: {
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	list: {
		display: 'flex',
	},
	appName: {
		fontStyle: 'italic',
		fontWeight: 500,
	},
	link: {
		textDecoration: 'none',
		color: 'white',
	},
	icons: {
		color: 'white',
		minWidth: '35px',
	},
	right: {
		display: 'flex',
		marginLeft: 'auto',
	},
}))

const Navbar = (props) => {
	const classes = useStyles()
	const { isAuthenticated, loading } = useSelector((state) => state.auth)
	const dispatch = useDispatch()

	const authLinks = (
		<Fragment>
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
			<List className={classes.right}>{/* <Search /> */}</List>
			<List className={classes.right}>
				<Link to='/dashboard' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary='Home' />
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
	)

	const guestLinks = (
		<Fragment>
			<List className={classes.list}>
				<Link to='/' className={classes.link}>
					<ListItem button>
						<ListItemIcon className={classes.icons}>
							<ChangeHistoryIcon />
						</ListItemIcon>
						<ListItemText primary='Pom' className={classes.appName} />
					</ListItem>
				</Link>
			</List>
			<List className={classes.right}>
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

				{/* <Link to='/blogs' className={classes.link}>
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
        </Link> */}
			</List>
		</Fragment>
	)

	return (
		<div className={classes.root}>
			<AppBar
				position='static'
				// color='transparent'
				className={classes.navbar}>
				<Toolbar>
					{isAuthenticated && !loading ? authLinks : guestLinks}
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Navbar
