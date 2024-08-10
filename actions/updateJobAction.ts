'use server'
import { checkUser } from '@/lib/checkUser'
import prisma from '@/lib/db'
import { CreateAndEditJobType, JobType } from '@/lib/types'

type UpdateJobActionType = {
  job?: JobType
  error?: string
}

export const updateJobAction = async (
  id: string,
  values: CreateAndEditJobType
): Promise<UpdateJobActionType> => {
  const userId = checkUser()

  try {
    const job: JobType = await prisma.job.update({
      where: {
        id,
        clerkId: userId,
      },
      data: {
        ...values,
      },
    })
    return { job }
  } catch (error) {
    return { error: 'Something went wrong!' }
  }
}
