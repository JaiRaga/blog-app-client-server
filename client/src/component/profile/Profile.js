import React, { useEffect } from 'react'
import { Grid, Avatar, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useSelector, useDispatch } from 'react-redux'
import { getBlogsByMe } from '../../redux/actions/blog'
import pic from '../../img/pic.jpg'

const useStyles = makeStyles((theme) => ({
	avatar: {
		marginRight: 10,
	},
	gridRight: {
		marginRight: 'auto',
	},
	margin: {
		marginTop: 10,
	},
}))

const Profile = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	const user = useSelector((state) => state.auth.user)
	const blogs = useSelector((state) => state.blog.currentUserBlogs)

	return (
		<Grid
			container
			item
			direction='column'
			justify='center'
			alignItems='center'
			className={classes.grid}>
			<Grid container item justify='space-between' alignItems='center'>
				<Avatar className={classes.avatar} alt='pic' src={user.avatar || pic} />
				<Grid item className={classes.gridRight}>
					<Grid container item direction='column'>
						<Grid item>{user.username}</Grid>
						<Grid item>Rating: {!user.rating ? 'NA' : user.rating}</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid container item direction='column' className={classes.margin}>
				<Grid item>Blogs: {blogs.length === 0 ? 'NA' : blogs.length}</Grid>
				<Grid item>Trending</Grid>
				<Grid item>Suggestions</Grid>
				<Grid item>Tags</Grid>
			</Grid>
		</Grid>
	)
}

export default Profile
