# ✅ React TaskFlow

A beautiful Kanban-style task management app built with React 18 and TypeScript. Manage tasks across workflow stages, filter by priority and tag, create new tasks with a sleek modal — all powered by a dark UI.

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

## ✨ Features

- 📋 **Kanban Board** — Four columns: To Do → In Progress → Review → Done
- 🎯 **Priority System** — Urgent, High, Medium, Low with color-coded badges
- 🏷️ **Tags** — Colorful tag pills on each task card
- ➕ **Task Modal** — Full form: title, description, status, priority, assignee, due date, tags
- 🔍 **Filters** — Filter by priority and tag across all columns
- 🔎 **Search** — Instant full-text search across all tasks
- ➡️ **Quick Move** — Move tasks to the next column directly from the card
- 📅 **Due Dates** — Overdue tasks highlighted in red

## 🛠 Tech Stack

- React 18 + TypeScript
- Tailwind CSS
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
│   ├── Board.tsx       # Renders all 4 Kanban columns
│   ├── Column.tsx      # Individual column with task list
│   ├── FilterBar.tsx   # Priority and tag filter controls
│   ├── Header.tsx      # Top bar with search and add button
│   ├── TaskCard.tsx    # Task card with actions
│   └── TaskModal.tsx   # Add task modal form
├── store/
│   └── taskStore.ts    # Task state management hook
└── types/
    └── index.ts
```

## 📄 License

MIT © Mario Tavarez
