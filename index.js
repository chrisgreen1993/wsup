#! /usr/bin/env node

const EMOJIS = [
  '😃', '😎', '👋', '🙂'
]

const GREETINGS = [
  "Hello!",
  "Morning!",
  "Hi!"
]

const randomItem = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

// Only want the args we give to the command
const parseArguments = (args) => args.slice(-2)

const buildStandupMessage = (yesterdayText, todayText) => {
  const emoji = randomItem(EMOJIS)
  const greeting = randomItem(GREETINGS)
  return `${greeting} ${emoji}\n*Yesterday:* ${yesterdayText}\n*Today:* ${todayText}`
}

((args) => {
  const [yesterdayText, todayText] = parseArguments(args)
  console.log(buildStandupMessage(yesterdayText, todayText))
})(process.argv)
