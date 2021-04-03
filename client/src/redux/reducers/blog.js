import {
	UPDATE_TRENDING,
	TRENDING_ERROR,
	GET_BLOGS,
	BLOG_ERROR,
	POST_BLOG,
	BLOGS_NOT_FOUND,
} from '../actions/types'

const initialState = {
	blog: null,
	search: [],
	blogs: [],
	trending: [],
	openTrending: false,
	loading: true,
	notFound: false,
	errors: {},
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case GET_BLOGS:
			return {
				...state,
				blogs: [...payload],
				notFound: false,
				loading: false,
			}

		case POST_BLOG:
			return {
				...state,
				blogs: [payload, ...state.blogs],
				loading: false,
			}

		case BLOG_ERROR:
			return {
				...state,
				errors: { blogsError: true },
				loading: false,
			}

		case BLOGS_NOT_FOUND:
			return {
				...state,
				notFound: true,
				blogs: [],
				loading: false,
			}

		case UPDATE_TRENDING:
			return {
				...state,
				openTrending: payload,
				loading: false,
			}

		case TRENDING_ERROR:
			return {
				...state,
				error: { trendingError: true },
				loading: false,
			}

		default:
			return state
	}
}
