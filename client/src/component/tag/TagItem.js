import React from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '10px 0',
		padding: 1,
	},
}))

const TagItem = ({ name }) => {
	const classes = useStyles()
	const history = useHistory()
	return (
		<Grid container item className={classes.root} xs={10} lg={6}>
			<Button
				size='large'
				variant='contained'
				fullWidth
				color='primary'
				onClick={() => history.push(`/blogs?category=${name}`)}>
				{name}
			</Button>
		</Grid>
	)
}

export default TagItem
