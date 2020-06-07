function startOsc(scope, freq) {
    let osc = scope.actx.createOscillator()
    osc.frequency.setValueAtTime(freq, scope.actx.currentTime)
    osc.connect(scope.actx.destination)
    osc.start()
    return osc
}

function stopOsc(osc) {
    osc.stop()
}

export {
    startOsc,
    stopOsc
}