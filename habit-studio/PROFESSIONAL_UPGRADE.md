# 🌟 Habit Studio - Professional Habit Tracker

A beautifully designed, modern habit tracking application that helps you build better habits and transform your life, one day at a time.

## ✨ Features

### Professional Design
- **Modern UI/UX**: Clean, professional interface with smooth animations and transitions
- **Responsive Design**: Fully responsive layout that works perfectly on desktop, tablet, and mobile
- **Beautiful Color Palette**: Carefully selected professional colors for a polished look
- **Professional Typography**: Using Inter and Poppins fonts for optimal readability

### Core Features
- 📊 **Smart Tracking**: Track your daily habits with beautiful visual indicators
- 🔥 **Streak Counter**: Build momentum with streak tracking
- 📈 **Analytics Dashboard**: Visualize your progress with real-time statistics
- 🏆 **Achievements**: Unlock badges and rewards as you hit milestones
- 💾 **Local Data Storage**: All your data is stored securely in your browser
- 📥 **Export Data**: Download your habit logs as CSV for backup or analysis

### Bonus Features Added
- 🎯 **Hero Section**: Eye-catching landing page with compelling value proposition
- ✨ **Features Showcase**: Detailed explanation of key benefits
- 📚 **How It Works**: Step-by-step guide to getting started
- 💬 **Testimonials**: Social proof from satisfied users
- 💳 **Pricing Plans**: Transparent pricing with Free, Pro, and Team tiers
- 🚀 **Call-to-Action Sections**: Strategic CTAs to encourage user engagement
- 📊 **Statistics Dashboard**: Real-time progress metrics including:
  - Completed Habits Today
  - Longest Streak
  - Overall Completion Rate
  - XP Earned

## 🚀 Quick Start

### Installation

```bash
cd habit-tracker
npm install
```

### Development

```bash
npm run dev
```

The app will open automatically at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📂 Project Structure

```
src/
├── components/
│   ├── ProfessionalHeader.jsx      # Professional navigation header
│   ├── Hero.jsx                    # Landing page hero section
│   ├── Features.jsx                # Features showcase
│   ├── Onboarding.jsx              # How it works section
│   ├── Statistics.jsx              # Real-time analytics dashboard
│   ├── Testimonials.jsx            # User testimonials
│   ├── Pricing.jsx                 # Pricing plans
│   ├── CTA.jsx                     # Call-to-action section
│   ├── Footer.jsx                  # Professional footer
│   ├── AddHabit.jsx                # Add new habit form
│   ├── HabitList.jsx               # List of habits
│   └── Header.jsx                  # Original navigation
├── pages/
│   ├── Database.jsx                # Habit database page
│   ├── Option2.jsx                 # About Us page
│   └── Option3.jsx                 # About Habit Studio page
├── hooks/
│   └── useLocalstorage.js          # Custom localStorage hook
├── App.jsx                         # Main app component
├── index.css                       # Professional base styles
└── main.jsx                        # React entry point
```

## 🎨 Design System

### Colors
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Amber)
- **Danger**: `#ef4444` (Red)

### Typography
- **Headers**: Poppins (700-800 weight)
- **Body**: Inter (400 weight)
- **Accents**: Inter (600-700 weight)

## 🔧 Customization

### Adding a New Habit Category
1. Click "Add Habit" on the dashboard
2. Fill in the habit name, category, and frequency
3. Select a color for the category
4. Click "Save"

### Exporting Your Data
1. Go to Settings
2. Click "Export as CSV"
3. Your habit data will download

### Customizing Colors
Edit the color variables in `src/index.css`:

```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  /* ... more colors */
}
```

## 📊 Data Structure

Habits are stored as objects with the following structure:

```javascript
{
  id: "timestamp",
  name: "Drink Water",
  category: "Health",
  color: "#a8d8c8",
  frequency: "daily"
}
```

Logs are stored by date with habit completion status:

```javascript
{
  "2024-12-08": {
    "habit-id-1": true,
    "habit-id-2": false
  }
}
```

## 🔄 Daily Reset

The app automatically resets at midnight each day, allowing you to track habits afresh while maintaining your historical streaks and logs.

## 🎯 Best Practices for Success

1. **Start Small**: Begin with 2-3 habits you want to build
2. **Be Specific**: Instead of "exercise," try "30-minute morning run"
3. **Track Daily**: Consistency is key - check in at the same time each day
4. **Review Progress**: Check your analytics weekly to stay motivated
5. **Celebrate Wins**: Acknowledge your streaks and milestones

## 🤝 Contributing

This project is built by Group 18 as part of our SDG goal initiatives, focusing on:
- Sustainability in digital applications
- Promoting good health and well-being (SDG Goal 3)

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by the desire to make habit tracking accessible and enjoyable
- Built with React, Vite, and Tailwind CSS
- Thanks to all our users for their feedback and support

---

**Made with ☀️ for your daily wins.**

For questions or feedback, please reach out to our team. Happy habit tracking! 🚀
