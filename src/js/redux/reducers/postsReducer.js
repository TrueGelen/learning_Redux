import { CREATE_SYNC_POST, GET_ASYNC_POST } from '../actionTypes/'

const initialState = {
	posts: [],
	fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_SYNC_POST:
			return { ...state, posts: [...state.posts, action.payload] }
			break
		case GET_ASYNC_POST:
			return { ...state, fetchedPosts: action.payload }
			break
		default: return state
	}
}