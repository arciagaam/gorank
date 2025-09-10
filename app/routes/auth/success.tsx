import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '~/components/ui/button'
import { CheckCircle } from 'lucide-react'
import type { CompleteAuthData } from '~/schema/auth'

export default function AuthSuccess() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState<CompleteAuthData | null>(null)

  useEffect(() => {
    const completeData = localStorage.getItem('completeAuthData')
    if (completeData) {
      setUserData(JSON.parse(completeData))
    }
  }, [])

  const handleContinue = () => {
    navigate('/')
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to GoRank!</h1>
          <p className="text-gray-600">Your account has been created successfully</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Profile Summary</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Email:</span> {userData.email}</p>
                <p><span className="font-medium">Sport:</span> {userData.sport.charAt(0).toUpperCase() + userData.sport.slice(1)}</p>
                <p><span className="font-medium">Skill Level:</span> {userData.skillLevel}</p>
                <p><span className="font-medium">Position:</span> {userData.preferredPosition}</p>
                <p><span className="font-medium">Nickname:</span> {userData.nickname}</p>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                onClick={handleContinue} 
                className="w-full h-12 text-base font-medium"
              >
                Start Exploring
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
