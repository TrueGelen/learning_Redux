import { DECREMENT, INCREMENT, ASYNC_INCREMENT, CHANGE_THEME_DARK, CHANGE_THEME_LIGHT } from './types'
import { combineReducers } from 'redux'

function counterReducer(state = 0, action) {

  switch (action.type) {
    case INCREMENT: return state + 1
      break
    case DECREMENT: return state - 1
      break
    case ASYNC_INCREMENT: return state + 10
      break
    default: return state
  }
}

const themes = {
  light: 'light',
  dark: 'dark'
}

const themeState = {
  class: themes.light
}

function themeReducer(state = themeState, action) {
  switch (action.type) {
    case CHANGE_THEME_DARK:
      state = { ...state, class: themes.dark }
      return state
      break

    case CHANGE_THEME_LIGHT:
      state = { ...state, class: themes.light }
      return state
      break

    default: return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})

