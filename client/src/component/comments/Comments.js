import React from 'react'
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core'
import CommentItem from './CommentItem'

const useStyles = makeStyles((theme) => ({
	background: {
		backgroundColor: theme.palette.background.default,
		width: '100%',
	},
}))

const Comments = ({ comments }) => {
	const classes = useStyles()
	console.log('comments', comments)
	return (
		<Paper className={classes.background}>
			<Grid container item direction='column'>
				{comments.length === 0 ? (
					<Typography variant='body1' align='center'>
						'No comments yet!'
					</Typography>
				) : (
					comments.map((comment) => <CommentItem comment={comment} />)
				)}
			</Grid>
		</Paper>
	)
}

export default Comments
