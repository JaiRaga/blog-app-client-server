import React from 'react'
import { Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useSelector } from 'react-redux'
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

	const user = useSelector((state) => state.auth.user)

	return (
		<Grid
			container
			item
			direction='column'
			justify='center'
			alignItems='center'
			className={classes.grid}>
			<Grid container item justify='space-between' alignItems='center'>
				<Avatar className={classes.avatar} alt='pic' src={pic} />
				<Grid item className={classes.gridRight}>
					<Grid container item direction='column'>
						<Grid item>{user.username}</Grid>
						<Grid item>rating</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid container item direction='column' className={classes.margin}>
				<Grid item>Blogs</Grid>
				<Grid item>Trending</Grid>
				<Grid item>Suggestions</Grid>
				<Grid item>Tags</Grid>
			</Grid>
		</Grid>
	)
}

export default Profile
