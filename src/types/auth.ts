import type { ReactNode } from 'react'

export interface Experience {
  period: string
  job: string
  description: string
}

export interface Expertise {
  field: string
  detail: string
}

export interface Project {
  image: string
  link: string
  type: string
  title: string
  description: string
  work: string
  stack: string[]
}

export interface Contain {
  children: ReactNode
  className?: string
}
