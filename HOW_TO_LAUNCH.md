# How to Launch standard React / Vite Application on Localhost

This comprehensive guide provides step-by-step instructions on how to set up, launch, and run the **Vesti** React project on your local machine (`localhost`).

---

## 📋 Table of Contents
1. [Prerequisites](#1-prerequisites)
2. [Step-by-Step Launch Guide](#2-step-by-step-launch-guide)
   - [Step 1: Open Terminal in Project Folder](#step-1-open-terminal-in-project-folder)
   - [Step 2: Install Project Dependencies](#step-2-install-project-dependencies)
   - [Step 3: Start the Local Development Server](#step-3-start-the-local-development-server)
   - [Step 4: Open in Web Browser](#step-4-open-in-web-browser)
3. [Useful Development Commands](#3-useful-development-commands)
4. [Understanding Project Structure](#4-understanding-project-structure)
5. [Troubleshooting & FAQs](#5-troubleshooting--faqs)

---

## 1. Prerequisites

Before launching the project, ensure you have **Node.js** and **npm** installed on your system.

- **Check if Node.js is installed:**
  Open your command prompt or terminal and run:
  ```bash
  node -v
  ```
  *(Recommended version: Node.js v18 or higher)*

- **Check if npm is installed:**
  ```bash
  npm -v
  ```

If Node.js is not installed, download and install it from [nodejs.org](https://nodejs.org/).

---

## 2. Step-by-Step Launch Guide

### Step 1: Open Terminal in Project Folder
Open your terminal (PowerShell, Command Prompt, or VS Code integrated terminal) and navigate to the project directory:

```bash
cd c:\Users\MOXIE\Desktop\Vesti
```

---

### Step 2: Install Project Dependencies
If this is your first time running the project or if `node_modules` is missing, install the required packages:

```bash
npm install
```

> **Note:** This command reads `package.json` and installs React (`react`, `react-dom`), React Router (`react-router-dom`), Lucide Icons (`lucide-react`), and Vite (`vite`).

---

### Step 3: Start the Local Development Server
To launch the app on `localhost`, run the development script:

```bash
npm run dev
```

You will see output similar to this in your terminal:

```text
  VITE v8.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

---

### Step 4: Open in Web Browser
1. Hold `Ctrl` and click the `http://localhost:5173/` link in your terminal, OR
2. Open your browser (Chrome, Edge, Firefox, etc.) and type `http://localhost:5173` into the address bar.

Your React application is now live on `localhost`! Any edits you make to code in `src/` will instantly update in the browser via **Hot Module Replacement (HMR)**.

---

## 3. Useful Development Commands

| Command | Action / Purpose |
| :--- | :--- |
| `npm run dev` | Starts the local dev server on `http://localhost:5173` |
| `npm run dev -- --port 3000` | Starts dev server on a custom port (e.g., `3000`) |
| `npm run build` | Builds and bundles the project into the `dist/` directory for production deployment |
| `npm run preview` | Previews the production build locally before deploying |
| `npm run lint` | Runs Oxlint code linter to check for code quality issues |

---

## 4. Understanding Project Structure

Here is how the project files are organized:

```text
Vesti/
├── index.html          # Main HTML entry file
├── package.json        # Project scripts & dependencies
├── vite.config.js      # Vite build setup configuration
├── public/             # Static assets (images, icons, legacy CSS)
└── src/                # Main React Application source code
    ├── main.jsx        # App entry point (renders root component)
    ├── App.jsx         # Main router setup & layout provider
    ├── index.css       # Global application CSS styles
    ├── components/     # Reusable components (Navbar, Footer, Buttons, etc.)
    └── pages/          # Full page views (Home, Login, Dashboard, etc.)
```

---

## 5. Troubleshooting & FAQs

### Q1: Error `Port 5173 is in use`
If port `5173` is already taken by another process, Vite will automatically try port `5174`. Alternatively, you can specify a port manually:
```bash
npm run dev -- --port 8080
```

### Q2: Error `'vite' is not recognized as an internal or external command`
This happens if `node_modules` was not installed properly. Run:
```bash
npm install
```

### Q3: How to stop the local server?
Press `Ctrl + C` in your terminal window and type `y` (or press `Enter`) to terminate the process.

### Q4: Blank screen in browser?
1. Open Browser Developer Tools (`F12` or `Ctrl + Shift + I`).
2. Check the **Console** tab for JavaScript syntax errors or missing component imports.
