import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { authStepTwoSchema, type AuthStepTwoData } from '~/schema/auth'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'

export default function AuthStepTwo() {
  const navigate = useNavigate()
  const [selectedSport, setSelectedSport] = useState<string>('volleyball')

  const form = useForm<AuthStepTwoData>({
    resolver: zodResolver(authStepTwoSchema),
    defaultValues: {
      sport: 'volleyball',
    },
  })

  const onSubmit = (data: AuthStepTwoData) => {
    localStorage.setItem('authStepTwo', JSON.stringify(data))
    navigate('/lets-game/step-three')
  }

  const handleBack = () => {
    navigate('/lets-game')
  }

  const handleSportSelect = (sport: string) => {
    setSelectedSport(sport)
    form.setValue('sport', sport as any)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full max-w-6xl h-[600px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-auto">
        {/* Left Side - Sports Illustration */}
        <div className="flex-1 bg-gray-100">

        </div>
        {/* Right Side - Sport Selection */}
        <div className="flex flex-col w-[40%] gap-5 p-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            <span className="text-gray-500 text-2xl font-normal">Select Your</span><br />
            Sport
          </h1>


          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
              <div className="flex flex-col gap-2">
                {[
                  { value: 'basketball', label: 'BASKETBALL', icon: '🏀' },
                  { value: 'tennis', label: 'TENNIS', icon: '🎾' },
                  { value: 'volleyball', label: 'VOLLEYBALL', icon: '🏐' },
                  { value: 'pickleball', label: 'PICKLEBALL', icon: '🥎' },
                  { value: 'badminton', label: 'BADMINTON', icon: '🏸' }
                ].map((sport) => (
                  <button
                    key={sport.value}
                    type="button"
                    onClick={() => handleSportSelect(sport.value)}
                    className={`w-full flex items-center gap-4 p-4 rounded-full border-2 transition-all duration-200 ${selectedSport === sport.value
                      ? 'bg-yellow-400 border-yellow-400 text-gray-900'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    <span className="text-xl">{sport.icon}</span>
                    <span className="font-semibold text-sm">{sport.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex space-x-4 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 h-12 text-base font-medium rounded-full"
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button type="submit" className="flex-1 h-12 text-base font-medium rounded-full">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
