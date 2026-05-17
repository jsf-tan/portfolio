import type { Contain } from '@/types/auth'

function Container({ children, className = '' }: Contain) {
  return (
    <div className={`mx-auto w-full max-w-7xl min-w-80 px-6 ${className}`}>
      {children}
    </div>
  )
}

export default Container
