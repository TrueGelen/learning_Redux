import { CREATE_SYNC_POST, GET_ASYNC_POST, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, HIDE_ERROR } from '../actionTypes'

export function createSyncPost(newPost) {
	return {
		type: CREATE_SYNC_POST,
		payload: newPost
	}
}

export function getAsyncPost() {
	return async dispatch => {
		try {
			dispatch(showLoader())
			const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
			const json = await response.json()
			setTimeout(() => {
				dispatch({
					type: GET_ASYNC_POST,
					payload: json
				})

			}, 500)
		} catch (e) {
			dispatch(showError("Не удалось получить данные с сервера"))
			dispatch(hideLoader())
		}
	}
}

export function showLoader() {
	return {
		type: SHOW_LOADER
	}
}

export function hideLoader() {
	return {
		type: HIDE_LOADER
	}
}

export function showError(errMessage) {
	return dispatch => {
		dispatch({
			type: SHOW_ERROR,
			payload: errMessage
		})
		setTimeout(() => {
			dispatch(hideError())
		}, 3000)
	}

}

export function hideError() {
	return {
		type: HIDE_ERROR
	}
}