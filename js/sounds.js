export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  )

  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  )

  const bgAudio = new Audio("./sounds/MorningCoffee.mp3")

  bgAudio.loop = true

  const pressButton = () => {
    buttonPressAudio.play()
  }

  const timeEnd = () => {
    kitchenTimer.play()
  }

  return {
    pressButton,
    timeEnd,
    bgAudio,
  }
}
