# Habit Studio

## Overview

Habit Studio is a professional habit tracking web application built with React and Vite. It helps users build better habits through daily tracking, streak counters, and progress analytics. The application features a polished landing page with marketing sections (hero, features, testimonials, pricing) and a functional dashboard for habit management. All user data is stored locally in the browser using localStorage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 19** with Vite 7 for fast development and hot module replacement
- **JSX components** organized in `/src/components/` directory
- No TypeScript - uses plain JavaScript with JSX

### Styling Approach
- **Tailwind CSS 4** as the primary styling framework
- Custom CSS in `index.css`, `App.css`, and `styles.css` for additional styling
- CSS custom properties (variables) for theming and consistent colors
- Professional design system with Inter and Poppins fonts from Google Fonts

### State Management
- **localStorage** for persistent data storage via custom `useLocalStorage` hook
- React's built-in useState/useEffect for component state
- No external state management library

### Animation
- **Framer Motion** for animations and transitions

### Component Structure
The app has two main views:
1. **Landing Page** - Marketing sections (Hero, Features, Onboarding, Testimonials, Pricing, CTA, Footer)
2. **Dashboard** - Habit tracking functionality (AddHabit, HabitList components)

### Build & Deployment
- Vite handles bundling and development server
- Configured for GitHub Pages deployment via `gh-pages` package
- Dev server runs on port 5000 with host `0.0.0.0` for network access

## External Dependencies

### Core Libraries
- **react** / **react-dom** (v19) - UI framework
- **framer-motion** - Animation library

### Build Tools
- **vite** - Build tool and dev server
- **@vitejs/plugin-react** - React support for Vite
- **tailwindcss** / **@tailwindcss/postcss** - Utility-first CSS
- **postcss** / **autoprefixer** - CSS processing

### Development Tools
- **eslint** with React hooks and refresh plugins - Code linting
- **gh-pages** - GitHub Pages deployment

### External Services
- **Google Fonts** - Inter and Poppins font families loaded via CDN
- No backend API - all data stored in browser localStorage
- No database - client-side only application