import React, { useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import CreateBlogBtn from '../blogs/CreateBlogBtn'
import Blogs from '../blogs/Blogs'
import BlogItem from '../blogs/BlogItem'
import Search from '../search/Search'
import { getBlogs } from '../../redux/actions/blog'
import PageNavigation from '../layout/PageNavigation'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
		},
	},
	btn: {
		width: '100%',
	},
}))

const Dashboard = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getBlogs())
	}, [])
	return (
		<Grid container justify='center' className={classes.root}>
			<PageNavigation />
			<Grid item xs={12} sm={6} lg={8}>
				<Grid container item direction='column' alignItems='center'>
					<Grid item xs={6} className={classes.btn}>
						{/* <CreateBlogBtn /> */}
					</Grid>
					<Grid item>
						<Blogs displayTrending='true' />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Dashboard
