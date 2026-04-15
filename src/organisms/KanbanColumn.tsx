import type { Task, Status } from '../types';
import { TaskCard } from '../molecules/TaskCard';

const COLUMN_META: Record<Status, { label: string; color: string; dot: string }> = {
  'todo':        { label: 'To Do',       color: 'border-t-gray-600',   dot: 'bg-gray-500' },
  'in-progress': { label: 'In Progress', color: 'border-t-blue-500',   dot: 'bg-blue-500' },
  'review':      { label: 'Review',      color: 'border-t-amber-500',  dot: 'bg-amber-500' },
  'done':        { label: 'Done',        color: 'border-t-emerald-500',dot: 'bg-emerald-500' },
};

interface KanbanColumnProps {
  status: Status;
  tasks: Task[];
  onDelete: (id: string) => void;
  onCardClick: (task: Task) => void;
}

export function KanbanColumn({ status, tasks, onDelete, onCardClick }: KanbanColumnProps) {
  const meta = COLUMN_META[status];
  return (
    <div className={`flex flex-col bg-gray-950 border-t-2 ${meta.color} rounded-xl p-3 min-w-[270px]`}>
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${meta.dot}`} />
          <span className="text-sm font-semibold text-gray-200">{meta.label}</span>
        </div>
        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">{tasks.length}</span>
      </div>
      <div className="flex flex-col gap-2 flex-1 min-h-[200px]">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={onDelete} onClick={onCardClick} />
        ))}
      </div>
    </div>
  );
}
