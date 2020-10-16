import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CircularProgress from '@material-ui/core/CircularProgress';

import Post from '../Post'
import { getAsyncPost } from '../../redux/actions'

export default function FetchedPosts() {
	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts.fetchedPosts)
	const isLoading = useSelector(state => state.app.isLoading)

	if (isLoading)
		return <CircularProgress />

	if (!posts || !posts.length) {
		return <button
			className="btn btn-primary"
			onClick={() => { dispatch(getAsyncPost()) }}>
			Загрузить Посты
		</button>
	}

	return posts.map(post => <Post
		key={post.id}
		title={post.title}
		body={post.body}
	/>)
}