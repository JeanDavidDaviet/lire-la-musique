# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm start`
- **Build for production**: `npm run build`
- **Run tests**: `npm test`
- **Analyze bundle size**: `npm run analyze`
- **Lint code**: `npx eslint src/`
- **Format code**: `npx prettier --write "src/**/*.{js,jsx,json,css,md}"`

## Code Quality Tools

### ESLint (v8.57.1)

- Configuration: `.eslintrc.json`
- Preset: `react-app` with React/JSX/a11y linting
- Rules: No unused vars, enforce `const/let`, equality checks
- Run: `npx eslint src/`

### Prettier (v3.7.4)

- Configuration: `.prettierrc.json`
- Line length: 100 characters
- Indentation: 2 spaces
- Quotes: Single quotes for JS, double for JSX
- Run: `npx prettier --write "src/**/*.{js,jsx,json,css,md}"`

### Husky + lint-staged

- Hook file: `.husky/pre-commit`
- Runs automatically before each commit
- Executes: Prettier format + ESLint fix on staged files
- Prevents commits that don't pass linting/formatting

## Architecture Overview

This is a React-based music education app called "Piano" that teaches users to read musical notation. The app generates musical scores and plays corresponding audio.

### Key Architecture Components

**Redux State Management**:

- Uses Redux 5 with localStorage persistence
- State automatically saves/loads from localStorage in `src/store/store.js:12-33`
- Redux DevTools available in development with `?redux` query parameter
- Main reducers: config, scale, tempo in `src/store/reducers/`

**Musical Components Structure**:

- `Stave`: Main container for musical staff rendering
- `Line`: Individual staff lines with notes
- `Mesure`: Musical measures/bars
- `Note`: Individual notes with audio playback
- `Signature`: Key signatures, time signatures, clefs
- All components have corresponding Factory classes for creation

**Audio System**:

- Web Audio API implementation in `src/webAudio.js`
- Audio files organized by octaves in `src/components/Note/sounds/`
- Requires user interaction to enable audio (autoplay policy compliance)

**Configuration**:

- Global config in `src/config.js` with musical constants
- Version synced between `config.js` and `package.json`
- Responsive design with screen size detection

**Internationalization**:

- i18next for translations in `src/i18n.js`
- Language detection and switching
- Supports French and English

### Important Implementation Details

- Time signatures (4/4, 3/4, 2/4, 6/8) affect note generation and display
- Perlin noise used for smoother note curve animations
- SVG-based notation rendering with custom components
- Musical scales and alterations handled through dedicated modules

### Development Notes

- React Scripts 5 for build tooling
- Material-UI v7 for UI components
- Sentry integration for error tracking
- Service worker for PWA capabilities

## Important Files

- **IDEAS.md** - Product roadmap with 27 feature ideas organized by priority
- **.eslintrc.json** - ESLint configuration
- **.prettierrc.json** - Prettier configuration
- **.prettierignore** - Files to skip formatting
- **.husky/pre-commit** - Git pre-commit hook
- **package.json** - Contains lint-staged configuration
