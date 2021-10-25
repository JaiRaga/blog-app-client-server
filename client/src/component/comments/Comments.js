import React from 'react'
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core'
import CommentItem from './CommentItem'

const useStyles = makeStyles((theme) => ({
	background: {
		backgroundColor: '#aaa',
		width: '100%',
		padding: '20px 0',
		marginTop: 20,
	},
}))

const Comments = ({ comments }) => {
	const classes = useStyles()
	console.log('comments', comments)
	return (
		<Grid container item direction='column' xs={12}>
			<Paper className={classes.background}>
				{comments.length === 0 ? (
					<Typography variant='h6' align='center'>
						No comments yet!
					</Typography>
				) : (
					comments.map((comment) => <CommentItem comment={comment} />)
				)}
			</Paper>
		</Grid>
	)
}

export default Comments
