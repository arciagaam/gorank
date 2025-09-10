import React from 'react'
import { Outlet } from 'react-router'
import { twMerge } from 'tailwind-merge'
import MainNavigation from '~/components/nav/main-nav'
import { AuthProvider } from '~/context/auth-provider'
import { SportThemeProvider, useSportTheme } from '~/context/sport-theme-provider'
import { useWindow } from '~/hooks/useWindow'

export default function MainLayout() {
    return (
        <SportThemeProvider>
            <MainLayoutContainer />
        </SportThemeProvider>
    )
}

const MainLayoutContainer = () => {
    const { sportStyles } = useSportTheme()
    const { isMobile } = useWindow()
    
    return (
        <div className={twMerge('flex flex-col w-full min-h-screen overflow-auto', sportStyles.backgroundColor)}>
            <MainNavigation />

            <div className={twMerge('flex flex-col', isMobile ? 'pb-20' : '')}>
                <Outlet />
            </div>
        </div>

    )
}