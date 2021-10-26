const body = document.querySelector('body')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const colors = [
  '#FFFFFF',
  '#00FF00',
  '#20B2AA',
  '#00FFFF',
  '#4682B4',
  '#7B68EE',
  '#4B0082',
  '#FFFF00',
  '#795548',
]
let timeout = null

start.addEventListener('click', startClick)
stop.addEventListener('click', stopClick)

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function startClick() {
  start.disabled = true
  if (start.disabled) {
    start.style.color = 'black'
  }
  timeout = setInterval(() => {
    const MyBackgroundColor = randomIntegerFromInterval(
      colors.indexOf('#FFFFFF'),
      colors.indexOf('#795548'),
    )
    body.style.backgroundColor = colors[MyBackgroundColor]
  }, 1000)
}

function stopClick() {
  clearInterval(timeout)

  start.disabled = false
  if (!start.disabled) {
    start.style.color = 'antiquewhite'
  }
}
