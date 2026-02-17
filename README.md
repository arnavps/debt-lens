# Debtlens - Cross-Institutional Debt Stress Early Warning System

A sophisticated single-page React application that provides real-time debt stress monitoring and early warning analytics across multiple financial institutions.

## 🎯 Project Overview

DebtRadar is a fintech dashboard designed with a dark terminal-meets-fintech aesthetic, featuring Bloomberg Terminal-inspired design elements and hacker dashboard precision. The system monitors debt stress trajectories, detects behavioral signals, and provides actionable intervention recommendations.

## 🚀 Features

### Core Functionality
- **Real-time Debt Stress Monitoring** - Continuous tracking across 4+ financial institutions
- **Behavioral Signal Detection** - AI-powered anomaly detection for debt cycling, EMI drift, and sequencing anomalies
- **Intervention Engine** - Prioritized action recommendations with estimated savings
- **Stress Trajectory Visualization** - Interactive timeline showing progression from SAFE → WARNING → CRITICAL zones
- **Institutional Debt Mapping** - Detailed breakdown of loans, utilization rates, and status tracking

### Visual Design
- **Dark Terminal Aesthetic** - Bloomberg Terminal-inspired dark theme with sharp, precise UI elements
- **Goblin Treasury Analytics** - High-contrast data visualization with gold accents
- **Responsive Design** - Fully responsive layout optimized for desktop and mobile
- **Motion Animations** - Smooth entrance animations and interactive transitions using Motion library

## 📁 File Structure

```
debt-lens/
├── src/
│   ├── App.jsx                 # Main application component
│   ├── DebtRadar.jsx          # Core DebtRadar dashboard component
│   ├── index.css              # Global CSS reset and base styles
│   ├── main.jsx               # React entry point
│   └── assets/                # Static assets
├── index.html                 # HTML template
├── package.json               # Project dependencies and scripts
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
└── README.md                  # This documentation
```

## 🛠️ Technical Stack

### Frontend Framework
- **React 18+** - Component-based UI library
- **Vite** - Next-generation frontend tooling
- **Motion** - Animation library for React

### Styling
- **Inline Styles** - Component-scoped styling approach
- **Google Fonts** - Rajdhani (headers/numbers) + IBM Plex Mono (data/labels)
- **CSS Variables** - Theme management with dark palette
- **No Tailwind/CSS Frameworks** - Custom styling implementation

### Design System
```css
--bg: #0A0E17          /* Near-black navy background */
--surface: #0F1623     /* Surface cards */
--card: #141D2E        /* Card backgrounds */
--border: #1E2D45      /* Border colors */
--gold: #F5A623        /* Primary accent (Gringotts gold) */
--danger: #FF4D4D      /* Critical alerts */
--warn: #F5A623        /* Warning indicators */
--safe: #00E5A0        /* Safe status */
--teal: #00C2D4        /* Secondary accent */
--text: #E8EDF5        /* Primary text */
--muted: #4A6080       /* Secondary text */
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd debt-lens

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands
```bash
npm run dev          # Start development server (localhost:5173)
npm run build        # Create production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎨 Component Architecture

### Main Components

#### `DebtRadar.jsx` - Core Dashboard
The main application component containing all dashboard sections:

1. **Navigation Bar** - User info, live status indicator, sync timestamp
2. **Hero Section** - Stress trajectory timeline with animated marker
3. **Debt Map Grid** - 2x2 institution cards with utilization visualization
4. **Behavioral Signals Panel** - Terminal-style signal detection list
5. **Intervention Engine** - Actionable recommendations with priority ranking
6. **Footer Stat Bar** - Key metrics with animated counters

#### `App.jsx` - Application Wrapper
Simple wrapper component that renders the DebtRadar dashboard.

### Animation System
- **Entrance Animations** - Staggered fade+slide effects (0.15s delays)
- **Data Counters** - Smooth numerical animations for key metrics
- **Progress Indicators** - Animated utilization bars and timeline markers
- **Interactive States** - Hover effects and transition animations

## 📊 Data Structure

### Debt Institution Data
```javascript
{
  institution: "HDFC Bank",
  loanType: "Home Loan",
  emi: "₹28,400",
  utilization: 34,           // Percentage
  status: "ON TRACK",        // ON TRACK / AT RISK / CYCLING
  statusColor: "var(--safe)" // CSS variable reference
}
```

### Behavioral Signals
```javascript
{
  type: "DEBT_CYCLING_DETECTED",
  description: "Bajaj → Amazon Pay rotation",
  severity: "danger"         // danger / warn / safe
}
```

### Intervention Actions
```javascript
{
  title: "Consolidate Bajaj + BNPL",
  saving: "₹2,100",          // Estimated monthly saving
  priority: "HIGH",          // HIGH / MEDIUM / LOW
  priorityColor: "var(--danger)"
}
```

## 🎯 Key Metrics Tracked

- **Total Monthly Obligation** - Sum of all EMI payments
- **Debt-to-Income Ratio** - Percentage of income committed to debt
- **Stress Score** - Composite risk indicator (0-100 scale)
- **Institutions Tracked** - Number of financial institutions monitored

## 📱 Responsive Design

### Breakpoints
- **Desktop (1200px+)** - Full 2-column grid layouts
- **Tablet (768px-1200px)** - Single column grids, 2-column stats
- **Mobile (480px-768px)** - Stacked layouts, reduced font sizes
- **Small Mobile (<480px)** - Minimal layout optimizations

### Mobile Optimizations
- Touch-friendly button sizes (minimum 36px)
- Vertical navigation stacking
- Adaptive font scaling
- Proper viewport handling

## 🔧 Customization

### Color Theme
Modify CSS variables in `DebtRadar.jsx` style tag:
```css
:root {
  --bg: #0A0E17;
  --gold: #F5A623;
  /* ... other variables */
}
```

### Data Configuration
Update demo data arrays in `DebtRadar.jsx`:
- `debtData` - Institution loan information
- `signals` - Behavioral detection patterns
- `interventions` - Action recommendations

### Animation Timing
Adjust animation delays and durations in useEffect hooks:
```javascript
const timer1 = setTimeout(() => setNavVisible(true), 100);  // Navigation delay
const timer2 = setTimeout(() => setHeroVisible(true), 250); // Hero delay
// ... other timers
```

## 🤝 Contributing

### Development Guidelines
1. Maintain the dark terminal aesthetic
2. Use inline styles for component-specific styling
3. Follow existing animation patterns and timing
4. Ensure responsive design works across all breakpoints
5. Keep motion animations smooth and purposeful

### Code Structure
- Single-file component approach (per requirements)
- No external CSS files
- Google Fonts imported via CSS @import
- Motion library for all animations

## 📄 License

This project is proprietary software for debt stress monitoring and financial risk analysis.

## 📞 Support

For issues or questions regarding DebtRadar implementation, please contact the development team.

---

*Built with precision for financial risk analysts and debt monitoring professionals*