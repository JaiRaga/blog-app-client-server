import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	makeStyles,
	Grid,
	TextField,
	Button,
	Typography,
	Paper,
} from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'
import { login } from '../../redux/actions/auth'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	loginContainer: {
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

	const [loginState, setLoginState] = useState({
		email: '',
		password: '',
	})

	const { email, password } = loginState

	const onChange = (e) => {
		setLoginState({ ...loginState, [e.target.name]: e.target.value })
	}

	const onSubmit = (e) => {
		e.preventDefault()

		dispatch(login(email, password))
	}

	if (isAuthenticated) {
		return <Redirect to='/blogs' />
	}

	return (
		<Grid container justify='center' className={classes.outerContainer}>
			<Grid item xs={10} md={6} className={classes.parentGrid}>
				<Paper elevation={10} className={classes.paper}>
					<Grid container item justify='center' alignItems='center'>
						<Grid
							className={classes.loginContainer}
							container
							item
							xs={6}
							direction='column'
							justify='center'
							alignItems='center'>
							<Grid item>
								<Typography variant='h5' className={classes.typography}>
									Login
								</Typography>
							</Grid>
							<Grid
								container
								item
								display='column'
								justify='center'
								alignItems='center'>
								<form className={classes.root} onSubmit={onSubmit}>
									<Grid item>
										<TextField
											id='email'
											name='email'
											label='email'
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
											type='password'
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
									type='submit'
									color='primary'
									variant='contained'
									onClick={onSubmit}>
									Let's Get Started
								</Button>
							</Grid>
							<Grid item>
								<Typography
									variant='subtitle2'
									align='center'
									className={classes.footer}>
									Don't have an account?
									<Link to='/register' className={classes.linktext}>
										<span className={classes.link}> sign up</span>
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
