import React, { Fragment } from 'react'
import { CircularProgress, Grid } from '@material-ui/core'
import ProfileDisplayItem from './ProfileDisplayItem'

const ProfileDisplay = ({ blogs }) => {
	return (
		<Fragment>
			{blogs.length === 0 ? (
				<Grid container item justify='center'>
					<CircularProgress />
				</Grid>
			) : (
				blogs.map((blog) => <ProfileDisplayItem key={blog._id} blog={blog} />)
			)}
		</Fragment>
	)
}

export default ProfileDisplay
