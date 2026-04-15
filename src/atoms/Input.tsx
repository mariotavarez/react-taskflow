import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={id} className="text-xs font-medium text-gray-400">{label}</label>}
      <input
        id={id}
        className={clsx(
          'w-full bg-gray-900 border rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 outline-none transition-colors',
          error ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-violet-500',
          className,
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
