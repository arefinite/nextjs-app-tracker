import { z } from 'zod'

export type JobType = {
  id: string
  position: string
  company: string
  location: string
  status: string
  mode: string
  type: string
  note?: string | null
  createdAt: Date
  updatedAt: Date
  clerkId: string
}

export enum JobStatus {
  Pending = 'Pending',
  Interview = 'Interview',
  Rejected = 'Rejected',
}

export enum JobMode {
  FullTime = 'Full-time',
  PartTime = 'Part-time',
  Internship = 'Internship',
}

export enum WorkType {
  Remote = 'Remote',
  Onsite = 'Onsite',
  Hybrid = 'Hybrid',
}

export const createAndEditJobSchema = z.object({
  position: z
    .string()
    .min(3, {
      message: 'Position should be at least 3 characters long',
    })
    .max(100, {
      message: 'Position should be at most 100 characters long',
    }),
  company: z
    .string()
    .min(3, {
      message: 'Company should be at least 3 characters long',
    })
    .max(100, {
      message: 'Company should be at most 100 characters long',
    }),
  location: z
    .string()
    .min(3, {
      message: 'Location should be at least 3 characters long',
    })
    .max(100, {
      message: 'Location should be at most 100 characters long',
    }),
  note: z
    .string()
    .max(500, {
      message: 'Note should be at most 500 characters long',
    })
    .nullable()
    .optional(),

  status: z.nativeEnum(JobStatus),
  mode: z.nativeEnum(JobMode),
  type: z.nativeEnum(WorkType),
})

export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>
