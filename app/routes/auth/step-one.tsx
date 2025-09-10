import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { authStepOneSchema, type AuthStepOneData } from '~/schema/auth'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import ThemedButton from '~/components/button/themed-button'

export default function AuthStepOne() {
  const navigate = useNavigate()

  const form = useForm<AuthStepOneData>({
    resolver: zodResolver(authStepOneSchema),
    defaultValues: {
      email: '',
    },
  })

  useEffect(() => {
    localStorage.removeItem('authStepOne')
    localStorage.removeItem('authStepTwo')
    localStorage.removeItem('authStepThree')
    localStorage.removeItem('authStepFour')
  }, [])

  const onSubmit = (data: AuthStepOneData) => {
    localStorage.setItem('authStepOne', JSON.stringify(data))
    navigate('/lets-game/step-two')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100/20">

      <div className="flex w-3/4 h-full bg-white rounded-xl overflow-clip shadow border border-gray-200">

        <div className="flex-1 bg-gray-100">

        </div>


        <div className="flex flex-col w-[40%] gap-10 p-10">
          <h1 className='self-center text-2xl font-medium'>Let's Game!</h1>


          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="h-12 text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full h-12 text-base font-medium rounded-full">
                Continue
              </Button>
            </form>
          </Form>
        </div>


      </div>

    </div>
  )
}
