# Habit Studio

[Open the live demo](https://786lala.github.io/habit-studiog18/)

Habit Studio is a minimal, local-first habit tracker made as a portfolio project. It helps users keep daily habits visible, notice progress, and write a short reflection without requiring an account.

## What it includes

- Daily habit tracking with categories and streaks
- A focused dashboard with completion metrics
- Local insights for weekly activity and habit performance
- A dated reflection journal
- JSON export and a reset control for browser-stored demo data

## Privacy

The demo stores its habits, check-ins, and reflections only in the current browser using local storage. No account, cloud synchronization, payment, or third-party data transfer is included. Users can export a copy of their data or reset the demo from the **Data** panel.

## Run locally

```bash
cd habit-studio
npm install
npm run dev
```

Create a production build with `npm run build`, and check source quality with `npm run lint`.

## Deployment

GitHub Actions builds the Vite project in `habit-studio/` and publishes `habit-studio/dist` to GitHub Pages.
