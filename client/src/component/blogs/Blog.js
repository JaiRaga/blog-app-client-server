import React, { useEffect } from 'react'
import {
	Grid,
	Typography,
	IconButton,
	Tooltip,
	Divider,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useSelector, useDispatch } from 'react-redux'
import GetAppIcon from '@material-ui/icons/GetApp'
import CheckIcon from '@material-ui/icons/Check'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Comments from '../comments/Comments'
import Footer from '../layout/Footer'
import { useHistory, useLocation } from 'react-router-dom'
import { getBlogs } from '../../redux/actions/blog'
// import { loadUser } from '../../redux/actions/auth'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		backgroundColor: theme.palette.background.default,
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
	},
	commentTitle: {
		marginLeft: 10,
	},
	footer: {
		marginTop: 'auto',
	},
}))

const Blog = (prop) => {
	const dispatch = useDispatch()

	useEffect(() => {
		// dispatch(loadUser())
		// dispatch(getBlogs())
	}, [])

	const classes = useStyles()
	// const history = useHistory()
	// const location = useLocation()
	const blogs = useSelector((state) => state.blog.blogs)
	let blog = blogs.filter((blog) => blog._id === prop.match.params.id)
	// console.log(prop.match.params.id, blog)
	blog = blog[0]

	return (
		<Grid
			container
			className={classes.root}
			direction='column'
			justify='center'
			alignItems='center'>
			<Grid item>
				<Typography variant='h1'>{blog.title}</Typography>
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
				<Grid container item direction='column' justify='flex-end'>
					<Typography variant='h3' className={classes.commentTitle}>
						Comments
					</Typography>
					<Comments />
				</Grid>
			</Grid>
			{/* <Grid item className={classes.footer}>
        <Footer />
      </Grid> */}
		</Grid>
	)
}

export default Blog
