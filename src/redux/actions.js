import { CHANGE_THEME_LIGHT, CHANGE_THEME_DARK, ASYNC_INCREMENT, DECREMENT, INCREMENT } from './types'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function asyncIncrement() {
  return (dispatch) => {
    setTimeout(() => { dispatch({ type: ASYNC_INCREMENT }) }, 1500)
  }
}

export function changeThemeDark() {
  return {
    type: CHANGE_THEME_DARK
  }
}

export function changeThemeLight() {
  return {
    type: CHANGE_THEME_LIGHT
  }
}
