import axios from 'axios'
import {
	GET_BLOGS,
	GET_MY_BLOGS,
	UPDATE_TRENDING,
	TRENDING_ERROR,
	BLOG_ERROR,
	POST_BLOG,
	BLOGS_NOT_FOUND,
} from './types'

// Get all Blog Posts
export const getBlogs = (query) => async (dispatch) => {
	try {
		// console.log(1)
		// console.log(query)
		const res = await axios.get(`/api/blogs${query}`)
		// console.log(2, res.data)
		if (res.data[0] === 'No Blogs Found!') dispatch({ type: BLOGS_NOT_FOUND })
		else dispatch({ type: GET_BLOGS, payload: res.data })
	} catch (err) {
		dispatch({ type: BLOG_ERROR })
	}
}

// Post Blog
export const postBlog = (blog) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}

	const data = JSON.stringify(blog)
	// console.log(data);

	try {
		// console.log(1)
		const res = await axios.post('/api/blogs', data, config)
		// console.log('Blogs POST', res.data)
		dispatch({ type: POST_BLOG, payload: res.data })
	} catch (err) {
		dispatch({ type: BLOG_ERROR })
	}
}

// Toggle trending sidebar
export const toggleTrending = (open) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_TRENDING, payload: open })
	} catch (err) {
		dispatch({ type: TRENDING_ERROR })
	}
}

// Get blogs by me
export const getBlogsByMe = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/blogs/me')
		dispatch({ type: GET_MY_BLOGS, payload: res.data })
	} catch (err) {
		dispatch({ type: BLOG_ERROR })
	}
}
