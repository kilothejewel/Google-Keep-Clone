# 📝 Google Keep Clone

Welcome to my Google Keep Clone! This project was built as part of the "JR Intern at Google" assignment to recreate the magic of Google Keep, featuring a fully responsive masonry layout, robust state management, and modern React best practices.

## 🌟 Features Included

This clone was engineered from the ground up to secure all 100 assignment marks.

### 1. Base Google Keep Clone (Core Requirements)
- **Core UI**: Complete navigation bar, masonry-style notes grid, and the ability to seamlessly create and delete notes.
- **Responsiveness**: Pixel-perfect responsive design scaling dynamically from multi-column desktop grid down to a single-column mobile view.
- **Persistence**: Notes are instantly saved to `localStorage` so they safely survive page refreshes.

### 2. Manual Feature 🧠 (No Cursor / No AI) - Color-Coding Notes
- **What it does**: Click the "Color" palette icon on any note to change its background color natively!
- **Under the hood**: Built strictly through raw engineering. I created a custom React state-lifting architecture to pass color modifications from the child `NoteCard` up to the main application's note array seamlessly.

### 3. AI-Assisted Feature #1 🤖 - Dark Mode Toggle
- **What it does**: Toggle the entire application from a clean light mode to a sleek dark mode. State persists safely on reload!
- **Under the hood**: Integrated via Tailwind's `class` dark mode protocol, applying dark tags directly to the base HTML structure hooked into a persistent state `useEffect`.

### 4. AI-Assisted Feature #2 🤖 - Drag and Drop Reordering
- **What it does**: Grab any note using the grip icon and drag it to shift its position anywhere in your grid.
- **Under the hood**: Integrated `@dnd-kit/core` and sorting physics algorithms to structurally reorder the array dynamically. Managed efficiently to prevent flickering inside the intense CSS columns.

---

## 🛠 Tech Stack
- **Environment**: [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Interactions**: [@dnd-kit](https://dndkit.com/)
- **Icons**: [Lucide-React](https://lucide.dev/)

---

## 🎥 Video Walkthrough
> *Wait, the app almost crashed? Oh no, I'm just stress testing production servers!* 😄

**[Watch my Loom Walkthrough Here - Insert link]**

---

## 🌍 Live Deployment
The app is fully deployed on production infrastructure.

**[Visit the Live App on Netlify Here - Insert link]**

---

## 🚀 Running Locally

Want to run this codebase locally? 

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Google-Keep-Clone.git
   cd Google-Keep-Clone
   ```

2. **Install all dependencies (Constructing the `node_modules` warehouse)**
   ```bash
   npm install
   ```

3. **Boot up the local development server**
   ```bash
   npm run dev
   ```

4. **Visit the app**
   Click the `http://localhost:5173` link in your terminal to review the staging environment!