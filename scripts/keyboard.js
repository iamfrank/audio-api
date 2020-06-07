import { startOsc, stopOsc } from './oscillator.js'
import { createNotes } from './notes.js'

let actx = null,
    keyb = document.createElement('div'),
    keys = createNotes()

function renderKeyBoard(scope, targetEl) {
    actx = scope.actx
    for (let k in keys) {
        renderKey(k)
    }
    targetEl.appendChild(keyb)
}

function renderKey(idx) {
    let keyData = keys[idx],
        key = document.createElement('button')

    key.innerHTML = `${ keyData.label } <span class="keyboard-key">${ keyData.key }</span>`
    key.addEventListener('pointerdown', function() {
        keyData.osc = startOsc({actx}, keyData.freq)
    })
    key.addEventListener('pointerup', function() {
        stopOsc(keyData.osc)
    })
    document.addEventListener('keydown', function(ev) {
        if (ev.key === keyData.key && keyData.osc === null) {
            keyData.osc = startOsc({actx}, keyData.freq)
        }
    })
    document.addEventListener('keyup', function(ev) {
        if (ev.key === keyData.key) {
            stopOsc(keyData.osc)
            keyData.osc = null
        }
    })
    keyb.appendChild(key)
}

export {
    renderKeyBoard
}