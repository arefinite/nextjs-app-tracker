'use server'

import { checkUser } from '@/lib/checkUser'
import prisma from '@/lib/db'
import { JobType } from '@/lib/types'

type DeleteJobResponseType = {
  error?: string
  job?: JobType
}

export const deleteJobAction = async (
  id: string
): Promise<DeleteJobResponseType> => {
  const userId = checkUser()
  try {
    const job: JobType = await prisma.job.delete({
      where: {
        id,
        clerkId: userId,
      },
    })
    return { job }
  } catch (err) {
    return { error: 'Something went wrong!' }
  }
}
