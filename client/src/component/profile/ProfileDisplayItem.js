import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
	grid: {
		backgroundColor: '#666',
		margin: 10,
		padding: 10,
		cursor: 'pointer',
	},
}))

const ProfileDisplayItem = ({ blog }) => {
	const classes = useStyles()
	const history = useHistory()
	const id = blog._id
	return (
		<div className={classes.grid} onClick={() => history.push(`/myblog/${id}`)}>
			<Typography variant='h5'>{blog.title}</Typography>
			<Typography variant='subtitle2'>
				{blog.body.slice(0, 30) + '...'}
			</Typography>
		</div>
	)
}

export default ProfileDisplayItem
