// Globals
const timerElement = document.getElementById('timer')
let seconds
let timerId

function reset() {
  seconds = 120
  timerElement.innerHTML = formatOutput(seconds)

  clearInterval(timerId)
  timerId = setInterval(tick, 1000)
}

function formatOutput(x) {
  const minutesPart = Math.floor(x / 60).toString()
  const secondsPart = (x % 60).toString()

  return `${minutesPart.padStart(2, '0')}:${secondsPart.padStart(2, '0')}`
}

function tick() {
  seconds = seconds - 1

  if (seconds === 0) {
    document.body.style = 'background-color:coral;'
    clearInterval(timerId)
  }

  timerElement.innerHTML = formatOutput(seconds)
}

reset()
