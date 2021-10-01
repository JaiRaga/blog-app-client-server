console.log('sarvamum Krishnan Arpanam')

const express = require('express')
const app = express()

require('./mongoose/mongoose')
const usersRouter = require('./routes/api/users')
const blogsRouter = require('./routes/api/blogs')

app.use(express.json())

app.use('/api', usersRouter)
app.use('/api', blogsRouter)

// Serve static assests in production
if (process.env.NODE_ENV === 'production') {
	// Serve static folder
	app.use(express.static('client/build'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const port = process.env.PORT || 9008

app.listen(port, console.log(`Running on Port ${port}`))
