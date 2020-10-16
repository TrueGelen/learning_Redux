import React from 'react'
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import { createSyncPost, showError } from '../../redux/actions'

import ErrorMessage from '../Error'

import styles from './styles.module.scss'

class PostForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			body: ''
		}
	}

	submitHandler = e => {
		e.preventDefault()

		if (this.state.title.trim() === '' || this.state.body.trim() === '') {
			return this.props.showError("Для добавления статьи необходимо заполнить оба поля!")
		}

		const newPost = {
			id: Date.now().toString(),
			...this.state,
		}

		this.props.createSyncPost(newPost)

		this.setState({ title: '', body: '' })
	}

	onInputsHandler = e => {
		let name = e.target.name
		let value = e.target.value

		this.setState(prevState => ({ ...prevState, [name]: value }))
	}

	render() {

		return (
			<div className="container" >

				{	this.props.error !== null && <ErrorMessage errMessage={this.props.error} />}

				<div className="row">
					<div className="col">
						<TextField
							className={styles.w100}
							required
							id="outlined-required"
							label="Введите заголовок"
							variant="outlined"
							name="title"
							value={this.state.title}
							onChange={this.onInputsHandler}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col">
						<TextField
							className={styles.w100}
							id="outlined-multiline-static"
							label="Текст статьи"
							multiline
							rows={10}
							variant="outlined"
							name="body"
							value={this.state.body}
							onChange={this.onInputsHandler}
						/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col">
						<button type="submit" className="btn btn-success"
							onClick={this.submitHandler}
						>Добавить</button>
					</div>
				</div>
			</div >
		)
	}
}

const mapDispatchToProps = {
	createSyncPost,
	showError
}

const mapStateToProps = (state) => ({
	error: state.app.error
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)