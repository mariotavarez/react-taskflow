import clsx from 'clsx';

type Variant = 'primary' | 'ghost' | 'danger' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary: 'bg-violet-600 hover:bg-violet-500 text-white',
  ghost:   'bg-transparent hover:bg-gray-800 text-gray-300',
  danger:  'bg-red-600/20 hover:bg-red-600/40 text-red-400',
  outline: 'border border-gray-700 hover:bg-gray-800 text-gray-300',
};

const sizes: Record<Size, string> = {
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-base',
};

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-lg font-medium transition-colors disabled:opacity-40 cursor-pointer',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
