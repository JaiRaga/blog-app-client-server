import React, { useState } from 'react'
import {
	makeStyles,
	Grid,
	TextField,
	Button,
	Typography,
	Paper,
} from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../../redux/actions/auth'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	registerContainer: {
		marginTop: '20px',
	},
	typography: {
		color: '#fff',
	},
	textfieldColor: {
		backgroundColor: '#111d5e',
		color: '#000',
	},
	parentGrid: {
		marginTop: 10,
	},
	paper: {
		padding: '20px 0',
		backgroundColor: '#082032',
		// backgroundColor: '#0007',
	},
	linktext: {
		textDecoration: 'none',
	},
	link: {
		color: '#fff',
		fontFamily: 'monospace',
		fontSize: 19,
		display: 'block',
	},
	footer: {
		marginTop: '20px',
		color: '#fff',
	},
	outerContainer: {
		backgroundColor: '#FBF4E9',
		height: '100vh',
	},
}))

const Login = () => {
	const classes = useStyles()

	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
	const dispatch = useDispatch()

	const [registerState, setRegisterState] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
		handle: '',
	})

	const { handle, username, email, password, password2 } = registerState

	const onChange = (e) =>
		setRegisterState({ ...registerState, [e.target.name]: e.target.value })

	const onSubmit = (e) => {
		e.preventDefault()

		if (password !== password2) {
			console.log('Password do not match')
		} else {
			dispatch(registerUser({ username, email, handle, password }))
		}
	}

	if (isAuthenticated) {
		return <Redirect to='/dashboard' />
	}

	return (
		<Grid container justify='center' className={classes.outerContainer}>
			<Grid item xs={10} md={6} className={classes.parentGrid}>
				<Paper elevation={10} className={classes.paper}>
					<Grid container justify='center' alignItems='center'>
						<Grid
							className={classes.registerContainer}
							container
							item
							xs={6}
							direction='column'
							justify='center'
							alignItems='center'>
							<Grid item>
								<Typography variant='h5' className={classes.typography}>
									Register
								</Typography>
							</Grid>
							<Grid
								container
								item
								display='column'
								justify='center'
								alignItems='center'>
								<form className={classes.root}>
									<Grid item>
										<TextField
											id='username'
											name='username'
											label='Username'
											variant='outlined'
											onChange={onChange}
											focused={false}
											classes={{
												root: classes.textfieldColor,
											}}
										/>
									</Grid>
									<Grid item>
										<TextField
											id='email'
											name='email'
											label='Email'
											variant='outlined'
											onChange={onChange}
											focused={false}
											classes={{
												root: classes.textfieldColor,
											}}
										/>
									</Grid>
									<Grid item>
										<TextField
											id='handle'
											name='handle'
											label='handle'
											variant='outlined'
											onChange={onChange}
											focused={false}
											classes={{
												root: classes.textfieldColor,
											}}
										/>
									</Grid>
									<Grid item>
										<TextField
											id='password'
											name='password'
											label='password'
											variant='outlined'
											onChange={onChange}
											focused={false}
											classes={{
												root: classes.textfieldColor,
											}}
										/>
									</Grid>
									<Grid item>
										<TextField
											id='password2'
											name='password2'
											label='re-enter password'
											variant='outlined'
											onChange={onChange}
											focused={false}
											classes={{
												root: classes.textfieldColor,
											}}
										/>
									</Grid>
								</form>
							</Grid>
							<Grid item>
								<Button
									color='primary'
									variant='contained'
									type='submit'
									onClick={onSubmit}>
									Let's Get Started
								</Button>
							</Grid>
							<Grid item>
								<Typography
									variant='subtitle2'
									align='center'
									className={classes.footer}>
									Already have an account?{' '}
									<Link to='/login' className={classes.linktext}>
										<span className={classes.link}> sign in</span>
									</Link>
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	)
}

export default Login
