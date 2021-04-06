import React, { useState } from 'react'
import { makeStyles, Grid, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import { Fragment } from 'react'

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />
const checkedIcon = <CheckBoxIcon fontSize='small' />

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '10px 5px',
		// marginRight: 10,
	},
	btncontiner: {
		display: 'flex',
		alignItems: 'center',
	},
}))

const TagSearch = ({ tags }) => {
	const classes = useStyles()
	const history = useHistory()
	const [search, setSearch] = useState([])
	const topTags = [...tags]

	const handleClick = () => {
		console.log(search)
		let query = search.map((item) => item.title).join(',')
		console.log('Query', query)
		history.push(`/blogs?category=${query}`)
	}

	return (
		<Fragment>
			<Autocomplete
				className={classes.root}
				multiple
				onChange={(event, value) => setSearch([...value])}
				id='checkboxes-tags-demo'
				options={topTags}
				disableCloseOnSelect
				getOptionLabel={(option) => option.title}
				getOptionSelected={(option, value) => option.title === value.title}
				renderOption={(option, { selected }) => {
					// console.log(option, selected)
					return (
						<React.Fragment>
							<Checkbox
								icon={icon}
								checkedIcon={checkedIcon}
								style={{ marginRight: 8 }}
								checked={selected}
							/>
							{option.title}
						</React.Fragment>
					)
				}}
				style={{ width: 500 }}
				renderInput={(params) => (
					<TextField
						{...params}
						variant='outlined'
						label='Search Multiple Tags'
						placeholder='Favorites'
					/>
				)}
			/>
			<Grid item className={classes.btncontiner}>
				<Button
					variant='contained'
					color='primary'
					className={classes.btn}
					onClick={handleClick}>
					Search Tags
				</Button>
			</Grid>
		</Fragment>
	)
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

// const top100Films = [
// 	{ title: 'The Shawshank Redemption', year: 1994 },
// 	{ title: 'The Godfather', year: 1972 },
// 	{ title: 'The Godfather: Part II', year: 1974 },
// 	{ title: 'The Dark Knight', year: 2008 },
// 	{ title: '12 Angry Men', year: 1957 },
// 	{ title: "Schindler's List", year: 1993 },
// 	{ title: 'Pulp Fiction', year: 1994 },
// 	{ title: 'The Lord of the Rings: The Return of the King', year: 2003 },
// 	{ title: 'The Good, the Bad and the Ugly', year: 1966 },
// 	{ title: 'Fight Club', year: 1999 },
// 	{ title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
// 	{ title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
// 	{ title: 'Forrest Gump', year: 1994 },
// 	{ title: 'Inception', year: 2010 },
// 	{ title: 'The Lord of the Rings: The Two Towers', year: 2002 },
// 	{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
// 	{ title: 'Goodfellas', year: 1990 },
// 	{ title: 'The Matrix', year: 1999 },
// 	{ title: 'Seven Samurai', year: 1954 },
// 	{ title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
// 	{ title: 'City of God', year: 2002 },
// 	{ title: 'Se7en', year: 1995 },
// 	{ title: 'The Silence of the Lambs', year: 1991 },
// 	{ title: "It's a Wonderful Life", year: 1946 },
// 	{ title: 'Life Is Beautiful', year: 1997 },
// 	{ title: 'The Usual Suspects', year: 1995 },
// 	{ title: 'Léon: The Professional', year: 1994 },
// 	{ title: 'Spirited Away', year: 2001 },
// 	{ title: 'Saving Private Ryan', year: 1998 },
// 	{ title: 'Once Upon a Time in the West', year: 1968 },
// 	{ title: 'American History X', year: 1998 },
// 	{ title: 'Interstellar', year: 2014 },
// ]

export default TagSearch
