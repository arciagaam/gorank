import React from 'react'
import { NavLink } from 'react-router'
import { twMerge } from 'tailwind-merge'
import { useSportTheme } from '~/context/sport-theme-provider'

type ThemedNavLinkProps = {
    to: string
    children: React.ReactNode
    className?: string
}

export default function ThemedNavLink({ to = '/', children, className }: ThemedNavLinkProps) {
    const { sportStyles } = useSportTheme()

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                twMerge(
                    'text-sm border-b-2 border-transparent pb-1 flex gap-2 items-center',
                    isActive && sportStyles.mainNavStyle.borderColor,
                    isActive && sportStyles.mainNavStyle.activeTextColor,
                    className,
                )
            }
        >
            {children}
        </NavLink>
    )
}
