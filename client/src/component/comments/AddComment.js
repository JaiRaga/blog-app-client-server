import React from 'react'
import { Grid, Button, TextField } from '@material-ui/core'

const AddComment = () => {
	return (
		<Grid container item direction='column' justify='center'>
			<Button variant='contained' color='primary'>
				Add Comment
			</Button>
			<TextField
				id='add-comment'
				label='Post a comment'
				variant='filled'
				multiline
			/>
			<Button variant='contained' color='primary'>
				Submit
			</Button>
		</Grid>
	)
}

export default AddComment
