<div align="center">

# TaskFlow

**Kanban that gets out of your way.**

A fast, clean task board for managing work across stages — drag, filter, and ship. Built with React 19, TypeScript 5.7, and Tailwind CSS v4.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)

![ Demo](.github/demo.gif)

</div>

---

## What is TaskFlow?

A Kanban board that focuses on what matters: moving tasks forward. Four columns, instant filtering, a clean modal for creating tasks — nothing bloated, nothing in the way.

Built to demonstrate a production-grade React 19 codebase using **Atomic Design** from atoms to pages, with full TypeScript strictness throughout.

```bash
git clone https://github.com/mariotavarez/react-taskflow.git
cd react-taskflow && npm install && npm run dev
```

---

## Features

- **4-Column Kanban** — To Do → In Progress → Review → Done, with per-column task counts
- **Priority System** — Urgent / High / Medium / Low badges with distinct color coding
- **Full-Text Search** — Instantly filters across all columns by title or tag
- **Priority Filter** — One click to isolate all Urgent (or any priority) tasks board-wide
- **Task Modal** — Title, description, priority, status, assignee, due date, and tags in one form
- **Tag Autocomplete** — Type-ahead tag input with colorful pill display
- **Delete Tasks** — Hover a card to reveal the delete button, no confirmation dialogs
- **Persistent State** — Tasks survive navigation (in-memory store, easily swappable for an API)

---

## Quick Start

```bash
git clone https://github.com/mariotavarez/react-taskflow.git
cd react-taskflow
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Structure — Atomic Design

```
src/
├── atoms/
│   ├── Button.tsx          # primary / ghost / danger / outline variants
│   ├── Input.tsx           # text input with label and error state
│   ├── PriorityBadge.tsx   # color-coded priority pill
│   ├── Select.tsx          # dropdown with label and options
│   ├── TagPill.tsx         # tag with optional remove button
│   └── Textarea.tsx        # multi-line input with label
├── molecules/
│   ├── FilterChip.tsx      # active/inactive filter button with count badge
│   ├── FormField.tsx       # tag input with pill management (Enter/comma to add)
│   └── TaskCard.tsx        # full task card (PriorityBadge + TagPills + hover delete)
├── organisms/
│   ├── BoardHeader.tsx     # title bar with task count and Add Task button
│   ├── FilterBar.tsx       # search input + priority FilterChips
│   ├── KanbanColumn.tsx    # labeled column with status color + TaskCard list
│   └── TaskModal.tsx       # full create/view task form with backdrop blur
├── templates/
│   └── BoardLayout.tsx     # BoardHeader + scrollable main content area
├── pages/
│   └── BoardPage.tsx       # all state: tasks, filters, modal, selection
├── store/taskStore.ts      # useState-based CRUD store with 8 seed tasks
└── types/index.ts          # Task, Status, Priority types
```

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.7 | Strict type safety |
| Tailwind CSS | v4 | Vite plugin — zero config |
| Lucide React | 0.344 | Icons |
| clsx | 2.1 | Conditional class merging |
| Vite | 6.2 | Build tool |

---

## License

MIT © [Mario Tavarez](https://github.com/mariotavarez)
