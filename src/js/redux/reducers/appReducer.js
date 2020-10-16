import { SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, HIDE_ERROR } from '../actionTypes/'

const initialState = {
	isLoading: false,
	error: null
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOADER:
			return { ...state, isLoading: true }
			break
		case HIDE_LOADER:
			return { ...state, isLoading: false }
			break
		case SHOW_ERROR:
			return { ...state, error: action.payload }
			break
		case HIDE_ERROR:
			return { ...state, error: null }
			break
		default: return state
	}
}