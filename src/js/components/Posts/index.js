import React from 'react'
import { connect } from 'react-redux'

import Post from '../Post'

export const Posts = ({ posts, ...otherProps }) => {

	if (!posts || !posts.length) {
		return <p className="text-center">Постов пока нет</p>
	}

	return posts.map(post => <Post
		key={post.id}
		title={post.title}
		body={post.body}
	/>)
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts
	}
}

export default connect(mapStateToProps, null)(Posts)