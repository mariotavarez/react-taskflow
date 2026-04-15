import clsx from 'clsx';

interface FilterChipProps {
  label: string;
  active: boolean;
  count?: number;
  onClick: () => void;
}

export function FilterChip({ label, active, count, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
        active
          ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20'
          : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700',
      )}
    >
      {label}
      {count !== undefined && (
        <span className={clsx('px-1.5 py-0.5 rounded-full text-xs', active ? 'bg-violet-500' : 'bg-gray-800')}>
          {count}
        </span>
      )}
    </button>
  );
}
