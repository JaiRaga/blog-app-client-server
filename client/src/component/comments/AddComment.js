import React, { useState } from 'react'
import { Grid, Button, TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	commentInput: {},
	spacing: {
		margin: '5px 0',
	},
}))

const AddComment = () => {
	const classes = useStyles()
	const [openInputField, setOpenInputField] = useState(false)
	return (
		<Grid
			container
			item
			direction='column'
			justify='center'
			className={classes.commentInput}>
			<Button
				variant='contained'
				color='primary'
				className={classes.spacing}
				onClick={() => setOpenInputField((prev) => !prev)}>
				{!openInputField ? 'Add Comment' : 'Close'}
			</Button>
			{openInputField ? (
				<>
					<TextField
						id='add-comment'
						label='Post a comment'
						variant='filled'
						color='primary'
						multiline
						fullWidth
						className={classes.spacing}
					/>
					<Button
						variant='contained'
						color='primary'
						className={classes.spacing}>
						Submit
					</Button>{' '}
				</>
			) : null}
		</Grid>
	)
}

export default AddComment
