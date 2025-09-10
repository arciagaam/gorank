import React from 'react'
import { Badge } from '../ui/badge'
import { twMerge } from 'tailwind-merge'

export default function ThemedBadge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <Badge className={twMerge(className, 'bg-gray-200 text-gray-800 rounded-full text-sm py-1 px-4')}>
      {children}
    </Badge>
  )
}
