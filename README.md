# Calculator App
A simple calculator application built with React, TypeScript, and Vite.

## Features

- ✨ **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- 🔢 **Decimal Support**: Handle decimal numbers with precision
- 🧮 **Parentheses Support**: Complex expressions with proper order of operations
- ⌫ **Backspace Functionality**: Remove last entered character
- 🗑️ **Clear Function**: Reset the calculator with a single click
- 🎯 **Error Handling**: Graceful error handling for invalid expressions
- 📱 **Responsive Design**: Works seamlessly across different screen sizes
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds

## Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling for responsive design
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kwchun0520/calculator.git
cd calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## How to Use

1. **Basic Operations**: Click number buttons to input values, then click operation buttons (+, -, *, /) to perform calculations
2. **Decimal Numbers**: Use the decimal point (.) button for floating-point numbers
3. **Complex Expressions**: Use parentheses () for grouping operations
4. **Calculate**: Press the equals (=) button to evaluate the expression
5. **Clear**: Press 'C' to clear the display
6. **Backspace**: Press '<' to remove the last entered character

## Project Structure

```
src/
├── components/
│   └── Calculator.tsx    # Main calculator component
├── styles/
│   └── Calculator.css    # Calculator-specific styles
├── App.tsx              # Root application component
├── App.css              # Global application styles
├── index.css            # Base styles
└── main.tsx             # Application entry point
```

## Acknowledgments

- Built with [Vite](https://vitejs.dev/) for optimal development experience
- Styled with modern CSS for a clean, professional look
- TypeScript for enhanced developer experience and code reliability
