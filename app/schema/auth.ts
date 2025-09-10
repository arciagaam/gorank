import { z } from 'zod'

export const authStepOneSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export const authStepTwoSchema = z.object({
  sport: z.enum(['basketball', 'tennis', 'volleyball', 'pickleball', 'badminton']),
})

export const authStepThreeSchema = z.object({
  skillLevel: z.string().min(1, 'Please select your skill level'),
  preferredPosition: z.string().min(1, 'Please select your preferred position'),
})

export const authStepFourSchema = z.object({
  nickname: z.string().min(2, 'Nickname must be at least 2 characters').max(20, 'Nickname must be less than 20 characters'),
})

export const completeAuthSchema = authStepOneSchema
  .merge(authStepTwoSchema)
  .merge(authStepThreeSchema)
  .merge(authStepFourSchema)

export type AuthStepOneData = z.infer<typeof authStepOneSchema>
export type AuthStepTwoData = z.infer<typeof authStepTwoSchema>
export type AuthStepThreeData = z.infer<typeof authStepThreeSchema>
export type AuthStepFourData = z.infer<typeof authStepFourSchema>
export type CompleteAuthData = z.infer<typeof completeAuthSchema>

// Sport-specific data
export const sportData = {
  basketball: {
    skillLevels: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
    positions: ['Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center'],
  },
  tennis: {
    skillLevels: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
    positions: ['Singles', 'Doubles'],
  },
  volleyball: {
    skillLevels: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
    positions: ['Setter', 'Outside Hitter', 'Middle Blocker', 'Opposite Hitter', 'Libero', 'Defensive Specialist'],
  },
  pickleball: {
    skillLevels: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
    positions: ['Singles', 'Doubles'],
  },
  badminton: {
    skillLevels: ['Beginner', 'Intermediate', 'Advanced', 'Professional'],
    positions: ['Singles', 'Doubles'],
  },
} as const

