import React from 'react'
import { Grid } from '@material-ui/core'
import PageNavigation from '../layout/PageNavigation'
import Tags from './Tags'

const TagContainer = () => {
	return (
		<Grid container justify='center'>
			<PageNavigation />
			<Grid item xs={12} sm={6} lg={8}>
				<Tags />
			</Grid>
		</Grid>
	)
}

export default TagContainer
