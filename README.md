# Hussein Abdi — Portfolio

A clean, minimal personal portfolio built with React + Vite.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## Build for production

```bash
npm run build
```

## Customization

- **Your info**: Edit `src/App.jsx` — update name, bio, email, GitHub, LinkedIn
- **Projects**: Find the `projects` array near the top of `App.jsx` and replace with your real projects
- **Resume**: Drop your PDF into the `public/` folder and name it `resume.pdf`
- **Colors**: CSS variables are at the top of the `style` string in `App.jsx` — tweak `--accent`, `--bg`, etc.

## Deployment

Works out of the box with **Vercel**, **Netlify**, or **GitHub Pages**.

For Vercel: `npx vercel` in this folder.
For Netlify: drag & drop the `dist/` folder after running `npm run build`.
