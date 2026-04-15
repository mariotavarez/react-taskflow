import { Search } from 'lucide-react';
import type { Priority } from '../types';
import { FilterChip } from '../molecules/FilterChip';

const PRIORITIES: Priority[] = ['urgent', 'high', 'medium', 'low'];

interface FilterBarProps {
  search: string;
  onSearchChange: (v: string) => void;
  activePriority: Priority | null;
  onPriorityChange: (p: Priority | null) => void;
  taskCount: number;
}

export function FilterBar({ search, onSearchChange, activePriority, onPriorityChange, taskCount }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tasks…"
          className="bg-gray-900 border border-gray-800 rounded-lg pl-8 pr-3 py-1.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500 transition-colors w-52"
        />
      </div>

      <div className="flex items-center gap-1.5">
        <FilterChip label="All" active={activePriority === null} count={taskCount} onClick={() => onPriorityChange(null)} />
        {PRIORITIES.map((p) => (
          <FilterChip key={p} label={p.charAt(0).toUpperCase() + p.slice(1)} active={activePriority === p} onClick={() => onPriorityChange(activePriority === p ? null : p)} />
        ))}
      </div>
    </div>
  );
}
