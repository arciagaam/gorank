import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { authStepFourSchema, type AuthStepFourData, completeAuthSchema, type CompleteAuthData } from '~/schema/auth'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { useAuth } from '~/context/auth-provider'
import Cookies from 'js-cookie';

export default function AuthStepFour() {
    const navigate = useNavigate()
    const { login } = useAuth()

    const form = useForm<AuthStepFourData>({
        resolver: zodResolver(authStepFourSchema),
        defaultValues: {
            nickname: '',
        },
    })


    const onSubmit = (data: AuthStepFourData) => {
        // Collect all form data from localStorage
        const stepOneData = localStorage.getItem('authStepOne')
        const stepTwoData = localStorage.getItem('authStepTwo')
        const stepThreeData = localStorage.getItem('authStepThree')

        if (stepOneData && stepTwoData && stepThreeData) {
            const completeData: CompleteAuthData = {
                ...JSON.parse(stepOneData),
                ...JSON.parse(stepTwoData),
                ...JSON.parse(stepThreeData),
                ...data,
            }

            // Store complete auth data
            Cookies.set('completeAuthData', JSON.stringify(completeData), {
                expires: undefined, // Session cookie (expires when browser closes)
                secure: true, // Only send over HTTPS
                sameSite: 'strict' // CSRF protection
            })

            // Clear individual step data
            localStorage.removeItem('authStepOne')
            localStorage.removeItem('authStepTwo')
            localStorage.removeItem('authStepThree')
            localStorage.removeItem('authStepFour')

            // Navigate to success page
            login(completeData)

            const redirect = Cookies.get('redirect');
            Cookies.remove('redirect');
            navigate(redirect || '/');
        }
    }

    const handleBack = () => {
        navigate('/lets-game/step-three')
    }

    const nickname = form.watch('nickname')

    return (
        // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        //     <div className="w-full max-w-md space-y-8">
        //         <div className="text-center">
        //             <h1 className="text-3xl font-bold text-gray-900 mb-2">Almost Done!</h1>
        //             <p className="text-gray-600">Choose a nickname for your profile</p>
        //         </div>

        //         <div className="bg-white rounded-lg shadow-lg p-8">
        //             <div className="mb-6">
        //                 <div className="flex items-center justify-center space-x-2">
        //                     <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</div>
        //                     <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</div>
        //                     <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</div>
        //                     <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</div>
        //                 </div>
        //                 <p className="text-center text-sm text-gray-500 mt-2">Step 4 of 4</p>
        //             </div>

        //             <Form {...form}>
        //                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        //                     <FormField
        //                         control={form.control}
        //                         name="nickname"
        //                         render={({ field }) => (
        //                             <FormItem>
        //                                 <FormLabel className="text-base font-medium">Nickname</FormLabel>
        //                                 <FormControl>
        //                                     <Input
        //                                         type="text"
        //                                         placeholder="Enter your nickname"
        //                                         className="h-12 text-base"
        //                                         {...field}
        //                                     />
        //                                 </FormControl>
        //                                 <FormMessage />
        //                             </FormItem>
        //                         )}
        //                     />

        //                     <div className="flex space-x-4">
        //                         <Button
        //                             type="button"
        //                             variant="outline"
        //                             className="flex-1 h-12 text-base font-medium"
        //                             onClick={handleBack}
        //                         >
        //                             Back
        //                         </Button>
        //                         <Button type="submit" className="flex-1 h-12 text-base font-medium">
        //                             Complete Setup
        //                         </Button>
        //                     </div>
        //                 </form>
        //             </Form>
        //         </div>
        //     </div>
        // </div>

        <div className="min-h-screen flex items-center justify-center bg-indigo-100/20">

            <div className="flex w-3/4 h-full bg-white rounded-xl overflow-clip shadow border border-gray-200">

                <div className="flex-1 bg-gray-100">

                </div>


                <div className="flex flex-col w-[40%] gap-10 p-10">

                    <div className="flex flex-col text-center items-center">
                        <p>What's your nickname?</p>
                        <h1 className='self-center text-2xl font-medium'>@{nickname}</h1>
                    </div>


                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="nickname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Enter your nickname"
                                                className="h-12 text-base"
                                                {...field}
                                            />
                                        </FormControl>
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
                                    Complete Signup
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>


            </div>

        </div>
    )
}
