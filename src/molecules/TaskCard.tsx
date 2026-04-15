import { Calendar, User, Trash2 } from 'lucide-react';
import type { Task } from '../types';
import { PriorityBadge } from '../atoms/PriorityBadge';
import { TagPill } from '../atoms/TagPill';
import { Button } from '../atoms/Button';

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onClick: (task: Task) => void;
}

export function TaskCard({ task, onDelete, onClick }: TaskCardProps) {
  return (
    <div
      onClick={() => onClick(task)}
      className="bg-gray-900 border border-gray-800 rounded-xl p-4 cursor-pointer hover:border-violet-500/40 transition-all group"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-sm font-medium text-white leading-snug">{task.title}</span>
        <Button
          variant="danger"
          size="sm"
          className="opacity-0 group-hover:opacity-100 shrink-0 !px-1.5 !py-1"
          onClick={(e) => { e.stopPropagation(); onDelete(task.id); }}
        >
          <Trash2 size={12} />
        </Button>
      </div>

      <p className="text-xs text-gray-500 mb-3 line-clamp-2">{task.description}</p>

      <div className="flex flex-wrap gap-1 mb-3">
        {task.tags.map((t) => <TagPill key={t} tag={t} />)}
      </div>

      <div className="flex items-center justify-between">
        <PriorityBadge priority={task.priority} />
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1"><User size={11} />{task.assignee.split(' ')[0]}</span>
          <span className="flex items-center gap-1"><Calendar size={11} />{task.dueDate}</span>
        </div>
      </div>
    </div>
  );
}
