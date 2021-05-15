import React from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core'
import TagItem from './TagItem'
import TagSearch from './TagSearch'

const useStyles = makeStyles((theme) => ({
	// btncontiner: {
	// 	display: 'flex',
	// 	alignItems: 'center',
	// },
}))

const Tags = () => {
	const random = [
		{ title: 'Avionics' },
		{ title: 'Swimming' },
		{ title: 'Sports' },
		{ title: 'fitness' },
		{ title: 'Books' },
		{ title: 'Adventure' },
		{ title: 'Food' },
		{ title: 'travel' },
		{ title: 'Semiconductor' },
		{ title: 'Gaming' },
		{ title: 'Agriculture' },
		{ title: 'Business' },
		{ title: 'World' },
		{ title: 'Climate' },
		{ title: 'Astrology' },
		{ title: 'Space' },
		{ title: 'Action' },
		{ title: 'Horror' },
		{ title: 'Comedy' },
		{ title: 'Nature' },
		{ title: 'Trekking' },
		{ title: 'hiking' },
		{ title: 'Entertainment' },
		{ title: 'All' },
	]

	const classes = useStyles()

	return (
		<div>
			<Grid container item justify='center'>
				<TagSearch tags={random} />

				{random.map((tag) => (
					<TagItem name={tag.title} />
				))}

				{/* <TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/>
				<TagItem
					name={random[Math.floor(Math.random() * random.length)].title}
				/> */}
			</Grid>
		</div>
	)
}

export default Tags
