/* import '../node_modules/normalize.css/normalize.css'*/
import scss from './scss/main.module.scss'

/* libs */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

/* helpers */
import { rootReducer } from './redux/rootReducer'
import { decrement, increment, asyncIncrement, changeThemeDark, changeThemeLight } from './redux/actions'

const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const lightThemeBtn = document.querySelector('#themeLight')
const darkThemeBtn = document.querySelector('#themeDark')

let store = createStore(rootReducer, applyMiddleware(thunk))

/* function logger(state) {
  return function (next) {
    return function (action) {
      console.log('state', state)
      console.log('next', next)
      console.log('action', action)
      return next(action)
    }
  }
} */

console.log(store.getState())

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})

store.subscribe(() => {
  const state = store.getState()

  counter.textContent = state.counter
  document.body.className = scss[store.getState().theme.class]
})

store.dispatch({ type: 'INIT_APPLICATION' })

lightThemeBtn.addEventListener('click', () => store.dispatch(changeThemeLight()))
darkThemeBtn.addEventListener('click', () => store.dispatch(changeThemeDark()))