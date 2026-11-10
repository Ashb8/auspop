# AusPop

Interactive data story of Australia’s post-COVID population rebound — national trend, state growth shares, and fast-growing LGAs.

Built as a portfolio analytics app for [Ashutosh Bhosale](https://github.com/Ashb8).

## What’s inside

- National population trend (2004–2024 sample series)
- State growth comparison for 2023–24
- Filterable LGA explorer (Metro / Regional)
- Clear sample-data labeling (ABS-inspired, not an official extract)

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (defaults to port **3457**).

```bash
npm run build
npm start
```

## Stack

Next.js · TypeScript · Tailwind CSS · shadcn/ui · Recharts

## Note on data

Figures in `src/data/population.ts` are rounded sample values shaped like ABS ERP patterns for storytelling and demos. Replace with a live ABS download for production use.
