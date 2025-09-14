# Analytics Dashboard Scaffold

A clean, production-ready analytics dashboard built with React Native, Expo, and Supabase.

## Features

- 🔐 **Authentication**: Complete login/logout flow with Supabase Auth (phone + OTP)
- 🎨 **Design System**: Consistent theme with NativeWind/Tailwind CSS
- 📱 **Responsive**: Mobile-first design that works on all screen sizes
- 🗄️ **Database Ready**: Supabase client configured with existing schema
- 🧭 **Navigation**: Sidebar navigation with analytics route structure
- ⚡ **Performance**: Optimized with Moti animations and gesture handling

## Project Structure

```
├── app/
│   ├── _layout.tsx          # Root layout with auth provider
│   ├── index.tsx            # Main entry point
│   └── +not-found.tsx       # 404 page
├── components/
│   ├── AnalyticsLayout.tsx  # Main analytics layout component
│   ├── Sidebar.tsx          # Navigation sidebar
│   └── modals/              # Authentication modals
├── contexts/
│   └── AuthContext.tsx      # Authentication state management
├── lib/
│   └── supabaseClient.ts    # Supabase configuration
├── hooks/
│   └── useFrameworkReady.ts # Framework initialization
└── global.css               # Global styles
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   - Configure your `.env` file with Supabase credentials
   - Ensure `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY` are set

3. **Start development server**:
   ```bash
   npm run dev
   ```

## Analytics Routes

The sidebar includes pre-configured analytics routes:

### My Learning Path
- Prep Overview
- Mastery Map  
- Gap Chains
- Root Causes
- Neural Radar
- Time-to-Mastery Clock
- Mentor Flight Path

### Study Efficiency & Revision
- Study Sessions
- Speed & Accuracy
- Confidence vs Reality
- Smart Revision
- Quick Fix Lessons
- Mistakes to Correct
- Achievements & Rewards

### Knowledge Assets
- Flashcards & Bookmarks

### Peer & Cohorts
- Peer Comparison
- Buddy Mode
- Dynamic Cohorts
- Wellness & Balance

### Performance Simulation
- Rank & Score Simulator

## Database Schema

The project includes access to a comprehensive database schema with tables for:
- User management and authentication
- Learning progress tracking
- Study sessions and analytics
- Concept and topic organization
- Performance metrics and insights

## Adding New Analytics Components

1. Create your component in `components/`
2. Add route handling in `AnalyticsLayout.tsx`
3. Use the existing design system (Tailwind classes, Moti animations)
4. Connect to Supabase using the configured client

## Design System

- **Colors**: Consistent slate/blue theme with accent colors
- **Typography**: System fonts with proper hierarchy
- **Animations**: Moti-powered smooth transitions
- **Components**: Reusable modal system and navigation
- **Responsive**: Mobile-first with desktop enhancements

## Authentication

Complete authentication flow included:
- Phone number + OTP verification
- User registration with profile creation
- Session management with Supabase
- Protected routes and state management

Ready to build powerful analytics experiences! 🚀