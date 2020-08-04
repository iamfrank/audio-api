const GLOBAL_SYNTH = new Tone.Synth().toDestination()

function calcHorizontalSpaces() {
    return Math.round( window.innerWidth / ( parseFloat(window.getComputedStyle(document.body).fontSize) * 4 ) )
}

function createButton(pitch, transpose_value) {
    const transposed_pitch = Tone.Frequency(pitch).transpose(transpose_value)
    let fret = document.createElement('button')
    fret.innerText = transposed_pitch.toNote()
    fret.className = 'fret-btn'
    fret.addEventListener('click', function() {
        GLOBAL_SYNTH.triggerAttackRelease(transposed_pitch, "8n");
    })
    return fret
}

function renderFret(parent_element, fretdata, idx) {
    let listitem = document.createElement('li')
    const fret = createButton(fretdata, idx)
    listitem.className = 'fret'
    listitem.appendChild(fret)
    parent_element.appendChild(listitem)
}

function renderString(parent_element, stringdata) {   
    const fretmax = calcHorizontalSpaces()
    let string = document.createElement('ul')
    string.className = 'frets'
    for (let f = 0; f < (fretmax - 1); f++) {
        renderFret(string, stringdata, f)
    }
    parent_element.appendChild(string)
}

function renderFretBoard(element_query, strings) {
    let fretboard = document.querySelector(element_query)
    for (let s in strings) {
        renderString(fretboard, strings[s])
    }
}

export {
    renderFretBoard
}