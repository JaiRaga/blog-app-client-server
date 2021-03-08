import React, { Fragment, useEffect } from 'react'
import {
	Grid,
	makeStyles,
	Typography,
	Button,
	useMediaQuery,
	Hidden,
	CircularProgress,
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import BlogItem from './BlogItem'
import TrendingBlogs from '../trending/TrendingBlogs'
import TrendingSideBar from '../trending/TrendingSideBar'
import { useTheme } from '@material-ui/styles'
import { getBlogs } from '../../redux/actions/blog'
import Footer from '../layout/Footer'
import { Skeleton } from '@material-ui/lab'
import PageNavigation from '../layout/PageNavigation'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'center',
		},
	},
	pageNavigation: {
		backgroundColor: '#666',
		maxWidth: '100%',
	},
	blogs: {
		// padding: 10,
		// marginRight: 10,
		[theme.breakpoints.down('md')]: {
			// margin: 0
			justifyContent: 'center',
		},
	},
	blogItem: {
		cursor: 'pointer',
	},
	blogsTitle: {
		margin: 10,
	},
	trendings: {
		margin: 5,
		padding: 5,
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	trendingTitle: {
		margin: 10,
	},
	divider: {
		margin: 5,
	},
	loading: {
		marginTop: 20,
	},
}))

const Blogs = ({ displayTrending }) => {
	useEffect(() => {
		dispatch(getBlogs())
	}, [])

	const classes = useStyles()
	const dispatch = useDispatch()
	const history = useHistory()
	const theme = useTheme()
	const trendingSidebar = useMediaQuery(theme.breakpoints.down('xs'))
	const blog = useSelector((state) => state.blog)
	const { blogs, loading, trending } = blog

	return (
		<Grid container className={classes.root} justify='center'>
			{/* <PageNavigation /> */}
			{/* Displays blogs in th middle of the page */}
			<Grid
				item
				xs={12}
				sm={displayTrending === 'false' ? 12 : 6}
				className={classes.blogs}>
				<Grid
					container
					item
					direction='column'
					justify='center'
					alignItems='center'>
					{loading ? (
						<Grid
							container
							item
							justify='center'
							alignItems='center'
							className={classes.loading}>
							<CircularProgress />
						</Grid>
					) : (
						<Fragment>
							<Typography
								variant='h4'
								align='center'
								className={classes.blogsTitle}>
								Blogs
							</Typography>

							<Grid item>
								{blogs.map((blog) => (
									<BlogItem key={blog._id} blog={blog} />
								))}
							</Grid>
						</Fragment>
					)}
				</Grid>
			</Grid>

			{/* Displays trending blogs to the right */}
			{displayTrending !== 'false' ? (
				<Hidden only={['xs', 'sm', 'md']}>
					<Grid item xs={0} sm={2} md={4} className={classes.trendings}>
						<Grid container item>
							<Grid item>
								<Typography
									variant='h4'
									align='center'
									className={classes.trendingTitle}>
									Trending
								</Typography>
								{!loading && trending.length !== 0 ? (
									<TrendingBlogs className={classes.trending} />
								) : (
									<Typography variant='h4'>No Trending Blogs</Typography>
								)}
							</Grid>
						</Grid>
					</Grid>
				</Hidden>
			) : null}
		</Grid>
	)
}

export default Blogs
