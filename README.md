# ✅ React TaskFlow

A Kanban-style task management app built with React 18 and TypeScript. Manage tasks across workflow stages, filter by priority and tag, create tasks with a sleek modal — powered by Tailwind CSS v4.

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

## 📸 Preview

![ Demo](.github/demo.gif)

## ✨ Features

- 📋 **Kanban Board** — To Do → In Progress → Review → Done
- 🎯 **Priority System** — Urgent, High, Medium, Low badges
- 🏷️ **Tags** — Colorful tag pills on each card
- ➕ **Task Modal** — Full form with title, priority, assignee, due date, tags
- 🔍 **Filters** — Filter by priority and tag across all columns
- 🔎 **Search** — Instant full-text search
- ➡️ **Quick Move** — Move tasks to the next column from the card
- 📅 **Due Dates** — Overdue tasks highlighted in red

## 🛠 Tech Stack

- **React 18** + TypeScript
- **Tailwind CSS v4** (Vite plugin)
- Lucide React
- Vite

## 🚀 Quick Start

```bash
git clone https://github.com/mariotavarez/react-taskflow.git
cd react-taskflow
npm install
npm run dev
```

## 📁 Structure

```
src/
├── components/
│   ├── Board.tsx       # 4 Kanban columns
│   ├── Column.tsx      # Individual column
│   ├── FilterBar.tsx   # Priority + tag filters
│   ├── Header.tsx      # Search + add task
│   ├── TaskCard.tsx    # Task card with actions
│   └── TaskModal.tsx   # New task form modal
├── store/taskStore.ts  # State hook
└── types/index.ts
```

## ⚙️ Tailwind CSS v4

No config file needed:

```ts
// vite.config.ts
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({ plugins: [react(), tailwindcss()] })
```

```css
/* src/index.css */
@import "tailwindcss";
```

## 📄 License

MIT © Mario Tavarez
