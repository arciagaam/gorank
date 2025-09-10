import React from 'react'
import { Outlet } from 'react-router'
import { AuthProvider } from '~/context/auth-provider'

export default function MainAuthLayout() {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    )
}
