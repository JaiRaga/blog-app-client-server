import React, { useEffect, Fragment } from 'react'
import {
	Grid,
	Typography,
	IconButton,
	Tooltip,
	Divider,
	CircularProgress,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useSelector, useDispatch } from 'react-redux'
import GetAppIcon from '@material-ui/icons/GetApp'
import CheckIcon from '@material-ui/icons/Check'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Comments from '../comments/Comments'
import AddComment from '../comments/AddComment'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		backgroundColor: theme.palette.background.default,
		// height: '100vh',
	},
	loading: {
		marginTop: 20,
	},
	divider: {
		width: '100%',
		marginTop: 20,
		backgroundColor: '#ea907a',
	},
	paddingVerified: {
		paddingRight: 3,
	},
	verifiedText: {
		marginTop: 2,
	},
	visibilityIcon: {
		paddingRight: 5,
	},
	blogBody: {
		padding: 25,
		margin: 10,
	},
	comments: {
		marginTop: 25,
		marginBottom: 25,
		width: '60%',
	},
	commentTitle: {
		marginLeft: 10,
	},
	footer: {
		marginTop: 'auto',
	},
}))

const MyBlog = (prop) => {
	const dispatch = useDispatch()

	useEffect(() => {
		// dispatch(loadUser())
		// dispatch(getBlogs())
	}, [])

	const classes = useStyles()
	// const history = useHistory()
	// const location = useLocation()
	let blogs = useSelector((state) => state.blog.currentUserBlogs)

	if (blogs.length === 0) {
		blogs = JSON.parse(localStorage.getItem('authUserBlogs'))
	}

	let blog = blogs.filter((blog) => blog._id === prop.match.params.id)
	// console.log(prop.match.params.id, blog)
	blog = blog[0]

	console.log('my blog', blog)

	// Change the title case
	const blogTitle = blog.title.split('')
	blogTitle[0] = blogTitle[0].toUpperCase()
	blogTitle.join('')

	return (
		<Fragment>
			{!blog ? (
				<Grid container justify='center' className={classes.loading}>
					<CircularProgress />
				</Grid>
			) : (
				<Grid
					container
					className={classes.root}
					xs={12}
					direction='column'
					justify='center'
					alignItems='center'>
					<Grid item>
						<Typography variant='h4'>{blog.title}</Typography>
					</Grid>
					<Grid item>
						<Grid container item>
							<Grid item className={classes.paddingVerified}>
								<CheckIcon />
							</Grid>
							<Grid item className={classes.verifiedText}>
								<Typography variant='subtitle2'>
									{blog.readtime} mins read
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container item justify='flex-start' alignItems='center'>
							<Grid item className={classes.visibilityIcon}>
								<Tooltip title='Views' arrow placement='left'>
									<VisibilityIcon />
								</Tooltip>
							</Grid>
							<Grid item>
								<Typography variant='subtitle1'>10008 Views</Typography>
							</Grid>
							<Grid item className={classes.margin}>
								<Tooltip title='Download' arrow placement='right-start'>
									<IconButton aria-label='download'>
										<GetAppIcon />
									</IconButton>
								</Tooltip>
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.blogBody} md={6}>
						<Typography variant='h6'>{blog.body}</Typography>
					</Grid>
					<Divider className={classes.divider} />
					<Grid item className={classes.comments}>
						<Grid container item direction='column'>
							<Typography variant='h3' className={classes.commentTitle}>
								Comments
							</Typography>
							<AddComment />
							<Comments comments={blog.comments} />
						</Grid>
					</Grid>
					{/* <Grid item className={classes.footer}>
        <Footer />
      </Grid> */}
				</Grid>
			)}
		</Fragment>
	)
}

export default MyBlog
