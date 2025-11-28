# Kiro Week 1 Challenge - Micro Tools

A modern, clean single-page application for understanding and building cron expressions.

## Problem Statement

Cron expressions are powerful but cryptic. Developers often struggle to:
- Understand what a cron expression does at a glance
- Build correct cron expressions without trial and error
- Remember the syntax for different scheduling patterns

This tool solves these problems by providing:
1. **Explain Cron**: Parse any cron expression and see a plain English explanation
2. **Build Cron**: Interactive builder with field-by-field input and quick reference guide

## Features

✨ **Two-Tab Interface**
- Explain Cron: Parse and understand existing expressions
- Build Cron: Create new expressions with guided inputs

🎨 **Modern UI/UX**
- Clean blue/grey Tailwind theme
- Dark mode support with toggle
- Mobile-responsive design
- Smooth transitions and hover effects

💾 **Smart Persistence**
- Tab selection saved to localStorage
- Dark mode preference remembered

🧪 **Quality Assurance**
- TypeScript strict mode
- Unit tests with Vitest
- Component and utility function tests

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Testing

```bash
npm test        # Run tests
npm run test:ui # Run tests with UI
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ExplainCron.tsx    # Cron parser and explainer
│   │   └── BuildCron.tsx      # Interactive cron builder
│   ├── utils/
│   │   └── cronParser.ts      # Core parsing logic
│   ├── test/
│   │   └── setup.ts           # Test configuration
│   ├── App.tsx                # Main app with tabs and dark mode
│   └── main.tsx
├── __tests__/
│   ├── App.test.tsx
│   ├── ExplainCron.test.tsx
│   ├── BuildCron.test.tsx
│   └── cronParser.test.ts
└── .kiro/                     # Kiro configuration
```

## Screenshots

### Light Mode - Explain Cron
![Explain Cron Light Mode](screenshots/explain-light.png)

### Dark Mode - Build Cron
![Build Cron Dark Mode](screenshots/build-dark.png)

### Mobile Responsive
![Mobile View](screenshots/mobile.png)

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Vitest** - Testing framework
- **Testing Library** - Component testing

## Cron Expression Format

Standard 5-field cron format:
```
* * * * *
│ │ │ │ │
│ │ │ │ └─── Day of Week (0-6, 0=Sunday)
│ │ │ └───── Month (1-12)
│ │ └─────── Day of Month (1-31)
│ └───────── Hour (0-23)
└─────────── Minute (0-59)
```

### Supported Syntax
- `*` - Any value
- `5` - Specific value
- `1-5` - Range of values
- `*/15` - Every N units
- `1,15,30` - Multiple specific values
- `0-23/2` - Range with step

## Built for Kiro Challenge 🚀
