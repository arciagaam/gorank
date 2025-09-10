import React, { useState } from 'react'
import ThemedButton from '../button/themed-button'
import { Link, NavLink, useLocation } from 'react-router'
import SportSelector from '../sport-selector/sport-selector'
import ThemedNavLink from './themed-nav-link'
import { Building2, Play, TrophyIcon, User, Users, Menu } from 'lucide-react'
import { useAuth } from '~/context/auth-provider'
import { useWindow } from '~/hooks/useWindow'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'

// Floating Bottom Navigation Component
const FloatingBottomNav = () => {
    const location = useLocation()
    const { user } = useAuth()

    const navItems = [
        { path: '/leaderboards', icon: TrophyIcon, label: 'Leaderboard' },
        { path: '/clubs', icon: Users, label: 'Club' },
        { path: '/', icon: Play, label: 'Play' },
        { path: '/facilities', icon: Building2, label: 'Facilities' },
        { path: '/profile', icon: User, label: 'Profile' }
    ]

    const isActive = (path: string) => {
        if (path === '/') {
            return location.pathname === '/'
        }
        return location.pathname.startsWith(path)
    }

    return (
        <div className="fixed bottom-2 left-2 right-2 z-[999]">
            <div className="bg-gradient-to-r from-orange-200 to-yellow-200 rounded-2xl px-2 py-2 shadow-lg">
                <div className="flex items-center justify-between">
                    {navItems.map(({ path, icon: Icon, label }) => {
                        const active = isActive(path)
                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 min-w-[60px] ${active
                                        ? 'bg-white shadow-md scale-105'
                                        : 'hover:bg-white/50 hover:scale-102'
                                    }`}
                            >
                                <Icon
                                    size={22}
                                    className={`${active
                                            ? 'text-orange-600'
                                            : 'text-gray-600'
                                        }`}
                                />
                                <span className={`text-xs mt-1 font-medium ${active
                                        ? 'text-orange-600 font-semibold'
                                        : 'text-gray-600'
                                    }`}>
                                    {label}
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

// Top Mobile Header Component
const MobileHeader = () => {
    const { user } = useAuth()
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    const handleNavClick = () => {
        setIsSheetOpen(false)
    }

    return (
        <div className="flex border-b border-gray-200 shadow items-center justify-between h-16 px-4">
            <p className="text-lg font-semibold">GoRank</p>

            <div className="flex gap-3">
                <SportSelector />

                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full sm:w-96">
                        <SheetHeader>
                            <SheetTitle className="text-left">Navigation</SheetTitle>
                        </SheetHeader>

                        <div className="flex flex-col space-y-6 mt-8">
                            {/* Navigation Links */}
                            <div className="flex flex-col space-y-2">
                                <div onClick={handleNavClick}>
                                    <ThemedNavLink to="/leaderboards" className="flex items-center gap-3 text-lg py-4 px-2 rounded-lg hover:bg-gray-50">
                                        <TrophyIcon size={22} />
                                        <span>Leaderboard</span>
                                    </ThemedNavLink>
                                </div>
                                <div onClick={handleNavClick}>
                                    <ThemedNavLink to="/clubs" className="flex items-center gap-3 text-lg py-4 px-2 rounded-lg hover:bg-gray-50">
                                        <Users size={22} />
                                        <span>Club</span>
                                    </ThemedNavLink>
                                </div>
                                <div onClick={handleNavClick}>
                                    <ThemedNavLink to="/" className="flex items-center gap-3 text-lg py-4 px-2 rounded-lg hover:bg-gray-50">
                                        <Play size={22} />
                                        <span>Play</span>
                                    </ThemedNavLink>
                                </div>
                                <div onClick={handleNavClick}>
                                    <ThemedNavLink to="/facilities" className="flex items-center gap-3 text-lg py-4 px-2 rounded-lg hover:bg-gray-50">
                                        <Building2 size={22} />
                                        <span>Facilities</span>
                                    </ThemedNavLink>
                                </div>
                                <div onClick={handleNavClick}>
                                    <ThemedNavLink to="/profile" className="flex items-center gap-3 text-lg py-4 px-2 rounded-lg hover:bg-gray-50">
                                        <User size={22} />
                                        <span>Profile</span>
                                    </ThemedNavLink>
                                </div>
                            </div>

                            {/* Login Button and Sport Selector */}
                            <div className="flex flex-col space-y-4 pt-6 border-t">
                                {!user && (
                                    <div onClick={handleNavClick}>
                                        <Link to="/lets-game" className="w-full">
                                            <ThemedButton className="w-full">Login</ThemedButton>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default function MainNavigation() {
    const { user } = useAuth()
    const { isMobile } = useWindow()

    if (isMobile) {
        return (
            <FloatingBottomNav />
        )
    }

    return (
        <div className="flex border-b border-gray-200 shadow items-center justify-between h-16 px-10">
            <p>GoRank</p>


            <div className="flex items-center gap-8 text-sm">
                <ThemedNavLink to="/leaderboards">
                    <TrophyIcon size={18} />
                    <p>Leaderboard</p>
                </ThemedNavLink>
                <ThemedNavLink to="/clubs">
                    <Users size={18} />
                    Club</ThemedNavLink>
                <ThemedNavLink to="/">
                    <Play size={18} />
                    <p>Play</p>
                </ThemedNavLink>
                <ThemedNavLink to="/facilities">
                    <Building2 size={18} />
                    <p>Facilities</p>
                </ThemedNavLink>
                <ThemedNavLink to="/profile">
                    <User size={18} />
                    <p>Profile</p>
                </ThemedNavLink>
            </div>


            <div className="flex gap-5 items-center">

                {!user &&
                    <Link to="/lets-game">
                        <ThemedButton>Login</ThemedButton>
                    </Link>
                }
                <SportSelector />
            </div>
        </div>
    )
}
