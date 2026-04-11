# Would You Rather?

A Would You Rather game with 200 handwritten questions across 15 categories. Never runs out — the deck reshuffles and loops infinitely.

## Categories

Superpowers · Lifestyle · Social & Relationships · Tech · Food · Funny & Weird · Deep & Philosophical · Animals · Creative · Comfort & Inconvenience · Adventure · Hypotheticals · Fantasy & Sci-Fi · Career · Senses

## How it works

- 200 questions are shuffled on load
- Pick A or B — keyboard or click
- After all 200, the deck reshuffles into a new random order and continues
- Streak counter appears after 3+ consecutive picks
- Random verdict shown after each pick

## Controls

| Key | Action |
|-----|--------|
| `A` | Pick option A |
| `B` | Pick option B |
| `Space` / `Enter` | Next question |
| `Ctrl + R` | Reset and reshuffle |

## Stack

Plain HTML, CSS, JavaScript. No libraries, no backend. Deployed as a static site on Vercel.

## Files

```
index.html   — markup
style.css    — all styling
script.js    — question bank (200 questions) and game logic
vercel.json  — static deployment config
```

## Local dev

Open `index.html` in a browser. No build step.

## Deployment

Push to GitHub, connect to Vercel, deploys automatically.
