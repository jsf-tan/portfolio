import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'cursor-pointer',
        'rounded-2xl',
        'no-underline',
        'font-bold',
        'leading-6',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
