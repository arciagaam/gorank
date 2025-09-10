import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { authStepThreeSchema, type AuthStepThreeData, sportData } from '~/schema/auth'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'

export default function AuthStepThree() {
  const navigate = useNavigate()
  const [selectedSport, setSelectedSport] = useState<string>('basketball')

  const form = useForm<AuthStepThreeData>({
    resolver: zodResolver(authStepThreeSchema),
    defaultValues: {
      skillLevel: '',
      preferredPosition: '',
    },
  })

  useEffect(() => {
    // Get the selected sport from localStorage
    const stepTwoData = localStorage.getItem('authStepTwo')
    if (stepTwoData) {
      const { sport } = JSON.parse(stepTwoData)
      setSelectedSport(sport)
    }
  }, [])

  const onSubmit = (data: AuthStepThreeData) => {
    // Store the data in localStorage for multi-step form
    localStorage.setItem('authStepThree', JSON.stringify(data))
    navigate('/lets-game/step-four')
  }

  const handleBack = () => {
    navigate('/lets-game/step-two')
  }

  const currentSportData = sportData[selectedSport as keyof typeof sportData]

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
    //   <div className="w-full max-w-md space-y-8">
    //     <div className="text-center">
    //       <h1 className="text-3xl font-bold text-gray-900 mb-2">Your {selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1)} Profile</h1>
    //       <p className="text-gray-600">Tell us about your experience and preferences</p>
    //     </div>

    //     <div className="bg-white rounded-lg shadow-lg p-8">
    //       <div className="mb-6">
    //         <div className="flex items-center justify-center space-x-2">
    //           <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</div>
    //           <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</div>
    //           <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
    //           <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">4</div>
    //         </div>
    //         <p className="text-center text-sm text-gray-500 mt-2">Step 3 of 4</p>
    //       </div>

    //       <Form {...form}>
    //         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    //           <FormField
    //             control={form.control}
    //             name="skillLevel"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel className="text-base font-medium">Skill Level</FormLabel>
    //                 <Select onValueChange={field.onChange} defaultValue={field.value}>
    //                   <FormControl>
    //                     <SelectTrigger className="h-12 text-base">
    //                       <SelectValue placeholder="Select your skill level" />
    //                     </SelectTrigger>
    //                   </FormControl>
    //                   <SelectContent>
    //                     {currentSportData.skillLevels.map((level) => (
    //                       <SelectItem key={level} value={level}>
    //                         {level}
    //                       </SelectItem>
    //                     ))}
    //                   </SelectContent>
    //                 </Select>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />

    //           <FormField
    //             control={form.control}
    //             name="preferredPosition"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel className="text-base font-medium">Preferred Position</FormLabel>
    //                 <Select onValueChange={field.onChange} defaultValue={field.value}>
    //                   <FormControl>
    //                     <SelectTrigger className="h-12 text-base">
    //                       <SelectValue placeholder="Select your preferred position" />
    //                     </SelectTrigger>
    //                   </FormControl>
    //                   <SelectContent>
    //                     {currentSportData.positions.map((position) => (
    //                       <SelectItem key={position} value={position}>
    //                         {position}
    //                       </SelectItem>
    //                     ))}
    //                   </SelectContent>
    //                 </Select>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />

    //           <div className="flex space-x-4">
    //             <Button 
    //               type="button" 
    //               variant="outline" 
    //               className="flex-1 h-12 text-base font-medium"
    //               onClick={handleBack}
    //             >
    //               Back
    //             </Button>
    //             <Button type="submit" className="flex-1 h-12 text-base font-medium">
    //               Continue
    //             </Button>
    //           </div>
    //         </form>
    //       </Form>
    //     </div>
    //   </div>
    // </div>

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
                name="skillLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">
                      What is your current {selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1)} level?
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder={`Select your ${selectedSport} skill level`} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {currentSportData.skillLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredPosition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">
                      What is your preferred {selectedSport === 'tennis' || selectedSport === 'badminton' ? 'playing style' : 'position'}?
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder={`Select your preferred ${selectedSport === 'tennis' || selectedSport === 'badminton' ? 'playing style' : 'position'}`} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {currentSportData.positions.map((position) => (
                          <SelectItem key={position} value={position}>
                            {position}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex space-x-4">
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
