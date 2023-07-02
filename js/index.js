import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import Sound from "./sounds.js"
import { events } from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const sound = Sound()

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

events({ controls, timer, sound })
