import clsx from 'clsx';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, className, id, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={id} className="text-xs font-medium text-gray-400">{label}</label>}
      <textarea
        id={id}
        rows={3}
        className={clsx(
          'w-full bg-gray-900 border rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 outline-none resize-none transition-colors',
          error ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-violet-500',
          className,
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
