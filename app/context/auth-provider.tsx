import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import Cookies from 'js-cookie'

type User = {
    email: string;
    sport: "basketball" | "tennis" | "volleyball" | "pickleball" | "badminton";
    skillLevel: string;
    preferredPosition: string;
    nickname: string;
}

type AuthContextType = {
    user: User | null
    isAuthenticated: boolean
    login: (userData: User) => Promise<void>
    logout: () => void
    joinedClubs: string[]
    joinClub: (clubId: string) => void
    leaveClub: (clubId: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

type AuthProviderProps = {
    children: ReactNode
}

const STORAGE_KEY = 'gorank_auth_user'

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [joinedClubs, setJoinedClubs] = useState<string[]>([])

    // Load user data from session cookie on mount
    useEffect(() => {
        try {
            const storedUser = Cookies.get(STORAGE_KEY)
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser) as User
                setUser(parsedUser)
            }
        } catch (error) {
            console.error('Failed to load user from session cookie:', error)
            // Clear corrupted data
            Cookies.remove(STORAGE_KEY)
        } finally {
            setIsLoading(false)
        }
    }, [])

    // Save user data to session cookie whenever user state changes
    useEffect(() => {
        if (user) {
            Cookies.set(STORAGE_KEY, JSON.stringify(user), { 
                expires: undefined, // Session cookie (expires when browser closes)
                secure: true, // Only send over HTTPS
                sameSite: 'strict' // CSRF protection
            })
        } else {
            Cookies.remove(STORAGE_KEY)
        }
    }, [user])

    const login = async (userData: User) => {
        try {
            setUser(userData)
        } catch (error) {
            throw new Error('Login failed')
        }
    }

    const logout = () => {
        setUser(null)
    }

    const joinClub = (clubId: string) => {
        setJoinedClubs([...joinedClubs, clubId])
    }

    const leaveClub = (clubId: string) => {
        setJoinedClubs(joinedClubs.filter((id) => id !== clubId))
    }

    const value: AuthContextType = {
        user,
        isAuthenticated: !!user,
        login,
        logout,
        joinedClubs,
        joinClub,
        leaveClub,
    }

    // Don't render children until we've checked session cookie
    if (isLoading) {
        return null // or a loading spinner
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}


