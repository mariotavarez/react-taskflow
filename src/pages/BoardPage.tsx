import { useState, useMemo } from 'react';
import type { Task, Priority, Status } from '../types';
import { useTaskStore } from '../store/taskStore';
import { BoardLayout } from '../templates/BoardLayout';
import { FilterBar } from '../organisms/FilterBar';
import { KanbanColumn } from '../organisms/KanbanColumn';
import { TaskModal } from '../organisms/TaskModal';

const COLUMNS: Status[] = ['todo', 'in-progress', 'review', 'done'];

export function BoardPage() {
  const { tasks, addTask, deleteTask } = useTaskStore();
  const [search, setSearch]           = useState('');
  const [priority, setPriority]       = useState<Priority | null>(null);
  const [modalOpen, setModalOpen]     = useState(false);
  const [selectedTask, setSelected]   = useState<Task | undefined>();

  const filtered = useMemo(() =>
    tasks.filter((t) => {
      const matchSearch = !search || t.title.toLowerCase().includes(search.toLowerCase()) || t.tags.some((tag) => tag.includes(search.toLowerCase()));
      const matchPriority = !priority || t.priority === priority;
      return matchSearch && matchPriority;
    }),
    [tasks, search, priority],
  );

  function handleCardClick(task: Task) {
    setSelected(task);
    setModalOpen(true);
  }

  function handleAddTask() {
    setSelected(undefined);
    setModalOpen(true);
  }

  return (
    <BoardLayout totalTasks={tasks.length} onAddTask={handleAddTask}>
      <div className="mb-5">
        <FilterBar
          search={search}
          onSearchChange={setSearch}
          activePriority={priority}
          onPriorityChange={setPriority}
          taskCount={filtered.length}
        />
      </div>

      <div className="flex gap-4 pb-4">
        {COLUMNS.map((col) => (
          <KanbanColumn
            key={col}
            status={col}
            tasks={filtered.filter((t) => t.status === col)}
            onDelete={deleteTask}
            onCardClick={handleCardClick}
          />
        ))}
      </div>

      {modalOpen && (
        <TaskModal
          task={selectedTask}
          onClose={() => setModalOpen(false)}
          onSave={(data) => {
            if (!selectedTask) addTask(data);
            setModalOpen(false);
          }}
        />
      )}
    </BoardLayout>
  );
}
