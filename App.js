var tens = 00
var secs = 00
var mins = 00
var tensplace = document.getElementById('tens')
var secsplace = document.getElementById('secs')
var minsplace = document.getElementById('mins')
var start = document.getElementById('start')
var stop = document.getElementById('stop')
var res = document.getElementById('reset')
var interval;

start.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(watch, 10)
})
stop.addEventListener('click', () => {
    clearInterval(interval)
})
res.addEventListener('click', () => {
    clearInterval(interval)
    tens = "00"
    secs = "00"
    mins = "00"

    tensplace.innerHTML = tens
    secsplace.innerHTML = secs
    minsplace.innerHTML = mins

})

function watch() {
    tens++
    if (tens < 10) {
        tensplace.innerHTML = "0" + tens
    }
    if (tens >= 10) {
        tensplace.innerHTML = tens
    }
    if (tens > 99) {
        secs++
        if (secs < 10) {
            secsplace.innerHTML = "0" + secs
        }
        if (secs >= 10) {
            secsplace.innerHTML = secs
        }
        tens = 00
        tensplace.innerHTML = "00"


    }
    if (secs > 59) {
        mins++
        if (mins < 10) {
            minsplace.innerHTML = "0" + mins
        }
        if (mins >= 10) {
            minsplace = minsplace
        }
        secs = 00
        secsplace.innerHTML = "00"
    }
}
