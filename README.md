# Trill Wave Landing Page

A modern, responsive landing page for Trill Wave Media Group built with React, Vite, and Tailwind CSS.

## Features

- Industry-specific divisions (Artists, Real Estate, Insurance, Business)
- Dynamic tab-based content switching
- Smooth animations and transitions
- Responsive design
- Dark theme with cyan accent colors

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/kshellz85/landing-page.git
cd landing-page
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Add your image assets to the `public` folder:
   - TRILLWAVE_altwave-01.jpg
   - Messiah.jpg
   - Rendy-16.jpg
   - untitled-6.jpg
   - Messiah-19.jpg
   - untitled-5.jpg
   - Rendy-18.jpg
   - Messiah-26.jpg
   - untitled-2.jpg
   - untitled-14.jpg

### Development

Run the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

## Project Structure

```
landing-page/
├── src/
│   ├── App.jsx           # Main component
│   ├── index.css         # Tailwind CSS imports
│   └── main.jsx          # Entry point
├── public/               # Static assets (add images here)
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Project dependencies
```

## Technologies

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## License

MIT
