# QR Code Generator

A simple React web application that generates QR codes from text input. Built with React, Vite, and Bootstrap.

## Features

- Clean, responsive UI with Bootstrap styling
- Text input with real-time QR code generation
- Download QR codes as PNG images
- No server-side dependencies - everything runs in the browser
- Keyboard support (press Enter to generate QR code)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. Enter any text in the input field
2. Click "Generate QR Code" or press Enter
3. The QR code will appear below the input
4. Click "Download QR Code" to save the image

## Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Bootstrap** - CSS framework for styling
- **qrcode** - JavaScript library for QR code generation

## License

This project is open source and available under the MIT License.