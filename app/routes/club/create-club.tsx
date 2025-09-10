import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import ThemedButton from '~/components/button/themed-button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { Textarea } from '~/components/ui/textarea'
import { CreateClubSchema, type CreateClub } from '~/schema/club'

export default function CreateClub() {

    const form = useForm<CreateClub>({
        resolver: zodResolver(CreateClubSchema),
        defaultValues: {
            name: '',
            logo: '',
            banner: '',
            visibility: 'public',
            location: '',
            history: new Date(),
            description: '',
            socials: {
                facebook: '',
                twitter: '',
                instagram: '',
            },
        },
    })

    const onSubmit = (data: CreateClub) => {
        console.log(data)
    }

    return (
        <div className="flex w-full px-36 py-10 min-h-[calc(100vh-4rem)] items-center justify-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10 w-full bg-white rounded-2xl border border-gray-200 p-10 shadow">
                    <div className="flex flex-col">
                        <h1 className="text-5xl font-semibold">Create a Club</h1>
                        <p>Create a new club to bring players together!</p>
                    </div>
                    <div className="flex gap-10">

                        <div className="flex flex-col w-full gap-5 flex-1">
                            <div className="aspect-video w-full rounded-2xl bg-gray-100 flex items-center justify-center">
                                <p className="text-gray-500">Club Banner Image</p>
                            </div>
                            <hr />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Club Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Enter club name"
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
                            <FormField
                                control={form.control}
                                name="logo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Logo</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="file"
                                                placeholder="Upload logo"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="banner"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Banner</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="file"
                                                placeholder="Upload Banner"
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
                                    name="visibility"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Visibility</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select visibility" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="public">Public</SelectItem>
                                                    <SelectItem value="private">Private</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Club Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Describe your club, its goals, and what makes it special..."
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
                            <ThemedButton type="submit" className="w-full">
                                Create Club
                            </ThemedButton>
                        </div>
                    </div>

                </form>
            </Form>
        </div >
    )
}
