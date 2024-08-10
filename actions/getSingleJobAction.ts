'use server'

import { checkUser } from '@/lib/checkUser'
import prisma from '@/lib/db'
import { JobType } from '@/lib/types'
import { redirect } from 'next/navigation'

export const getSingleJobAction = async (
  id: string
): Promise<JobType | null> => {
  let job: JobType | null = null
  const userId = checkUser()
  try {
    job = await prisma.job.findUnique({
      where: {
        id,
        clerkId: userId,
      },
    })
  } catch (error) {
    job = null
  }
  if (!job) {
    redirect('/jobs')
  }
  return job
}
