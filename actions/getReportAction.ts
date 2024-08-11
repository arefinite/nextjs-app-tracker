'use server'
import { checkUser } from '@/lib/checkUser'
import prisma from '@/lib/db'
import { redirect } from 'next/navigation'

type GetReportActionType = {
  Pending: number
  Interview: number
  Rejected: number
}

export const getReportAction = async (): Promise<GetReportActionType> => {
  const userId = checkUser()

  try {
    const reports = await prisma.job.groupBy({
      by: ['status'],
      _count: {
        status: true,
      },
      where: {
        clerkId: userId,
      },
    })
    const reportsObject = reports.reduce((acc, curr) => {
      acc[curr.status] = curr._count.status
      return acc
    }, {} as Record<string, number>)

    const defaultStats = {
      Pending: 0,
      Rejected: 0,
      Interview: 0,
      ...reportsObject,
    }
    return defaultStats
  } catch (error) {
    redirect('/jobs')
  }
}
