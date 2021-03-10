import { createMuiTheme } from '@material-ui/core'

// Create a theme instance
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#111d5e',
		},
		secondary: {
			main: '#ef4f4f',
		},
		error: {
			main: '#d92027',
		},
		background: {
			default: '#feceab',
		},
		update: {
			main: '#ccc',
		},
	},
	overrides: {
		MuiDrawer: {
			paperAnchorRight: {
				left: 0,
				right: 0,
			},
		},
		MuiFormLabel: {
			root: {
				color: '#fff',
			},
		},
		MuiInputLabel: {
			shrink: {
				color: '#fff',
			},
		},
		MuiAutocomplete: {
			inputFocused: {
				color: '#fff',
			},
		},
		MuiOutlinedInput: {
			input: {
				color: '#fff',
			},
		},
		MuiAutocomplete: {
			inputFocused: {
				color: '#000',
			},
		},
	},
})

export default theme
