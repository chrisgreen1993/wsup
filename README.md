# wsup

CLI to generate a standup message you can paste into Slack.

## Installation

```bash
npm install -g wsup
```

## Usage

```bash
wsup "What you did yesterday" "What you're gonna do today"
```
Outputs (Note the greeting and emoji are random):
```
Hi! 😎
*Yesterday:* What you did yesterday
*Today:* What you're gonna do today
```
Would recommend piping to `pbcopy`:
```bash
wsup "What you did yesterday" "What you're gonna do today" | pbcopy
```
