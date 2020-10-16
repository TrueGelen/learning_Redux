/* libs */
import React from 'react'
import ReactDom from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

/* style */
import '../node_modules/normalize.css/normalize.css'

/* components */
import App from './js/App/index'

/* helpers */
import { rootReducer } from './js/redux/reducers'

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#app')
)