import React, { useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

const Search = () => {
	const history = useHistory()
	let blogs = useSelector((state) => state.blog.blogs)
	console.log(blogs)
	blogs = blogs.map((blog) => ({ title: blog.title, id: blog._id }))
	console.log(blogs)

	console.log(history)

	const [value, setValue] = useState()
	// const top100Films = [
	//     { title: 'Sarvamum Krishana Arpanam', year: 5464 },
	//     { title: 'The Shawshank Redemption', year: 1994 },
	//     { title: 'The Godfather', year: 1972 },
	//     { title: 'The Godfather: Part II', year: 1974 },
	//     { title: 'The Dark Knight', year: 2008 },
	//     { title: '12 Angry Men', year: 1957 },
	//     { title: "Schindler's List", year: 1993 },
	//     { title: 'Pulp Fiction', year: 1994 },
	//     { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
	//     { title: 'The Good, the Bad and the Ugly', year: 1966 },
	// ]
	return (
		<Autocomplete
			id='search-box'
			value={value}
			options={blogs}
			getOptionLabel={(option) => option.title}
			getOptionSelected={(option, value) => {
				return option.id === value.id ? history.push(`/blog/${value.id}`) : null
			}}
			style={{ width: 300 }}
			renderInput={(params) => (
				<TextField {...params} label='Search Pom' variant='filled' />
			)}
			// onInputChange={(evt, newInpValue, reason) => {
			// 	if (reason === 'reset') {
			// 		setValue('')
			// 		return
			// 	} else {
			// 		setValue(newInpValue)
			// 	}
			// }}
		/>
	)
}

export default Search
