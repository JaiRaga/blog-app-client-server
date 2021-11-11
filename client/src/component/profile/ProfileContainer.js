import React, { useEffect, useState, Fragment } from 'react'
import { CircularProgress, Grid, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useDispatch, useSelector } from 'react-redux'
import Profile from './Profile'
import ProfileDisplay from './ProfileDisplay'
import PageNavigation from '../layout/PageNavigation'
import { loadUser } from '../../redux/actions/auth'
import { getBlogsByMe } from '../../redux/actions/blog'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
		},
	},
	grid: {
		backgroundColor: '#999',
		// margin: 5,
		padding: 20,
	},
	loading: {
		marginTop: 20,
	},
	profileContent: {
		marginLeft: 0,
	},
}))

const ProfileContainer = ({ match }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const history = useHistory()

	console.log(match.params.id)

	useEffect(() => {
		dispatch(loadUser())
		dispatch(getBlogsByMe())
	}, [])

	const [authUser, setAuthUser] = useState(null)
	const user = useSelector((state) => state.auth.user)
	const blogs = useSelector((state) => state.blog.currentUserBlogs)
	// stores user details for loading after page refresh.
	localStorage.setItem('authUserBlogs', JSON.stringify(blogs))
	const blogsById = useSelector((state) => state.blog.blogs)

	// For /profile/:id
	let owner, ownerBlogs
	if (match.params.id) {
		blogsById.forEach((blog) => {
			if (blog.owner._id === match.params.id) {
				owner = blog.owner
				ownerBlogs = blogs
			}
		})
	}
	console.log(owner)

	// Set Auth user
	// if (user) setAuthUser(user)

	return (
		<Grid container justify='center' className={classes.root}>
			{!user || (match.params.id && !match) ? (
				<Grid item className={classes.loading}>
					<CircularProgress thickness={5} />
				</Grid>
			) : (
				<Fragment>
					<PageNavigation />
					<Grid item xs={12} sm={6} lg={8} className={classes.profileContent}>
						<Grid container item justify='center'>
							<Grid item xs={5} md={3} className={classes.grid}>
								<Profile owner={owner} />
							</Grid>
							<Grid item className={classes.grid} xs={12} md={6}>
								<ProfileDisplay blogs={blogs} ownerBlogs={ownerBlogs} />
							</Grid>
						</Grid>
					</Grid>
				</Fragment>
			)}
		</Grid>
	)
}

export default ProfileContainer
