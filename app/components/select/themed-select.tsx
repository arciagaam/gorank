import React from 'react'
import { SelectContent, SelectItem, SelectTrigger } from '../ui/select'
import { twMerge } from 'tailwind-merge'
import { useSportTheme } from '~/context/sport-theme-provider'

type ThemedSelectItemProps = {
    children: React.ReactNode,
    value: string,
    className?: string
}

export function ThemedSelectItem({ children, value, className }: ThemedSelectItemProps) {
    const { sportStyles } = useSportTheme();
    return (
        <SelectItem value={value} className={twMerge(sportStyles.selectItemStyle, className)}>{children}</SelectItem>
    )
}



type ThemedSelectTriggerProps = {
    children: React.ReactNode;
    className?: string;
}

export function ThemedSelectTrigger({ children, className }: ThemedSelectTriggerProps) {

    const { sportStyles } = useSportTheme();
    return (
        <SelectTrigger className={twMerge('rounded-full', sportStyles.selectTriggerStyle, className)}>
            {children}
        </SelectTrigger>
    )
}


type ThemedSelectContentProps = {
    children: React.ReactNode
}

export function ThemedSelectContent({ children }: ThemedSelectContentProps) {
    return (
        <SelectContent>
            {children}
        </SelectContent>
    )
}
