import React from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '10px 0',
		padding: 1,
	},
}))

const TagItem = ({ name }) => {
	const classes = useStyles()
	return (
		<Grid container item className={classes.root} xs={10} lg={6}>
			<Button size='large' variant='contained' fullWidth color='primary'>
				{name}
			</Button>
		</Grid>
	)
}

export default TagItem
