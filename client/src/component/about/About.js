import React from 'react'
import {
	Grid,
	Typography,
	makeStyles,
	Button,
	IconButton,
	Tooltip,
	Paper,
} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Redirect, useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: '#082032',
		height: '100vh',
	},
	paper: {
		color: '#fff',
		backgroundColor: '#2C394B',
		// marginTop: 30,
	},
	btnRoot: {
		color: '#fff',
	},
	icon: {
		color: '#fff',
	},
}))

const About = () => {
	const classes = useStyles()
	const history = useHistory()
	return (
		<Grid
			container
			className={classes.container}
			justify='center'
			alignItems='center'>
			<Paper elevation={4} className={classes.paper}>
				<Grid
					container
					item
					justify='center'
					alignItems='center'
					direction='column'>
					<Grid item>
						<Tooltip title='LinkedIn' placement='right-end'>
							<Button
								classes={{
									root: classes.btnRoot,
								}}
								fullWidth
								onClick={() =>
									window.open(
										'https://www.linkedin.com/in/raga-jai-santhosh-ab88961a1/'
									)
								}>
								This app was built by Raga Jai Santhosh from India.
							</Button>
						</Tooltip>
					</Grid>
					<Grid item>
						<h4>Visit this project on github</h4>
					</Grid>
					<Grid>
						<Tooltip title='Visit Github'>
							<IconButton
								onClick={() =>
									window.open(
										'https://github.com/JaiRaga/blog-app-client-server'
									)
								}>
								<GitHubIcon className={classes.icon} />
							</IconButton>
						</Tooltip>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	)
}

export default About
