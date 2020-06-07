import { renderKeyBoard } from './keyboard.js'

const global = 'einz'
const actx = new AudioContext()

renderKeyBoard({actx}, document.querySelector('main'))
