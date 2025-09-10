import React from 'react'
import { Button } from '../ui/button'
import { twMerge } from 'tailwind-merge'
import { useSportTheme } from '~/context/sport-theme-provider'

type ThemedButtonProps = {
    className?: string
    children: React.ReactNode
    variant?: 'default' | 'secondary'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function ThemedButton({ className, variant = 'default', children, ...props }: ThemedButtonProps) {
    const { sportStyles } = useSportTheme()

    const getButtonStyleByVariant = (variant: 'default' | 'secondary') => {
        if (variant === 'default') {
            return sportStyles.buttonStyle.primary
        } else {
            return sportStyles.buttonStyle.secondary
        }
    }
    return (
        <Button className={twMerge('cursor-pointer', getButtonStyleByVariant(variant), className)} {...props}>
            {children}
        </Button>
    )
}
