import React from 'react'

import PostForm from '../components/PostForm'
import Posts from '../components/Posts'
import FetchedPosts from '../components/FetchedPosts'

function App() {

	return (
		<div className="container pt-5">
			<PostForm />

			<Posts />

			<hr />
			<div className="row">
				<div className="col text-center">
					<h2 className="text-center mb-3">Загруженные посты</h2>
					<FetchedPosts />
				</div>
			</div>

		</div>
	)
}

export default App