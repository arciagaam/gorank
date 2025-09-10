import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import ThemedButton from '~/components/button/themed-button'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { Textarea } from '~/components/ui/textarea'
import { useSportTheme } from '~/context/sport-theme-provider'
import { CreateGameSchema, type CreateGame } from '~/schema/game'

export default function CreateFacilityGame() {

    const { id } = useParams()
    const { selectedSport } = useSportTheme()

    const form = useForm<CreateGame>({
        resolver: zodResolver(CreateGameSchema),
        defaultValues: {
            name: '',
            facilityId: id,
            sportType: selectedSport,
            location: '',
            startDate: new Date(),
            startTime: '',
            skillLevel: 'beginner',
            matchType: '5v5',
            reminders: '',
            rank: 1,
            participants: '',
            socials: {
                facebook: '',
                twitter: '',
                instagram: '',
            },
        },
    })

    const onSubmit = (data: CreateGame) => {
        console.log(data)
    }

    return (
        <div className="flex w-full px-36 py-10 min-h-[calc(100vh-4rem)] items-center justify-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-10 w-full bg-white rounded-2xl border border-gray-200 p-10 shadow">
                    <div className="flex flex-col w-full gap-5 flex-1">

                        <div className="flex flex-col">
                            <h1 className="text-5xl font-semibold">Create a Game</h1>
                            <p>Create thrilling games for your team to enjoy!</p>
                        </div>

                        <div className="aspect-video w-full rounded-2xl bg-gray-100"></div>

                        <hr />

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Match Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter game name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter location"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex flex-col gap-5 flex-1">
                        <div className="flex gap-5">
                            <FormField
                                control={form.control}
                                name="skillLevel"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Skill Level</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select skill level" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="beginner">Beginner</SelectItem>
                                                <SelectItem value="intermediate">Intermediate</SelectItem>
                                                <SelectItem value="advanced">Advanced</SelectItem>
                                                <SelectItem value="professional">Professional</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* <FormField
                                control={form.control}
                                name="rank"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Rank</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select rank" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="1">1</SelectItem>
                                                <SelectItem value="2">2</SelectItem>
                                                <SelectItem value="3">3</SelectItem>
                                                <SelectItem value="4">4</SelectItem>
                                                <SelectItem value="5">5</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}

                            <FormField
                                control={form.control}
                                name="matchType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Match Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select match type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {form.watch('sportType') === 'basketball' && (
                                                    <>
                                                        <SelectItem value="1v1">1v1</SelectItem>
                                                        <SelectItem value="2v2">2v2</SelectItem>
                                                        <SelectItem value="3v3">3v3</SelectItem>
                                                        <SelectItem value="5v5">5v5</SelectItem>
                                                    </>
                                                )}
                                                {form.watch('sportType') === 'volleyball' && (
                                                    <>
                                                        <SelectItem value="2v2">2v2</SelectItem>
                                                        <SelectItem value="4v4">4v4</SelectItem>
                                                        <SelectItem value="6v6">6v6</SelectItem>
                                                    </>
                                                )}
                                                {form.watch('sportType') === 'pickleball' && (
                                                    <>
                                                        <SelectItem value="singles">Singles</SelectItem>
                                                        <SelectItem value="doubles">Doubles</SelectItem>
                                                    </>
                                                )}
                                                {form.watch('sportType') === 'tennis' && (
                                                    <>
                                                        <SelectItem value="singles">Singles</SelectItem>
                                                        <SelectItem value="doubles">Doubles</SelectItem>
                                                    </>
                                                )}
                                                {form.watch('sportType') === 'badminton' && (
                                                    <>
                                                        <SelectItem value="singles">Singles</SelectItem>
                                                        <SelectItem value="doubles">Doubles</SelectItem>
                                                    </>
                                                )}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="participants"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Match Participants</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter number of participants"
                                            type="text"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex gap-5">
                            <FormField
                                control={form.control}
                                name="socials.facebook"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Facebook</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Facebook profile/page URL"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="socials.twitter"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Twitter</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Twitter profile URL"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="socials.instagram"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Instagram</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Instagram profile URL"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>
                        <FormField
                            control={form.control}
                            name="reminders"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Reminders</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Add any reminders for the game..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <ThemedButton type="submit" className="w-full">
                            Create Game
                        </ThemedButton>
                    </div>

                </form>
            </Form>
        </div >
    )
}
