#! /usr/bin/env node

const EMOJIS = [
  '😃', '😎', '👋', '🙂'
]

const GREETINGS = [
  "Hello!",
  "Morning!",
  "Hi!"
]

const isMonday = date => date.getDay() === 1

const randomItem = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

// Only want the args we give to the command
const parseArguments = (args) => args.slice(-2)

const buildStandupMessage = (lastDayText, todayText) => {
  const emoji = randomItem(EMOJIS)
  const greeting = randomItem(GREETINGS)
  const lastDayName = isMonday(new Date) ? 'Friday' : 'Yesterday'
  return `${greeting} ${emoji}\n*${lastDayName}:* ${lastDayText}\n*Today:* ${todayText}`
}

((args) => {
  const [lastDayText, todayText] = parseArguments(args)
  console.log(buildStandupMessage(lastDayText, todayText))
})(process.argv)
