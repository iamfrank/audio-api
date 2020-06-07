const keyboardKeys = ['a','w','s','e','d','r','f','t','g','y','h','u','j','i','k','o','l']
const tones = [
    {freq: 65.41, t: 'C', o: 2},{freq: 69.30, t: 'C#', o: 2}, {freq: 73.42, t: 'D', o: 2}, {freq: 77.78, t: 'Eb', o: 2}, {freq: 82.41, t: 'E', o: 2}, {freq: 87.31, t: 'F', o: 2}, {freq: 92.50, t: 'F#', o: 2}, {freq: 98.00, t: 'G', o: 2}, {freq: 103.83, t: 'Ab', o: 2}, {freq: 110.00, t: 'A', o: 2}, {freq: 116.54, t: 'A#', o: 2}, {freq: 123.47, t: 'B', o: 2},
    {freq: 130.81, t: 'C', o: 3},{freq: 138.59, t: 'C#', o: 3}, {freq: 146.83, t: 'D', o: 3}, {freq: 155.56, t: 'Eb', o: 3}, {freq: 164.81, t: 'E', o: 3}, {freq: 174.61, t: 'F', o: 3}, {freq: 185.00, t: 'F#', o: 3}, {freq: 196.00, t: 'G', o: 3}, {freq: 207.65, t: 'Ab', o: 3}, {freq: 220.00, t: 'A', o: 3}, {freq: 233.08, t: 'A#', o: 3}, {freq: 246.94, t: 'B', o: 3},
    {freq: 261.63, t: 'C', o: 4},{freq: 277.18, t: 'C#', o: 4}, {freq: 293.66, t: 'D', o: 4}, {freq: 311.13, t: 'Eb', o: 4}, {freq: 329.63, t: 'E', o: 4}, {freq: 349.23, t: 'F', o: 4}, {freq: 369.99, t: 'F#', o: 4}, {freq: 392.00, t: 'G', o: 4}, {freq: 415.30, t: 'Ab', o: 4}, {freq: 440.00, t: 'A', o: 4}, {freq: 466.16, t: 'A#', o: 4}, {freq: 493.88, t: 'B', o: 4},
    {freq: 523.25, t: 'C', o: 5},{freq: 554.37, t: 'C#', o: 5}, {freq: 587.33, t: 'D', o: 5}, {freq: 622.25, t: 'Eb', o: 5}, {freq: 659.25, t: 'E', o: 5}, {freq: 698.46, t: 'F', o: 5}, {freq: 739.99, t: 'F#', o: 5}, {freq: 783.99, t: 'G', o: 5}, {freq: 830.61, t: 'Ab', o: 5}, {freq: 880.00, t: 'A', o: 5}, {freq: 932.33, t: 'A#', o: 5}, {freq: 987.77, t: 'B', o: 5},
    {freq: 1046.50, t: 'C', o: 6},{freq: 1108.73, t: 'C#', o: 6}, {freq: 1174.66, t: 'D', o: 6}, {freq: 1244.51, t: 'Eb', o: 6}, {freq: 1318.51, t: 'E', o: 6}, {freq: 1396.91, t: 'F', o: 6}, {freq: 1479.98, t: 'F#', o: 6}, {freq: 1567.98, t: 'G', o: 6}, {freq: 1661.22, t: 'Ab', o: 6 }, {freq: 1760.00, t: 'A', o: 6}, {freq: 1864.66, t: 'A#', o: 6}, {freq: 1975.53, t: 'B', o: 6},
    {freq: 2093.00, t: 'C', o: 7},{freq: 2217.46, t: 'C#', o: 7}, {freq: 2349.32, t: 'D', o: 7}, {freq: 2489.02, t: 'Eb', o: 7}, {freq: 2637.02, t: 'E', o: 7}, {freq: 2793.83, t: 'F', o: 7}, {freq: 2959.96, t: 'F#', o: 7}, {freq: 3135.96, t: 'G', o: 7}, {freq: 3322.44, t: 'Ab', o: 7 }, {freq: 3520.00, t: 'A', o: 7}, {freq: 3729.31, t: 'A#', o: 7}, {freq: 3951.07, t: 'B', o: 7}
]

let baseFreq = 220



function createNote(step, idx) {
    let n = {
        key: keyboardKeys[idx],
        freq: tones[step].freq,
        label: `${ tones[step].t }<sub>${ tones[step].o }</sub>`,
        osc: null
    }
    return n
}

function createNotes() {
    let notes = [],
        idx = 0,
        start = 16,
        end = 32

    for (let step = start; end >= step; step++) {
        notes.push(createNote(step, idx))
        idx++
    }
    return notes
}

export {
    createNotes
}