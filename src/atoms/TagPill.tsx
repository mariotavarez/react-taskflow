import clsx from 'clsx';

interface TagPillProps {
  tag: string;
  onRemove?: () => void;
}

export function TagPill({ tag, onRemove }: TagPillProps) {
  return (
    <span className={clsx(
      'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium',
      'bg-violet-500/15 text-violet-300 border border-violet-500/20',
    )}>
      {tag}
      {onRemove && (
        <button onClick={onRemove} className="hover:text-white transition-colors leading-none">×</button>
      )}
    </span>
  );
}
