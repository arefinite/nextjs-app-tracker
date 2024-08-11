'use server'

import { JobType } from '@/lib/types'
import { checkUser } from '@/lib/checkUser'
import { Prisma } from '@prisma/client'
import prisma from '@/lib/db'

type GetAllJobsActionType = {
  search?: string
  jobStatus?: string
  page?: number
  limit?: number
}

type GetAllJobsResponseType = {
  jobs: JobType[]
  count: number
  page: number
  totalPages: number
  error?: string
}

export const getAllJobsAction = async ({
  search,
  jobStatus,
  page = 1,
  limit = 10,
}: GetAllJobsActionType): Promise<GetAllJobsResponseType> => {
  const userId = checkUser()
  try {
    let whereClause: Prisma.JobWhereInput = {
      clerkId: userId,
    }
    if (search) {
      whereClause = {
        ...whereClause,
        OR: [
          {
            position: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            company: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ],
      }
    }
    if (jobStatus && jobStatus !== 'All') { 
      whereClause = {
        ...whereClause,
        status: jobStatus,
      }
    }
    const skip = (page - 1) * limit
    const jobs: JobType[] = await prisma.job.findMany({
      where: whereClause,
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    })
    const count: number = await prisma.job.count({ where: whereClause })
    const totalPages = Math.ceil(count / limit)
    return { jobs, count, page, totalPages }
  } catch (err) {
    return { jobs:[], count: 0, page:1, totalPages: 0 }
  }
}
