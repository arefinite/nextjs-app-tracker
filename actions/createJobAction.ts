'use server'

import { checkUser } from '@/lib/checkUser'
import prisma from '@/lib/db'
import {
  createAndEditJobSchema,
  CreateAndEditJobType,
  JobType,
} from '@/lib/types'
import { create } from 'domain'

type CreateJobResponseType = {
  error?: string
  job?: JobType
}

export const createJobAction = async (
  values: CreateAndEditJobType
): Promise<CreateJobResponseType> => {
  const userId = checkUser()
  try {
    createAndEditJobSchema.parse(values)
    const job: JobType = await prisma.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    })
    return { job }
  } catch (err) {
    return { error: 'Something went wrong!' }
  }
}
