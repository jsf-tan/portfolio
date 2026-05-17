import clsx from 'clsx'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={clsx(
        'w-full',
        'resize-none',
        'rounded-2xl',
        'border border-slate-200',
        'bg-white',
        'px-5 py-2',
        'text-base text-slate-900',
        'placeholder:text-slate-400',
        'shadow-sm',
        'outline-none',
        'transition-all duration-200',
        'focus:border-sky-400',
        'focus:ring-4',
        'focus:ring-sky-100',

        className,
      )}
      {...props}
    />
  )
}
