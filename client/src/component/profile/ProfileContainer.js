import React, { useEffect, useState, Fragment } from 'react'
import { CircularProgress, Grid, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useDispatch, useSelector } from 'react-redux'
import Profile from './Profile'
import ProfileDisplay from './ProfileDisplay'
import PageNavigation from '../layout/PageNavigation'
import { loadUser } from '../../redux/actions/auth'
import { getBlogsByMe } from '../../redux/actions/blog'

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

const ProfileContainer = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadUser())
		dispatch(getBlogsByMe())
	}, [])

	const user = useSelector((state) => state.auth.user)
	const blogs = useSelector((state) => state.blog.currentUserBlogs)

	return (
		<Grid container justify='center' className={classes.root}>
			{!user ? (
				<Grid item className={classes.loading}>
					<CircularProgress thickness={5} />
				</Grid>
			) : (
				<Fragment>
					<PageNavigation />
					<Grid item xs={12} sm={6} lg={8} className={classes.profileContent}>
						<Grid container item justify='center'>
							<Grid item xs={5} md={3} className={classes.grid}>
								<Profile />
							</Grid>
							<Grid item className={classes.grid} xs={12} md={6}>
								<ProfileDisplay blogs={blogs} />
							</Grid>
						</Grid>
					</Grid>
				</Fragment>
			)}
		</Grid>
	)
}

export default ProfileContainer
