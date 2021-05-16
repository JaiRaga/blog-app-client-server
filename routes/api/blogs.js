const express = require('express')
const Blog = require('../../models/Blog')
const auth = require('../../middleware/auth')
const router = express.Router()

// Create a blog
router.post('/blogs', auth, async (req, res) => {
	let { title, body, category, stars } = req.body
	const owner = req.user._id
	// let readtime = Math.round(body.length / 200);
	if (!stars) stars = 4

	category = !category
		? 'misc'
		: category.toLowerCase().replace(' ', '').split(',')

	const blog = new Blog({ title, body, category, stars, owner })

	try {
		await blog.save()
		res.status(201).send(blog)
	} catch (err) {
		res.status(500).send('Server Error')
	}
})

// Get blogs from all categories
router.get('/blogs', async (req, res) => {
	// populates blogs per page, pagination etc.
	let category = [],
		sort = {},
		limit = req.query.limit ? parseInt(req.query.limit) : 10,
		skip = req.query.skip ? parseInt(req.query.skip) : 0,
		page = req.query.page ? parseInt(req.query.page) : 1

	// transforms incoming categories into an array.
	if (req.query.category) {
		// console.log(match);
		category = req.query.category.toLowerCase().split(',')
		console.log('Category 2', category)
	}

	// checks if sort query is present and defaults to descending order(newly created blogs at the top)
	if (req.query.sortBy) {
		const chunk = req.query.sortBy.split(':')
		sort[chunk[0]] = chunk[1]
		console.log('Chunk, sort', chunk, sort)
	} else sort = { createdAt: 'desc' }

	try {
		const blogs =
			category.length === 0
				? await Blog.find()
						.limit(limit)
						.skip(page * skip)
						.sort({
							...sort,
						})
				: await Blog.find({
						category: { $all: category },
				  })
						// .limit(limit)
						.skip(page * skip)
						.sort({
							...sort,
						})

		if (!blogs.length) return res.send(['No Blogs Found!'])

		Promise.all(
			blogs.map(async (blog) => {
				await blog
					.populate('owner')
					.populate({ path: 'comments.user' })
					.execPopulate()
				await blog.save()
				return blog
			})
		)
			.then((result) => res.send(result))
			.catch((err) => console.log('err', err))

		// res.send(blogs)
	} catch (err) {
		res.status(500).send('Server Error')
	}
})

// find blogs by me
router.get('/blogs/me', auth, async (req, res) => {
	try {
		// Get all blogs
		await req.user
			.populate({
				path: 'blogs',
				options: {
					// limit: 4,
					sort: { createdAt: -1 },
				},
			})
			.execPopulate()

		let blogs = req.user.blogs

		// console.log(blogs);

		Promise.all(
			blogs.map(async (blog) => {
				await blog.populate('owner').execPopulate()
				await blog.save()
				return blog
			})
		)
			.then((result) => {
				// console.log(result);
				res.send(result)
			})
			.catch((err) => console.log(err))

		// res.send(req.user.blogs);
	} catch (e) {
		res.status(500).send()
	}
})

// Get blog by id
router.get('/blog/:id', auth, async (req, res) => {
	const id = req.params.id

	try {
		const blog = await Blog.findById(id)
		console.log(blog)

		if (!blog) return res.status(404).send('No such blog exists!')

		res.send(blog)
	} catch (err) {
		res.status(500).send('Server Error')
	}
})

// Update blog
router.patch('/blog/:id', auth, async (req, res) => {
	const incomingUpdates = Object.keys(req.body),
		allowedUpdates = ['title', 'body', 'category', 'stars']

	let approvedUpdates = [],
		disapprovedUpdates = []

	incomingUpdates.forEach((update) =>
		allowedUpdates.indexOf(update) !== -1
			? approvedUpdates.push(update)
			: disapprovedUpdates.push(update)
	)

	console.log('Approved', approvedUpdates)
	console.log('Disapproved', disapprovedUpdates)

	try {
		const blog = await Blog.findById(req.params.id)
		if (!blog) return res.status(404).send('No Such Blog Exists!')

		req.body.category = req.body.category
			.toLowerCase()
			.replace(' ', '')
			.split(',')

		approvedUpdates.forEach((update) => (blog[update] = req.body[update]))
		await blog.save()

		res.send(blog)
	} catch (err) {
		res.status(500).send('Server Error')
	}
})

// Delete a Blog
router.delete('/blog/:id', auth, async (req, res) => {
	try {
		const blog = await Blog.findOneAndDelete({
			_id: req.params.id,
			owner: req.user._id,
		})

		if (!blog) return res.status(404).send('No Blog Found!')

		res.send(blog)
	} catch (err) {
		res.status(500).send('Server Error')
	}
})

// Add Comment to a blog
router.post('/comment/:id', auth, async (req, res) => {
	try {
		const blog = await Blog.findById({ _id: req.params.id })
		if (!blog) return res.status(404).send('Blog Not Found!')

		const comment = {
			text: req.body.text,
			user: req.user._id,
		}

		blog.comments.unshift(comment)
		await blog.populate('comments.user').execPopulate()
		await blog.save()
		res.send(blog.comments)
	} catch (err) {
		res.status(500).send('SErver Error')
	}
})

module.exports = router
