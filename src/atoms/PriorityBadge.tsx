import clsx from 'clsx';
import type { Priority } from '../types';

const styles: Record<Priority, string> = {
  urgent: 'bg-red-500/20 text-red-300 border border-red-500/30',
  high:   'bg-orange-500/20 text-orange-300 border border-orange-500/30',
  medium: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
  low:    'bg-gray-500/20 text-gray-400 border border-gray-600/30',
};

interface PriorityBadgeProps {
  priority: Priority;
}

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
    <span className={clsx('px-2 py-0.5 rounded-full text-xs font-semibold capitalize', styles[priority])}>
      {priority}
    </span>
  );
}
