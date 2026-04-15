import { Plus, LayoutGrid } from 'lucide-react';
import { Button } from '../atoms/Button';

interface BoardHeaderProps {
  onAddTask: () => void;
  totalTasks: number;
}

export function BoardHeader({ onAddTask, totalTasks }: BoardHeaderProps) {
  return (
    <div className="flex items-center justify-between py-5 px-6 border-b border-gray-800">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-violet-600/20 rounded-lg">
          <LayoutGrid size={18} className="text-violet-400" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">TaskFlow Board</h1>
          <p className="text-xs text-gray-500">{totalTasks} tasks across 4 columns</p>
        </div>
      </div>
      <Button onClick={onAddTask}>
        <Plus size={14} />
        Add Task
      </Button>
    </div>
  );
}
