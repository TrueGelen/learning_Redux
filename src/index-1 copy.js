/* import '../node_modules/normalize.css/normalize.css'

import React from 'react'
import ReactDom from 'react-dom'
import App from './js/app'
 */
import scss from './scss/main.module.scss'
/* ReactDom.render(
  <Provider rootStore={rootStore}><App></App></Provider>,
  document.querySelector('#app')
) */

const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')

let state = 0

function render() {
  counter.textContent = state.toString()
}

addBtn.addEventListener('click', () => {
  state++
  render()
})

subBtn.addEventListener('click', () => {
  state--
  render()
})

asyncBtn.addEventListener('click', () => {
  setTimeout(() => {
    state += 10
    render()
  }, 1500)
})

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle(scss.dark)
})

render()