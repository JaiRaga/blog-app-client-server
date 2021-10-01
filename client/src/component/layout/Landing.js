import React from 'react'
import {
	Divider,
	Grid,
	makeStyles,
	Typography,
	Button,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	items: {
		// backgroundColor: '#000',
		color: theme.palette.primary.main,
		// minHeight: '100vh',
	},
	item: {
		padding: 10,
		paddingTop: 60,
	},
	dividerContainer: {
		margin: '0 10px',
		width: '100%',
	},
	divider: {
		width: '100%',
		color: theme.palette.primary.main,
		marginTop: 40,
	},
	login: {
		marginTop: 40,
	},
	spacing: {
		margin: 5,
	},
}))

const Landing = () => {
	const classes = useStyles()
	const history = useHistory()
	return (
		<Grid container direction='column' justify='center' alignItems='center'>
			<Grid
				container
				item
				xs={12}
				md={7}
				className={classes.items}
				justify='center'>
				<Grid item className={classes.item}>
					<Typography variant='h4' align='center'>
						Pom is a place to read, write and connect with like minded
						individuals.
					</Typography>
				</Grid>
			</Grid>

			<Divider className={classes.divider} />

			<Grid
				container
				item
				direction='column'
				justify='center'
				alignItems='center'
				className={classes.login}>
				<Typography variant='h5' className={classes.spacing}>
					Login / Signup
				</Typography>
				<Button
					variant='outlined'
					className={classes.spacing}
					onClick={() => history.push('/login')}>
					Login
				</Button>
				<Button
					variant='outlined'
					className={classes.spacing}
					onClick={() => history.push('/register')}>
					Sign Up
				</Button>
			</Grid>
		</Grid>
	)
}

export default Landing
