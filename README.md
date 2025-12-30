# VocabMaster - English Vocabulary Learning App

A modern Next.js application for learning English vocabulary with interactive tests, flashcards, and progress tracking.

## Features

- 📚 **Multiple Learning Modes**
  - Multiple Choice Tests - Chọn đáp án đúng
  - Matching Tests - Ghép từ với nghĩa
  - Flashcard Mode - Lật thẻ để học từ vựng
  - Writing Practice - Gõ lại từ chính xác
  - Comprehensive Tests - Kết hợp nhiều dạng

- 📊 **Progress Tracking**
  - Dashboard with statistics
  - Topic-based progress
  - Daily goals
  - Achievements system

- 🎨 **Modern UI**
  - Dark mode support
  - Responsive design
  - Beautiful animations
  - Material Symbols icons

- 📦 **Package Management**
  - Organize words by topics
  - Multiple packages (IELTS, TOEIC, etc.)
  - Custom test configuration

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Material Symbols** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── dashboard/          # Dashboard page
│   ├── topic/[slug]/       # Topic detail page
│   ├── create-test/        # Test configuration page
│   ├── test/
│   │   ├── multiple-choice/ # Multiple choice test
│   │   └── matching/       # Matching test
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── Sidebar.tsx         # Sidebar navigation
│   └── Header.tsx          # Header component
└── ...
```

## Available Routes

- `/` - Redirects to dashboard
- `/dashboard` - Main dashboard
- `/topic/[slug]` - Topic detail page (e.g., `/topic/environment`)
- `/create-test` - Create and configure tests
- `/test/multiple-choice` - Multiple choice test
- `/test/matching` - Matching test
- `/test/flashcard` - Flashcard learning mode
- `/test/writing` - Writing/spelling test

## Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## License

MIT

