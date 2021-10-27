import React from 'react'
import { Paper, Typography, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
	paper: {
		cursor: 'pointer',
	},
}))

const BlogAuthor = ({ id, username, createdAt }) => {
	const classes = useStyles()
	const history = useHistory()
	let date = new Date(createdAt)
	return (
		<div>
			<Paper
				elevation={2}
				className={classes.paper}
				onClick={() => history.push(`/profile/${id}`)}>
				<Typography variant='h5' align='center'>
					by {username}
				</Typography>
			</Paper>
			<Typography variant='subtitle1' align='center'>
				{date.getDate() +
					' ' +
					date.toLocaleString('default', { month: 'long' }) +
					' ' +
					date.getFullYear()}
			</Typography>
		</div>
	)
}

export default BlogAuthor
